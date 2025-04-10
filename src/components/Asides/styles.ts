import styled from "styled-components";

export const AsideContainer = styled.aside`
   > ul {
       z-index: 10;
        display: flex;
        flex-direction: column;
        list-style: none; 
        gap: 1.5rem;
        position: fixed;
        align-items: center;
        bottom: 1px;
        right: 60px;

        svg{
            width: 35px;
            height: 35px;
        } 

        li{
            transition: transform 0.3s ease;
            a{
                color: ${(props) => props.theme['blue100']};
            }
        }

        li:last-child{
            height: 195px;
            width: 1px;
            background-color: ${(props) => props.theme['blue100']};
            margin: 0 10px;
        }

        a:hover, li:hover{
            color: ${(props) => props.theme['blue200']};
            cursor: pointer;
            transform: translateY(-5px);
        }
    }

    @media (max-width: 600px) {
        display: none;
    }
`