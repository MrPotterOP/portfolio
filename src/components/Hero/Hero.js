import React from "react";
import { motion } from "framer-motion";

import "./hero.css";



const Hero = ()=>{
    return(
        <section className="section-work-hero">
            <div className="hero-flex">
                <div className="hero-flex-left">
                    <p>PROJECT</p>

                    <div className="hero-flex-context">
                        <h2>WEBSITE</h2>
                        <h1>PORTFOLIO</h1>

                        <div>
                            <p>april</p>
                            <p>2023</p>
                        </div>
                    </div>
                </div>

                <div className="hero-flex-right">
                    <img src="/images/portfolio-mob.png" alt="macbook-pro-mockup"></img>
                </div>
            </div>
        </section>
    )
}


export default Hero;