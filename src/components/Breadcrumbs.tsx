import Link from "next/link";

export default function Breadcrumbs({ current }: { current: string }) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-[#9f95ad]">
      <ol className="flex flex-wrap items-center gap-2">
        <li><Link href="/" className="hover:text-[#e2c27a]">Home</Link></li>
        <li aria-hidden="true">›</li>
        <li aria-current="page" className="text-[#d8cfdf]">{current}</li>
      </ol>
    </nav>
  );
}
