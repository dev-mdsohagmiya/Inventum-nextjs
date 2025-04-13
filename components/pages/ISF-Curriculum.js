import ISFSubjects from "./Curriculum/ISFSubjects";
import MSHero from "./Curriculum/MSHero";

export default function ISFCurriculum() {
  return (
    <div>
      {/*     CHECK Subjects: cards
                    Well-being & Enrichment program: TKS
                    CHECK Tiers: cards
                    Pick my package: interactive
            */}
      <MSHero />
      <ISFSubjects />
    </div>
  );
}
