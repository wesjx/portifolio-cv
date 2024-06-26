import { useState } from 'react';
import {RightNav} from './RightNav';
import { StyledBurger } from './styles';

export function Burger() {
  const [open, setOpen] = useState(false)
  
  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <RightNav open={open}/>
    </>
  )
}
