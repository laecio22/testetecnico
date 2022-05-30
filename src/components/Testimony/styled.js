import styled from "styled-components";
import imageTestimonial from "../../assets/img/testimonial.png";

export const ContainerTestimony = styled.div`
  min-height: 100vh;
  background-image: url(${imageTestimonial});
  background-size: cover;
  background-color: #011a24;
  display: flex;
  justify-content: center;
`;
export const BoxTestimony = styled.div`
  width: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    margin: 50px 0;
    font-family: "Cormorant";
    font-style: normal;
    font-weight: 300;
    font-size: 38px;
    color: #f2f2f2;
  }

  img {
    margin-bottom: 15px;
  }

  p {
    padding-bottom: 30px;
    font-family: "Cormorant";
    font-style: italic;
    font-size: 26px;
    color: #c4c4c4;
    font-weight: 300;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  div h3 {
    font-family: "Cormorant";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    color: #be9667;
  }

  div h4 {
    font-family: "Lato";
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    color: #949494;
    padding-top: 10px;
  }
`;
