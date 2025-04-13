

export default function ContentOverviewCard(props) {
    return (
        <div className="shadow-md w-full h-full p-5 bg-dd rounded-xl text-ll gap-5 flex flex-col hover:scale-105 transition-all duration-100 ease-in-out">
            <div className="flex justify-between font-bold text-ll">
                <h1 className="mr-10">{props.title}</h1>
                <h1>{props.time}</h1>
            </div>
            <div className="whitespace-normal text-ll">
                {props.p}
            </div>
        </div >
    )
}