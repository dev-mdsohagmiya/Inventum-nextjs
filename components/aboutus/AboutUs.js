import AUHome from './sections/AU-Home';
import AUMission from './sections/AU-Mission';
import AUMotto from './sections/AU-Motto';
import AUTeam from './sections/AU-Team';
import AUValues from './sections/AU-Values';
import Partnerships from './sections/Partnerships';


export default function AboutUs(props) {
    return (
        <div>
            {/* <Helmet>
                <title>About Us</title>
                <meta name='description' content='Inventum International Online School is revolutionising education by being the first online school to offer a hybrid approach to education.' />
            </Helmet> */}
            <AUHome />
            <AUMission />
            <AUMotto />
            <AUValues />
            <AUTeam nigeria={props.nigeria} />
            <Partnerships />
        </div>
    )
}