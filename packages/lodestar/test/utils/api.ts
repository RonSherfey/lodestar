import {phase0} from "@chainsafe/lodestar-types";
import deepmerge from "deepmerge";
import {blockToHeader} from "@chainsafe/lodestar-beacon-state-transition";
import {config} from "@chainsafe/lodestar-config/minimal";
import {generateEmptySignedBlock} from "./block";
import {isPlainObject} from "@chainsafe/lodestar-utils";

export function generateSignedBeaconHeaderResponse(
  override: Partial<phase0.SignedBeaconHeaderResponse> = {}
): phase0.SignedBeaconHeaderResponse {
  const signedBlock = generateEmptySignedBlock();
  return deepmerge(
    {
      canonical: true,
      root: Buffer.alloc(32, 0),
      header: {
        message: blockToHeader(config, signedBlock.message),
        signature: signedBlock.signature,
      },
    },
    override,
    {isMergeableObject: isPlainObject}
  );
}
