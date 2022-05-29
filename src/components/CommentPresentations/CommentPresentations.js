import React from "react";
import { ContainerDetails, BoxImageLawyer, BoxImageComment } from "./styled";
import imageProfile from "../../assets/img/perfil.png";
import imageNelson from "../../assets/img/perfil1.png";

const CommentPresentations = () => {
  return (
    <ContainerDetails>
        <img src={imageNelson} alt="imagem de Nelson" className="imageProfile"/>
      <BoxImageComment>
        <blockquote>
          “Faço roupas com o Renee Trajar há mais de duas décadas, o serviço é
          impecável em todos os detalhes, desde a costura ao caimento. O Renee
          tem uma equipe de mestre!”
        </blockquote>
        <div>
            <h3>Nelson Garey</h3>
            <h4>Advogado | Nelson Garey Advogados Associados</h4>
        </div>
      </BoxImageComment>
      <BoxImageLawyer>
        <img src={imageProfile} alt="imagem do perfil" />
      </BoxImageLawyer>
    </ContainerDetails>
  );
};

export default CommentPresentations;
