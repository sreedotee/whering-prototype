"use client";

import { motion } from "framer-motion";
import SectionHeader from "../SectionHeader";

const terms = [
  { term: "Creator", def: "A person whose taste becomes a discovery path." },
  { term: "Outfit", def: "A composed look that exposes the items behind it." },
  { term: "Item", def: "The modular unit connecting discovery to personal wardrobe action." },
  { term: "Collection", def: "One flexible model replacing moodboards, lookbooks, saved references — user-named by context." },
];

export default function DesignLanguage() {
  return (
    <section id="language" className="py-10 bg-white">
      <div className="container-standard">
        <SectionHeader number="07" title="Product Language" tight />

        <motion.ul
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="space-y-4 max-w-2xl"
        >
          {terms.map((t) => (
            <li key={t.term} className="flex gap-4 items-start">
              <span className="mt-1.5 w-2 h-2 rounded-full bg-plum flex-shrink-0" />
              <div>
                <span className="font-semibold text-primary">{t.term} — </span>
                <span className="card-body text-primary/75">{t.def}</span>
              </div>
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
