import styled from "styled-components";

export const ContainerFooter = styled.footer`
  height: 150px;
  border-top: 1px solid #be9667;
  display: flex;
  justify-content: space-between;
  position: relative;
  padding-top: 30px;
`;

export const BoxImage = styled.div`
  margin-left: 200px;
`;

export const BoxCopyright = styled.div`
  margin-right: 30px; 
  a {
    cursor: pointer;
  }
`;
export const BoxLinkTop = styled.div`
  background: #ffffff;
  border-radius: 4px;
  width: 40px;
  height: 40px;
  border: 1px solid #014561;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const TextCnpj = styled.p`
  padding-top: 10px;
  font-family: "Poppins";
  font-size: 14px;
  color: #bdbdbd;
`;

export const TextCopyright = styled.p`
  position: absolute;
  top: 100px;
  right: 110px;
  font-family: "Poppins";
  font-size: 14px;
  font-weight: 300;
  color: #4f4f4f;
`;
