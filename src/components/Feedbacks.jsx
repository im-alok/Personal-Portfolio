import { motion  } from "framer-motion";
import { styles } from "../style";
import { fadeIn , textVariant,staggerContainer } from "../Utils/motion";
import { testimonials } from "../Data/data";


function FeedbackCard( { index ,testimonial , name ,designation ,company , image} ){
  return (  
      <motion.div
      variants={fadeIn("","spring" ,index * 0.5 ,0.75)}
      className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full "
      >
      <p className="text-white font-black text-[48px]">"</p>
      <div className="mt-1 ">
        <p className="text-secondary tracking-wider font-semibold">{testimonial}</p>
        <div className="mt-7 flex justify-between items-center gap-1">
          <div className="flex-1 flex flex-col">
              <p className="text-white font-medium text-[16px]"><span className="blue-text-gradient">@</span>{name}</p>
              <p className="mt-1 text-secondary text-[12px]">{designation} of {company}</p>


          </div>

          <img src={image} alt={`feed-back-by-${name}`}
            className="w-10 h-10 rounded-full object-cover"
          />
        </div>

      </div>

      </motion.div>
  )
}


function Feedback(){
  return(

    <motion.section
    variants={staggerContainer()}
    initial="hidden"
    whileInView="show"
    viewport={{once:true, amount:0.25 }}
    className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
    >
      <span className="hash-span ">&nbsp;</span>
      <div className="mt-12 bg-black-100 rounded-[20px]">
        <div className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}>
          <motion.div
          variants={textVariant()}>
              <p className={styles.sectionSubText}>What others Say</p>
              <h2 className={styles.sectionHeadText}>Testimonials.</h2>

          </motion.div>
        </div>
        <div className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7`}>
          {
            testimonials.map( (suggestion , index) =>{
              return(
                <FeedbackCard key={suggestion.name} index={index} {...suggestion}/>
              )
            })
          }
        </div>
      </div>
                
    </motion.section>
  )
}

export default Feedback;