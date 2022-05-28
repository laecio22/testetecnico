import styled from 'styled-components'
import { whitePrimary , bluePrimary} from '../../colors/colors'

export const MenuNav = styled.ul`
    list-style-type:none;
    display: flex;

    li {
        margin-right:30px;
        font-size:1.3rem;
    }
    
    a{
        text-decoration:none;
        color: ${whitePrimary};        
    }

    a:hover{
        color: ${bluePrimary};
        transition:0.8s;
    }
`