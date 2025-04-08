import styled from "styled-components";

export const WorksContainer = styled.div`
    height: auto;
    width: 100%;
    scroll-snap-align: start;
    padding: 4em 0 5em 0;
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
        margin: 2rem 0;
        color: ${props => props.theme['blue200']};
        font-size: 2rem;
        text-align: center;
        border-bottom: 1px solid ${props => props.theme['blue100']};
        padding-bottom: 1.5rem;
        width: 75%;
    }

    ul {
        list-style: none;
        display: flex;
        gap: 1rem;
        padding-bottom: 2rem;

        svg {
            width: 24px;
            height: 24px;
            color: ${props => props.theme['blue200']}
        }
    }

`

export const Project = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;

    padding-bottom: 5rem;

    @media screen and (max-width: 1024px) {
        flex-direction: column;
    }
`

export const WorkImage = styled.div`
    width: 50%;
    padding-left: 1.5rem;
    display: flex;
    align-items: flex-start;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

    img{
        width: 100%
    }

    @media screen and (max-width: 1024px) {
        width: 90vw;
        padding: 0;
    }
`

export const WorksItem = styled.div`
    width: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: flex-start;
    padding: 1.5rem;

    h3{
        margin: 1.5rem;
        font-size: 2rem;
        color: ${props => props.theme['blue200']};
    }

    a{
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        color: ${props => props.theme['blue100']};
        margin: 1.5rem;
        gap: 1rem;
        position: relative;
        padding-bottom: 1rem;

        &:before {
            content: '';
            position: absolute;
            width: 100%;
            height: 2px;
            bottom: 0;
            left: 0;
            background-color: ${(props) => props.theme['blue100']}; 
            visibility: hidden;
            transform: scaleX(0);
            transition: all 0.2s ease-in-out; 
        }
  
        &:hover:before {
            visibility: visible;
            transform: scaleX(1); 
        }
    }

    @media screen and (max-width: 1024px) {
        width: 100%;
    }
`

export const Button = styled.a`
    text-decoration: none;
    color: ${props => props.theme['blue400']};
    background: ${props => props.theme['blue100']};
    padding: 1rem;
    border-radius: 8px;
    transition: background 0.2s;
    display: flex;
    gap: 0.5rem;
    align-items: center;

    svg {
        width: 20px;
        height: 20px;
    }

    &:hover{
        color: ${props => props.theme['blue200']};
        background: ${props => props.theme['blue400']};
        border: 1px solid ${(props) => props.theme['blue200']};
    }
`