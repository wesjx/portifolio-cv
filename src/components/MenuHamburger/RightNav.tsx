import { ButtonResume, StyleBurgerProps, Ul } from './styles';
import resume from '../../assets/cv.pdf'

export function RightNav({ open }: StyleBurgerProps) {

  return (
    <Ul open={open}>
      <a href='#about'>About</a>
      <a href='#experience'>Experience</a>
      <a href='#works'>Projects</a>
      <ButtonResume href={resume} target='_blank'>Resume</ButtonResume>
    </Ul>
  )
}
