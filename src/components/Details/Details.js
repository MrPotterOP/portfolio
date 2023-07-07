import React from "react";
import { Link } from "react-router-dom";

import "./details.css";



const Details = ({description, dependancies, links, id})=>{

    return(
        <section className="section-details">
            <div className="details-flex">
                <div className="details-cell">
                    <h2>DESCRIPTION</h2>

                    <p>{description}</p>
                </div>
                <div className="details-cell">
                    <h2>DEPENDANCIES</h2>

                    <p>{dependancies}</p>
                </div>
                <div className="details-cell">
                    <h2>Links</h2>

                    <div className="details-cell-links">
                        <Link to={links[0]} target="_blank">Visit Site</Link>
                        <Link to={links[1]} target="_blank">View Code</Link>
                    </div>
                </div>
                <div className="details-cell-vertical">
                    <h2>SCREENSHOTS</h2>

                    <img src={`/images/sc-desk-${id}.png`} alt="web-screenshot"></img>
                </div>

                <div className="details-cell-horizontal">
                    <Link to={`/`}><img src="/images/prev.png" alt="back-arrow"></img> Home</Link>
                    <Link to={`/work?id=${id + 1}`} onClick={()=> window.scrollTo(0)}> Next Project<img src="/images/next.png" alt="next-arrow"></img></Link>
                </div>
            </div>
        </section>
    )
}

export default Details;