declare module "vike" {
  interface PageContext {
    abortReason?: { notAdmin?: boolean } | string;
    abortStatusCode?: number;
    is404?: boolean;
  }
}
