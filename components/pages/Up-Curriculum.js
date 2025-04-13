import PMP from "./Curriculum/PMP";
import UPHero from "./Curriculum/UPHero";
import UPSubjects from "./Curriculum/UPSubjects";

export default function UPCurriculum() {
  return (
    <div>
      {/*     CHECK Subjects: cards
                    Well-being & Enrichment program: TKS
                    CHECK Tiers: cards
                    Pick my package: interactive
            */}
      <UPHero />
      <UPSubjects />
      <PMP />
    </div>
  );
}
