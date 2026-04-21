"use client";

import { motion } from "framer-motion";
import SectionHeader from "../SectionHeader";
import { fadeInUp } from "@/styles/animations";

const problems = [
  {
    screen: "Creator Profile",
    currentPrimaryAction: "Style them",
    issue: "User opens a creator's profile expecting to explore their taste or follow them. Instead, the primary action invites the user to create an outfit styled after the creator—a confusing handoff that assumes active styling intent.",
    clarity: "Primary action should be: Explore their taste / Follow. Styling their looks should be a secondary discovery path.",
  },
  {
    screen: "Outfit Detail",
    currentPrimaryAction: "Style outfit → Canvas",
    issue: "Clicking an outfit opens a canvas to remix it. But the canvas interface feels buried with controls: back button (rewind icon), replay symbol on the right, and an almost-hidden add-item button. The flow switches intent mid-action.",
    clarity: "Primary action: See what items are in this outfit. Canvas should open only if user explicitly requests it. Item exploration and styling remixing are separate jobs.",
  },
  {
    screen: "After Saving an Outfit",
    currentPrimaryAction: "Send to [creator]",
    issue: "User creates an outfit and the app assumes they want to send it back to the person they copied it from. This is a strange default—most users want to save it for themselves or explore what they made.",
    clarity: "Primary action: Save to my wardrobe / Collections. Sharing should be optional and discoverable, not the assumed next step.",
  },
  {
    screen: "Add Item Controls",
    currentPrimaryAction: "Hidden toggle with 3 options",
    issue: "When adding items to an outfit, the interface surfaces a toggle with Wardrobe, Wishlist, Moodboards as equally weighted options. Tags underneath (Accessories, Bags, Bottoms, Footwear, Full Body, Outerwear, Swimwear, Tops) are 8 separate categories. Too many choices at once.",
    clarity: "Primary action: Add items from my wardrobe. Wishlist and moodboards are just collection types, not separate source buckets. Tags should be simplified or hidden until user explicitly needs filtering.",
  },
  {
    screen: "Calendar Day View",
    currentPrimaryAction: "4 equal CTAs",
    issue: "Opening a day exposes: Add from wardrobe, Create new outfit, Discover new outfits (shuffle), Add outfit photo. All are presented as co-equal options. Plus a separate calendar icon in the top right that opens a month view—different calendar interaction.",
    clarity: "Primary action: Save what I want to wear on this day. Adding from wardrobe or creating new outfits are variants of the same job. Shuffle/suggestions are support, not primary. Month view and day view should use consistent interaction patterns.",
  },
  {
    screen: "Styling Section (Bottom Nav)",
    currentPrimaryAction: "Dress me, Canvas, Moodboard",
    issue: "This tab has three top-level options where Dress me and Canvas do the same thing (styling) but with different interfaces. Moodboard is a passive collection browser that doesn't fit an action-oriented tab.",
    clarity: "Primary action: Open the canvas to style outfits (one unified interface). Collections (moodboards, saved looks) belong in Wardrobe section, not here. This tab should be about the act of styling, not about browsing.",
  },
  {
    screen: "Outfit Interactions",
    currentPrimaryAction: "Like ❤️ + Save",
    issue: "Users can both like and save an outfit. Both metrics do the same work (signal preference). Hearts feel secondary but are visually present everywhere (also a flag icon is jarring and too prominent).",
    clarity: "Use one saving/collection mechanism. Like should either replace save or be hidden. Flag for reporting should be discoverable but not prominent by default.",
  },
];

export default function CurrentStateProblems() {
  return (
    <section id="current-state" className="py-20 bg-white">
      <div className="container-standard">
        <SectionHeader
          number="03"
          title="Current State: Where Intent Gets Unclear"
          subtitle="Each screen has competing primary actions"
        />

        <motion.p {...fadeInUp} className="narrative-body mb-12 max-w-3xl">
          The core problem isn't that Whering has too many features. It's that the interface doesn't signal clearly what each screen is for. Users encounter multiple plausible primary actions and have to guess the "right" one. This creates friction at every turn.
        </motion.p>

        <div className="space-y-6">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.screen}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-black/8 overflow-hidden bg-white"
            >
              <div className="p-6 bg-gradient-to-r from-plum/5 to-transparent border-b border-black/8">
                <p className="card-microlabel text-plum mb-1">Current Flow</p>
                <h3 className="text-lg font-semibold text-primary">{problem.screen}</h3>
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <p className="card-microlabel text-secondary mb-2">Primary Action (as presented)</p>
                  <p className="font-medium text-primary">{problem.currentPrimaryAction}</p>
                </div>
                <div>
                  <p className="card-microlabel text-secondary mb-2">The Problem</p>
                  <p className="card-body text-primary/80">{problem.issue}</p>
                </div>
                <div className="bg-success/5 rounded-lg p-4 border border-success/20">
                  <p className="card-microlabel text-success mb-2">What It Should Be</p>
                  <p className="card-body text-primary">{problem.clarity}</p>
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
          className="mt-12 rounded-2xl bg-gradient-to-r from-plum to-purple-900 text-white p-8 md:p-10"
        >
          <p className="card-microlabel !text-white/50 mb-4">The Pattern</p>
          <p className="text-lg font-medium mb-4">
            Most of these problems share one root cause: the app defaults to whoever or whatever the user last interacted with, rather than clarifying the user's own intent.
          </p>
          <p className="text-base text-white/80">
            The interface says "send to Maria," "style them," "shuffle suggestions," when it should say "I'm organizing my wardrobe" or "I'm deciding what to wear today" or "I'm exploring inspiration for my own style."
          </p>
        </motion.div>
      </div>
    </section>
  );
}
