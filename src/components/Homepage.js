import React from "react";


//Components
import Navbar from "./Navbar/Navbar";
import About from "./About/About";
import Skills from "./Skills/Skills";
import Experience from "./Experience/Experience";



const Homepage = ()=>{
    return(
        <section className="section-homepage">
            <Navbar />
            <About />
            <Skills />
            <Experience />
        </section>
    )
}


export default Homepage;