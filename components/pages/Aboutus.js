import AUHome from "./AboutUs/AU-Home";
import AUMission from "./AboutUs/AU-Mission";
import AUMotto from "./AboutUs/AU-Motto";
import AUTeam from "./AboutUs/AU-Team";
import AUValues from "./AboutUs/AU-Values";
import Partnerships from "./AboutUs/Partnerships";

export default function AboutUs(props) {
  return (
    <div>
      <AUHome />
      <AUMission />
      <AUMotto />
      <AUValues />
      <AUTeam nigeria={props.nigeria} />
      <Partnerships />
    </div>
  );
}
