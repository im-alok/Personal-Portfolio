import { VerticalTimeline , VerticalTimelineElement } from "react-vertical-timeline-component";

import { motion  } from "framer-motion";
import 'react-vertical-timeline-component/style.min.css';

import { styles } from "../style";
import { experiences } from "../Data/data";
import { textVariant , staggerContainer } from "../Utils/motion";

import ExperienceCard from "./ExperienceCard";





function Experience(){
  return(
    <>
      <motion.section
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{once:true, amount:0.25 }}
      className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        <span className="hash-span " id="work">&nbsp;</span>
        <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}>What I have done so far!</p>
            <h2 className={styles.sectionHeadText}>Works Section</h2>
        </motion.div>

        <div className="mt-20 flex flex-col ">
          
            {
              experiences.length > 0 ?(
              <VerticalTimeline>
                  {
                    experiences.map( (experience , index) => {
                      return (
                          <ExperienceCard key={index} experience={experience}/>
                      )
                      })
                  }
            </VerticalTimeline>
            ) :
            ( 
              <div>
                  <div className="text-red-700 text-3xl font-bold">Not Worked in any company yet Looking for the opportunity!!</div>
                  <br />
                  <a href="#contact"><button className="button">Hire Me</button></a>
              </div>
            )
            }
          

        </div>
      </motion.section>
    </>
  )
}

export default Experience;