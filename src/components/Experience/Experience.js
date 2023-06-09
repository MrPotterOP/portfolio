import React from "react";
import { motion } from "framer-motion";

import { HashLink } from "react-router-hash-link";

import "./experience.css";
import data from "../../data/Work.json";


const Experience = ()=>{

    const mapProjects = (i)=>{
        return(
            <HashLink key={i.id} to={"/work?id=" + i.id + "/#navbar"} className="project">
                <h1>{i.title}</h1>
                <img src="/images/link.png" alt="link"></img>
            </HashLink>
        )
    }

    return(
        <section className="section-exp" id="exp">
            <div className="exp-top">
            <motion.div 
            initial={{translateX: "-150px", opacity: 0}}
            whileInView={{translateX: 0, opacity: 1}}
            viewport={{ once: true }}
            className="about-middle">
                <img src="/images/workexp.gif" alt="meme-art"></img>
                <div className="about-middle-context">
                <h4>Work Experience</h4>
                <p>Completed one internship as a full stack developer intern at Photograde.Ai, and few personal projects.</p>
                </div>
            </motion.div>

            </div>
            <motion.div 
            initial={{translateX: "-150px", opacity: 0}}
            whileInView={{translateX: 0, opacity: 1}}
            viewport={{ once: true }}
            className="exp-middle">
                
                <div className="about-middle">
                    <img src="/images/exp.png" alt="meme-art"></img>
                    <div className="about-middle-context">
                    <h4>FullStack Developer Intern</h4>
                    <p>DEC 2022 - MAR 2023</p>
                    <p>Worked at PHOTOGRADE.AI as a full-stack developer intern,
                        my job here was to create and maintain the client application.
                        worked on technologies like ElectronJS, ReactJS, MongoDB, ExpressJS,
                        NodeJS, Figma.</p>
                    </div>
                </div>

            </motion.div>

            <motion.div 
            initial={{translateX: "-150px", opacity: 0}}
            whileInView={{translateX: 0, opacity: 1}}
            viewport={{ once: true }}
            className="exp-bottom">
                <div className="exp-projects">
                    {data.map(i => mapProjects(i))}
                </div>
            </motion.div>
        </section>
    )
}

export default Experience;