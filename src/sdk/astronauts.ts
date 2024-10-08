/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { astronautsAdd } from "../funcs/astronautsAdd.js";
import { astronautsList } from "../funcs/astronautsList.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import { unwrapAsync } from "../types/fp.js";

export class Astronauts extends ClientSDK {
  /**
   * List all astronauts
   */
  async list(
    options?: RequestOptions,
  ): Promise<Array<components.Astronaut>> {
    return unwrapAsync(astronautsList(
      this,
      options,
    ));
  }

  /**
   * Add a new astronaut
   */
  async add(
    request: components.NewAstronaut,
    options?: RequestOptions,
  ): Promise<components.Astronaut> {
    return unwrapAsync(astronautsAdd(
      this,
      request,
      options,
    ));
  }
}
