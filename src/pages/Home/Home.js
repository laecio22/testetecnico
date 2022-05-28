import React from "react";
import { MainContainer } from "./styled";
import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner";

const Home = ()=>{
    return (
        <div>
            <MainContainer>
               <Header/>
               <Banner/>
            </MainContainer>
          
        </div>
    )
}

export default Home
