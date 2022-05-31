import React from "react";
import {
  ContainerFooter,
  BoxImage,
  BoxCopyright,
  TextCnpj,
  TextCopyright,
} from "./styled";
import logoFooter from "../../assets/img/logofooter.png";
import { FiChevronUp } from "react-icons/fi";

const Footer = () => {
  return (
    <ContainerFooter>
      <BoxImage>
        <img src={logoFooter} alt="logo do footer" />
        <TextCnpj>CNPJ:04.487.685/0001-01</TextCnpj>
      </BoxImage>
      <BoxCopyright>
        <button>
          <FiChevronUp size={20} color="#014561" />
        </button>
      </BoxCopyright>
      <TextCopyright>Copyright: 2021 © Renee Trajar - Todos os direitos reservados.</TextCopyright>
    </ContainerFooter>
  );
};

export default Footer;
