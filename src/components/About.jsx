import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../style";
import { services } from "../Data/data";
import { fadeIn ,textVariant,staggerContainer } from '../Utils/motion';
function ServiceCard( { index , title , icon } ){
  return(
    <Tilt
    className="xs:w-[250px] w-[220px]  ">
      <motion.div
      variants={fadeIn("right","spring" ,0.5 * index , 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card "
      >
        <div 
        options={{
          max:45,
          scale:1,
          speed:450
        }}

        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col" 
        >
            <img src={icon} alt="icons" className="w-16 h-16 object-contain"/>
            <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
        </div>

      </motion.div>
    </Tilt>


  )
}




function About(){
  return(
        <motion.section
            variants={staggerContainer()}
            initial="hidden"
            whileInView="show"
            viewport={{once:true, amount:0.25 }}
            className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
            >
            <span className="hash-span " id="about">&nbsp;</span>


          <div>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>Introduction</p>
                <h2 className={styles.sectionHeadText}>Overview</h2>

            </motion.div>

            <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]  "
            >
              I'm a Skilled Software developer with Experience in JavaScript , and Expertise in the frameWorks like React.js , Node.js and Express.js. I'm a quick learner and collaborate closely with the client to create efficient, scalable, and user-friendly Solutions that solve real world problems. Let's Work Together to bring your ideas to the life!!
            </motion.p>

            <div className="mt-20 flex sm:flex-row flex-col items-center gap-10 ">

              {
                services.map( (service, index) => (
                  <ServiceCard key={service.title} index={index} {...service} />
                ))
              }

          </div>
        </div>
      </motion.section>
  )
}

export default About;