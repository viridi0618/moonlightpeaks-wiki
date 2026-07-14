import Link from "next/link";
import type { Guide } from "@/data/guides";

/* eslint-disable @next/next/no-img-element -- Task requires normal img elements for external static-export assets. */

export default function GuideCard({ guide }: { guide: Guide }) {
  return (
    <Link href={`/${guide.slug}/`} className="group rounded-2xl border border-[#3b2a56] bg-gradient-to-br from-[#171026] to-[#0d0917] p-6 shadow-lg shadow-black/10 transition hover:-translate-y-1 hover:border-[#8d67b5]">
      {guide.image && (
        <img
          src={guide.image}
          alt={guide.imageAlt ?? guide.h1}
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          className="mb-5 h-[200px] w-full rounded-xl object-cover"
        />
      )}
      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#e2c27a]">{guide.eyebrow}</span>
      <h3 className="mt-3 font-serif text-xl font-semibold leading-snug text-[#f5f0e8] group-hover:text-[#f3dda7]">{guide.h1}</h3>
      <p className="mt-3 line-clamp-3 text-sm leading-6 text-[#aaa0b7]">{guide.answer}</p>
      <span className="mt-5 inline-flex text-sm font-semibold text-[#c9a95f]">Read guide <span aria-hidden="true" className="ml-1 transition group-hover:translate-x-1">→</span></span>
    </Link>
  );
}
