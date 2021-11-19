import React from 'react'
import {BrowserRouter, Route, Routes ,Link} from "react-router-dom";
import Main from "./pages/main/Main";
import NatalAnalysis from "./pages/natal_analysis/NatalAnalysis";
import Solar from "./pages/solar/Solar";
import ImageCode from "./pages/image_code/ImageCode";
import NatalChild from "./pages/natal_child/NatalChild";
import './styles/app.css'
import Rectification from "./pages/rectification/Rectification";
import Tarot from "./pages/tarot/Tarot";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main/>} />
                <Route path="/natal_analysis" element={<NatalAnalysis/>} />
                <Route path="/solar" element={<Solar/>} />
                <Route path="/image_code" element={<ImageCode/>} />
                <Route path="/natal_child" element={<NatalChild/>} />
                <Route path="/rectification" element={<Rectification/>} />
                <Route path="/tarot" element={<Tarot/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
