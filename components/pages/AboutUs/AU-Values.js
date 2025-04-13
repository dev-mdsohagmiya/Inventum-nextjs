/* import { motion } from "framer-motion"
 */

import AnimatedTitle from "./AnimatedWords";

export default function AUValues() {
  /* const banner = ref.current ? ref.current.offsetWidth : 0; */
  return (
    <section className="bg-dd pb-10">
      <h1
        id=""
        className="w-max mx-auto text-5xl md:text-7xl text-center py-10 font-bold bg-clip-text text-transparent bg-pg"
      >
        Our Values
      </h1>
      <p id="" className="text-2xl text-center text-ll max-w-prose mx-auto">
        Inventum ensures that in our community, all are accepted, respected and
        supported. We encourage our students to develop integrity, perseverance,
        and curiosity, unlocking their creative potential and allowing them to
        be career-ready and future-focused.
      </p>
      {/*   <motion.div
            className='w-64 h-64 rounded-full bg-blue-500'
            initial={{ x:0 }}
            animate={{ x:-banner }}
            transition={{ duration: 15}}
        /> */}
      <div>
        <AnimatedTitle className="w-max mx-auto" />
      </div>
    </section>
  );
}
