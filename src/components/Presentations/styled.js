import styled from "styled-components";

export const ContainerApresentations = styled.section`
  min-height: 80vh;
  display: flex;
  align-items: center;

  img {
    min-height: 450px;
    margin: 0 100px;
  }
`;

export const BoxTextPresentations = styled.div`
  height: 450px;
  padding-top: 5px;
  position: relative;

  h1 {
    font-family: "Cormorant";
    font-style: normal;
    font-weight: 300;
    font-size: 38px;
    color: #014561;
    margin-bottom: 50px;
  }

  p {
    font-family: "Lato";
    font-style: normal;
    font-weight: 300;
    font-size: 19px;
    margin: 30px 0;
  }

  blockquote {
    font-family: "Cormorant";
    font-style: italic;
    font-weight: 400;
    font-size: 24px;
    color: #1c86a4;
    margin: 40px 0;
  }

  img {
    min-height: 130px;
    width: 150px;
    position: absolute;
    right: 30px;
    bottom:100px ;
    margin: 0;
  }

  span {
    position: absolute;
    bottom: 70px;
    right: 80px;
    font-family: 'Cormorant';
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    color: #828282;
  }

  button {
    width: 300px;
    height: 50px;
    border-radius: 2px;
    background: #014561;
    color: #e5e5e5;
    font-size: 18px;
    font-weight: 300;
    font-family: "Lato";
    margin-top: 30px;
    border: 1px solid #014561;
  }

  button:hover {
    background-color: #1c2735;
    transition: 0.5s;
  }
`;
