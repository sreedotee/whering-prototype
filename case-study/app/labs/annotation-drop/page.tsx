"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

const defaultNotes = [
  "5 competing actions",
  "No hierarchy",
  "Search lacks context",
  "Too many primary actions",
];

export default function AnnotationDropPage() {
  const [preview, setPreview] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string>("");
  const [notes, setNotes] = useState(defaultNotes.join("\n"));

  const noteList = useMemo(
    () =>
      notes
        .split("\n")
        .map((line) => line.trim())
        .filter(Boolean),
    [notes]
  );

  const handleFile = (file?: File | null) => {
    if (!file) return;
    setFileName(file.name);
    setPreview(URL.createObjectURL(file));
  };

  return (
    <main className="min-h-screen bg-[#F6F5F2] px-4 py-8 text-[#1F1F1F]">
      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <section className="rounded-[28px] border border-black/5 bg-white p-5 shadow-sm">
          <div className="mb-4">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#7D767A]">
              Annotation Lab
            </p>
            <h1 className="mt-2 text-3xl font-medium tracking-[-0.04em]">
              Drop a screenshot here
            </h1>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[#6B6B6B]">
              Use this page to preview an image, write annotation notes, and decide what to
              call out in the case study.
            </p>
          </div>

          <label
            className="flex min-h-[420px] cursor-pointer flex-col items-center justify-center rounded-[24px] border-2 border-dashed border-black/10 bg-[#FAFAF8] p-6 text-center transition-colors hover:bg-[#F3F2EE]"
          >
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => handleFile(e.target.files?.[0])}
            />
            {preview ? (
              <div className="relative h-full w-full min-h-[420px]">
                <Image
                  src={preview}
                  alt="Uploaded annotation preview"
                  fill
                  unoptimized
                  className="rounded-[18px] object-contain"
                />
              </div>
            ) : (
              <>
                <div className="rounded-full bg-[#1F1F1F] px-4 py-2 text-sm font-medium text-white">
                  Choose image
                </div>
                <p className="mt-4 text-sm text-[#6B6B6B]">
                  Click here or drop a screenshot file into the browser.
                </p>
              </>
            )}
          </label>

          {fileName ? (
            <p className="mt-3 text-xs text-[#7D767A]">
              Loaded file: <span className="font-medium text-[#1F1F1F]">{fileName}</span>
            </p>
          ) : null}
        </section>

        <aside className="rounded-[28px] border border-black/5 bg-white p-5 shadow-sm">
          <div className="mb-4">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#7D767A]">
              Notes
            </p>
            <h2 className="mt-2 text-2xl font-medium tracking-[-0.03em]">
              Quick annotation copy
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-[#6B6B6B]">
              Write short labels on the left and keep the critique visible on the right.
            </p>
          </div>

          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            className="min-h-[260px] w-full rounded-[20px] border border-black/10 bg-[#FAFAF8] p-4 text-sm leading-6 outline-none focus:border-[#1F1F1F]"
            placeholder="One note per line"
          />

          <div className="mt-5">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#7D767A]">
              Preview
            </p>
            <div className="mt-3 space-y-2">
              {noteList.map((note) => (
                <div
                  key={note}
                  className="rounded-full border border-black/5 bg-[#F3F2EE] px-4 py-2 text-sm text-[#1F1F1F]"
                >
                  {note}
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}
