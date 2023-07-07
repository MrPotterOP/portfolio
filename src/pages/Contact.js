import React,{useState} from "react";

import { HashLink } from "react-router-hash-link";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import ContactForm from "../components/ContactForm/ContactForm";



const Contact = ()=>{

    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();


    //Components
    const html = document.querySelector('html');
    html.style.overflow = isOpen ? "hidden" : "auto";
    const NavMenu = ()=>{

        return(
            <motion.div className="nav-menu"
            initial={{opacity: 0.3, translateX: "-100%"}}
            animate={{opacity: 1, translateX: 0}}
            exit={{opacity: 0, translateX: "100%"}}
            transition={{duration: .3}}
            >
                <HashLink to="/#top">Home</HashLink>
                <HashLink to="/#about">About</HashLink>
                <HashLink to="/#exp">Work</HashLink>
                <HashLink to="/contact">Contact</HashLink>
            </motion.div>
        )
    }

    const Navbar = ()=>{

        const handleClick = ()=>{
            setIsOpen(prev => !prev);
        }


        return(
                    <nav id="navbar">
                        <HashLink to="/#top">
                            <h1>shubham <br></br> ubarhande</h1>
                        </HashLink>

                        <div className="nav-left-container">
                            <div className="nav-cta" onClick={()=> navigate("/contact")}>
                                <p>Talk to me</p>
                                <img src="/images/link.png" alt="link"></img>
                            </div>

                            <img src={isOpen ? "/images/close.png" : "/images/menu.png"} onClick={()=> handleClick()} alt="menu"></img>
                        </div>
                    </nav>
        )
    }


    return(
        <section className="section-conatact">
            <Navbar />
            <AnimatePresence>
            {isOpen ? <NavMenu /> : null}
            </AnimatePresence>


            <ContactForm />
        </section>
    )
}


export default Contact;