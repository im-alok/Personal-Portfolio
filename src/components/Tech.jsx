import { technologies } from "../Data/data";
import BallCanvas from "./canvas/Ball";


import { motion } from "framer-motion";
import { staggerContainer } from "../Utils/motion";
import { styles } from "../style";

function Tech(){
  return(
    <motion.section
    variants={staggerContainer()}
    initial="hidden"
    whileInView="show"
    viewport={{once:true, amount:0.25 }}
    className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
    >
        <span className="hash-span ">&nbsp;</span>
        <div className="flex flex-row flex-wrap justify-center gap-10">
          {
            technologies.map( (tech) =>{
              return (
                <div className="w-28 h-28" key={tech.name}>
                  <BallCanvas icon={tech.icon}/>
                </div>
              )
            })
          }
        </div>
        
    </motion.section>
  )
}

export default Tech;