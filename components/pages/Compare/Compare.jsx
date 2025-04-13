export default function Compare() {
  return (
    <div className="bg-dl py-24 mt-10">
      <div className="prose prose-invert prose-h1:lg:text-5xl mx-auto max-w-[80ch] prose-h1:text-4xl prose-headings:text-transparent prose-headings:bg-pg prose-headings:bg-clip-text">
        <h1 className="text-center">
          What is the difference between Cambridge and Pearson?
        </h1>
        <div>
          <h2>What is Cambridge IGCSE and A-Levels?</h2>
          <p>
            The Cambridge International General Certificate of Secondary
            Education (IGCSE) is a globally recognised qualification for
            learners aged 14 to 16. It offers a broad range of subjects, with a
            strong emphasis on critical thinking, problem-solving, and
            independent learning. Cambridge IGCSEs are assessed through a
            combination of written examinations, practical assessments, and
            coursework, depending on the subject.
          </p>
          <p>
            Following the completion of the IGCSE, learners typically progress
            to Cambridge A-Levels (Advanced Level), usually taken between the
            ages of 16 and 19. A-Levels allow learners to specialise in specific
            subjects of their choice, preparing them for university or other
            higher education pathways. Cambridge A-Levels are renowned for their
            academic rigour and are primarily assessed through final
            examinations at the end of the course. This examination structure
            ensures a deep understanding of the subject matter and is highly
            respected by universities worldwide.
          </p>
        </div>
        <div>
          <h2>What Pearson/Edexcel IGCSE and IA-Levels?</h2>
          <p>
            Pearson/Edexcel offers a similar suite of qualifications with their
            IGCSE and International Advanced Level (IA-Level) programmes. The
            Pearson/Edexcel IGCSE, like the Cambridge version, is designed for
            learners aged 14 to 16 and covers a wide range of subjects.
            Assessment for Pearson/Edexcel IGCSEs generally includes written
            examinations and may also involve coursework or practical
            assessments, depending on the subject.
          </p>
          <p>
            The Pearson IA-Level is equivalent to the Cambridge A-Level,
            catering to learners aged 16 to 19. It offers flexibility in subject
            choices and is particularly valued for its modular assessment
            structure. Unlike Cambridge A-Levels, Pearson IA-Levels are assessed
            in stages, allowing learners to take examinations at the end of each
            module rather than solely at the conclusion of the course. This
            modular approach can be advantageous for learners who prefer to be
            assessed continuously rather than in one final examination.
          </p>
        </div>
        <div>
          <h2>What Pearson BTEC?</h2>
          <p>
            The Pearson BTEC (Business and Technology Education Council)
            qualification offers a vocational approach to education. Available
            at various levels, including BTEC Nationals, which are equivalent to
            A-Levels, these qualifications provide learners with practical,
            hands-on experience in specific industries. BTECs are ideal for
            learners who prefer a more practical learning style and are looking
            to enter the workforce directly or pursue further studies in fields
            such as engineering, business, or healthcare. Unlike traditional
            academic qualifications, BTECs are assessed through continuous
            coursework, projects, and practical assessments, with no final
            examinations. This approach ensures that learners are evaluated
            based on their overall performance throughout the course.
          </p>
        </div>
        <div className="">
          <h2>Age group comparison between Cambridge & Pearson:</h2>
          <div className="max-w-screen overflow-x-scroll">
            <table className="">
              <thead>
                <tr>
                  <th>Educational Stage</th>
                  <th>UK (Key Stages)</th>
                  <th>South Africa</th>
                  <th>USA</th>
                  <th>India</th>
                  <th>France</th>
                  <th>IB System</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Key Stage 2</td>
                  <td>Years 3-6 (7-11 years)</td>
                  <td>Grades 4-6 (Intermediate Phase)</td>
                  <td>Grades 2-5 (Elementary School)</td>
                  <td>Classes 3-5 (Upper Primary)</td>
                  <td>Cours Moyen 1 & 2 (École Élémentaire)</td>
                  <td>Grades 2-5 (PYP)</td>
                </tr>
                <tr>
                  <td>Key Stage 3</td>
                  <td>Years 7-9 (11-14 years)</td>
                  <td>Grades 7-9 (Senior Phase)</td>
                  <td>Grades 6-8 (Middle School)</td>
                  <td>Classes 6-8 (Upper Primary/Lower Secondary)</td>
                  <td>Sixième to Quatrième (Collège)</td>
                  <td>Grades 6-8 (MYP)</td>
                </tr>
                <tr>
                  <td>Key Stage 4</td>
                  <td>Years 10-11 (14-16 years, GCSE)</td>
                  <td>Grades 10-11 (FET Phase)</td>
                  <td>Grades 9-10 (High School)</td>
                  <td>Classes 9-10 (Secondary)</td>
                  <td>Seconde (Lycée)</td>
                  <td>Grades 9-10 (MYP) / DP (early)</td>
                </tr>
                <tr>
                  <td>Key Stage 5</td>
                  <td>Years 12-13 (16-18 years, A-Level)</td>
                  <td>Grade 12 (Matric, FET Phase)</td>
                  <td>Grades 11-12 (High School)</td>
                  <td>Classes 11-12 (Higher Secondary)</td>
                  <td>Première and Terminale (Lycée, Baccalauréat)</td>
                  <td>Grades 11-12 (DP)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
