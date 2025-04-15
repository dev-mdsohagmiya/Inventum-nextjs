import Image from "next/image";

export default function UPHero() {
  return (
    <div className="lg:bg-none lg:bg-dl bg-cover bg-right-center-half bg-[url(https://firebasestorage.googleapis.com/v0/b/inventum-98847.appspot.com/o/website%2Fupper-primary.webp?alt=media&token=0723afc6-8c5e-4778-9ff9-818591cb1c55)] ">
      <div className="flex lg:flex-row-reverse flex-col items-center w-full lg:pl-5  ">
        <div className="pt-20 overflow-clip ovalcut lg:brightness-100 lg:w-1/3 lg:h-screen h-0 object-cover object-right relative">
          <Image
            src={
              "https://firebasestorage.googleapis.com/v0/b/inventum-98847.appspot.com/o/website%2Fupper-primary.webp?alt=media&token=0723afc6-8c5e-4778-9ff9-818591cb1c55"
            }
            alt="Curriculum Landing"
            fill
            className="object-cover object-left-center"
            priority
          />
        </div>
        <div className="w-full h-full text-center  lg:mx-10 overflow-y-auto overflow-x-clip backdrop-brightness-50 lg:backdrop-brightness-100">
          <h1 className="pt-28 text-6xl py-10 font-bold bg-clip-text text-transparent bg-pg">
            Our Curriculum for Upper Primary
          </h1>
          <div className="p-5 text-center text-gray-200 text-md">
            Inventum is proud to offer a learning journey based on the Pearson
            Upper Primary Curriculum, designed for learners aged 9 to 11. This
            program is part of the globally recognised Pearson Pathway, which
            ensures a broad and balanced educational foundation, preparing
            students not just for the next stage in their education but for a
            lifetime of learning.
            <br></br>
            <div className="rounded-xl my-6 bg-pg p-[0.1rem]">
              <div className="flex flex-col justify-between h-full bg-transparent text-transparent rounded-lg"></div>
            </div>
            Our Pearson Upper Primary Curriculum encompasses a diverse range of
            subjects including English, Mathematics, and Science, among others.
            This allows students to explore their interests in various fields
            while building essential skills in critical thinking,
            problem-solving, and creativity​.
            <br></br>
            <div className="rounded-xl my-6 bg-pg p-[0.1rem]">
              <div className="flex flex-col justify-between h-full bg-transparent text-transparent rounded-lg"></div>
            </div>
            We understand that each child is unique. That’s why our curriculum
            is highly adaptable to meet individual learning styles and needs.
            Whether integrating with national curricula in a bilingual program
            or focusing on international perspectives, we provide a learning
            environment that respects and enhances your child’s educational
            experience​​. By choosing our online school, you are joining a
            community that spans across cultures and continents. You’ll connect
            with fellow students from around the world, engaging in
            collaborative projects that foster global citizenship and a deeper
            understanding of diverse perspectives​.
            <br></br>
            <div className="rounded-xl my-6 bg-pg p-[0.1rem]">
              <div className="flex flex-col justify-between h-full bg-transparent text-transparent rounded-lg"></div>
            </div>
            Our dedicated team of educators and the use of the latest online
            school technology ensure that each student receives personalised
            attention and support throughout their learning journey. With
            regular assessments and feedback, we closely monitor progress to
            tailor learning experiences that maximise student potential and
            success. Cultivate the skills, values, and knowledge that your child
            needs to thrive in a rapidly changing world. Enrol in our Pearson
            Upper Primary program today and watch your child grow into a
            responsible, informed, and empowered global citizen. Explore our
            program further and take the first step towards a bright educational
            future for your child with us!
          </div>
        </div>
      </div>
    </div>
  );
}
