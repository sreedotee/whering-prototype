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
  const indiaEntries = entries.filter((entry) => entry.countryCode === "IN");
  const outsideIndiaEntries = entries.filter((entry) => entry.countryCode && entry.countryCode !== "IN");
  const unknownEntries = entries.filter((entry) => !entry.countryCode || entry.countryCode === "unknown");

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
                    {outsideIndiaEntries.length} outside India, {indiaEntries.length} India, {unknownEntries.length} unknown
                  </p>
                </div>
                <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/60">
                  /admin/session-log
                </span>
              </div>

              <div className="space-y-8">
                <section>
                  <div className="flex items-center justify-between mb-3">
                    <h2 className="text-sm font-semibold tracking-[0.08em] uppercase text-[#B894FF]">
                      Outside India
                    </h2>
                    <span className="text-xs text-white/50">{outsideIndiaEntries.length} entries</span>
                  </div>
                  <div className="space-y-3">
                    {outsideIndiaEntries.length === 0 ? (
                      <p className="text-white/50">No outside-India opens yet.</p>
                    ) : (
                      outsideIndiaEntries.map((entry, index) => (
                        <div
                          key={`outside-${entry.openedAt}-${index}`}
                          className="flex flex-col gap-1 rounded-2xl border border-[#B894FF]/30 bg-[#B894FF]/10 px-4 py-3 md:flex-row md:items-center md:justify-between"
                        >
                          <div>
                            <p className="font-medium text-white">{formatTimestamp(entry.openedAt)}</p>
                            <p className="text-sm text-white/50">{entry.path}</p>
                          </div>
                          <p className="text-sm text-[#D7C1FF]">{entry.countryCode ?? "Unknown"}</p>
                        </div>
                      ))
                    )}
                  </div>
                </section>

                <section>
                  <div className="flex items-center justify-between mb-3">
                    <h2 className="text-sm font-semibold tracking-[0.08em] uppercase text-[#7DD3FC]">
                      India
                    </h2>
                    <span className="text-xs text-white/50">{indiaEntries.length} entries</span>
                  </div>
                  <div className="space-y-3">
                    {indiaEntries.length === 0 ? (
                      <p className="text-white/50">No India opens yet.</p>
                    ) : (
                      indiaEntries.map((entry, index) => (
                        <div
                          key={`india-${entry.openedAt}-${index}`}
                          className="flex flex-col gap-1 rounded-2xl border border-white/10 bg-black/20 px-4 py-3 md:flex-row md:items-center md:justify-between"
                        >
                          <div>
                            <p className="font-medium text-white">{formatTimestamp(entry.openedAt)}</p>
                            <p className="text-sm text-white/50">{entry.path}</p>
                          </div>
                          <p className="text-sm text-[#7DD3FC]">{entry.countryCode}</p>
                        </div>
                      ))
                    )}
                  </div>
                </section>

                <section>
                  <div className="flex items-center justify-between mb-3">
                    <h2 className="text-sm font-semibold tracking-[0.08em] uppercase text-white/60">
                      Unknown
                    </h2>
                    <span className="text-xs text-white/50">{unknownEntries.length} entries</span>
                  </div>
                  <div className="space-y-3">
                    {unknownEntries.length === 0 ? (
                      <p className="text-white/50">No unknown-location opens yet.</p>
                    ) : (
                      unknownEntries.map((entry, index) => (
                        <div
                          key={`unknown-${entry.openedAt}-${index}`}
                          className="flex flex-col gap-1 rounded-2xl border border-white/10 bg-black/20 px-4 py-3 md:flex-row md:items-center md:justify-between"
                        >
                          <div>
                            <p className="font-medium text-white">{formatTimestamp(entry.openedAt)}</p>
                            <p className="text-sm text-white/50">{entry.path}</p>
                          </div>
                          <p className="text-sm text-white/60">Unknown</p>
                        </div>
                      ))
                    )}
                  </div>
                </section>
              </div>
            </div>
          </>
        )}
      </div>
    </main>
  );
}
