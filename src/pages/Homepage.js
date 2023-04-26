import React from "react";


//Components
import Navbar from "../components/Navbar/Navbar";
import About from "../components/About/About";
import Skills from "../components/Skills/Skills";
import Experience from "../components/Experience/Experience";
import Footer from "../components/Footer/Footer";



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