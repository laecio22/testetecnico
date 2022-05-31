import React from "react";
import { ContainerContact, 
    TitleSectionContact,
    ContainerGroupContact,
    BoxGroupContact,
    BoxFormContact,
    FormContact

 } from "./styled";

const Contact  = ()=>{
    return (
        <ContainerContact id="sectionContacts">
            <TitleSectionContact>Contato</TitleSectionContact>
            <ContainerGroupContact>
                <BoxGroupContact>
                    <div>
                        <h2>Telefones</h2>
                        <p>+55 (11) 3088-0757 </p>
                        <h2>Email</h2>
                        <p>renee@reneetrajar.com.br</p>
                        <div>
                            <h2>Atendimento Personalizado</h2>
                            <button>Clique aqui!</button>
                        </div>
                        
                    </div>
                </BoxGroupContact>
                <BoxFormContact>
                    <FormContact>
                       <input placeholder="nome" type="text"/>
                       <input placeholder="email" type="email" />  
                       <textarea placeholder="mensagem"></textarea>  
                       <button>Enviar Mensagem</button>                   
                    </FormContact>
                </BoxFormContact>
            </ContainerGroupContact>
        </ContainerContact>
    )
}

export default Contact