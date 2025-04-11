import styled from "styled-components";
import { keyframes } from 'styled-components';

export const IntroductionContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    height: 80vh;
    width: 100%;
    padding-top: 10rem;

section {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    width: 40%;

    ul {
        display: flex;
        flex-direction: row;
        gap: 2rem;
        list-style: none;
        padding-top: 2rem;
        border-top: 1px solid;
        width: 100%;
        flex-wrap: wrap;
        
        svg{
            width: 1.5rem;
            height: 1.5rem;
        }

        li:hover{
            color: ${(props) => props.theme['blue200']}
        }
    }
}    

span {
    font-family: "Courier Prime", monospace;
    font-size: clamp(16px, 8vw, 18px);
    line-height: 1.3;
    margin-bottom: 1rem;
}

h1 {
    font-size: clamp(60px, 8vw, 90px);
    padding-bottom: 1rem;
}

@media (max-width: 1200px) {
    flex-direction: column;
    gap: 3rem;
    padding: 10rem 0 3rem 0;

    div, section {
        width: 100%;
        padding: 0 2rem;
        justify-content: center;
        align-items: center;
    }

     ul:first-of-type {
        justify-content: center;
        width: 70%;
    }
}
`

const blinkAnimation = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const BlinkingCursor = styled.span`
  animation: ${blinkAnimation} 1s infinite;
`;

export const ImageContainer = styled.div`
  width: 35%;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    max-width: 60%;
    border-radius: 8px;
  }

@media (max-width: 1200px) {
    img {
        min-width: 40%;
        max-width: 5rem;
    }
}
@media (max-width: 600px) {
    img {
        max-width: 60%;
    }
}
`;
