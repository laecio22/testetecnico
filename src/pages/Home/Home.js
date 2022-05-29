import React from "react";
import { MainContainer } from "./styled";
import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner";
import Presentations from "../../components/Presentations/Presentations";

const Home = ()=>{
    return (
        <>
            <MainContainer>
               <Header/>
               <Banner/>             
            </MainContainer>
            <Presentations/>
          
        </>
    )
}

export default Home
