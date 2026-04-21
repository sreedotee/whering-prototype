"use client";

import { motion } from "framer-motion";
import SectionHeader from "../SectionHeader";
import { fadeInUp } from "@/styles/animations";

const clarifications = [
  {
    problem: "Try-on, Canvas, Dress Me, Styling — all refer to the same interaction",
    solution: "Primary term: STYLING. The canvas is the interface. The interaction is putting clothes together.",
    why: "Styling is the user's mental model. Canvas is the tool. Try-on is activity-based. Dress me is casual. One term reduces cognitive load.",
  },
  {
    problem: "Wishlist, Moodboards, Lookbooks, Collections, Saved References = 5 names for 'saved outfits'",
    solution: "One term: COLLECTIONS. Users choose the intent when they save (inspiration, outfit draft, occasion, shopping list).",
    why: "Like YouTube (Liked Videos, Watch Later, Playlists), one system with flexible user intent. Reduces mental fragmentation.",
  },
  {
    problem: "Like ❤️ + Save + Flag = three competing metrics/actions on every outfit",
    solution: "Save to Collections (one clear action). Heart is redundant. Flag for reporting should be in a menu.",
    why: "Clarity. One primary action per screen. Secondary actions go in menus. Reduces decision fatigue.",
  },
  {
    problem: "Calendar, Wardrobe, Styling, Profile, Discover = 5 tabs with unclear purposes",
    solution: "Clarified purposes: Discover (inspiration), Styling (creation), Wardrobe (my clothes), Calendar (planning), Profile (me).",
    why: "Each tab answers a different question: Where do I get ideas? Where do I create? Where are my clothes? When am I wearing what? Who am I?",
  },
];

const interactionPatterns = [
  {
    screen: "Discover (Home)",
    primaryJob: "Browse inspiration from creators and outfits",
    interaction: "Grid of creators / outfits. Tap to explore. Tap again to style.",
    clarification: "The post is the primary object, not the creator. Styling is a secondary action, not the default.",
  },
  {
    screen: "Outfit Detail",
    primaryJob: "See what items are in this outfit. Decide if you want to style it.",
    interaction: "Show items as a list or grid. Open each item to see details. 'Style this look' is a secondary CTA.",
    clarification: "Don't auto-open the canvas. Let the user choose whether to explore or style.",
  },
  {
    screen: "Styling (Canvas)",
    primaryJob: "Put together an outfit. Save it.",
    interaction: "Full-screen canvas. Drag items. See how they look together. Save to Collections.",
    clarification: "This is the core game. Make it feel like Cosmos (dress-up play) not a hidden control panel.",
  },
  {
    screen: "Calendar (Planning)",
    primaryJob: "Save what I'm wearing on a specific day. Get suggestions if I want them.",
    interaction: "Day view shows saved outfit. 'Add from wardrobe' or 'Create new' as variants of the same action. Shuffle is optional.",
    clarification: "One primary job per day: what am I wearing? Adding is one interaction, not 4 separate CTAs.",
  },
  {
    screen: "Wardrobe (My Clothes)",
    primaryJob: "See all my items and saved collections. Filter by mood, occasion, color, season.",
    interaction: "All items as a grid. Collections as a separate section. Tap item to see it. Tap collection to open its outfits.",
    clarification: "This is the source of truth. No styling flows should hide it. Collections (wishlist, moodboards, looks) are organized here.",
  },
  {
    screen: "Profile (Me)",
    primaryJob: "See my stats. Manage my account. Share my taste.",
    interaction: "Stats at the top (cost-per-wear, items by color, most-worn category). Account settings below. Optional: share your style.",
    clarification: "Stats are here because this is where reflection happens. Not on every screen.",
  },
];

export default function InteractionClarityTerminology() {
  return (
    <section id="clarity" className="py-20 bg-white">
      <div className="container-standard">
        <SectionHeader
          number="05"
          title="Clarity Through Terminology & Interaction Pattern"
          subtitle="One term, one primary action per screen"
        />

        <div className="space-y-16">
          {/* Terminology Section */}
          <div>
            <motion.p {...fadeInUp} className="narrative-body mb-10 max-w-3xl">
              Before redesigning flows, we need to settle on language. Too many synonyms create confusion.
            </motion.p>

            <div className="space-y-4">
              {clarifications.map((item, index) => (
                <motion.div
                  key={item.problem}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.4 }}
                  viewport={{ once: true }}
                  className="rounded-2xl border border-black/8 overflow-hidden"
                >
                  <div className="p-6 bg-gradient-to-r from-red-50 to-transparent border-b border-black/8">
                    <p className="card-microlabel text-red-600 mb-2">Current Confusion</p>
                    <p className="font-medium text-primary">{item.problem}</p>
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="bg-success/5 rounded-lg p-4 border border-success/20">
                      <p className="card-microlabel text-success mb-2">New Clarity</p>
                      <p className="font-medium text-primary">{item.solution}</p>
                    </div>
                    <div>
                      <p className="card-microlabel text-secondary mb-2">Why</p>
                      <p className="card-body text-primary/75">{item.why}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Interaction Patterns Section */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="mb-10"
            >
              <h3 className="text-2xl font-semibold text-primary mb-4">Interaction Pattern: One Job Per Screen</h3>
              <p className="narrative-body max-w-3xl">
                Each tab has one primary question. Secondary actions are discoverable but not competing.
              </p>
            </motion.div>

            <div className="space-y-4">
              {interactionPatterns.map((pattern, index) => (
                <motion.div
                  key={pattern.screen}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.4 }}
                  viewport={{ once: true }}
                  className="rounded-2xl border border-black/8 overflow-hidden"
                >
                  <div className="p-6 bg-gradient-to-r from-primary/5 to-transparent border-b border-black/8">
                    <p className="card-microlabel text-primary mb-2">{pattern.screen}</p>
                    <p className="font-semibold text-lg text-primary">{pattern.primaryJob}</p>
                  </div>
                  <div className="p-6 space-y-3">
                    <div>
                      <p className="card-microlabel text-secondary mb-1">Interaction</p>
                      <p className="card-body text-primary/80">{pattern.interaction}</p>
                    </div>
                    <div className="bg-primary/5 rounded-lg p-3 border border-primary/10">
                      <p className="card-microlabel text-primary mb-1">Key Change</p>
                      <p className="text-sm text-primary/80">{pattern.clarification}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 rounded-2xl bg-gradient-to-r from-plum to-purple-900 text-white p-8 md:p-10"
        >
          <p className="card-microlabel !text-white/50 mb-4">The Principle</p>
          <p className="text-lg font-medium mb-4">
            Make the primary action obvious. Everything else is secondary.
          </p>
          <p className="text-base text-white/80">
            Users shouldn't guess what a screen is for. One term, one primary interaction, one clear outcome per view. Secondary actions live in menus or are revealed through exploration.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
