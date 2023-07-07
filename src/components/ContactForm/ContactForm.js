import axios from "axios";
import React,{useState} from "react";

import "./contact.css";


const ContactForm = ()=>{

    const [details, setDetails] = useState({name: "", email: "", msg: ""});
    const [data, setData] = useState({msg: "Send Message", disabled: false});

    const handleSubmit = (e)=>{

        e.preventDefault();

        setData({msg: "Sending...", disabled: true})
        axios.post("https://angry-duck-sunglasses.cyclic.app/api/contact", details)
        .then(r => (r.status === 200) ? setData({msg: "Msg Sent 👍", disabled: true}) : null)
        .catch(e => (e.response) ? setData({msg: "Try Again With Valid Info.", disabled: false}) : null)
    }

    return(
        <section className="section-contact-form">
            <div className="contact-form">
                <img src="/images/contact.jpeg" alt="meme-cover"></img>

                <div className="contact-right">
                    <h1>Let's Connect</h1>

                    <div className="contact-details">
                        <div className="details-tab">
                            <p>Conatact</p>
                            <p>shubham.ubarhande69@gmail.com</p>
                        </div>

                        <div className="details-tab">
                            <p>Based In</p>
                            <p>Maharashtra, India</p>
                        </div>
                    </div>

                    <div className="conatact-form-conatiner">
                        <form onSubmit={handleSubmit}>
                            <label>
                                Name
                                <input type="text" onChange={(e)=> setDetails({...details, name:e.target.value})} required></input>
                            </label>
                            <label>
                                Your Email
                                <input type="text" onChange={(e)=> setDetails({...details, email:e.target.value})} required></input>
                            </label>
                            <label>
                                Message
                                <input type="text" onChange={(e)=> setDetails({...details, msg:e.target.value})} required></input>
                            </label>

                            <button type="submit" disabled={data.disabled}>{data.msg}</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactForm;