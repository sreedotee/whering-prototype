"use client";

import { useEffect, useState } from "react";

type OpenEntry = {
  openedAt: string;
  source: string;
  countryCode?: string;
};

const STORAGE_KEY = "wc-study-session";

function formatTimestamp(value: string) {
  try {
    return new Intl.DateTimeFormat("en-US", {
      dateStyle: "medium",
      timeStyle: "short",
    }).format(new Date(value));
  } catch {
    return value;
  }
}

async function getCountryCode() {
  try {
    const response = await fetch("https://ipapi.co/json/", {
      cache: "no-store",
    });

    if (!response.ok) return null;

    const data = (await response.json()) as { country_code?: string };
    return data.country_code ?? null;
  } catch {
    return null;
  }
}

export default function SessionSignal() {
  const [entry, setEntry] = useState<OpenEntry | null>(null);

  useEffect(() => {
    let cancelled = false;
    const token = new URLSearchParams(window.location.search).get("key");

    const bootstrap = async () => {
      const existing = window.sessionStorage.getItem(STORAGE_KEY);

      if (existing) {
        if (!cancelled) setEntry(JSON.parse(existing) as OpenEntry);
        return;
      }

      const countryCode = await getCountryCode();

      if (cancelled) return;

      const nextEntry: OpenEntry = {
        openedAt: new Date().toISOString(),
        source: "Case study opened",
        countryCode: countryCode ?? undefined,
      };

      window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(nextEntry));
      setEntry(nextEntry);

      if (token) {
        await fetch(`/api/session-log?key=${encodeURIComponent(token)}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            openedAt: nextEntry.openedAt,
            countryCode: countryCode ?? "unknown",
            path: window.location.pathname,
          }),
        });
      }
    };

    void bootstrap();

    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    if (!entry) return;
  }, [entry]);

  return null;
}
