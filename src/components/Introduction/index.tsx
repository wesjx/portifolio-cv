import { useEffect, useState } from 'react';
import { IntroductionContainer, BlinkingCursor, ImageContainer } from './styles';
import profile from '../../assets/profile.jpg'
import { FaCss3Alt, FaGithub, FaHtml5, FaReact } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { SiTypescript } from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';
import { Asides } from '../Asides';
import AOS from "aos";
import 'aos/dist/aos.css';

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

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
            easing: 'ease',
        });
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
                        <li><FaHtml5 title="HTML5" data-aos="fade-right" data-aos-duration="1100"/></li>
                        <li><FaCss3Alt title="CSS3" data-aos="fade-right" data-aos-duration="1000"/></li>
                        <li><IoLogoJavascript title="JavaScript" data-aos="fade-right" data-aos-duration="900"/></li>
                        <li><SiTypescript title="Typescript" data-aos="fade-right" data-aos-duration="800"/></li>
                        <li><FaReact title="React" data-aos="fade-right" data-aos-duration="700"/></li>
                        <li><TbBrandNextjs title="NextJs" data-aos="fade-right" data-aos-duration="600"/></li>
                        <li><FaGithub title="GitHub" data-aos="fade-right" data-aos-duration="500"/></li>
                    </ul>
                </section>

                <ImageContainer data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine">
                    <img src={profile} alt="Personal profile image" />
                </ImageContainer>
            </IntroductionContainer>
            <Asides />
        </>
    );
}
