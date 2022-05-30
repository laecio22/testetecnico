import React from "react";
import {
  ContainerPromotion,
  BoxBackground,
  ContainerDescriptionPromotion,
  DescriptionPromotion,
  BoxImageSuit
} from "./styled";
import imageSuit from "../../assets/img/weste.png";
const Promotion = () => {
  return (
    <ContainerPromotion>
      <BoxBackground>
        <ContainerDescriptionPromotion>
          <DescriptionPromotion>
            <h1>Condição Imperdível</h1>
            <h3>Compre hoje e garanta</h3>
            <p>12% de desconto e pagamento em até <span>3x sem juros;</span></p>
            <p>
              Até<span> 10 meses</span> para confeccionar sua roupa. Não se preocupe se suas
              medidas aumentaram ou diminuíram, estará sempre elegante;
            </p>
            <p>Condição muito especial por <span>tempo limitado;</span></p>
            <p>
              Poder presentear alguém com uma roupa de alta costura,<span>exclusiva.</span> 
            </p>
            <button>Garanta essa condição especial!</button>
          </DescriptionPromotion>
          <BoxImageSuit>
            <img src={imageSuit} alt="imagem de terno" />
          </BoxImageSuit>
        </ContainerDescriptionPromotion>
      </BoxBackground>
    </ContainerPromotion>
  );
};

export default Promotion;
