"use client";

import { motion } from "framer-motion";
import SectionHeader from "../SectionHeader";

const interactionPatterns = [
  {
    screen: "Home",
    primaryJob: "Browse inspiration from creators and outfits",
    clarification: "The post is the primary object, not the creator. Styling is a secondary action, not the default.",
  },
  {
    screen: "Outfit Detail",
    primaryJob: "See what items are in this outfit. Decide if you want to style it.",
    clarification: "Don't auto-open the canvas. Let the user choose whether to explore or style.",
  },
  {
    screen: "Canvas",
    primaryJob: "Put together an outfit. Save it.",
    clarification: "This is the core game. Make it feel like play — tactile, drag-and-drop — not a hidden control panel.",
  },
  {
    screen: "Profile",
    primaryJob: "Items, outfits, collections, stats, calendar, and planning in one place.",
    clarification: "Stats are here because reflection belongs in one place, not scattered across tabs.",
  },
];

export default function InteractionClarityTerminology() {
  return (
    <section id="clarity" className="py-10 bg-white">
      <div className="container-standard">
        <SectionHeader
          number="05"
          title="One Primary Job Per Screen"
          subtitle="Each tab answers a different question"
        />

        <div className="divide-y divide-black/8 mb-10">
          {interactionPatterns.map((pattern, index) => (
            <motion.div
              key={pattern.screen}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              viewport={{ once: true }}
              className="py-6 grid grid-cols-1 md:grid-cols-[160px_1fr] gap-3 md:gap-10"
            >
              <p className="text-sm font-semibold text-primary">{pattern.screen}</p>
              <div className="space-y-2">
                <p className="card-body text-primary font-medium">{pattern.primaryJob}</p>
                <p className="card-body text-primary/60">{pattern.clarification}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="rounded-2xl bg-primary text-white p-8 md:p-10"
        >
          <p className="card-microlabel !text-white/50 mb-4">The Principle</p>
          <h3 className="narrative-para-heading !text-white mb-4">
            Make the primary action obvious. Everything else is secondary.
          </h3>
          <p className="narrative-body !text-white/70 max-w-3xl">
            Users shouldn&apos;t guess what a screen is for. One primary interaction, one clear outcome per view. Secondary actions live in menus or are revealed through exploration.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
