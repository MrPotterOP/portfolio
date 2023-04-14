import React from "react";

import "./navbar.css";



const Navbar = ()=>{
    return(
        <section className="section-nav-hero">
        <nav>
            <h1>shubham <br></br> ubarhande</h1>

            <div className="nav-left-container">
                <div className="nav-cta">
                    <p>Talk to me</p>
                    <img src="/images/link.png" alt="link"></img>
                </div>

                <img src="/images/menu.png" alt="menu"></img>
            </div>
        </nav>

        <div className="hero-container">

            <h1>Shubham</h1>
            <img src="/images/hero.png" alt="hero-cat"></img>
            <h2>WEB</h2>
            <p>I am a full-stack web developer currently pursuing a degree in computer science engineering. My skills allow me to create websites and web applications that meet the needs of clients and users alike.</p>
            <img src="/images/down.png" alt="down-arrow"></img>
            <h1>Developer</h1>


        </div>

        </section>
    )
}

export default Navbar;