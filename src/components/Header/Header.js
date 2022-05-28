import React from "react";
import logoHeader from '../../assets/img/Logo.png';
import Navbar from "../Navbar/Navbar";
import { ContainerHeader } from "./styled";

const Header = ()=>{
    return (
        <ContainerHeader>
            <img src={logoHeader} alt="logo da Renee Trajar"/>
            <Navbar/>            
        </ContainerHeader>
    )
}

export default Header