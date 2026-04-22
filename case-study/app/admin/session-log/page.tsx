import { promises as fs } from "fs";
import path from "path";

type SessionLogEntry = {
  openedAt: string;
  countryCode?: string;
  path: string;
};

const LOG_PATH = path.join(process.cwd(), "session-open-log.json");

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

async function readLog(): Promise<SessionLogEntry[]> {
  try {
    const raw = await fs.readFile(LOG_PATH, "utf8");
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? (parsed as SessionLogEntry[]) : [];
  } catch {
    return [];
  }
}

export default async function SessionLogAdminPage({
  searchParams,
}: {
  searchParams: Promise<{ key?: string }>;
}) {
  const { key } = await searchParams;
  const authorized = key === "whering-quiet";
  const entries = authorized ? await readLog() : [];
  const outsideIndiaCount = entries.filter((entry) => entry.countryCode && entry.countryCode !== "IN").length;

  return (
    <main className="min-h-screen bg-[#0F0C14] text-white px-6 py-10 md:px-12">
      <div className="mx-auto max-w-4xl">
        {!authorized ? (
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <p className="card-heading !text-white mb-2">Access locked</p>
            <p className="text-white/60">
              Open this page with the secret token in the URL, for example:
              <br />
              <span className="text-white/80">/admin/session-log?key=whering-quiet</span>
            </p>
          </div>
        ) : (
          <>
            <p className="card-microlabel !text-[#B894FF] !opacity-100 mb-3">
              Private session log
            </p>
            <h1 className="hero-title !text-white mb-4">Outside-India open tracker</h1>
            <p className="narrative-body !text-white/70 max-w-2xl mb-8">
              This page only shows first opens that were recorded from outside India. It is intentionally
              hidden from the main case study flow.
            </p>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <div className="flex items-center justify-between gap-4 mb-6">
                <div>
                  <p className="card-microlabel !text-white/40 !opacity-100">Status</p>
                  <p className="card-heading !text-white">{entries.length} tracked opens</p>
                  <p className="text-sm text-white/50 mt-1">
                    {outsideIndiaCount} outside India
                  </p>
                </div>
                <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/60">
                  /admin/session-log
                </span>
              </div>

              <div className="space-y-3">
                {entries.length === 0 ? (
                  <p className="text-white/50">No outside-India opens have been recorded yet.</p>
                ) : (
                  entries.map((entry, index) => (
                    <div
                      key={`${entry.openedAt}-${index}`}
                      className="flex flex-col gap-1 rounded-2xl border border-white/10 bg-black/20 px-4 py-3 md:flex-row md:items-center md:justify-between"
                    >
                      <div>
                        <p className="font-medium text-white">{formatTimestamp(entry.openedAt)}</p>
                        <p className="text-sm text-white/50">{entry.path}</p>
                      </div>
                      <p className="text-sm text-[#B894FF]">{entry.countryCode ?? "Unknown"}</p>
                    </div>
                  ))
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </main>
  );
}
