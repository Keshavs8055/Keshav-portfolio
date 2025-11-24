// src/types/vike.d.ts
import type { IncomingMessage, ServerResponse } from "http";

declare module "vike" {
  // keep this broad but explicit so pages can read these fields
  interface PageContext {
    // abortReason can be either an object with our flag, or a string (or undefined)
    abortReason?: { notAdmin?: boolean } | string;
    abortStatusCode?: number;
    is404?: boolean;

    // keep other server types if you reference them later
    req?: IncomingMessage;
    res?: ServerResponse;
  }
}
