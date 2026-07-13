import GuidePage from "@/components/GuidePage";
import { guides } from "@/data/guides";
import { guideMetadata } from "@/lib/guide-metadata";

const guide = guides["is-moonlight-peaks-worth-it"];

export const metadata = guideMetadata(guide);

export default function Page() {
  return <GuidePage guide={guide} />;
}
