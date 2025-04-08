import styled from "styled-components";

export const FooterContainer = styled.div`
    height: 10rem;
    font-family: "Courier Prime", monospace;
    color: ${props => props.theme['blue300']};

    display: flex;
    align-items: center;
    justify-content: center;
    

    p{
        padding: 1rem;
    }
`