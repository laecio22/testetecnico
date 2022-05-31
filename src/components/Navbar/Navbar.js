import React from "react";
import { MenuNav } from "./styled";

const Navbar = ()=>{
    return(
       <MenuNav>
           <li><a href="#sectionPresentations">EMPRESA</a></li>
           <li><a href="#sectionShirt">CAMISARIA</a></li>
           <li><a href="#sectionTailor">ALFAIATARIA</a></li>
           <li><a href="#sectionTestimony">DEPOIMENTOS</a></li>
           <li><a href="#sectionContacts" >CONTATO</a></li>
       </MenuNav>
    )
}

export default Navbar