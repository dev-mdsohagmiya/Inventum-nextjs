import Link from "next/link"



export default function SubjectCards(props) {
    
    return (                        
        <div className={`border shadow-md rounded-xl border-gray-700 bg-cover w-72 bg-center h-40`} style={{backgroundImage: `url(${props.img})`}}>
            <div className="backdrop-brightness-[.7] p-5 rounded-xl h-full justify-between flex flex-col">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-ll">{props.name}</h5>
            
            {props.disabled === true || props.pathname === "Travel-&-Tourism" ?
            (<></>):
            (
            <Link href={`/${props.category}/${props.pathname}`} >
                <div className="inline-flex w-max items-center px-3 py-2 text-sm font-medium text-center text-ll bg-pg rounded-lg hover:brightness-[0.9] focus:ring-4 focus:outline-none bg-blue-600 hover:bg-blue-700 focus:ring-blue-800">
                    Read more
                    <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </div>
            </Link>)}
            </div>
        </div>
    )
}