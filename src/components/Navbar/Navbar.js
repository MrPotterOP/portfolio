import React,{useState} from "react";
import {motion, AnimatePresence} from "framer-motion";

import "./navbar.css";



const Navbar = ()=>{

    const [isOpen, setIsOpen] = useState(false);

    const html = document.querySelector('html');
    html.style.overflow = isOpen ? "hidden" : "auto";


    //Handlers

    const handleClick = ()=>{
        setIsOpen(prev => !prev);
    }
    const NavMenu = ()=>{

        const links = ["Home", "About", "Work", "Contact"];
        return(
            <motion.div className="nav-menu" 
            initial={{opacity: 0.3, translateX: "-100%"}}
            animate={{opacity: 1, translateX: 0}}
            exit={{opacity: 0, translateX: "100%"}}
            transition={{duration: .3}}
            >
                {
                    links.map((i, t) => {
                        return (
                            <motion.a
                            initial={{translateY: "-100px", opacity: 0}}
                            animate={{translateY: 0, opacity: 1}}
                            transition={{delay: .3 + Math.floor(t/2), duration: .1}}
                            >
                                {i}
                            </motion.a>
                        )
                    })
                }
            </motion.div>
        )
    }

    return(
        <section className="section-nav-hero">
        <nav>
            <h1>shubham <br></br> ubarhande</h1>

            <div className="nav-left-container">
                <div className="nav-cta">
                    <p>Talk to me</p>
                    <img src="/images/link.png" alt="link"></img>
                </div>

                <img src={isOpen ? "/images/close.png" : "/images/menu.png"} onClick={()=> handleClick()} alt="menu"></img>
            </div>
        </nav>
        <AnimatePresence>
        {isOpen ? <NavMenu /> : null}

        </AnimatePresence>

        <div className="hero-container">

            <motion.h1
            initial={{translateY: "-150px", opacity: 0}}
            whileInView={{translateY: 0, opacity: 1}}
            viewport={{ once: true }}
            >Shubham</motion.h1>
            <motion.img 
            initial={{translateY: "150px", opacity: 0}}
            whileInView={{translateY: 0, opacity: 1}}
            viewport={{ once: true }}
            src="/images/hero.png" alt="hero-cat"></motion.img>
            <motion.h2
            initial={{translateX: "-150px", opacity: 0}}
            whileInView={{translateX: 0, opacity: 1}}
            viewport={{ once: true }}
            >WEB</motion.h2>
            <motion.p
            initial={{translateX: "150px", opacity: 0}}
            whileInView={{translateX: 0, opacity: 1}}
            viewport={{ once: true }}
            >I am a full-stack web developer currently pursuing a degree in computer science engineering. My skills allow me to create websites and web applications that meet the needs of clients and users alike.</motion.p>
            <motion.img 
            animate={{translateY: ["-20px", "-10px", "0px", "-10px", "-20px"]}}
            transition={{repeatType: "reverse", repeat: "Infinity", duration: 3}}
            src="/images/down.png" alt="down-arrow"></motion.img>
            <motion.h1
            initial={{translateY: "150px", opacity: 0}}
            whileInView={{translateY: 0, opacity: 1}}
            viewport={{ once: true }}
            >Developer</motion.h1>


        </div>

        </section>
    )
}

export default Navbar;