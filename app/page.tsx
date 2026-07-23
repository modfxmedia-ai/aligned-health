import { permanentRedirect } from "next/navigation";

/**
 * The canonical homepage lives at `/home` to match the legacy URL structure.
 * `next.config.ts` performs a 308 at the edge; this is a safety net in case
 * the config redirect is ever removed.
 */
export default function RootIndex(): never {
  permanentRedirect("/home");
}
