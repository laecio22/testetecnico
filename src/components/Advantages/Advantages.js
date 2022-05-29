import React from "react";
import { ContainerAdvantages , BoxAdvantage} from "./styled";
import imageMaquina from "../../assets/img/icon0.png";
import imagemMedalha from "../../assets/img/icon2.png";
import imagemExperiencia from "../../assets/img/icon1.png"; 

const Advantages = ()=>{
    return (
        <ContainerAdvantages>
              <BoxAdvantage>
                  <img src={imageMaquina} alt="imagem de uma máquina"/>
                  <h1>Qualidade</h1>
                  <p>Camisaria e Alfataria 100% artesanal.</p>
              </BoxAdvantage>
              <BoxAdvantage>
                  <img src={imagemMedalha} alt="imagem de uma medalha"/>
                  <h1>Confiança</h1>
                  <p>Atendimento personalizado no escritório ou  residência</p>
              </BoxAdvantage>
              <BoxAdvantage>
                  <img src={imagemExperiencia} alt="imagem que indica experiência"/>
                  <h1>Experiência</h1>
                  <p>Tradição e  modernidade proporcionando elegância</p>
              </BoxAdvantage>
        </ContainerAdvantages>
    )
}

export default Advantages