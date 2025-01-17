import PeerId from "peer-id";
import {PeerMap} from "../../../util/peerMap";
import {shuffle} from "../../../util/shuffle";
import {sortBy} from "../../../util/sortBy";
import {Batch, BatchStatus} from "../batch";

/**
 * Balance and organize peers to perform requests with a SyncChain
 * Shuffles peers only once on instantiation
 */
export class ChainPeersBalancer {
  private peers: PeerId[];
  private activeRequestsByPeer = new PeerMap<number>();

  constructor(peers: PeerId[], batches: Batch[]) {
    this.peers = shuffle(peers);

    // Compute activeRequestsByPeer from all batches internal states
    for (const batch of batches) {
      if (batch.state.status === BatchStatus.Downloading) {
        this.activeRequestsByPeer.set(batch.state.peer, (this.activeRequestsByPeer.get(batch.state.peer) ?? 0) + 1);
      }
    }
  }

  /**
   * Return the most suitable peer to retry
   * Sort peers by (1) no failed request (2) less active requests, then pick first
   */
  bestPeerToRetryBatch(batch: Batch): PeerId | undefined {
    const failedPeers = PeerMap.from(batch.getFailedPeers());
    const sortedBestPeers = sortBy(
      this.peers,
      (peer) => (failedPeers.has(peer) ? 1 : 0),
      (peer) => this.activeRequestsByPeer.get(peer) ?? 0
    );
    return sortedBestPeers[0];
  }

  /**
   * Return peers with 0 or no active requests
   */
  idlePeers(): PeerId[] {
    return this.peers.filter((peer) => !this.activeRequestsByPeer.get(peer));
  }
}
