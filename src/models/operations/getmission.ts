/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";

export type GetMissionRequest = {
  /**
   * ID of the mission
   */
  missionId: string;
  /**
   * Language for the response
   */
  acceptLanguage?: string | undefined;
};

/** @internal */
export const GetMissionRequest$inboundSchema: z.ZodType<
  GetMissionRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  missionId: z.string(),
  "Accept-Language": z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "Accept-Language": "acceptLanguage",
  });
});

/** @internal */
export type GetMissionRequest$Outbound = {
  missionId: string;
  "Accept-Language"?: string | undefined;
};

/** @internal */
export const GetMissionRequest$outboundSchema: z.ZodType<
  GetMissionRequest$Outbound,
  z.ZodTypeDef,
  GetMissionRequest
> = z.object({
  missionId: z.string(),
  acceptLanguage: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    acceptLanguage: "Accept-Language",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetMissionRequest$ {
  /** @deprecated use `GetMissionRequest$inboundSchema` instead. */
  export const inboundSchema = GetMissionRequest$inboundSchema;
  /** @deprecated use `GetMissionRequest$outboundSchema` instead. */
  export const outboundSchema = GetMissionRequest$outboundSchema;
  /** @deprecated use `GetMissionRequest$Outbound` instead. */
  export type Outbound = GetMissionRequest$Outbound;
}
