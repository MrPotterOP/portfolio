import React from "react";

import "./experience.css";


const Experience = ()=>{
    return(
        <section className="section-exp">
            <div className="exp-top">
            
            <div className="about-middle">
                <img src="/images/workexp.gif" alt="meme-art"></img>
                <div className="about-middle-context">
                <h4>Work Experience</h4>
                <p>Completed one internship as a full stack developer intern at Photograde.Ai, and few personal projects.</p>
                </div>
            </div>

            </div>
            <div className="exp-middle">
                
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

            </div>

            <div className="exp-bottom">
                <div className="exp-projects">
                    <div className="project">
                        <h1>Share Pro</h1>
                        <img src="/images/link.png" alt="link"></img>
                    </div>
                    <div className="project">
                        <h1>Ninja Store</h1>
                        <img src="/images/link.png" alt="link"></img>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience;