import React from "react";
import { ContainerBanner , BoxText , TextProm} from "./styled";

const Banner = ()=>{
    return (
      <ContainerBanner>
        <BoxText>
            <p>Elegante é ter um</p>
            <p>ALFAIATE</p>
            <p>para chamar de seu</p>
          
        </BoxText>
        <TextProm>
          COMPRE HOJE, <span>PAGUE EM ATÉ 3X COM 12% DE DESCONTO</span> E TENHA 10 MESES PARA
          CONFECCIONAR.
        </TextProm>
        <button>Faça já um orçamento</button>
      </ContainerBanner>
    );
}

export default Banner