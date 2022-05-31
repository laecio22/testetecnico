import styled from "styled-components";
import imageTailor from "../../assets/img/tailor.png";
import imageProfile from "../../assets/img/perfil.png";

export const ContainerDetails = styled.section`
  display: grid;
  grid-template-columns: 80% 20%;
  background: #eff7f9;
  min-height: 350px;
  position: relative;

  img.imageProfile {
    position: absolute;
    right: 240px;
    height: 330px;
    top: 20px;   
  }
`;

export const BoxImageComment = styled.div`
  background-image: url(${imageTailor});
  background-repeat: no-repeat;
  background-size: cover;

  blockquote {
    font-family: "Lato";
    font-size: 24px;
    width: 600px;
    margin:80px auto;
  }

  div {
    margin-top: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  div h3 {
    padding-bottom: 10px;
    font-family: "Cormorant";
    font-style: italic;
    font-size:28px;
    color: #014561;
  }

  div h4 {
    font-family: "Lato";
    font-style: normal;
    font-size: 20px;
    color: #be9667;
  }
`;

export const BoxImageLawyer = styled.div`
   background-image:url(${imageProfile});
   background-size:cover; 
   min-height:100%;  
`;

export const BoxBackground = styled.div`
   width:100%;
   height:100%;
   background: rgba(2, 75, 104, 0.81);
`
