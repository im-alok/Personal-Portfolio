import { NavLink } from "react-router-dom";
import { styles } from "../style";
import {logo , menu ,close} from "../assets"
import { navLinks } from "../Data/data";
import { useState } from "react";

function Navbar(){
    const [toggle,setToggle]=useState(false);

  return(
    <nav className={` ${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
        <div className="w-full flex justify-between items-center mx-auto max-w-7xl">
          <NavLink to="/"
          className='flex items-center gap-2'
          onClick={ () => window.scrollTo(0,0)}
          >
            <img src={logo} className="w-9 h-9 object-contain"/>
            <p className="text-white sm:flex hidden text-[18px] cursor-pointer font-bold">Alok<span className="sm:block hidden">&nbsp;| Software Developer</span> </p>

            {/* for Mobile Screen */}

            <p className="text-white sm:hidden flex text-[18px] cursor-pointer font-bold">Alok Ranjan </p>


          </NavLink>

          <ul className="list-none hidden sm:flex gap-10">
            {
              navLinks.map( (Link) => (
                <li key={Link.id}
                className="hover:text-white text-[18px] font-medium cursor-pointer text-secondary "
                ><a href={`#${Link.id}`}>{Link.title}</a></li>
              ) )
            }
          </ul>
          

          <div className="sm:hidden flex flex-1 justify-end items-center">
            
            <img src={toggle ? close : menu}

            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
            />

            <div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>

                <ul className="list-none flex justify-end items-start flex-col gap-4">
                {
                  navLinks.map( (Link) => (
                    <li key={Link.id}
                    className="font-poppins text-[16px] font-medium cursor-pointer"
                    onClick={()=>{
                      setToggle(!toggle)
                    }}
                    ><a href={`#${Link.id}`}>{Link.title}</a></li>
                  ) )
                }
              </ul>

            </div>

          </div>

        </div>
    </nav>
  )
}

export default Navbar;