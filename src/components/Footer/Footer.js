import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import "./footer.css";


const Footer = ()=>{
    return(
        <motion.section 
        initial={{translateX: "-150px", opacity: 0}}
            whileInView={{translateX: 0, opacity: 1}}
            viewport={{ once: true }}
        className="section-footer">
            <div className="footer">
                <div className="footer-top">
                    <h1>Feel Free
                    <br />
                     to Talk</h1>

                    <Link to="/contact">
                        <div className="footer-circle">
                            <p>Let’s Talk</p>
                        </div>
                    </Link>
                </div>

                <div className="footer-middle">
                    <div className="footer-nav">
                    <HashLink to="/#top">Home</HashLink>
                    <HashLink to="/#about">About</HashLink>
                    <HashLink to="/#exp">Work</HashLink>
                    <Link to="/contact">Contact</Link>
                    </div>

                    <p>© SHUBHAM UBARHANDE</p>
                </div>
            </div>
        </motion.section>
    )
}

export default Footer;