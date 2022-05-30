import React from "react";
import { ContainerApresentations, BoxTextPresentations } from "./styled";
import imageTrajar from '../../assets/img/crossed.png';
import imageAspas from '../../assets/img/aspas.png';

const Presentations = ()=>{
    return(
        <ContainerApresentations>
            <img src={imageTrajar} alt="imagem de trajar"/>
            <BoxTextPresentations>
                <h1>Renee Trajar</h1>
                <p>Com mais de 35 anos de experiência em camisas, calças e ternos sob medida, 
                    possuímos profissionais experientes e altamente qualificados
                </p>
                <p> Cada cliente tem seu molde exclusivamente desenvolvido para seu biotipo através das medidas tiradas
                     pelo próprio Sr. Renee, no escritório ou residência do cliente.
                </p>
                <blockquote>“Nosso objetivo é superar a expectativa do cliente proporcionando-lhe satisfação ao usar nossos produtos, 
                    aliado a um relacionamento franco e honesto, valorizando o ser humano.”
                </blockquote>
                <img src={imageAspas} alt="imagem de aspas representando citação"/>
                <span>Renee Trajar</span>                
                <button>Agende uma visita!</button>
            </BoxTextPresentations>

        </ContainerApresentations>
    )
}

export default Presentations