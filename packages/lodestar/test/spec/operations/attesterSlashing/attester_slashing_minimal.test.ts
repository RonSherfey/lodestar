import {join} from "path";
import {expect} from "chai";
import {equals} from "@chainsafe/ssz";
import {config} from "@chainsafe/eth2.0-config/lib/presets/minimal";
import {processAttesterSlashing} from "../../../../src/chain/stateTransition/block/operations";
import {BeaconState} from "@chainsafe/eth2.0-types";
import {describeDirectorySpecTest} from "@chainsafe/eth2.0-spec-test-util/lib/single";
import {ProcessAttesterSlashingTestCase} from "./type";

describeDirectorySpecTest<ProcessAttesterSlashingTestCase, BeaconState>(
  "process attester slashing minimal",
  join(__dirname, "../../../../../spec-test-cases/tests/minimal/phase0/operations/attester_slashing/pyspec_tests"),
  (testcase) => {
    const state = testcase.pre;
    processAttesterSlashing(config, state, testcase.attester_slashing);
    return state;
  },
  {
    sszTypes: {
      pre: config.types.BeaconState,
      post: config.types.BeaconState,
      // eslint-disable-next-line @typescript-eslint/camelcase
      attester_slashing: config.types.AttesterSlashing,
    },
    timeout: 100000000,
    shouldError: testCase => !testCase.post,
    getExpected: (testCase => testCase.post),
    expectFunc: (testCase, expected, actual) => {
      expect(equals(actual, expected, config.types.BeaconState)).to.be.true;
    }
  }
);
