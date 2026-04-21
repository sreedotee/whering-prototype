"use client";

import { motion } from "framer-motion";
import SectionHeader from "../SectionHeader";
import { fadeInUp } from "@/styles/animations";

const patterns = [
  {
    app: "Cosmos (Dress-up Game)",
    pattern: "Primary Canvas",
    insight: "The canvas is the center of play. Everything feeds into it: wardrobe, accessories, poses, styling options. The game is tactile, drag-and-drop, visual. There's no ambiguity about what you're doing—you're dressing.",
    lesson: "Make styling the primary interaction surface. If canvas/try-on is core to Whering's promise, it should feel like play, not like a hidden detail buried in controls.",
  },
  {
    app: "YouTube",
    pattern: "Consistent Collection Model",
    insight: "Users have: Liked videos, Watch later, Playlists. These are all 'saved content' but with different purposes (quick faves, queue for later, curated lists). The mental model is clear: save in the way that matches your intent.",
    lesson: "Wishlist, Moodboards, Collections should work the same way. One flexible saving system where users choose the intent (inspiration, outfit draft, shopping list, occasion-based).",
  },
  {
    app: "Spotify",
    pattern: "One Primary Control Per Context",
    insight: "In Now Playing: play/pause is the dominant button. Save (like) is secondary. In Browse: artists, playlists, episodes are equal weight, but each leads to one obvious primary action (play). There's no 'send to friend' as a default.",
    lesson: "Each screen should have one clear primary action. Secondary actions (share, suggest, report) are discoverable but not compete with the main job.",
  },
  {
    app: "Instagram Explore",
    pattern: "Grid Discovery with Instant Context",
    insight: "Users see a grid of posts. Tapping reveals two paths: expand the post (in-feed) or go to creator profile (as secondary navigation). The post itself is always the primary object.",
    lesson: "In Whering's Discover: the outfit/creator is the object. Styling, saving, and creator exploration are secondary. The grid should be fast and visually dominant.",
  },
  {
    app: "Apple Photos",
    pattern: "Collections are Contextual, Not Structural",
    insight: "Photos shows: Camera Roll, Favorites, Albums. But search, memories, and suggestions are also discoverable from the same view. The structure doesn't force users into one collection type—they choose based on workflow.",
    lesson: "Wardrobe, Moodboards, Wishlist are all 'my saved items.' The interface should let users organize by context (mood, occasion, season) without forcing them into separate mental models.",
  },
];

export default function CompetitiveInspiration() {
  return (
    <section id="inspiration" className="py-20 bg-white">
      <div className="container-standard">
        <SectionHeader
          number="04"
          title="Competitive Inspiration"
          subtitle="How other apps handle collections, primary actions, and play"
        />

        <motion.p {...fadeInUp} className="narrative-body mb-12 max-w-3xl">
          Whering is a fashion and styling app, but its interaction patterns should learn from games, music streaming, and social discovery. The goal isn't to copy, but to understand how mature apps clarify intent.
        </motion.p>

        <div className="space-y-5">
          {patterns.map((pattern, index) => (
            <motion.div
              key={pattern.app}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-black/8 overflow-hidden"
            >
              <div className="p-6 bg-gradient-to-r from-cyan-50 to-transparent border-b border-black/8">
                <div className="flex items-center gap-3">
                  <div>
                    <p className="text-sm font-medium text-secondary">{pattern.app}</p>
                    <p className="text-lg font-semibold text-primary">{pattern.pattern}</p>
                  </div>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <p className="card-microlabel text-secondary mb-2">How It Works</p>
                  <p className="card-body text-primary/80">{pattern.insight}</p>
                </div>
                <div className="bg-primary/5 rounded-lg p-4 border border-primary/10">
                  <p className="card-microlabel text-primary mb-2">Lesson for Whering</p>
                  <p className="card-body text-primary">{pattern.lesson}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 rounded-2xl bg-gradient-to-r from-primary/10 to-transparent border border-primary/20 p-8 md:p-10"
        >
          <p className="card-microlabel text-primary mb-4">Core Insight</p>
          <p className="text-lg font-medium text-primary mb-4">
            The strongest apps have a clear primary interaction (playing, dressing, saving) and treat everything else as support.
          </p>
          <p className="text-base text-primary/75">
            Whering's primary interaction is styling (creating outfits in the canvas). Collections, discovery, and wardrobe management are important, but they should feed into that core, not compete for attention.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
