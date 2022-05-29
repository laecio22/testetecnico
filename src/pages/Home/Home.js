import React from "react";
import { MainContainer } from "./styled";
import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner";
import Presentations from "../../components/Presentations/Presentations";
import CommentPresentations from "../../components/CommentPresentations/CommentPresentations";

const Home = ()=>{
    return (
        <>
            <MainContainer>
               <Header/>
               <Banner/>             
            </MainContainer>
            <Presentations/>
            <CommentPresentations/>
          
        </>
    )
}

export default Home
