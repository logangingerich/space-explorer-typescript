/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type Astronaut = {
  id: string;
  name: string;
  role?: string | undefined;
};

/** @internal */
export const Astronaut$inboundSchema: z.ZodType<
  Astronaut,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  name: z.string(),
  role: z.string().optional(),
});

/** @internal */
export type Astronaut$Outbound = {
  id: string;
  name: string;
  role?: string | undefined;
};

/** @internal */
export const Astronaut$outboundSchema: z.ZodType<
  Astronaut$Outbound,
  z.ZodTypeDef,
  Astronaut
> = z.object({
  id: z.string(),
  name: z.string(),
  role: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Astronaut$ {
  /** @deprecated use `Astronaut$inboundSchema` instead. */
  export const inboundSchema = Astronaut$inboundSchema;
  /** @deprecated use `Astronaut$outboundSchema` instead. */
  export const outboundSchema = Astronaut$outboundSchema;
  /** @deprecated use `Astronaut$Outbound` instead. */
  export type Outbound = Astronaut$Outbound;
}
