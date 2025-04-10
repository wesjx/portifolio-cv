import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { AsideContainer } from "./styles";
import { MdEmail } from "react-icons/md";
import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";

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
                <li data-aos="fade-down"  data-aos-duration="1000"><a href="https://github.com/wesjx" target="_blank"><FaGithub /></a></li>
                <li data-aos="fade-down"  data-aos-duration="900"><a href="https://www.linkedin.com/in/wesley-junio-627211260/"><FaLinkedin /></a></li>
                <li data-aos="fade-down"  data-aos-duration="800"><a href="mailto:hello@wesleyjunior.com" target="_blank"><MdEmail /></a></li>
                <li data-aos="fade-down"  data-aos-duration="600"><a href="https://wa.me/3530832090782" target="_blank"><FaWhatsapp /></a></li>
                <li data-aos="fade-down"  data-aos-duration="500"><a href="https://www.instagram.com/wesjx" target="_blank"><FaInstagram /></a></li>
                <li ></li>
            </ul>

        </AsideContainer>
    )
}