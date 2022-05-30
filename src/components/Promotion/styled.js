import styled from "styled-components";
import imagemCamisa from "../../assets/img/tailor1.png";

export const ContainerPromotion = styled.section`
  background-image: url(${imagemCamisa});
  background-size: cover;
  min-height: 600px;
`;

export const BoxBackground = styled.div`
  background-color: #011a24;
  opacity: 0.94;
  min-height: 600px;
  width: 100%;
`;

export const ContainerDescriptionPromotion = styled.div`
  display: flex;
  margin: 0 auto;
  padding-top: 45px;
  width: 80%;
`;

export const DescriptionPromotion = styled.div`
 
  margin-right: 40px;
  h1 {
    font-family: "Cormorant";
    font-size: 53px;
    color: #be9667;
    text-transform: uppercase;
  }

  h3{
      font-family:"Cormorant";
      font-style:italic;
      font-size:30px;
      color: #be9667;
      font-weight:300;
      margin:40px 0;
  }

  p{
      color:#c4c4c4;
      font-family:"Lato";
      font-size:22px;
      margin-bottom:20px;   
  }

  span{
      font-weight:600;
      color:#e5e5e5 ;
  }

  button{
      width:330px ;
      height:55px ;
      background:#be9667 ;
      border: 1px solid #be9667;
      font-family:"Lato";
      font-size:18px;
      color:#e0e0e0;
      margin-top:40px;

  }

  button:hover{
      background:#777;
      border: 1px solid #777;
      opacity:1;
      transition:0.5s;
     
  }
`;
export const BoxImageSuit = styled.div``;
