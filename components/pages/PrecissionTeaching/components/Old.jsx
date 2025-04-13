import Card from "./Cards";

const Old = () => {
  return (
    <div className="p-5 bg-dl">
      <div>
        <h2 className="text-5xl font-bold text-transparent bg-pg bg-clip-text pb-3 mx-auto w-max">
          How it's normally done
        </h2>
        <img
          className="mx-auto"
          src="https://firebasestorage.googleapis.com/v0/b/inventum-98847.appspot.com/o/website%2FSubject%20Content.webp?alt=media&token=ca947b53-20fc-437f-ba25-46ccaaeec9b5"
          alt="visualisation of how normal school curriculum works"
        ></img>
        <h2 className="text-5xl font-bold text-transparent bg-pg bg-clip-text pb-3 mx-auto md:w-max pt-8">
          This approach results in knowledge gaps
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-md sm:max-w-2xl lg:max-w-4xl mx-auto p-5 justify-center items-center">
        <Card
          tl
          title="1. Clear Plans"
          subtitle="At the start of the year, the teacher have a clear plan on when the students need to see what."
        />
        <Card
          title="2. Median Pace"
          subtitle="The teacher teaches to the middle of the class. It's impossible to accomodate all learning speeds."
        />
        <Card
          tr
          title="3. Differentiate"
          subtitle="Teacher tries their best to help the slower students and challenge the quick ones."
        />
        <Card
          bl
          title="4. Different Learning"
          subtitle="Every student misses during certain lessons or loses focus."
        />
        <Card
          title="5. Content Seen > Understood"
          subtitle="The teacher starts to rush the content. All the content needs to be seen so they cannot slow down if needed."
        />
        <Card
          br
          title="6. Knowledge Gaps"
          subtitle="All these reasons causes knowledge gaps in the students"
        />
      </div>
    </div>
  );
};

export default Old;

/* 

<motion.li
ref={ref1}
className=" h-screen"
style={{ y: y1, position: 'sticky', top: "45%", }}
>
Start the year with clear plans on how and when to teach all of the content.
</motion.li>
<motion.li
ref={ref2}
className=" h-screen"
style={{ y: y2, position: 'sticky', top: "50%" }}
>
Students work at the pace of the middle of the class.
</motion.li>
<motion.li
ref={ref3}
className="h-screen"
style={{ y: y3, position: 'sticky', top: "55%" }}
>
Teacher tries very hard to differentiate and meet all learning needs.
</motion.li>
<motion.li
ref={ref3}
className="h-screen"
style={{ y: y3, position: 'sticky', top: "60%" }}
>
Students become bored or left behind. Sometimes ahead, and sometimes missing class.
</motion.li>
<motion.li
ref={y4}
className="h-screen"
style={{ y: y4, position: 'sticky', top: "65%" }}
>
Strong focus on completing content & Less focus on individual student knowledge retention
</motion.li>
<motion.li
ref={y4}
className="h-screen"
style={{ y: y4, position: 'sticky', top: "70%" }}
>
At the end, either the content was not completed or rushed resulting in students having knowledge gaps.
</motion.li> */
