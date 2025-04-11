import { AsideContainer } from "./styles";
import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";
import { GithubIcon } from "../Icons/github";
import { LinkedinIcon } from "../Icons/linkedin";
import { AtSignIcon } from "../Icons/mailIcon";
import { MessageSquareMoreIcon } from "../Icons/messageIcon";
import { InstagramIcon } from "../Icons/instagramIcon";

export function Asides() {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
            easing: 'ease',
        });
    }, []);

    return (
        <AsideContainer>
            <ul>
                <li data-aos="fade-down" data-aos-duration="1000">
                    <a href="https://github.com/wesjx" target="_blank">
                        <GithubIcon title="GitHub" />
                    </a>
                </li>
                <li data-aos="fade-down" data-aos-duration="900"><a href="https://www.linkedin.com/in/wesley-junio-627211260/">
                    <LinkedinIcon title="LinkedIn" />
                </a></li>
                <li data-aos="fade-down" data-aos-duration="800"><a href="mailto:wesjrpiri@gmail.com" target="_blank">
                    <AtSignIcon title="Mail" />
                </a></li>
                <li data-aos="fade-down" data-aos-duration="600"><a href="https://wa.me/3530832090782" target="_blank">
                    <MessageSquareMoreIcon title="Whatsapp"/>
                </a></li>
                <li data-aos="fade-down" data-aos-duration="500"><a href="https://www.instagram.com/wesjx" target="_blank">
                    <InstagramIcon title="Instagram"/>
                </a></li>
                <li ></li>
            </ul>

        </AsideContainer>
    )
}