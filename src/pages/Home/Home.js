import React from "react";
import { MainContainer } from "./styled";
import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner";
import Presentations from "../../components/Presentations/Presentations";
import CommentPresentations from "../../components/CommentPresentations/CommentPresentations";
import Advantages from "../../components/Advantages/Advantages";
import Promotion from "../../components/Promotion/Promotion";

const Home = ()=>{
    return (
        <>
            <MainContainer>
               <Header/>
               <Banner/>             
            </MainContainer>
            <Presentations/>
            <CommentPresentations/>
            <Advantages/>
            <Promotion/>
          
        </>
    )
}

export default Home
