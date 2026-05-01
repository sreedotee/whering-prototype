"use client";

import { motion } from "framer-motion";
import SectionHeader from "../SectionHeader";
import { fadeInUp } from "@/styles/animations";

const patterns = [
  {
    app: "Dress-up games",
    pattern: "Canvas is the center",
    lesson: "Everything feeds into one tactile surface. No ambiguity about what you're doing.",
  },
  {
    app: "YouTube",
    pattern: "One save system, flexible intent",
    lesson: "Liked, Watch Later, Playlists are all 'saved content' with different purposes. One model, user-chosen meaning.",
  },
  {
    app: "Spotify",
    pattern: "One primary action per context",
    lesson: "Play/pause dominates. Secondary actions exist but don't compete. 'Send to friend' is never the default.",
  },
  {
    app: "Instagram Explore",
    pattern: "Post is the primary object",
    lesson: "Tap to expand. Creator profile is secondary navigation. The grid is fast and visually dominant.",
  },
  {
    app: "Apple Photos",
    pattern: "Collections are contextual",
    lesson: "Camera Roll, Favorites, Albums — same items, different contexts. Structure doesn't force a mental model.",
  },
];

export default function CompetitiveInspiration() {
  return (
    <section id="inspiration" className="py-10 bg-white">
      <div className="container-standard">
        <SectionHeader
          number="04"
          title="Reference Patterns"
          subtitle="Patterns worth borrowing for Whering"
        />

        <div className="divide-y divide-black/8">
          {patterns.map((pattern, index) => (
            <motion.div
              key={pattern.app}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              viewport={{ once: true }}
              className="py-6 grid grid-cols-1 md:grid-cols-[200px_1fr] gap-3 md:gap-10"
            >
              <div>
                <p className="card-microlabel mb-1">{pattern.app}</p>
                <p className="text-sm font-semibold text-primary leading-snug">{pattern.pattern}</p>
              </div>
              <p className="card-body text-primary/70">{pattern.lesson}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-10 rounded-2xl bg-primary text-white p-8 md:p-10"
        >
          <p className="card-microlabel !text-white/50 mb-4">Core Insight</p>
          <h3 className="narrative-para-heading !text-white mb-4">
            The strongest apps have a clear primary interaction and treat everything else as support.
          </h3>
          <p className="narrative-body !text-white/70 max-w-3xl">
            Whering's primary interaction is styling — creating outfits in the canvas. Collections, discovery, and wardrobe management are important, but they should feed into that core, not compete for attention.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
