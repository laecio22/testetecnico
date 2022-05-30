import styled from "styled-components";

export const ContainerContact = styled.div`
  min-height: 450px;
`;

export const TitleSectionContact = styled.h1`
  text-align: center;
  font-family: "Cormorant";
  font-style: normal;
  font-weight: 300;
  font-size: 38px;
  color: #1c86a4;
  margin: 40px;
`;

export const ContainerGroupContact = styled.div`
  display: flex;
`;

export const BoxGroupContact = styled.div`
  width: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-family: "Lato";
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    text-transform: uppercase;
    color: #1c86a4;
    padding-top: 15px;
  }

  p {
    font-family: "Lato";
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    color: #828282;
    padding-top: 10px;
  }

  div div {
    margin-top: 50px;
  }

  button {
    border: 1px solid #1c86a4;
    border-radius: 2px;
    margin-top: 15px;
    width: 270px;
    height: 50px;
    background: #fff;
    font-family: "Lato";
    font-size: 18px;
    color: #014561;
    font-weight: 300;
  }

  button:hover {
    border: 1px solid #be9667;
    color: #be9667;
  }
`;

export const BoxFormContact = styled.div`
  padding-top: 15px;
`;

export const FormContact = styled.form`
  display: flex;
  flex-direction: column;

  input,
  textarea {
    width: 600px;
    border: 1px solid #1c86a4;
    border-radius: 3px;
    margin-bottom: 20px;
  }

  input {
    height: 42px;
  }

  textarea {
    height: 77px;
    resize: none;
  }

  button {
    background: #014561;
    border:1px solid #014561 ;
    border-radius: 2px;
    height: 50px;
    font-family: "Lato";
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    color:#e5e5e5;
  }

  button:hover{
      background:#1c86a4;
      border:1px solid #1c86a4;
  }
`;
