import { styles } from "../style";
import Computers from "./canvas/Computers";
import { motion } from "framer-motion";
function Hero(){
  return(
    <section className="relative w-full h-screen mx-auto ">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]"/>
          <div className="w-1 sm:h-80 h-40 violet-gradient"/>
        </div>

        <div>
          <h1 className={`${styles.heroHeadText}`}>Hii I'm <span className="text-[#915eff]">Alok Ranjan</span></h1>

          <p className={`${styles.heroSubText} text-white-100 mt-2`}>
            I am a fullStack Web and Devops Developer.
          </p>

        </div>

      </div>

      <Computers />

{/* Providing Animation */}
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary p-2 flex justify-center items-center">
            <motion.div 

            animate={{
              y:[0,24,0]
            }}
            transition={{
              duration:1.5,
              repeat:Infinity,
              repeatType:'loop'

            }}
            className="w-2 h-2 rounded-full mb-1 bg-secondary"
            />


          </div>
        </a>
      </div>

    </section>
  )
}

export default Hero;