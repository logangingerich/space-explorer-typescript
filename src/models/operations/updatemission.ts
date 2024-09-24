/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";

export type UpdateMissionRequest = {
  /**
   * ID of the mission
   */
  missionId: string;
  /**
   * Updated mission object
   */
  updateMission: components.UpdateMission;
};

/** @internal */
export const UpdateMissionRequest$inboundSchema: z.ZodType<
  UpdateMissionRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  missionId: z.string(),
  UpdateMission: components.UpdateMission$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "UpdateMission": "updateMission",
  });
});

/** @internal */
export type UpdateMissionRequest$Outbound = {
  missionId: string;
  UpdateMission: components.UpdateMission$Outbound;
};

/** @internal */
export const UpdateMissionRequest$outboundSchema: z.ZodType<
  UpdateMissionRequest$Outbound,
  z.ZodTypeDef,
  UpdateMissionRequest
> = z.object({
  missionId: z.string(),
  updateMission: components.UpdateMission$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    updateMission: "UpdateMission",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateMissionRequest$ {
  /** @deprecated use `UpdateMissionRequest$inboundSchema` instead. */
  export const inboundSchema = UpdateMissionRequest$inboundSchema;
  /** @deprecated use `UpdateMissionRequest$outboundSchema` instead. */
  export const outboundSchema = UpdateMissionRequest$outboundSchema;
  /** @deprecated use `UpdateMissionRequest$Outbound` instead. */
  export type Outbound = UpdateMissionRequest$Outbound;
}
