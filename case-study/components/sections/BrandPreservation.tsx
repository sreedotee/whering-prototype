"use client";

import { motion } from "framer-motion";
import SectionHeader from "../SectionHeader";
import { fadeInUp } from "@/styles/animations";

const charmPoints = [
  {
    moment: "Sunday night planning",
    current: "Scattered across 4 tabs, unclear which tool to use",
    redesigned: "Open Canvas. Drag your favorite items. See them come alive. Save the look. Plan it for the week. One space, pure play.",
    feeling: "Nostalgic, intentional, stress-relieving"
  },
  {
    moment: "Discovering a creator's outfit",
    current: "Land on profile, hit 'Style Them' (who uses this?), navigate to canvas",
    redesigned: "See the outfit. Love the items. Tap 'Try This.' Instantly remix it in your Canvas with your own pieces. Feels like collaboration, not imitation.",
    feeling: "Inspired, empowered, creative"
  },
  {
    moment: "Saving your finds",
    current: "Click heart. Click save. Choose: Wishlist? Moodboard? Lookbook? Collection? Pick three separate places.",
    redesigned: "One gesture: Save to Collections. Name it (Paris trip, autumn vibes, work capsule, inspiration). Saves your intent, not your confusion.",
    feeling: "Simple, intentional, personal"
  },
  {
    moment: "Getting dressed tomorrow",
    current: "Open Calendar. 4 equal buttons compete. Shuffle? Add from wardrobe? Create new? Photo?",
    redesigned: "Open Calendar. See what you planned (or blank canvas). Want a suggestion? Hit Shuffle. Don't like it? Try again. Want to build your own? Tap Canvas.",
    feeling: "Helpful, optional, in control"
  }
];

const brandPrinciples = [
  {
    principle: "Play, Not Pressure",
    description: "Canvas feels like the dress-up games you played as a kid — drag, drop, experiment. No hidden buttons. No buried controls."
  },
  {
    principle: "Personal, Not Prescriptive",
    description: "Collections use your language (mood, occasion, season, person). The system doesn't force a mental model. You choose what you save and why."
  },
  {
    principle: "Empowered, Not Overwhelmed",
    description: "One primary action per screen. Secondary options exist but don't shout. You're in control of depth, not drowning in choices."
  },
  {
    principle: "Nostalgic, Not Retro",
    description: "The Clueless energy (Polyvore, dress-up games) is preserved in the Canvas. The clarity is modern. Best of both worlds."
  }
];

export default function BrandPreservation() {
  return (
    <section id="brand-charm" className="py-20 bg-white">
      <div className="container-standard">
        <SectionHeader
          number="03.5"
          title="Preserving the Charm"
          subtitle="Fixing clarity doesn't mean losing personality"
        />

        <motion.p {...fadeInUp} className="narrative-body mb-12 max-w-3xl">
          Whering works emotionally because it's nostalgic (Clueless, Polyvore vibes), it feels playful, and it's deeply personal — your wardrobe, your style. The redesign doesn't change any of that. It just makes sure the magic doesn't get lost in confusing CTAs and competing features.
        </motion.p>

        <motion.ul
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="space-y-6 mb-12 max-w-3xl"
        >
          {charmPoints.map((point) => (
            <li key={point.moment} className="flex gap-4 items-start">
              <span className="mt-2 w-2 h-2 rounded-full bg-plum flex-shrink-0" />
              <div>
                <p className="font-semibold text-primary mb-1">{point.moment}</p>
                <p className="card-body text-primary/70">{point.redesigned}</p>
                <p className="text-sm italic text-primary/40 mt-1">{point.feeling}</p>
              </div>
            </li>
          ))}
        </motion.ul>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-2xl font-semibold text-primary mb-6">Brand Principles in the Redesign</h3>
          <ul className="space-y-4">
            {brandPrinciples.map((item) => (
              <li key={item.principle} className="flex gap-4 items-start">
                <span className="mt-1 w-2 h-2 rounded-full bg-plum flex-shrink-0" />
                <div>
                  <span className="font-semibold text-primary">{item.principle} — </span>
                  <span className="card-body text-primary/75">{item.description}</span>
                </div>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="rounded-2xl bg-gradient-to-r from-[#7CCBFF] to-[#2D6FEA] text-white p-8 md:p-10"
        >
          <p className="card-microlabel !text-white/50 mb-4">The Bottom Line</p>
          <p className="text-lg font-medium mb-4">
            This isn't a redesign that strips Whering of its charm. It's a redesign that makes the charm *discoverable*.
          </p>
          <p className="text-base text-white/80">
            You don't remove the canvas, the nostalgia, or the play. You just make sure users find it without confusion. Every moment of delight is clearer, closer, and more intentional. That's when Whering becomes unforgettable.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
