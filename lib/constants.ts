function getUrlOrFallback(input: string | undefined, fallback: string) {
  if (!input) return fallback;

  try {
    return new URL(input).toString().replace(/\/$/, "");
  } catch {
    return fallback;
  }
}

export const SITE_NAME =
  process.env.NEXT_PUBLIC_SITE_NAME ?? "NextJS Blog Learning Platform";

export const SITE_URL = getUrlOrFallback(
  process.env.NEXT_PUBLIC_SITE_URL,
  "http://localhost:3000",
);

export const API_URL = getUrlOrFallback(
  process.env.NEXT_PUBLIC_API_URL,
  `${SITE_URL}/api`,
);

