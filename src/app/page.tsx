import type { Metadata } from "next";
import Link from "next/link";
import Disclaimer from "@/components/Disclaimer";
import FAQ from "@/components/FAQ";
import GuideCard from "@/components/GuideCard";
import JsonLd from "@/components/JsonLd";
import { getGuide, guideList } from "@/data/guides";
import { absoluteUrl, siteConfig } from "@/lib/site-config";

const title = "Moonlight Peaks Guide – Romance, Gifts, Money, Spells & Beginner Tips";
const description = "Unofficial Moonlight Peaks guide collection: romance options, best gifts, money tips, spell list, beginner walkthrough, Switch and PS5 info.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: { title, description, url: "/", siteName: siteConfig.siteName, locale: "en_US", type: "website", images: [{ url: siteConfig.defaultSocialImage, alt: "Moonlit gothic farm landscape for Moonlight Peaks Guide" }] },
  twitter: { card: "summary_large_image", title, description, images: [siteConfig.defaultSocialImage] },
};

const coreSlugs = ["beginner-guide", "romance-guide", "switch", "ps5", "spells-guide", "money-guide"];
const p0Slugs = ["switch", "ps5", "multiplayer", "beginner-guide", "romance-guide", "samael-romance", "treasure-hunt-clues", "fallen-tree", "is-moonlight-peaks-worth-it"];
const p1Slugs = guideList.map((guide) => guide.slug).filter((slug) => !p0Slugs.includes(slug));
const faqs = [
  { question: "Is Moonlight Peaks on Nintendo Switch?", answer: "Yes. It is available for Nintendo Switch and Nintendo Switch 2." },
  { question: "Is Moonlight Peaks on PS5?", answer: "No. As of now, no PlayStation or Xbox version has been announced." },
  { question: "Is Moonlight Peaks multiplayer?", answer: "No. Official store listings describe it as a single-player game." },
  { question: "Does Moonlight Peaks have romance?", answer: "Yes. Official descriptions advertise two dozen romanceable characters." },
];

export default function Home() {
  const website = { "@context": "https://schema.org", "@type": "WebSite", name: siteConfig.siteName, url: absoluteUrl("/"), description, about: { "@type": "VideoGame", name: "Moonlight Peaks" } };
  const organization = { "@context": "https://schema.org", "@type": "Organization", name: siteConfig.siteName, url: absoluteUrl("/"), logo: absoluteUrl("/moonlight-icon.svg"), description: "An unofficial fan-made Moonlight Peaks guide site." };
  const faq = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((item) => ({ "@type": "Question", name: item.question, acceptedAnswer: { "@type": "Answer", text: item.answer } })) };

  return (
    <>
      <JsonLd data={[website, organization, faq]} />
      <section className="relative min-h-[720px] overflow-hidden pt-16">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,5,18,.97)_0%,rgba(8,5,18,.72)_50%,rgba(8,5,18,.25)_100%),url('/moonlight-peaks-guide-hero.png')] bg-cover bg-center" />
        <div className="relative mx-auto flex min-h-[656px] max-w-7xl items-center px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#e2c27a]">Unofficial player guide</p>
            <h1 className="mt-5 font-serif text-5xl font-semibold leading-[1.05] text-[#fffaf0] sm:text-6xl lg:text-7xl">Moonlight Peaks Guide</h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#ded5e5]">Practical, source-aware answers for the first week, romance routes, gifts, money, spells, farming, fishing, platform support, and tricky quest locations.</p>
            <p className="mt-5 max-w-2xl text-sm leading-6 text-[#b8afc8]">Moonlight Peaks Guide is an unofficial fan-made resource and is not affiliated with the developer, publishers, or platform holders.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/beginner-guide/" className="rounded-full bg-[#e2c27a] px-6 py-3 text-sm font-bold text-[#160d22] transition hover:bg-[#f3dda7]">Start the beginner guide</Link>
              <Link href="/romance-guide/" className="rounded-full border border-[#8d67b5] bg-[#160f24]/80 px-6 py-3 text-sm font-bold text-[#f5f0e8] transition hover:border-[#e2c27a]">Explore romance</Link>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl space-y-20 px-4 py-16 sm:px-6 lg:px-8">
        <Disclaimer />

        <section>
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#e2c27a]">Quick facts</p>
          <h2 className="mt-3 font-serif text-3xl font-semibold text-[#f5f0e8]">The essentials before you start</h2>
          <dl className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
            {[["Platforms", "PC, macOS, Switch, Switch 2, Android"], ["Genre", "Supernatural life and farming sim"], ["Developer", "Little Chicken"], ["Publishers", "XSEED Games / Marvelous"], ["Mode", "Single-player"], ["Launch", "July 2026; date varies by storefront"]].map(([label, value]) => <div key={label} className="rounded-xl border border-[#3b2a56] bg-[#120c20]/80 p-4"><dt className="text-xs uppercase tracking-wider text-[#9f92aa]">{label}</dt><dd className="mt-2 text-sm font-semibold leading-6 text-[#f0e8f4]">{value}</dd></div>)}
          </dl>
        </section>

        <section>
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#e2c27a]">Core navigation</p>
          <h2 className="mt-3 font-serif text-3xl font-semibold text-[#f5f0e8]">Six useful places to begin</h2>
          <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{coreSlugs.map((slug) => { const guide = getGuide(slug); return guide ? <GuideCard key={slug} guide={guide} /> : null; })}</div>
        </section>

        <section>
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#e2c27a]">Priority guides</p>
          <h2 className="mt-3 font-serif text-3xl font-semibold text-[#f5f0e8]">Direct answers and quest solutions</h2>
          <div className="mt-7 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{p0Slugs.map((slug) => { const guide = getGuide(slug); return guide ? <GuideCard key={slug} guide={guide} /> : null; })}</div>
        </section>

        <section>
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#e2c27a]">System guides</p>
          <h2 className="mt-3 font-serif text-3xl font-semibold text-[#f5f0e8]">Build a better nightly routine</h2>
          <div className="mt-7 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{p1Slugs.map((slug) => { const guide = getGuide(slug); return guide ? <GuideCard key={slug} guide={guide} /> : null; })}</div>
        </section>

        <section>
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#e2c27a]">Quick FAQ</p>
          <h2 className="mt-3 font-serif text-3xl font-semibold text-[#f5f0e8]">The most-searched answers</h2>
          <div className="mt-7"><FAQ items={faqs} /></div>
        </section>
      </div>
    </>
  );
}
