import React from "react";
import { MenuNav } from "./styled";

const Navbar = ()=>{
    return(
       <MenuNav>
           <li><a href="#">EMPRESA</a></li>
           <li><a href="#">CAMISARIA</a></li>
           <li><a href="#">ALFAIATARIA</a></li>
           <li><a href="#">DEPOIMENTOS</a></li>
           <li><a href="#">CONTATO</a></li>
       </MenuNav>
    )
}

export default Navbar