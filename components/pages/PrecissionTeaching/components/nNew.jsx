import Group2 from "../assets/Group 2.svg";
import Group3 from "../assets/Group 3.svg";
import Group4 from "../assets/Group 4.svg";
import Group5 from "../assets/Group 5.svg";
import Group6 from "../assets/Group 6.svg";
import Group8 from "../assets/Group 8.svg";
import Repeat from "../assets/Repeat.svg";
const New = () => {
  return (
    <div className="p-5 bg-dl">
      <div className="flex gap-10 items-center justify-center">
        <div className="w-1/2">
          <h2 className="text-5xl font-bold text-transparent bg-pg bg-clip-text pb-3">
            The New Way Of Teaching
          </h2>
          <ul className="grid grid-cols-3 grid-rows-3 rounded-xl text-ll m-0 pt-24 text-xl">
            <li className="border-2 border-pink-500 rounded-tl-2xl"></li>
            <li className="border-2 border-pink-500"></li>
            <li className="border-2 border-pink-500 rounded-tr-2xl"></li>
            <li className="border-2 border-pink-500">
              Quizzes and Tests check retention
            </li>
            <li className="border-2 border-pink-500">
              Student can revisit content or move on
            </li>
            <li className="border-2 border-pink-500">
              The Year is divided into 6 Larger Assignments to develop future
              skills
            </li>
            <li className="border-2 border-pink-500 rounded-bl-2xl">
              Exam skills sessions with teachers
            </li>
            <li className="border-2 border-pink-500">Repeat if Required</li>
            <li className="border-2 border-pink-500 rounded-br-2xl">
              Subject Content and skills fully completed
            </li>
          </ul>
        </div>
        <div className="w-1/2 right-0 bg-dd rounded-xl px-5 ">
          <img
            className={`mb-[50vh] text-white fill-white`}
            src={Group8}
            alt=""
          ></img>
          <img className={`mb-[50vh]`} src={Group2} alt=""></img>
          <img className={`mb-[50vh] ml-[10%]`} src={Group3} alt=""></img>
          <img className={`mb-[50vh] ml-[20%]`} src={Group4} alt=""></img>
          <img className={`mb-[50vh] ml-[30%]`} src={Group5} alt=""></img>
          <img className={`mb-[50vh] ml-[40%]`} src={Group6} alt=""></img>
          <img className={`my-[50vh] ml-[50%]`} src={Repeat} alt=""></img>
        </div>
      </div>
    </div>
  );
};

export default New;
