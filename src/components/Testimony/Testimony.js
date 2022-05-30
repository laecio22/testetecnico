import React from "react";
import { ContainerTestimony , BoxTestimony} from "./styled";
import imagePersona from "../../assets/img/persona4.png";

const Testimony = ()=>{
    return(
        <ContainerTestimony>   
            <BoxTestimony>                
                <h1>Depoimentos</h1>
                <img src={imagePersona} alt="imagem da primeira pessoa que  fez um depoimento"/>
                <p>
                “Sou cliente do Renee há uns 12 anos. Nosso primeiro contato foi por intermédio de meu pai,
                 que já tem uma história de décadas com o querido Renee. 
                O excelente atendimento antes e pós venda e a alta qualidade dos materiais usados colocam 
                a Renee Trajar em um patamar acima dos  demais ramos”
                </p>
                <div>
                    <h3>William H. M. Garey</h3>
                    <h4>Advogado | Nelson Garey Advogados Associados</h4>
                </div>
            </BoxTestimony>       
           
        </ContainerTestimony>
    )
}

export default Testimony