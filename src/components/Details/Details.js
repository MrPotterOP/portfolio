import React from "react";
import { Link } from "react-router-dom";

import "./details.css";



const Details = ({description, dependancies, links, id})=>{

    let isWeb = (window.innerWidth <= 990) ? "mob" : "desk";

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
                        <Link onClick={()=> window.open(links[0])}>View Code</Link>
                        <Link onClick={()=> window.open(links[1])}>Visit Site</Link>
                    </div>
                </div>
                <div className="details-cell-vertical">
                    <h2>SCREENSHOTS</h2>

                    <img src={`/images/sc-${isWeb}-${id}.png`} alt="web-screenshot"></img>
                </div>

                {/* <div className="details-cell-horizontal">
                    <Link to={`/`}><img src="/images/prev.png" alt="back-arrow"></img> Home</Link>
                    <Link to={`/work?id=${id + 2}`}> Next Project<img src="/images/next.png" alt="next-arrow"></img></Link>
                </div> */}
            </div>
        </section>
    )
}

export default Details;