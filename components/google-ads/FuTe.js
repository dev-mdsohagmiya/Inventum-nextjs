import TechGrid from "../curriculum/techgrid/TechGrid"



export default function FuTe(props) {
    return (
        <div className={`${props.dark ? 'bg-dd' : 'bg-dl'}`}>
            <h1 className="text-3xl lg:text-5xl text-center flex self-center pt-10 pb-5 font-bold bg-clip-text text-transparent bg-pg w-max mx-auto">Future Technologies</h1>   
            <p className="max-w-prose mx-auto text-center text-ll text-xl pb-10 px-5">We are the only school to offer over 30 cutting-edge technology modules ensuring our students are equipped with the knowledge and skills to thrive in the rapidly evolving technological landscape.</p> 
            <TechGrid bg={props.dark ? "bg-dl" : "bg-dd"} className={`${props.dark ? 'bg-dd' : 'bg-dl'}`} topTechs={["Artificial Intelligence","Blockchain", "Gene Editing", "Longevity", "Bionics"]} />
        </div>

    )
}