import styled from "styled-components";

export const ContainerAdvantages = styled.section`
  height: 200px;
  display: flex;
  justify-content: center;
`;

export const BoxAdvantage = styled.div`
  width: 400px;  
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;

  h1{
      font-family:'Cormorant';
      font-size:24px;
      color:#1C86A4;
      text-transform:uppercase;
      padding:10px 0;
  }

  p{
      color: #727272;
      font-family:"Lato";
      font-size:16px;

  }
`;
