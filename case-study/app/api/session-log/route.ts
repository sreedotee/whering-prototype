import { promises as fs } from "fs";
import path from "path";

const LOG_PATH = path.join(process.cwd(), "session-open-log.json");
const ADMIN_TOKEN = process.env.SESSION_LOG_TOKEN ?? "whering-quiet";

type SessionLogEntry = {
  openedAt: string;
  countryCode?: string;
  path: string;
};

async function readLog(): Promise<SessionLogEntry[]> {
  try {
    const raw = await fs.readFile(LOG_PATH, "utf8");
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? (parsed as SessionLogEntry[]) : [];
  } catch {
    return [];
  }
}

async function writeLog(entries: SessionLogEntry[]) {
  await fs.writeFile(LOG_PATH, JSON.stringify(entries, null, 2), "utf8");
}

function isOutsideIndia(entry: SessionLogEntry) {
  return !!entry.countryCode && entry.countryCode !== "IN";
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const key = searchParams.get("key");

  if (key !== ADMIN_TOKEN) {
    return new Response("Not found", { status: 404 });
  }

  const entries = await readLog();
  const filtered = entries.filter(isOutsideIndia);

  return Response.json({
    total: filtered.length,
    entries: filtered,
  });
}

export async function POST(request: Request) {
  const { searchParams } = new URL(request.url);
  const key = searchParams.get("key");

  if (key !== ADMIN_TOKEN) {
    return new Response("Not found", { status: 404 });
  }

  const body = (await request.json()) as Partial<SessionLogEntry>;

  if (!body.openedAt || !body.path) {
    return new Response("Missing data", { status: 400 });
  }

  const entries = await readLog();
  entries.push({
    openedAt: body.openedAt,
    countryCode: body.countryCode,
    path: body.path,
  });
  await writeLog(entries);

  return Response.json({ ok: true });
}
