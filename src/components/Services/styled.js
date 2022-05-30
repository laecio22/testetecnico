import styled from "styled-components";

export const ContainerServices = styled.section`
  min-height: 100vh;
`;

export const BoxShirt = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 100px;
  margin-bottom:80px;
  position: relative;
`;
export const BoxImageShirt = styled.div`
  border: 1px solid #1c86a4;
  position: relative;
  left: 100px;
  z-index: 1;
`;
export const TextInfoShirt = styled.div`
  border: 1px solid #e5e5e5;
  width: 700px;
  height: 380px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  top: 60px;

  h1 {
    font-family: "Cormorant";
    font-size: 62px;
    color: #014561;
    text-transform: uppercase;
    font-weight: 300;
    font-style: normal;
    margin-top: 50px;
  }

  h3 {
    font-family: "Lato";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    color: #c4c4c4;
    text-transform: uppercase;
    padding-bottom: 30px;
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

export const ListItem = styled.ul`
  display: flex;
  font-family: "Cormorant";
  font-size: 24px;
  font-style: italic;
  font-weight: 400;
  color: #727272;
`;

export const Item = styled.div`
  margin-left: 70px;
`;

export const BoxTailor = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 100px;
  position: relative;
`;

export const TextInfoTailor = styled.div`
  border: 1px solid #e5e5e5;
  width: 700px;
  height: 380px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  top: 60px;

  h1 {
    font-family: "Cormorant";
    font-size: 62px;
    color: #014561;
    text-transform: uppercase;
    font-weight: 300;
    font-style: normal;
    margin-top: 50px;
  }

  h3 {
    font-family: "Lato";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    color: #c4c4c4;
    text-transform: uppercase;
    padding-bottom: 30px;
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

export const BoxImageTailor = styled.div`
    border: 1px solid #1c86a4;
`;
