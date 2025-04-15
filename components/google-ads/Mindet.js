import MindsetGrid from "../curriculum/MindsetGrid";

export default function Mindset(props) {
  return (
    <div className={`${props.dark ? "bg-dd" : "bg-dl"}`}>
      <h1 className="text-3xl lg:text-5xl text-center flex self-center pt-10 pb-5 font-bold bg-clip-text text-transparent bg-pg w-max mx-auto">
        Personal Mindsets
      </h1>
      <p className="max-w-prose mx-auto text-center text-ll text-xl px-5 pb-10">
        We also provide bespoke opportunities for our learners to expand and
        explore their personal mindsets, encouraging the development of the
        essential skills, knowledge, attitudes and values to make a positive
        impact on their world and be ready for the future.{" "}
      </p>
      <MindsetGrid
        topMindsets={[
          "Appreciation",
          "Antifragility",
          "Stoicism",
          "Think like a CEO",
          "Embrace failure",
        ]}
      />
    </div>
  );
}
