import React from "react";
import {
  ContainerServices,
  BoxShirt,
  BoxImageShirt,
  TextInfoShirt,
  ListItem,
  Item,
  BoxTailor,  
  TextInfoTailor,
  BoxImageTailor
} from "./styled";
import imageTailor from "../../assets/img/tailor1.png";
import imageTerno from "../../assets/img/tailor2.png";

const Services = () => {
  return (
    <ContainerServices>
      <BoxShirt id="sectionShirt">
        <BoxImageShirt>
          <img src={imageTailor} alt="imagem camisa elegante" />
        </BoxImageShirt>
        <TextInfoShirt>
          <h1>Camisaria</h1>
          <h3>Confeccionadas artesanalmente</h3>
          <ListItem>
            <Item>
              <li>100% Algodão</li>
              <li>Monograma</li>
              <li>Slim</li>
            </Item>
            <Item>
              <li>Nacionais e Importadas</li>
              <li>Tradicionais e Esportivas</li>
              <li>Casamentos</li>
            </Item>
          </ListItem>
          <button>Quero um orçamento </button>
        </TextInfoShirt>
      </BoxShirt>
      <BoxTailor id="sectionTailor">
        <TextInfoTailor>
          <h1>Alfaiataria</h1>
          <h3>Totalmente feito a mão sob medida</h3>
          <ListItem>
            <Item>
                <li>Fio Super 120 e 130</li>
                <li>Lã fria Australiana</li>
                <li>Botões Importados</li>
            </Item>
            <Item>
                <li>Ternos e Calças </li>
                <li>Paletós e Smokings</li>
                <li>Sociais e Esportivos</li>
            </Item>
          </ListItem>
          <button>Quero um orçamento </button>
        </TextInfoTailor>
        <BoxImageTailor>
          <img src={imageTerno} alt="imagem terno" />
        </BoxImageTailor>
      </BoxTailor>
    </ContainerServices>
  );
};

export default Services;
