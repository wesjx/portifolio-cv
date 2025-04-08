import styled from "styled-components";

export const AboutContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding-top: 10rem;   

    div {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-left: 10rem;
    }

    article {
        width: 80%;
        border-left: 1px solid #fff;
        border-bottom: 1px solid #fff;
        padding-bottom: 2rem;
    }

    h2 {
        margin: 2rem 0 0.5rem 0;
        color: ${props => props.theme['blue200']};
        font-size: 2rem;
    }

    p {
        padding: 1.5rem;
        line-height: 1.3;
    }

    ul {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 0.8rem 4rem;
        width: 41%;
        padding-left: 3rem;
        list-style: none;
        align-items: center;

        svg{
            color: ${props => props.theme['blue200']}
        }
    }

    @media (max-width: 780px) {
        div {
            margin-left: 1.5rem;
        }

        article {
            width: 90%;
        }
    }
`

export const ExperienceContainer = styled.article`
    padding-top: 10rem;
    height: auto;
    margin-bottom: 5rem;
    width: 83%;

    h2 {
        margin: 0.5rem 9.8rem;
        color: ${props => props.theme['blue200']};
        font-size: 2rem;
    }

    ul {
        border-left: 1px solid #fff;
        border-bottom: 1px solid #fff;
        padding: 0 1.5rem;
        margin-left: 10rem;
        line-height: 1.3;

        div {
            border-bottom: 1px solid ${props => props.theme['blue100']};

            svg, span{
                color: ${props => props.theme['blue200']}
            }

            h3{
                padding: 2rem 0 0 0;
            }

            p{
                padding: 0.8rem 0 ;
            }
        }

        div:last-child{
            border: none;
        }
    }

    @media (max-width: 780px) {
            width: 90%;

        ul, h2 {
            margin-left: 1.5rem;
        }
    }
`
