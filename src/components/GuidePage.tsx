import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import Disclaimer from "@/components/Disclaimer";
import FAQ from "@/components/FAQ";
import GuideCard from "@/components/GuideCard";
import InfoTable from "@/components/InfoTable";
import JsonLd from "@/components/JsonLd";
import { getGuide, type Guide } from "@/data/guides";
import { absoluteUrl, resolveAssetUrl, siteConfig } from "@/lib/site-config";

export default function GuidePage({ guide }: { guide: Guide }) {
  const pageUrl = absoluteUrl(`/${guide.slug}/`);
  const heroImage = guide.image ?? siteConfig.defaultSocialImage;
  const heroImageUrl = resolveAssetUrl(heroImage);
  const articleImage = resolveAssetUrl(guide.image ?? siteConfig.defaultSocialImage);
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
      { "@type": "ListItem", position: 2, name: guide.h1, item: pageUrl },
    ],
  };
  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.h1,
    description: guide.description,
    datePublished: guide.updated,
    dateModified: guide.updated,
    mainEntityOfPage: pageUrl,
    image: articleImage,
    author: { "@type": "Organization", name: siteConfig.siteName, url: absoluteUrl("/") },
    publisher: { "@type": "Organization", name: siteConfig.siteName, url: absoluteUrl("/") },
  };
  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: guide.faqs.map((item) => ({ "@type": "Question", name: item.question, acceptedAnswer: { "@type": "Answer", text: item.answer } })),
  };

  return (
    <>
      <JsonLd data={[breadcrumb, article, faq]} />
      <section className="relative overflow-hidden border-b border-[#3b2a56] pt-24">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(90deg, rgba(8,5,18,.98) 0%, rgba(8,5,18,.82) 48%, rgba(8,5,18,.45) 100%), url("${heroImageUrl}")`,
          }}
        />
        <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <Breadcrumbs current={guide.h1} />
          <p className="mt-10 text-xs font-bold uppercase tracking-[0.25em] text-[#e2c27a]">{guide.eyebrow}</p>
          <h1 className="mt-4 max-w-4xl font-serif text-4xl font-semibold leading-tight text-[#fffaf0] sm:text-5xl">{guide.h1}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#ded5e5]">{guide.answer}</p>
          <p className="mt-5 text-xs text-[#a99fb4]">Updated {guide.updated}</p>
        </div>
      </section>

      <div className="mx-auto max-w-5xl space-y-14 px-4 py-14 sm:px-6 lg:px-8">
        <Disclaimer />
        {guide.sections.map((section) => (
          <section key={section.heading} className="scroll-mt-24">
            <h2 className="font-serif text-3xl font-semibold text-[#f5f0e8]">{section.heading}</h2>
            {section.paragraphs && <div className="mt-5 space-y-4 text-base leading-8 text-[#b8afc8]">{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>}
            {section.bullets && <ul className="mt-5 grid gap-3 text-base leading-7 text-[#c4bacd] sm:grid-cols-2">{section.bullets.map((bullet) => <li key={bullet} className="rounded-lg border border-[#332545] bg-[#120c20]/70 px-4 py-3"><span className="mr-2 text-[#e2c27a]">◆</span>{bullet}</li>)}</ul>}
            {section.table && <div className="mt-6"><InfoTable table={section.table} /></div>}
            {section.note && <p className="mt-4 rounded-lg border-l-2 border-[#e2c27a] bg-[#1b1128] px-4 py-3 text-sm leading-6 text-[#bdb3c7]">{section.note}</p>}
          </section>
        ))}

        <section>
          <h2 className="font-serif text-3xl font-semibold text-[#f5f0e8]">Frequently asked questions</h2>
          <div className="mt-6"><FAQ items={guide.faqs} /></div>
        </section>

        <section>
          <h2 className="font-serif text-3xl font-semibold text-[#f5f0e8]">Related guides</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-3">{guide.related.map((slug) => { const related = getGuide(slug); return related ? <GuideCard key={slug} guide={related} /> : null; })}</div>
        </section>

        <section className="rounded-2xl border border-[#3b2a56] bg-[#0f0a1a] p-6">
          <h2 className="font-serif text-2xl font-semibold text-[#f5f0e8]">Sources and confidence</h2>
          <p className="mt-3 text-sm leading-6 text-[#aaa0b7]">Official sources support store and platform facts. Guide sources support quest steps and are rewritten here into original checklists and tables.</p>
          <ul className="mt-5 space-y-3">{guide.sources.map((source) => <li key={source.url} className="flex flex-wrap items-center gap-3"><span className="rounded-full bg-[#2d1b4e] px-2.5 py-1 text-xs font-semibold text-[#e5d7f0]">{source.level}</span><a href={source.url} target="_blank" rel="noopener noreferrer nofollow" className="text-sm text-[#e2c27a] underline decoration-[#725b34] underline-offset-4 hover:text-[#f3dda7]">{source.label}</a></li>)}</ul>
          <p className="mt-5 text-xs text-[#81778e]">Found a changed fact? Recheck the linked source first; store data and post-launch behavior can change.</p>
        </section>

        <p className="text-center text-sm text-[#91889f]">Return to the <Link href="/" className="text-[#e2c27a] hover:text-[#f3dda7]">Moonlight Peaks guide hub</Link>.</p>
      </div>
    </>
  );
}
