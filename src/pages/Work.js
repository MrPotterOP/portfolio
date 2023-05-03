import React,{useState} from "react";
import {motion, AnimatePresence} from "framer-motion";
import { useSearchParams } from "react-router-dom";
import Hero from "../components/Hero/Hero";
import Details from "../components/Details/Details";
import Footer from "../components/Footer/Footer";

import work from "../data/Work.json";



const Work = ()=>{

    const [isOpen, setIsOpen] = useState(false); 
    const [searchParams] = useSearchParams();
    
    let id = (parseInt(searchParams.get('id')) > work.length) ? 0 : parseInt(searchParams.get('id')) - 1;

    if(!id){
        id = 0
    }else if(id<0){
        id = 0
    }


    const html = document.querySelector('html');
    html.style.overflow = isOpen ? "hidden" : "auto";
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
                            key={t}
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

    const Navbar = ()=>{

        const handleClick = ()=>{
            setIsOpen(prev => !prev);
        }


        return(
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
        )
    }

    return (
        <>
         <section className="section-work">
            <Navbar />
            <AnimatePresence>
            {isOpen ? <NavMenu /> : null}
            </AnimatePresence>

            <Hero id={id} catagory={work[id].catagory} date={work[id].date} title={work[id].title}/>
            <div className="work-bkg-black">
                <img src={`/images/mac-${id}.png`} alt="macbook-pro-mockup"></img>
            </div>
            <div className="hero-gap"></div>
            <Details description={work[id].decription} dependancies={work[id].dependancies} links={work[id].links} id={id}/>
            <Footer />
        </section>
        </>
    )
}


export default Work;