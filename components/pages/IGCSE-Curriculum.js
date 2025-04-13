import IGCSEHero from "./Curriculum/IGCSEHero";
import IGCSESubjects from "./Curriculum/IGCSESubjects";

export default function IGCSECurriculum() {
  return (
    <div>
      {/*     CHECK Subjects: cards
                    Well-being & Enrichment program: TKS
                    CHECK Tiers: cards
                    Pick my package: interactive
            */}
      <IGCSEHero />
      <IGCSESubjects />
    </div>
  );
}
