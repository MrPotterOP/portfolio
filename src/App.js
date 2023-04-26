import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";


import Homepage from "./pages/Homepage.js";
import Work from "./pages/Work.js";

const App = ()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Homepage />} exact/>
                <Route path="/work" element={<Work />} exact/>
            </Routes>
        </BrowserRouter>
    )
};


export default App;
