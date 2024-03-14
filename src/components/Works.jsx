import { motion } from "framer-motion";
import { styles } from "../style";
import { staggerContainer } from "../Utils/motion";
import { Tilt } from "react-tilt";
import { github } from "../assets";
import { projects } from "../Data/data";
import { fadeIn,textVariant } from "../Utils/motion";


function ProjectCard({ index , name , description , tags , image ,source_code_link,live_link }){
  
  return(

    <Tilt
    className="xs:w-[350px] w-[280px]  ">
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

        className="bg-tertiary rounded-2xl  p-5 w-full h-[500px] sm:w-[350px] flex flex-col justify-evenly" 
        onClick={()=>window.open(live_link,"_blank")}
        >
            <div className="relative w-full h-[180px]">
              <img src={image} alt={name}
                className="w-full h-full object-cover rounded-[20px]"
              />

              <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
                <div onClick={()=>{
                  window.open(source_code_link,"_blank")
                }}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                >

                  <img src={github} alt="github" className="w-1/2 h-1/2 object-contain" />

                </div>
              </div>

            </div>

            <div className="mt-5 ">
                <h3 className="text-white text-[24px] font-bold">{name}</h3>
                <p className="mt-2 text-secondary text-[12px]">{description.split(" ").slice(0,21).join(" ")}</p>
            </div>

            <div className="flex flex-row flex-wrap gap-2 mt-4">
              {
                tags.map( (tag,index) =>{
                  return(
                    <div className={`${tag.color} text-[14px]` }>#{tag.name}</div>
                  )
                })
              }
            </div>
        </div>
        
      </motion.div>
      
    </Tilt>
  )
}



function Works(){
  return(
    <div>
      <motion.section
            variants={staggerContainer()}
            initial="hidden"
            whileInView="show"
            viewport={{once:true, amount:0.25 }}
            className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
            >
                <span className="hash-span ">&nbsp;</span>
                <motion.div variants={textVariant()}>
                    <p className={styles.sectionSubText}>My Works!</p>
                    <h2 className={styles.sectionHeadText}>Projects.</h2>
                </motion.div>

                <div className="w-full flex">
                  <motion.p
                  variants={fadeIn("","",0.1,1)}
                  className="text-[17px] text-secondary mt-3 max-w-3xl leading-[30px]"
                  >
                      Following Project showcase my skills and Experience through real-world examples of my work. Each project is briefly described with the links to code repositories and live demo in it. It refec my ability to solve Complex problems ,Works with different technologies, and manage projects effectively.
                  </motion.p>
                </div>

                <div className="mt-20 flex flex-wrap gap-7 ">
                  {
                    projects.map( (project , index) =>{
                      return(
                        <ProjectCard key={index} {...project} index={index} />
                      )
                    })
                  }
                </div>
                
            </motion.section>
    </div>
  )
}

export default Works;