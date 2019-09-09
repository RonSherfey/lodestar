import {join} from "path";
import {expect} from "chai";
// @ts-ignore
import {equals} from "@chainsafe/ssz";

import {BeaconState} from "@chainsafe/eth2.0-types";
import {config} from "@chainsafe/eth2.0-config/lib/presets/mainnet";
import {processVoluntaryExit} from "../../../../src/chain/stateTransition/block/operations";
import {describeDirectorySpecTest} from "@chainsafe/eth2.0-spec-test-util/lib/single";
import {ProcessVoluntaryExitTestCase} from "./type";

describeDirectorySpecTest<ProcessVoluntaryExitTestCase, BeaconState>(
  "process voluntary exit mainnet",
  join(__dirname, "../../../../../spec-test-cases/tests/mainnet/phase0/operations/voluntary_exit/pyspec_tests"),
  (testcase) => {
    const state = testcase.pre;
    processVoluntaryExit(config, state, testcase.voluntary_exit);
    return state;
  },
  {
    sszTypes: {
      pre: config.types.BeaconState,
      post: config.types.BeaconState,
      // eslint-disable-next-line @typescript-eslint/camelcase
      voluntary_exit: config.types.VoluntaryExit,
    },
    timeout: 100000000,
    shouldError: testCase => !testCase.post,
    getExpected: (testCase => testCase.post),
    expectFunc: (testCase, expected, actual) => {
      expect(equals(actual, expected, config.types.BeaconState)).to.be.true;
    }
  }
);
