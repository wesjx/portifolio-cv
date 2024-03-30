import {Burger} from './Burger';
import { HeaderContainer } from './styles';
import Logo from '../../assets/logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={Logo} width={45}/>
      <Burger />
    </HeaderContainer>
  )
}
