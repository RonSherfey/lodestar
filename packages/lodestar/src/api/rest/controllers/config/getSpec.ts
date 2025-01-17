import {BeaconParams} from "@chainsafe/lodestar-params";
import {ApiController} from "../types";

export const getSpec: ApiController = {
  url: "/spec",

  handler: async function (req, resp) {
    const spec = await this.api.config.getSpec();
    return resp.status(200).send({
      data: BeaconParams.toJson(spec),
    });
  },

  opts: {
    schema: {},
  },
};
