import styled from "styled-components";

export const ContainerBanner = styled.aside`
  font-style: italic;
  margin-left:90px;
  margin-top:80px;
  

  button {
    background: #014561;
    border-radius: 2px;
    height: 50px;
    width: 300px;
    text-align: center;
    font-size: 22px;
    color: #e5e5e5;
    font-family: 'Lato' , 'sans-serif';
    font-weight:300;
    line-height: 22px;
    border: 1px solid  #014561 ;
  }

  button:hover{
      background-color:#000;
      border: 1px solid #be9667 ;
      transition:0.5s;
  }
`;

export const BoxText = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto 1fr auto;
  width:404px;
  font-family: 'Playfair Display', serif;

  p{
    color: #be9667;
    font-size: 32px; 
    font-weight:400;  
  }
  
  p:first-child{
    grid-column: 1 / span 2;   
  }
  p:nth-child(2n) {
    color: rgba(2, 75, 104, 0.68);
    font-style: normal;
    font-size: 90px;
    grid-column: 1 / span 3;
    text-transform:uppercase;

  }

  p:last-child{
    grid-column: 2 / span 3;
    justify-self: end;   
  }
`;

export const TextProm = styled.p`   
    font-family: 'Lato', 'sans-serif';
    color: #909499;
    font-size: 24px;  
    font-style:normal;
    width: 404px;   
    margin-top:70px;
    margin-bottom:30px;

    span{
        color:#e5e5e5;        
    }
  
`
