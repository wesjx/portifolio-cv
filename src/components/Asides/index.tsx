import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { AsideContainer } from "./styles";
import { MdEmail } from "react-icons/md";

export function Asides() {
    return (
        <AsideContainer>
            <ul>
                <li><a href="https://github.com/wesjx" target="_blank"><FaGithub /></a></li>
                <li><a href="https://www.linkedin.com/in/wesley-junio-627211260/"><FaLinkedin /></a></li>
                <li><a href="mailto:hello@wesleyjunior.com" target="_blank"><MdEmail /></a></li>
                <li><a href="https://wa.me/3530832090782" target="_blank"><FaWhatsapp /></a></li>
                <li><a href="https://www.instagram.com/wesjx" target="_blank"><FaInstagram /></a></li>
                <li></li>
            </ul>

        </AsideContainer>
    )
}