import GridCard from "./GridCard";

export default function WUGrid() {
  const CardText = {
    card1: {
      title: "INTERNATIONAL QUALIFICATIONS",
      text: "The Cambridge curriculum leads to the world's most sought-after international qualification and is known for its flexible, challenging, and culturally sensitive content.",
      img: "https://firebasestorage.googleapis.com/v0/b/inventum-98847.appspot.com/o/website%2Fgraduation.webp?alt=media&token=ec2f8f61-79ff-4ed4-92ab-ae69e48db7e2&_gl=1*rcerex*_ga*MTc0OTc0OTAxLjE2NzQyOTQxMzY.*_ga_CW55HF8NVT*MTY5ODQ4OTcyNS41NC4xLjE2OTg0OTA5MjMuMzMuMC4w",
    },
    card2: {
      title: "FLEXIBILITY",
      text: "We offer learners and their families increased flexibility and personalised, self-paced education. Learners can follow courses of their choice suited to their talents and abilities anywhere,anytime!",
      img: "https://firebasestorage.googleapis.com/v0/b/inventum-98847.appspot.com/o/icons%2Fwork-schedule.webp?alt=media&token=2dd81534-7172-4b6f-a4fc-3dc2b8858ee4&_gl=1*1jg345a*_ga*MTc0OTc0OTAxLjE2NzQyOTQxMzY.*_ga_CW55HF8NVT*MTY5ODQ4OTcyNS41NC4xLjE2OTg0OTA5NTMuMy4wLjA.",
    },
    card3: {
      title: "PERSONAL SUPPORT",
      text: "Our three tier package structure allows the learners to choose the level of support that suits their personal preferences. You can also choose additional tutor sessions, check-ins with their study coaches, or career counselling.",
      img: "https://firebasestorage.googleapis.com/v0/b/inventum-98847.appspot.com/o/icons%2Fcare.webp?alt=media&token=bd2f49fb-5fb7-4cd2-87d6-100496b54a7d&_gl=1*19zv1x9*_ga*MTc0OTc0OTAxLjE2NzQyOTQxMzY.*_ga_CW55HF8NVT*MTY5ODQ4OTcyNS41NC4xLjE2OTg0OTA5NjYuNjAuMC4w",
    },
    card4: {
      title: "EASY REVISION",
      text: "Access to materials on our online platform ensures that learners have the time to revisit lessons, lectures, and resources as often as they need.",
      img: "https://firebasestorage.googleapis.com/v0/b/inventum-98847.appspot.com/o/icons%2Frevision.webp?alt=media&token=e7a19b11-0e8c-437a-9f3a-4c095d70e618&_gl=1*k6a8fl*_ga*MTc0OTc0OTAxLjE2NzQyOTQxMzY.*_ga_CW55HF8NVT*MTY5ODQ4OTcyNS41NC4xLjE2OTg0OTA5ODMuNDMuMC4w",
    },
    card5: {
      title: "BETTER FOCUS",
      text: "Learning at home will ensure that students have fewer distractions and can focus on their learning.",
      img: "https://firebasestorage.googleapis.com/v0/b/inventum-98847.appspot.com/o/icons%2Ffocus.webp?alt=media&token=1538895b-7855-4b8d-a647-aba92a114cce&_gl=1*1vkg8l0*_ga*MTc0OTc0OTAxLjE2NzQyOTQxMzY.*_ga_CW55HF8NVT*MTY5ODQ4OTcyNS41NC4xLjE2OTg0OTEwMDAuMjYuMC4w",
    },
    card6: {
      title: "SAFE & SECURE",
      text: "We offer safe, secure and inclusive learning spaces that are also suitable for students who have struggled for one reason or another in traditional school settings.",
      img: "https://firebasestorage.googleapis.com/v0/b/inventum-98847.appspot.com/o/icons%2Fchild.webp?alt=media&token=e8ef3b2c-34d4-4e41-a8df-bea358e2961a&_gl=1*1ors5gx*_ga*MTc0OTc0OTAxLjE2NzQyOTQxMzY.*_ga_CW55HF8NVT*MTY5ODQ4OTcyNS41NC4xLjE2OTg0OTEwMTEuMTUuMC4w",
    },
    card7: {
      title: "VALUE FOR MONEY",
      text: "Our pricing makes international quality education available to a wider range of students and the range of packages suit many different family situations.",
      img: "https://firebasestorage.googleapis.com/v0/b/inventum-98847.appspot.com/o/icons%2Fvalue.webp?alt=media&token=3b4f0a6e-fc80-4ac0-a59c-4f2bebf023ed&_gl=1*1qji7lc*_ga*MTc0OTc0OTAxLjE2NzQyOTQxMzY.*_ga_CW55HF8NVT*MTY5ODQ4OTcyNS41NC4xLjE2OTg0OTEwMjIuNC4wLjA.",
    },
    card8: {
      title: "FUTURE TECHNOLOGIES",
      text: "We prepare the learners for the future with our unique and exciting future technologies modules.",
      img: "https://firebasestorage.googleapis.com/v0/b/inventum-98847.appspot.com/o/icons%2Finnovation.webp?alt=media&token=cdf24520-c8f2-45b4-aff9-9e3398e98a27&_gl=1*1vc3lrp*_ga*MTc0OTc0OTAxLjE2NzQyOTQxMzY.*_ga_CW55HF8NVT*MTY5ODQ4OTcyNS41NC4xLjE2OTg0OTEwMzMuNjAuMC4w",
    },
    card9: {
      title: "PERSONAL / MINDSET EDUCATION",
      text: "We offer bespoke opportunities for our learners to expand and explore their personal mindsets to make a positive impact on their world.",
      img: "https://firebasestorage.googleapis.com/v0/b/inventum-98847.appspot.com/o/icons%2Fhappiness.webp?alt=media&token=0fb12da3-1cb2-4e3b-8423-9f0655b7ecec&_gl=1*rghmsu*_ga*MTc0OTc0OTAxLjE2NzQyOTQxMzY.*_ga_CW55HF8NVT*MTY5ODQ4OTcyNS41NC4xLjE2OTg0OTEwNDUuNDguMC4w",
    },
    card10: {
      title: "WELL-BEING",
      text: "We help learners flourish and feel both mentally and physically well in order to reach their full potential.",
      img: "https://firebasestorage.googleapis.com/v0/b/inventum-98847.appspot.com/o/icons%2Fhealthcare.webp?alt=media&token=99565a9a-97fe-4731-969a-13a573b433a2&_gl=1*1883woa*_ga*MTc0OTc0OTAxLjE2NzQyOTQxMzY.*_ga_CW55HF8NVT*MTY5ODQ4OTcyNS41NC4xLjE2OTg0OTEwNTguMzUuMC4w",
    },
  };
  return (
    <div className="flex flex-wrap bg-dl pt-16 gap-10 justify-center pb-10">
      {Object.values(CardText).map((card) => {
        return (
          <GridCard
            key={card.title}
            title={card.title}
            text={card.text}
            img={card.img}
            imgwidth="w-16 h-16"
          />
        );
      })}
    </div>
  );
}
