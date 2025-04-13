import ContentTableRow from "./ContentTableRow";
import Asubjects from '../../Asubjects.json';
import ISFsubjects from '../../ISFsubjects.json';
import IGCSEsubjects from '../../IGCSEsubjects.json';

export default function Route(props) {
    var a = window.location.pathname;
    var b = a.split('/');
    var c = b.slice(-1).toString() ;
    var JSON = null;
    switch (b.slice(-2, -1).toString()) {
        case 'igcse':
            JSON = IGCSEsubjects;
            break;
        case 'middlschool':
            JSON = ISFsubjects;
            break;
        case 'a-levels':
            JSON = Asubjects;
            break;
        default:
            JSON = null;
    }
    
    const Subject = JSON.find(subject => subject.name === c);
    const rows = Subject.rows && Object.values(Subject.rows);
    console.log(rows)
    
    return (
        <div id="detailed-pricing" class=" w-full pt-20">
                <div class="w-screen">
                    <div class="grid grid-cols-3 p-4 text-sm font-mediumborder-t border-b gap-x-16 bg-gray-800 border-gray-700 text-ll">
                        <div class="flex items-center">{props.title1}</div>
                        <div>{props.title2}</div>
                        <div>{props.title3}</div>
                    </div>
                    {rows.map((row, index) => {
                        return <ContentTableRow key={index} sidetitle={row.Rsidetitle} col2={row.Rcol2.split('\n').map((item, index) => <li className="list-none" key={index}>{item}</li>)} col3={row.Rcol3.split('\n').map((item, index) => <li className="list-none" key={index}>{item}</li>)} />
                        })
                    }
                                        
                </div>
            </div>
    )
}