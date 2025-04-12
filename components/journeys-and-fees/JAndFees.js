

import Link from "next/link";
import NewTable from "./sections/our-packages/NewTable";
import OurPackages from "./sections/OurPackages";



export default function JAndFees() {
    return (
        <div className="bg-dl pt-24">
            <OurPackages title="Our Learning Journeys" />
           {/*  <PrecisionTeaching /> */}
            <div className="bg-dl text-ll">
                <h1 className="bg-pg text-5xl font-bold bg-clip-text text-transparent text-center py-5">Precision Teaching</h1>
                <p className="mb-5 font-light sm:text-xl text-ll text-center max-w-[75ch] mx-auto">
                Precision Teaching involves a close analysis of the curriculum, and identifying the critical points. These critical points are concepts or abstract ideas which are usually difficult for students. Teachers will teach live sessions on these critical points. Leaners will have the option to attend these live session. This does not mean that there will be lessons every day, as this goes against our philosophy of highly flexible learning. The live sessions will be recorded, and learners can view these on Canvas should they need to.
                </p>
                <ul className="flex flex-wrap flex-1 justify-center gap-5">
                    <li className="bg-dd flex justify-center items-center px-5 py-5 mx-5 rounded-xl"><span className="text-2xl  font-bold mr-2 mb-1">1.</span>Does not mean live lessons each day</li>
                    <li className="bg-dd flex justify-center items-center px-5 py-5 mx-5 rounded-xl"><span className="text-2xl  font-bold mr-2 mb-1">2.</span>Only for specific, critical areas of <br></br> the curriculum</li>
                    <li className="bg-dd flex justify-center items-center px-5 py-5 mx-5 rounded-xl"><span className="text-2xl  font-bold mr-2 mb-1">3.</span>Does not change our high-flexibility  <br></br>philosophy</li>
                </ul>
            </div>
            <div className="flex justify-center my-10">
            <Link href="/precision-teaching" className="bg-pg rounded-xl text-white  px-2 py-3 hover:scale-105 transition-all duration-300 ease-in-out">
            More info on precision teaching
            </Link>
            </div>
            <NewTable />
        </div>
    )
}