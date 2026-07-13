import GuidePage from "@/components/GuidePage";
import { guides } from "@/data/guides";
import { guideMetadata } from "@/lib/guide-metadata";

const guide = guides["treasure-hunt-clues"];

export const metadata = guideMetadata(guide);

export default function Page() {
  return <GuidePage guide={guide} />;
}
