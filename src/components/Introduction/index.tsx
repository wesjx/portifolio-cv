import { useEffect, useState } from 'react';
import { IntroductionContainer, BlinkingCursor,ImageContainer } from './styles';
import profile from '../../assets/profile.jpg'
import { FaCss3Alt, FaGithub, FaHtml5, FaReact } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { SiTypescript } from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';
import { Asides } from '../Asides';

export function Introduction() {
    const [text, setText] = useState<string>('');
    const [showCursor, setShowCursor] = useState<boolean>(true);
    const fullText: string = "Hi! I'm Wesley";
    const typingSpeed: number = 210;

    useEffect(() => {
        let charIndex: number = 0;
        let timer: number;

        const typeWriter = () => {
            if (charIndex < fullText.length) {
                setText(prevText => prevText + fullText.charAt(charIndex));
                charIndex++;
                timer = setTimeout(typeWriter, typingSpeed);
            } else {
                clearTimeout(timer);
                setShowCursor(true);
            }
        };

        typeWriter();

        return () => {
            clearTimeout(timer)
        };
    }, []);

    return (
        <>
            <IntroductionContainer>
                <section>
                    <span>{text}
                        {showCursor && <BlinkingCursor>|</BlinkingCursor>}
                    </span>

                    <h1>Front-end <br /> Developer</h1>
                    <ul>
                        <li><FaHtml5 title="HTML5" /></li>
                        <li><FaCss3Alt title="CSS3" /></li>
                        <li><IoLogoJavascript title="JavaScript" /></li>
                        <li><SiTypescript title="Typescript" /></li>
                        <li><FaReact title="React" /></li>
                        <li><TbBrandNextjs title="NextJs" /></li>
                        <li><FaGithub title="GitHub" /></li>
                    </ul>
                </section>

                <ImageContainer>
                    <img src={profile} alt="Personal profile image" />
                </ImageContainer>
            </IntroductionContainer>
                <Asides />
        </>
    );
}
