export default function MSHero() {
  return (
    <div className="lg:bg-none lg:bg-dl bg-cover bg-center bg-[url(https://firebasestorage.googleapis.com/v0/b/inventum-98847.appspot.com/o/website%2FMSHero.webp?alt=media&token=1f5c0b07-e657-4784-999f-66d01ec4e06a&_gl=1*1whkiu9*_ga*MTc0OTc0OTAxLjE2NzQyOTQxMzY.*_ga_CW55HF8NVT*MTY5ODQ4OTcyNS41NC4xLjE2OTg0OTExOTUuNjAuMC4w)] ">
      <div className="flex lg:flex-row-reverse flex-col items-center w-full lg:pl-5  ">
        <img
          className="ovalcut lg:brightness-100 lg:w-1/3 lg:h-screen h-0 object-cover object-center "
          src={
            "https://firebasestorage.googleapis.com/v0/b/inventum-98847.appspot.com/o/website%2FMSHero.webp?alt=media&token=1f5c0b07-e657-4784-999f-66d01ec4e06a&_gl=1*1whkiu9*_ga*MTc0OTc0OTAxLjE2NzQyOTQxMzY.*_ga_CW55HF8NVT*MTY5ODQ4OTcyNS41NC4xLjE2OTg0OTExOTUuNjAuMC4w"
          }
          alt=""
        />
        <div className="w-full h-full text-center lg:mx-10 overflow-y-auto overflow-x-clip backdrop-brightness-50 lg:backdrop-brightness-100">
          <h1 className="pt-24 text-6xl py-10 font-bold bg-clip-text text-transparent bg-pg">
            Our Curriculum for Middle School
          </h1>
          <p className="p-5 text-center text-gray-200 text-2xl">
            We know that each seconary school learner has their own unique
            interests and passions, so we've carefully selected the best aspects
            of international and national curricula to offer a wide range of
            Pearson secondary subject choices that will keep learners engaged
            and motivated while distance learning.
            <br></br>
            <div className="rounded-xl my-6 bg-pg p-[0.1rem]">
              <div className="flex flex-col justify-between h-full bg-transparent text-transparent rounded-lg"></div>
            </div>
            At Inventum International Online School, all our younger middle
            school learners, usually aged between 11 to 13, will study five core
            subjects: Mathematics, English, Science, History and Geography. In
            addition Inventum learners will also receive Economics and
            Management Sciences. These subjects will provide a strong foundation
            of knowledge and skills that will prepare you for success in the
            future and a solid foundation for IGCSE.
            <br></br>
            <div className="rounded-xl my-6 bg-pg p-[0.1rem]">
              <div className="flex flex-col justify-between h-full bg-transparent text-transparent rounded-lg"></div>
            </div>
            In addition to our exciting Pearson curriculum, we offer a
            future-focused enrichment programme that will keep learners at the
            forefront of emerging technologies and help them develop the mindset
            and skills they need to thrive in the future. And because our
            classes are online, learners have the chance to connect and network
            with other learners from around the world, expanding their horizons
            and making new friends.{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
