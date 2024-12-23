import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/header/Header";
import Footer from "./components/footer/footer";
import "./styles/Main.css"

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);
root.render(
    <React.StrictMode>
        <Header/>
        <Footer/>
    </React.StrictMode>
)