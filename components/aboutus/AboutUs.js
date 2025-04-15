import AUHome from "./sections/AU-Home";
import AUMission from "./sections/AU-Mission";
import AUMotto from "./sections/AU-Motto";
import AUTeam from "./sections/AU-Team";
import AUValues from "./sections/AU-Values";
import Partnerships from "./sections/Partnerships";

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
