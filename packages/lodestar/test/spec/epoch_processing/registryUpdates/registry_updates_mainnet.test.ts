import {join} from "path";
import {expect} from "chai";
import {equals} from "@chainsafe/ssz";

import {config} from "@chainsafe/eth2.0-config/lib/presets/mainnet";
import {BeaconState} from "@chainsafe/eth2.0-types";
import {describeDirectorySpecTest, InputType} from "@chainsafe/eth2.0-spec-test-util/lib/single";
import {StateTestCase} from "../../../utils/specTestTypes/stateTestCase";
import {processRegistryUpdates} from "../../../../src/chain/stateTransition/epoch/registryUpdates";

describeDirectorySpecTest<StateTestCase, BeaconState>(
  "epoch registry updates mainnet",
  join(__dirname, "../../../../../spec-test-cases/tests/mainnet/phase0/epoch_processing/registry_updates/pyspec_tests"),
  (testcase) => {
    const state = testcase.pre;
    processRegistryUpdates(config, state);
    return state;
  },
  {
    inputTypes: {
      pre: InputType.SSZ,
      post: InputType.SSZ,
    },
    sszTypes: {
      pre: config.types.BeaconState,
      post: config.types.BeaconState,
    },
    getExpected: (testCase => testCase.post),
    expectFunc: (testCase, expected, actual) => {
      expect(equals(actual, expected, config.types.BeaconState)).to.be.true;
    }
  }
);
