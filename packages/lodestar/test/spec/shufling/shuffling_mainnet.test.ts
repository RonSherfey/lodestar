import {join} from "path";
import {config} from "@chainsafe/eth2.0-config/lib/presets/mainnet";
import {computeShuffledIndex} from "../../../src/chain/stateTransition/util";
import {describeDirectorySpecTest, InputType} from "@chainsafe/eth2.0-spec-test-util/lib/single";
import {ShufflingTestCase} from "./type";

describeDirectorySpecTest<ShufflingTestCase, number[]>(
  "shuffling mainnet",
  join(__dirname, "../../../../spec-test-cases/tests/mainnet/phase0/shuffling/core/shuffle"),
  (testcase) => {
    const output = [];
    const seed = Buffer.from(testcase.mapping.seed.replace("0x", ""),"hex");
    for(let i = 0; i < testcase.mapping.count.toNumber(); i++) {
      output[i] = computeShuffledIndex(
        config,
        i,
        testcase.mapping.count.toNumber(),
        seed
      );
    }
    return output;
  },
  {
    inputTypes: {
      mapping: InputType.YAML
    },
    timeout: 10000,
    getExpected: (testCase => testCase.mapping.mapping.map((value) => value.toNumber()))
  }
);
