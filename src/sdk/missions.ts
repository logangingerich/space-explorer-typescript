/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { missionsCreate } from "../funcs/missionsCreate.js";
import { missionsDelete } from "../funcs/missionsDelete.js";
import { missionsGet } from "../funcs/missionsGet.js";
import { missionsList } from "../funcs/missionsList.js";
import { missionsUpdate } from "../funcs/missionsUpdate.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class Missions extends ClientSDK {
  /**
   * List all missions
   */
  async list(
    request: operations.ListMissionsRequest,
    options?: RequestOptions,
  ): Promise<operations.ListMissionsResponse> {
    return unwrapAsync(missionsList(
      this,
      request,
      options,
    ));
  }

  /**
   * Create a new mission
   */
  async create(
    request: components.NewMission,
    options?: RequestOptions,
  ): Promise<components.Mission> {
    return unwrapAsync(missionsCreate(
      this,
      request,
      options,
    ));
  }

  /**
   * Get mission details
   */
  async get(
    request: operations.GetMissionRequest,
    options?: RequestOptions,
  ): Promise<components.Mission> {
    return unwrapAsync(missionsGet(
      this,
      request,
      options,
    ));
  }

  /**
   * Update a mission
   */
  async update(
    request: operations.UpdateMissionRequest,
    options?: RequestOptions,
  ): Promise<components.Mission> {
    return unwrapAsync(missionsUpdate(
      this,
      request,
      options,
    ));
  }

  /**
   * Delete a mission
   */
  async delete(
    request: operations.DeleteMissionRequest,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(missionsDelete(
      this,
      request,
      options,
    ));
  }
}
