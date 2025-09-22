export function Analytics() {
  const id = process.env.NEXT_PUBLIC_ANALYTICS_ID;

  if (!id) {
    return null;
  }

  return (
    <script
      defer
      data-domain="letsai.dev"
      data-api="/analytics/event"
      src={`https://plausible.io/js/script.js?id=${id}`}
    />
  );
}

export async function trackEvent(event: string, payload: Record<string, unknown>) {
  if (process.env.NODE_ENV !== "production") {
    console.info(`[analytics] ${event}`, payload);
  }
  return true;
}
