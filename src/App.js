import React from "react";
import AppNavbar from "./components/AppNavbar";
import Footer from './components/Footer';
import Main from './components/Main';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'

export default function App(){
    return(
    <>
        <AppNavbar/>
        <Main/>
        <Footer/>
    </>
    )
}