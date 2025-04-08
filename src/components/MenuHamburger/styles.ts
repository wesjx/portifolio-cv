import styled from "styled-components";

export interface StyleBurgerProps {
    open: boolean
}

export const StyledBurger = styled.div<StyleBurgerProps>`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 1.5rem;
  right: 20px;
  z-index: 20;
  display: none;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open, theme }) => open ? theme.blue200 : theme.blue100};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    &:nth-child(2) {
      transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({ open }) => open ? 0 : 1};
    }

    &:nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`

export const Ul = styled.ul<StyleBurgerProps>`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  font-size: 1.5rem;
  line-height: 1.8;
  align-items: center;
  gap: 1.8rem;
  scroll-behavior: smooth;

  a:not(:last-child) {
    text-decoration: none;
    color: ${(props) => props.theme['blue100']};
    scroll-behavior: smooth;

    position: relative;
    font-size: clamp(14px, 8vw, 16px);
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
button {
  
}

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: ${(props) => props.theme['blue300']};
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;

    li {
      color: ${(props) => props.theme['blue100']};
    }
  }
`

export const HeaderContainer = styled.nav`
    background-color: #0F1035;
    position: fixed;
    z-index: 10;
    width: 100vw;
    height: 5rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    padding: 0 8rem;

  @media (max-width: 768px) {
    justify-content: space-between;
    padding: 0 2rem;
  }
`

export const ButtonResume = styled.a`
  border: 1px solid ${(props) => props.theme['blue100']};
  font-size: 1rem;
  text-decoration: none;
  border-radius: 8px;
  padding: 0.325rem 0.85rem;
  background-color: ${(props) => props.theme['blue100']};
  color: ${(props) => props.theme['blue400']}; 
  transition: background 0.2s;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    border: 1px solid ${(props) => props.theme['blue200']};
    background-color: transparent;
    color: ${(props) => props.theme['blue200']}
  }
`