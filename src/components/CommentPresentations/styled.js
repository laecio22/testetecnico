import styled from "styled-components";
import imageTailor from "../../assets/img/tailor.png";

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
  margin: 90px auto;

  blockquote {
    font-family: "Lato";
    font-size: 24px;
    width: 600px;
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
  background-color: rgba(2, 75, 104, 0.81);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
