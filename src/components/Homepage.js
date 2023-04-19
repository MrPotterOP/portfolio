import React from "react";


//Components
import Navbar from "./Navbar/Navbar";
import About from "./About/About";
import Skills from "./Skills/Skills";
import Experience from "./Experience/Experience";
import Footer from "./Footer/Footer";



const Homepage = ()=>{
    return(
        <section className="section-homepage">
            <Navbar />
            <About />
            <Skills />
            <Experience />
            <Footer />
        </section>
    )
}


export default Homepage;