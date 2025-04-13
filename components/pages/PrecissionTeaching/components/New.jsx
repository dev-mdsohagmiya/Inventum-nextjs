import Card from "./Cards";
const New = () => {
  return (
    <div className="p-5 bg-dl">
      <div>
        <h2 className="text-5xl font-bold text-transparent bg-pg bg-clip-text pb-3 mx-auto text-center max-w-[35ch] pt-8">
          Personalised Learning Path with Precision Teaching
        </h2>
        <img
          className="mx-auto lg:max-w-4xl rotate-45 -mt-40 invert"
          src="https://firebasestorage.googleapis.com/v0/b/inventum-98847.appspot.com/o/website%2FFinish%20Start.gif?alt=media&token=db812938-f622-49f1-bca5-35ffb159ab83"
          alt="visualisation of how normal school curriculum works"
        ></img>
        <h2 className="text-5xl font-bold text-transparent bg-pg bg-clip-text pb-3 mx-auto text-center max-w-[35ch] pt-8">
          This approach ensures that each and every students is fully prepared
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-md sm:max-w-2xl lg:max-w-4xl mx-auto p-5 justify-center items-center">
        <Card
          tl
          title="1. Expert Analysis"
          subtitle="Look at me, imma cute lil fella."
        />
        <Card
          title="2. Self-Paced Learning"
          subtitle="Places to be apart. Wait, what?"
        />
        <Card
          tr
          title="3. Precision Teaching"
          subtitle="A single corn. Er, I mean horn."
        />
        <Card
          title="4. Quizes & Tests"
          subtitle="These absolutely deserve to exist."
        />
        <Card title="5. Revisit Any Content" subtitle="See you..." />
        <Card title="6. Larger Assignments" subtitle="...over here." />
        <Card bl title="7. Exam Skills" subtitle="...over here." />
        <Card title="8. Repeat If Necessary" subtitle="...over here." />
        <Card br title="9. Content Understood" subtitle="...over here." />
      </div>
    </div>
  );
};

export default New;
