"use client";

import { motion } from "framer-motion";
import SectionHeader from "../SectionHeader";
import { fadeInUp } from "@/styles/animations";

const directions = [
  {
    title: "Intent-Based Hubs",
    label: "Navigation model",
    body: "Replaced fragmented feature clusters with five durable, intent-based destinations: Explore, Search, Try On, Notifs, and Profile.",
  },
  {
    title: "Collection Taxonomy",
    label: "Object model",
    body: "Keep wishlist, moodboards, and lookbooks as recognizable collection types, but make them part of one consistent saved-object system.",
  },
  {
    title: "Canvas-First Creation",
    label: "Core loop",
    body: "Move try-on remixing into one playful canvas with clear add-item, save, and plan actions instead of splitting Dress Me and Canvas into competing modes.",
  },
];

const journeys = [
  {
    title: "Discover to outfit journey",
    before: ["open home", "search for item", "see style guide", "open creator", "unclear next step"],
    after: ["open Explore hub", "tap trending outfit", "inspect items", "remix in Try On", "save to Collection"],
  },
  {
    title: "Canvas creation journey",
    before: ["style outfit", "enter canvas", "hunt for add items", "switch among 3 sources", "save then send"],
    after: ["open Try On hub", "add from saved context", "simplify item filters", "save outfit", "plan or share"],
  },
  {
    title: "Calendar planning journey",
    before: ["open day", "choose among 4 CTAs", "open month icon", "mode unclear"],
    after: ["open day", "store planned outfit", "get suggestions", "review month view"],
  },
  {
    title: "Saved object journey",
    before: ["wishlist", "moodboard", "lookbook", "saved posts", "separate places"],
    after: ["Collections", "choose type", "save item or outfit", "reuse in Canvas"],
  },
];

const loop = ["discover", "outfit", "item", "canvas", "collection", "calendar"];

function FlowLine({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {items.map((item, index) => (
        <div key={`${item}-${index}`} className="flex items-center gap-2">
          <span className="rounded-full bg-white border border-black/5 px-3 py-1.5 card-supporting !text-primary">
            {item}
          </span>
          {index < items.length - 1 && (
            <span className="card-supporting !text-plum/40">-&gt;</span>
          )}
        </div>
      ))}
    </div>
  );
}

export default function RedesignDirection() {
  return (
    <section id="solution" className="py-10 bg-white">
      <div className="container-standard">
        <SectionHeader number="07" title="Redesign Direction" subtitle="What changed and why" />

        <motion.p {...fadeInUp} className="narrative-body mb-10 max-w-2xl">
          The redesign preserves Whering's full depth while clarifying what each surface does.
          It reduces cognitive load through clear intent: each hub has one primary job. Casual users see what matters first.
          Power users access full depth without clutter. The shift is architectural, not subtractive.
          Each hub owns a <strong>singular intent</strong>: Explore for passive discovery, Search for active trends, Try On for creation, and Profile for inventory and reflection.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
          {directions.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08, duration: 0.45 }}
              viewport={{ once: true }}
              className="rounded-2xl bg-surface border border-black/5 p-7"
            >
              <p className="card-microlabel mb-3">{item.label}</p>
              <h3 className="card-heading !text-lg mb-3">{item.title}</h3>
              <p className="card-body">{item.body}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-black/5 bg-white p-7 md:p-8 mb-8"
        >
          <p className="card-microlabel mb-5">Core loop</p>
          <div className="flex flex-wrap items-center gap-3">
            {loop.map((item, index) => (
              <div key={item} className="flex items-center gap-3">
                <span className="rounded-full bg-plum/5 border border-plum/10 px-4 py-2 card-body !text-primary">
                  {item}
                </span>
                {index < loop.length - 1 && (
                  <span className="card-supporting !text-plum/40">-&gt;</span>
                )}
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
