"use client";
import PartnerCard from "./PartnerCard";

export default function Partnerships() {
  return (
    <div className="bg-dl py-10 text-ll">
      <h1
        id="mission-title"
        className={`mx-auto text-5xl md:text-7xl text-center w-max font-bold bg-clip-text text-transparent bg-pg pb-10`}
      >
        Partnerships
      </h1>
      <div className="flex flex-col gap-10 ">
        <PartnerCard
          height="h-36"
          img="https://firebasestorage.googleapis.com/v0/b/inventum-98847.appspot.com/o/External-logos%2FISF-corporate-logo.webp?alt=media&token=31c7cdf3-90ba-4bbd-9121-ffe527086c3a&_gl=1*1ap2rjq*_ga*MTc0OTc0OTAxLjE2NzQyOTQxMzY.*_ga_CW55HF8NVT*MTY5ODQ4OTcyNS41NC4xLjE2OTg0OTA3ODQuMTguMC4w"
          text="As a subsidiary of the International School of Flanders (ISF) in Brussels, Belgium, Inventum International benefits from the robust knowledge and experience of the bricks-and-mortar school that has been serving the educational needs of expatriate families for over 25 years. ISF is a fully accredited school, holding prized accreditations from the Council of International Schools (CIS) and Council of British International Schools (COBIS).  ISF is also a registered Cambridge Examination Centre and acts as our Belgian partner for Cambridge IGCSE and A-Level exams, offering not only the possibility of examinations, but also practicals and many language examinations. Finally, ISF is a Google Reference school and has a strong background in employing technology to support education, and by building on this partnership, ISF and Inventum are excited to be able to offer future-focused education to the wider world."
        />
        <PartnerCard
          to={"/cambridge-and-pearson"}
          height="h-28"
          img="https://firebasestorage.googleapis.com/v0/b/inventum-98847.appspot.com/o/External-logos%2FCambridge_2-removebg.webp?alt=media&token=a28ad9cf-f8d9-40c5-a6c2-00e5825828a9&_gl=1*8hcn0l*_ga*MTc0OTc0OTAxLjE2NzQyOTQxMzY.*_ga_CW55HF8NVT*MTY5ODQ4OTcyNS41NC4xLjE2OTg0OTA3OTcuNS4wLjA."
          text="Inventum International Online School is a registered online Cambridge International School. We have met all of the standards required by Cambridge International Schools and are, therefore, approved to offer Cambridge qualifications online."
        />
        <PartnerCard
          to={"/cambridge-and-pearson"}
          height="h-28"
          img="https://firebasestorage.googleapis.com/v0/b/inventum-98847.appspot.com/o/External-logos%2FPearson-Logo-colour-1.webp?alt=media&token=e3eb2068-16b2-48ce-a379-ba772ca7aa24"
          text="Inventum International Online School is an approved Pearson Centre to offer the iGCSE and iA-Level courses. These courses offer highly flexible online and modular routes to qualifications and Inventum has met all the requirements to be able to deliver these courses. "
        />
        <PartnerCard
          to={"/cambridge-and-pearson"}
          height="h-28"
          img="https://firebasestorage.googleapis.com/v0/b/inventum-98847.appspot.com/o/External-logos%2Fbtec-approved-centre-logo.webp?alt=media&token=17fdc668-1b11-4a23-9ed2-7701ab915813"
          text="Inventum International Online School is an approved BTec Centre to offer National Diploma level courses. Inventum International Online School met all the strict requirements and quality standards to be awarded this approval."
        />
        <PartnerCard
          height="h-28"
          img="https://www.linewize.io/hs-fs/hubfs/ANZ_EI_2023_Linewize%20Pulse-logo-purple.png?width=270&height=106&name=ANZ_EI_2023_Linewize%20Pulse-logo-purple.png"
          text="Inventum International partners with Educator Impact (Ei Pulse) well-being software used to track and support Learner well-being in real-time. The app helps students to learn to be emotionally intelligent and reach out for help when they need it. It also encourages children to give gratitude to others."
        />
      </div>
    </div>
  );
}
