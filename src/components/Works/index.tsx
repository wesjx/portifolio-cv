import { FaCss3Alt, FaExternalLinkAlt, FaGithub, FaHtml5 } from "react-icons/fa";
import { Button, Project, WorkImage, WorksContainer, WorksItem } from "./styles";
import workGarage63 from '../../assets/projects-garagem-63.png'
import workBorcceleCafe from '../../assets/projects-borccele-cafe.png'
import workWesleyJunior from '../../assets/projects-wesley-junior.png'
import workSnitap from "../../assets/projects-snitap.png"

import { IoLogoJavascript } from "react-icons/io";

export function Works() {
    return (
        <>
            <WorksContainer id="works">
                <h2>Projects I've worked</h2>

                <Project>
                    <WorkImage>
                        <img src={workWesleyJunior} alt="" />
                    </WorkImage>
                    <WorksItem>
                        <h3>Wesley Junior <br/> Freelancer</h3>
                        <ul>
                            <li><FaHtml5 title="HTML5" /></li>
                            <li><FaCss3Alt title="CSS3" /></li>
                            <li><IoLogoJavascript title="JavaScript" /></li>
                        </ul>
                        <p>
                        I developed this website for myself as a freelance web presence. Meticulously designed down to the finest detail, this project has honed my skills and enriched my experience.
                        </p>
                        <a href="https://www.wesleyjunior.com/" target="_blank">
                            <FaExternalLinkAlt />
                            <p>Go to the website!</p>
                        </a>
                    </WorksItem>
                </Project>
                <Project>
                    <WorkImage>
                        <img src={workGarage63} alt="" />
                    </WorkImage>
                    <WorksItem>
                        <h3>Garagem 63</h3>
                        <ul>
                            <li><FaHtml5 title="HTML5" /></li>
                            <li><FaCss3Alt title="CSS3" /></li>
                            <li><IoLogoJavascript title="JavaScript" /></li>
                        </ul>
                        <p>
                            Developed an online presence for a local car wash with a dynamic website. Our project showcased its
                            premium services, emphasizing convenience through online appointment scheduling. Improved user
                            experience by promoting a seamless and efficient way for customers to discover and interact with
                            your services.
                        </p>
                        <a href="https://garagem-63.vercel.app/" target="_blank">
                            <FaExternalLinkAlt />
                            <p>Go to the website!</p>
                        </a>
                    </WorksItem>

                </Project>

                <Project>
                    <WorkImage>
                        <img src={workBorcceleCafe} alt="" />
                    </WorkImage>
                    <WorksItem>
                        <h3>Borccele Cafe</h3>
                        <ul>
                            <li><FaHtml5 title="HTML5" /></li>
                            <li><FaCss3Alt title="CSS3" /></li>
                            <li><IoLogoJavascript title="JavaScript" /></li>
                        </ul>
                        <p>
                        Site developed as an example project for a café, featuring a completely minimalist design and carefully chosen colors to deliver an elegant and enjoyable website. Inspired by the best café websites, all details are illustrative.
                        </p>
                        <a href="https://borcelle-cafe.vercel.app/" target="_blank">
                            <FaExternalLinkAlt />
                            <p>Go to the website!</p>
                        </a>
                    </WorksItem>
                </Project>

                <Project>
                    <WorkImage>
                        <img src={workSnitap} alt="" />
                    </WorkImage>
                    <WorksItem>
                        <h3>Snitap Patins</h3>
                        <ul>
                            <li><FaHtml5 title="HTML5" /></li>
                            <li><FaCss3Alt title="CSS3" /></li>
                        </ul>
                        <p>
                        Website developed using CSS animations, using animations and transform, for a roller skate store.
                        </p>
                        <a href="https://wesjx.github.io/Snitap-Patins/" target="_blank">
                            <FaExternalLinkAlt />
                            <p>Go to the website!</p>
                        </a>
                    </WorksItem>
                </Project>

                <Button href="https://github.com/wesjx" target="_blank">See more projects I'm working <FaGithub /></Button>

            </WorksContainer>
        </>
    )
}
