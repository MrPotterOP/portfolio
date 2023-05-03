import React from "react";


import "./hero.css";



const Hero = ({id, catagory, date, title})=>{
    console.log(date);
    return(
        <section className="section-work-hero">
            <div className="hero-flex">
                <div className="hero-flex-left">
                    <p>PROJECT</p>

                    <div className="hero-flex-context">
                        <h2>{catagory.toUpperCase()}</h2>
                        <h1>{title.toUpperCase()}</h1>

                        <div>
                            <p>{date.month}</p>
                            <p>{date.year}</p>
                        </div>
                    </div>
                </div>

                <div className="hero-flex-right">
                    <img src={`/images/hero-${id}.png`} alt="macbook-pro-mockup"></img>
                </div>
            </div>
        </section>
    )
}


export default Hero;