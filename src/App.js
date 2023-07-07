import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";


import Contact from "./pages/Contact.js";
import Homepage from "./pages/Homepage.js";
import Work from "./pages/Work.js";

const App = ()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Homepage />} exact/>
                <Route path="/work" element={<Work />} exact/>
                <Route path="/contact" element={<Contact />} exact/>
            </Routes>
        </BrowserRouter>
    )
};


export default App;
