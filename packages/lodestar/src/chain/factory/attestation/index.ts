import {Attestation, BeaconBlock, BeaconState, Shard, Slot, ValidatorIndex} from "@chainsafe/eth2.0-types";
import {IBeaconConfig} from "@chainsafe/eth2.0-config";

import {IBeaconDb} from "../../../db/api";
import {assembleAttestationData} from "./data";
import {BitList} from "@chainsafe/bit-utils";
import {computeEpochOfSlot, getCrosslinkCommittee} from "../../stateTransition/util";
import {intDiv} from "../../../util/math";

export async function assembleAttestation(
  {config, db}: {config: IBeaconConfig; db: IBeaconDb},
  state: BeaconState,
  headBlock: BeaconBlock,
  validatorIndex: ValidatorIndex,
  shard: Shard,
  slot: Slot): Promise<Attestation> {
  while(state.slot < slot) {
    state.slot++;
  }

  const aggregationBits = getAggregationBits(config, state, slot, shard, validatorIndex);
  const custodyBits = getEmptyAttestationBitList(config);
  try {
    const data  = await assembleAttestationData(config, db, state, headBlock, shard);
    return {
      aggregationBits,
      custodyBits,
      data,
      signature: undefined
    };
  } catch (e) {
    throw e;
  }
}

export function getAggregationBits(config: IBeaconConfig, state: BeaconState, slot: Slot, shard: Shard, validatorIndex: ValidatorIndex): BitList {
  const aggregationBits = getEmptyAttestationBitList(config);
  const comittee = getCrosslinkCommittee(config, state, computeEpochOfSlot(config, slot), shard);
  comittee.forEach((commiteeValidator, index) => {
    if(commiteeValidator === validatorIndex) {
      aggregationBits.setBit(index, true);
    }
  });
  return aggregationBits;
}

export function getEmptyAttestationBitList(config: IBeaconConfig) {
  return BitList.fromBitfield(
    Buffer.alloc(intDiv(config.params.MAX_VALIDATORS_PER_COMMITTEE + 7, 8)),
    config.params.MAX_VALIDATORS_PER_COMMITTEE
  );
}