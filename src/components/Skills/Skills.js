import React from "react";
import { motion } from "framer-motion";

import "./skills.css";

const Skills = ()=>{
    return(
        <section className="section-skills">
            <motion.div 
            initial={{translateX: "-150px", opacity: 0}}
            whileInView={{translateX: 0, opacity: 1}}
            viewport={{ once: true }}
            className="about-middle skills-top">
                <img src="/images/skills.jpeg" alt="meme-art"></img>
                <div className="about-middle-context">
                <h4>My Skills</h4>
                <p>i’ve categorised and arranged my skills below as front-end, back-end and others respectively.</p>
                </div>
            </motion.div>

            <motion.div 
            initial={{translateX: "-150px", opacity: 0}}
            whileInView={{translateX: 0, opacity: 1}}
            viewport={{ once: true }}
            className="skills-bottom">

                <div className="about-bottom">
                    <div className="marquee-flex">
                        <p>HTML</p>
                        <p>CSS</p>
                        <p>ReactJS</p>
                        <p>Figma</p>
                        <p>FramerMotion</p>
                    </div>
                    <div className="marquee-flex" aria-hidden="true">
                        <p>HTML</p>
                        <p>CSS</p>
                        <p>ReactJS</p>
                        <p>Figma</p>
                        <p>FramerMotion</p>
                        </div>
                </div>

                
                <div className="about-bottom">
                <div className="marquee-flex">
                <p>NodeJS</p>
                <p>ExpressJS</p>
                <p>MongoDB</p>
                <p>ElectronJS</p>
                <p>Capacitor</p>
                <p>RESTAPI</p>
                </div>
                <div className="marquee-flex" aria-hidden="true">
                <p>NodeJS</p>
                <p>ExpressJS</p>
                <p>MongoDB</p>
                <p>ElectronJS</p>
                <p>Capacitor</p>
                <p>RESTAPI</p>
                </div>
                </div>

                <div className="about-bottom">
                <div className="marquee-flex">
                <p>GIT</p>
                <p>GoogleCloudPlatform</p>
                <p>Postman</p>
                <p>CloudinaryAPI</p>
                <p>MailSendingAPI's </p>
                </div>

                <div className="marquee-flex" aria-hidden="true">
                <p>GIT </p>
                <p>GoogleCloudPlatform</p>
                <p>Postman</p>
                <p>CloudinaryAPI</p>
                <p>MailSendingAPI's </p>
                </div>
                </div>
            </motion.div>
        </section>
    )
}

export default Skills;