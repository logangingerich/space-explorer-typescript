/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * Bad request
 */
export type ErrorTData = {
  code: number;
  message: string;
};

/**
 * Bad request
 */
export class ErrorT extends Error {
  code: number;

  /** The original data that was passed to this error instance. */
  data$: ErrorTData;

  constructor(err: ErrorTData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.code = err.code;

    this.name = "ErrorT";
  }
}

/** @internal */
export const ErrorT$inboundSchema: z.ZodType<ErrorT, z.ZodTypeDef, unknown> = z
  .object({
    code: z.number().int(),
    message: z.string(),
  })
  .transform((v) => {
    return new ErrorT(v);
  });

/** @internal */
export type ErrorT$Outbound = {
  code: number;
  message: string;
};

/** @internal */
export const ErrorT$outboundSchema: z.ZodType<
  ErrorT$Outbound,
  z.ZodTypeDef,
  ErrorT
> = z.instanceof(ErrorT)
  .transform(v => v.data$)
  .pipe(z.object({
    code: z.number().int(),
    message: z.string(),
  }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ErrorT$ {
  /** @deprecated use `ErrorT$inboundSchema` instead. */
  export const inboundSchema = ErrorT$inboundSchema;
  /** @deprecated use `ErrorT$outboundSchema` instead. */
  export const outboundSchema = ErrorT$outboundSchema;
  /** @deprecated use `ErrorT$Outbound` instead. */
  export type Outbound = ErrorT$Outbound;
}
