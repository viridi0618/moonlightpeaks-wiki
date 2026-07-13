import Link from "next/link";
import Image from "next/image";
import { publicRoutes, siteConfig } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-[#3b2a56] bg-[#080512]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_2fr]">
          <div>
            <div className="flex items-center gap-3">
              <Image src="/moonlight-icon.svg" alt="Moonlight Peaks Guide crescent moon" width={40} height={40} className="h-10 w-10 rounded-xl" />
              <p className="font-serif text-xl font-semibold text-[#f5f0e8]">{siteConfig.siteName}</p>
            </div>
            <p className="mt-4 max-w-md text-sm leading-6 text-[#b8afc8]">Practical answers for platform questions, quests, relationships, farming, magic, and the first weeks in Moonlight Peaks.</p>
            <p className="mt-5 text-xs leading-5 text-[#91889f]">Moonlight Peaks Guide is an unofficial fan-made guide and is not affiliated with Little Chicken, XSEED Games, Marvelous, Nintendo, Steam, or Google Play.</p>
          </div>
          <nav aria-label="Footer navigation" className="grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-3 lg:grid-cols-4">
            {publicRoutes.map((route) => (
              <Link key={route.href} href={route.href} className="text-sm text-[#b8afc8] transition hover:text-[#e2c27a]">
                {route.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="mt-6 flex flex-wrap justify-center gap-x-5 gap-y-1 text-xs text-[#91889f]">
          <span className="text-[#82798f]">More game guides:</span>
          <a href="https://stealabrainrotguide.wiki" target="_blank" rel="noopener noreferrer" className="hover:text-[#e2c27a] transition">Steal a Brainrot Wiki</a>
          <a href="https://gutsandblackpowder.wiki" target="_blank" rel="noopener noreferrer" className="hover:text-[#e2c27a] transition">Guts &amp; Blackpowder Wiki</a>
        </div>
        <div className="mt-10 flex flex-col gap-3 border-t border-[#2f2342] pt-6 text-xs text-[#82798f] sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} {siteConfig.shortName}. Unofficial fan resource.</span>
          <a href={siteConfig.officialGameUrl} target="_blank" rel="noopener noreferrer nofollow" className="hover:text-[#e2c27a]">Official Moonlight Peaks website</a>
        </div>
      </div>
    </footer>
  );
}
