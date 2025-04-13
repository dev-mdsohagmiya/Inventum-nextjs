import Table from "./SubjectsComponents/Table";
import Asubjects from '../Asubjects.json';
import ISFsubjects from '../ISFsubjects.json';
import IGCSEsubjects from '../IGCSEsubjects.json';

export default function TableLogic() {
    var a = window.location.pathname;
    var b = a.split('/');
    var c = b.slice(-1).toString() ;
    var d = c.replace('-', ' ')
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
    const linesN1 = Subject.N1p && Subject.N1p.split('\n');
    const linesN2 = Subject.N2p && Subject.N2p.split('\n');
    const linesN3 = Subject.N3p && Subject.N3p.split('\n');
    const linesN4 = Subject.N4p && Subject.N4p.split('\n');
    const linesN5 = Subject.N5p && Subject.N5p.split('\n');
    const linesN6 = Subject.N6p && Subject.N6p.split('\n');
    return (
        <>
        {
            Subject.N6Title ?    
            <Table 
           N1Title={Subject.N1Title} N1Subtitle={Subject.N1Subtitle} N1Timing={Subject.N1Timing} N1p={
                    linesN1.map((line, index) => <li className="whitespace-normal list-disc" key={index}>{line}</li>)
                } 
            N2Title={Subject.N2Title} N2Subtitle={Subject.N2Subtitle} N2Timing={Subject.N2Timing} N2p={
                
                    linesN2.map((line, index) => <li className="whitespace-normal list-disc" key={index}>{line}</li>)
                
                } 
            N3Title={Subject.N3Title} N3Subtitle={Subject.N3Subtitle} N3Timing={Subject.N3Timing} N3p={
                
                    linesN3.map((line, index) => <li className="whitespace-normal list-disc" key={index}>{line}</li>)
                
                } 
            N4Title={Subject.N4Title} N4Subtitle={Subject.N4Subtitle} N4Timing={Subject.N4Timing} N4p={
                
                    linesN4.map((line, index) => <li className="whitespace-normal list-disc" key={index}>{line}</li>)
                
                }
            N5Title={Subject.N5Title} N5Subtitle={Subject.N5Subtitle} N5Timing={Subject.N5Timing} N5p={
                
                    linesN5.map((line, index) => <li className="whitespace-normal list-disc" key={index}>{line}</li>)
                
                }
            N6Title={Subject.N6Title} N6Subtitle={Subject.N6Subtitle} N6Timing={Subject.N6Timing} N6p={
                
                    linesN6.map((line, index) => <li className="whitespace-normal list-disc" key={index}>{line}</li>)
                
                } />
         :  Subject.N5Title ?    
            <Table 
           N1Title={Subject.N1Title} N1Subtitle={Subject.N1Subtitle} N1Timing={Subject.N1Timing} N1p={
                
                    linesN1.map((line, index) => <li className="whitespace-normal list-disc" key={index}>{line}</li>)
                
                } 
            N2Title={Subject.N2Title} N2Subtitle={Subject.N2Subtitle} N2Timing={Subject.N2Timing} N2p={
                
                    linesN2.map((line, index) => <li className="whitespace-normal list-disc" key={index}>{line}</li>)
                
                } 
            N3Title={Subject.N3Title} N3Subtitle={Subject.N3Subtitle} N3Timing={Subject.N3Timing} N3p={
                
                    linesN3.map((line, index) => <li className="whitespace-normal list-disc" key={index}>{line}</li>)
                
                } 
            N4Title={Subject.N4Title} N4Subtitle={Subject.N4Subtitle} N4Timing={Subject.N4Timing} N4p={
                
                    linesN4.map((line, index) => <li className="whitespace-normal list-disc" key={index}>{line}</li>)
                
                }
            N5Title={Subject.N5Title} N5Subtitle={Subject.N5Subtitle} N5Timing={Subject.N5Timing} N5p={
                
                    linesN5.map((line, index) => <li className="whitespace-normal list-disc" key={index}>{line}</li>)
                
                } />


         : Subject.N4Title ?    
            <Table 
           N1Title={Subject.N1Title} N1Subtitle={Subject.N1Subtitle} N1Timing={Subject.N1Timing} N1p={
                
                    linesN1.map((line, index) => <li className="whitespace-normal list-disc" key={index}>{line}</li>)
                
                } 
            N2Title={Subject.N2Title} N2Subtitle={Subject.N2Subtitle} N2Timing={Subject.N2Timing} N2p={
                
                    linesN2.map((line, index) => <li className="whitespace-normal list-disc" key={index}>{line}</li>)
                
                } 
            N3Title={Subject.N3Title} N3Subtitle={Subject.N3Subtitle} N3Timing={Subject.N3Timing} N3p={
                
                    linesN3.map((line, index) => <li className="whitespace-normal list-disc" key={index}>{line}</li>)
                
                } 
            N4Title={Subject.N4Title} N4Subtitle={Subject.N4Subtitle} N4Timing={Subject.N4Timing} N4p={
                
                    linesN4.map((line, index) => <li className="whitespace-normal list-disc" key={index}>{line}</li>)
                
                } />
            : 
            Subject.N3Title ?

            <Table 
           N1Title={Subject.N1Title} N1Subtitle={Subject.N1Subtitle} N1Timing={Subject.N1Timing} N1p={
                
                    linesN1.map((line, index) => <li className="whitespace-normal list-disc" key={index}>{line}</li>)
                
                } 
            N2Title={Subject.N2Title} N2Subtitle={Subject.N2Subtitle} N2Timing={Subject.N2Timing} N2p={
                
                    linesN2.map((line, index) => <li className="whitespace-normal list-disc" key={index}>{line}</li>)
                
                } 
            N3Title={Subject.N3Title} N3Subtitle={Subject.N3Subtitle} N3Timing={Subject.N3Timing} N3p={
                
                    linesN3.map((line, index) => <li className="whitespace-normal list-disc" key={index}>{line}</li>)
                
                } />
            : 
            Subject.N2Title ?

            <Table 
            N1Title={Subject.N1Title} N1Subtitle={Subject.N1Subtitle} N1Timing={Subject.N1Timing} N1p={
                 
                     linesN1.map((line, index) => <li className="whitespace-normal list-disc" key={index}>{line}</li>)
                 
                 } 
             N2Title={Subject.N2Title} N2Subtitle={Subject.N2Subtitle} N2Timing={Subject.N2Timing} N2p={
                 
                     linesN2.map((line, index) => <li className="whitespace-normal list-disc" key={index}>{line}</li>)
                 
                 } />
            : 
            <Table 
            N1Title={Subject.N1Title} N1Subtitle={Subject.N1Subtitle} N1Timing={Subject.N1Timing} N1p={
                 
                     linesN1.map((line, index) => <li className="whitespace-normal list-disc" key={index}>{line}</li>)
                 
                 }  />

            }
        </>
    )
}