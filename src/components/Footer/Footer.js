import React from "react";
import { Link } from "react-router-dom";

import "./footer.css";


const Footer = ()=>{
    return(
        <section className="section-footer">
            <div className="footer">
                <div className="footer-top">
                    <h1>Feel Free
                    <br />
                     to Talk</h1>

                    <div className="footer-circle">
                        <p>Let’s Talk</p>
                    </div>
                </div>

                <div className="footer-middle">
                    <div className="footer-nav">
                    <Link to="#">Home</Link>
                    <Link to="#">About</Link>
                    <Link to="#">Work</Link>
                    <Link to="#">Contact</Link>
                    </div>

                    <p>© SHUBHAM UBARHANDE</p>
                </div>
            </div>
        </section>
    )
}

export default Footer;