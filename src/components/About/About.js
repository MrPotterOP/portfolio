import React from "react";
import "./about.css";



const About = ()=>{
    return(
        <section className="section-about">
            <div className="about-top">
                <h3>What I actually do</h3>
                <hr></hr>
                <hr></hr>
            </div>
            <div className="about-middle">
                <img src="/images/about.gif" alt="meme-art"></img>
                <div className="about-middle-context">
                <h4>Tread Lightly</h4>
                <p>As a full-stack web developer i do create and maintain websites and web applications using my primary development stack MERN. as well as  i do troubleshoot issues and ensure that websites are user-friendly and visually appealing</p>
                </div>
            </div>
            <div className="about-bottom">
                <div className="marquee-flex">
                <p>NativeApplication</p>
                <img src="/images/star.png" alt="star"></img>
                
                <p>Landing Page</p>
                <img src="/images/star.png" alt="star"></img>
                
                <p>WebApplication</p>
                <img src="/images/star.png" alt="star"></img>
                <p>Website</p>
                <img src="/images/star.png" alt="star"></img>
                </div>

                <div className="marquee-flex" aria-hidden="true">
                <p>NativeApplication</p>
                <img src="/images/star.png" alt="star"></img>
                
                <p>Landing Page</p>
                <img src="/images/star.png" alt="star"></img>
                
                <p>WebApplication</p>
                <img src="/images/star.png" alt="star"></img>
                <p>Website</p>
                <img src="/images/star.png" alt="star"></img>
                </div>
            </div>
        </section>
    )
}
export default About;