import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";
import { vercel } from "@t3-oss/env-nextjs/presets";

export const env = createEnv({
  server: {
    DATABASE_URL: z.string().url(),
    TURSO_AUTH_TOKEN: z.string().min(1),
    CLERK_SECRET_KEY: z.string().min(1),
  },
  client: {
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: z.string().min(1),
    NEXT_PUBLIC_CLERK_SIGN_IN_URL: z.string().startsWith("/"),
    NEXT_PUBLIC_CLERK_SIGN_UP_URL: z.string().startsWith("/"),
  },
  experimental__runtimeEnv: {
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY:
      process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,
    NEXT_PUBLIC_CLERK_SIGN_IN_URL: process.env.NEXT_PUBLIC_CLERK_SIGN_IN_URL,
    NEXT_PUBLIC_CLERK_SIGN_UP_URL: process.env.NEXT_PUBLIC_CLERK_SIGN_UP_URL,
  },
  skipValidation: !!process.env.SKIP_ENV_VALIDATION,
  emptyStringAsUndefined: true,
  extends: [vercel()],
});
