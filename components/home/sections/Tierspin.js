import TierCardComponent from "./TierCardComponent";

export default function Tierspin() {
  const tiers = {
    1: {
      name: "Learning Journey 1",
      text: "Designed for independent learners seeking maximum flexibility and self-paced learning.",
      imgurl:
        "https://images.unsplash.com/photo-1471970471555-19d4b113e9ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    },
    2: {
      name: "Learning Journey 2",
      text: "Designed for independent learners who wish to benefit from the structured guidance of recorded lessons and the possibility for revision.",
      imgurl:
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1122&q=80",
    },
    3: {
      name: "Learning Journey 3",
      text: "Designed for independent learners who wish to benefit from real-time interaction and personalised support of critical parts of the curriculum.",
      imgurl:
        "https://images.unsplash.com/photo-1516383607781-913a19294fd1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1474&q=80",
    },
    4: {
      name: "Belgian Package",
      text: "Designed for independent learners who wish to have access to a physical school campus of ISF in Brussels for their examination and additional support & feedback.",
      imgurl:
        "https://firebasestorage.googleapis.com/v0/b/inventum-98847.appspot.com/o/website%2FBelgian%20Package.webp?alt=media&token=2c07af60-028f-4bdb-b9e5-d3cc0abce5b1&_gl=1*84f6ad*_ga*MTc0OTc0OTAxLjE2NzQyOTQxMzY.*_ga_CW55HF8NVT*MTY5ODQ4OTcyNS41NC4xLjE2OTg0OTAzMjguNDguMC4w",
    },
  };

  return (
    <div className="bg-dl py-10 w-full">
      <h1 className="text-5xl md:text-7xl text-center py-10 font-bold bg-clip-text text-transparent bg-pg w-max mx-auto max-w-[100vw]">
        Our Packages
      </h1>
      <div className="flex py-10 flex-wrap gap-5 md:flex-row flex-col mx-auto justify-center">
        {Object.values(tiers).map((tier, index) => {
          return (
            <TierCardComponent
              key={index}
              index={index + 1}
              img={tier.imgurl}
              title={tier.name}
              text={tier.text}
            />
          );
        })}
      </div>
    </div>
  );
}
