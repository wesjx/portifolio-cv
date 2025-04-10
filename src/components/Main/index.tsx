import { IoMdArrowDropright } from "react-icons/io";
import { AboutContainer, ExperienceContainer } from "./styles";
import { VscCircleSmallFilled } from "react-icons/vsc";
import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";

export function Main() {
        useEffect(() => {
            AOS.init({
                duration: 1000,
                once: false,
                easing: 'ease',
            });
        }, []);
    return (
        <>
            <AboutContainer id="about" data-aos="fade-up">
                <div>
                    <h2>About-me</h2>
                    <article>
                        <p> Hello! I'm Wesley Junio, a meticulous Front-end Developer proficient in HTML, CSS, JavaScript, React, TypeScript, and Next.js. Currently based in Ireland, I bring 25 years of passion for technology to every project. Detail-oriented and enthusiastic about innovation, I'm constantly seeking opportunities for growth and evolution in the tech industry.
                        </p>

                        <ul>
                            <li><IoMdArrowDropright />{'  '}React</li>
                            <li><IoMdArrowDropright />{'  '}TypeScript</li>
                            <li><IoMdArrowDropright />{'  '}JavaScript</li>
                            <li><IoMdArrowDropright />{'  '}HTML5</li>
                            <li><IoMdArrowDropright />{'  '}CSS3</li>
                        </ul>
                    </article>

                </div>

            </AboutContainer>

            <ExperienceContainer id="experience">
                <h2 data-aos="fade-up">Where I’ve Worked</h2>

                <ul data-aos="fade-up">
                    <div data-aos="fade-up">
                        <h3><IoMdArrowDropright />Car Wash</h3>
                        <span>2017-2018</span>
                        <p>
                            <VscCircleSmallFilled /> Co-founded and managed operations for a successful car wash business, overseeing marketing strategies, scheduling, and financial management.
                        </p>
                        <VscCircleSmallFilled /> Played a key role in establishing and growing the business, demonstrating strong leadership and organizational skills.
                        <p>
                            <VscCircleSmallFilled /> Led marketing efforts, developed promotional campaigns, and managed customer relations to drive business growth and ensure customer satisfaction.
                        </p>
                        <p>
                            <VscCircleSmallFilled /> Responsible for financial planning, budgeting, and accounting, contributing to the financial success and stability of the venture.
                        </p>
                        <p>
                            <VscCircleSmallFilled /> Demonstrated entrepreneurial spirit, adaptability, and problem-solving abilities in a dynamic business environment.
                        </p>

                    </div>
                    <div data-aos="fade-up">
                        <h3><IoMdArrowDropright />Betha Shield - IT Manager</h3>
                        <span>2018 - 2022</span>

                        <p><VscCircleSmallFilled /> Designed hardware and software solutions that minimised
                            downtime, generating cost savings.</p>
                        <p><VscCircleSmallFilled /> Implemented new connectivity network configurations,
                            improving overall network capabilities.</p>
                        <p><VscCircleSmallFilled /> Maintained and performed hardware repairs on computers and
                            peripherals, including Windows, Mac, Linux, and servers devices.</p>
                        <p><VscCircleSmallFilled /> Organised workspaces for employees with computer, monitors
                            and associated cabling or equipment.</p>
                        <p><VscCircleSmallFilled /> Conducted server back-up and recovery operations in line with
                            protocols.</p>
                    </div>
                    <div data-aos="fade-up">
                        <h3><IoMdArrowDropright />Home Gallery</h3>
                        <span>2022 - Now</span>
                        <p>
                            <VscCircleSmallFilled />Provide IT services and support, including website maintenance and inventory management.
                        </p>
                        <p><VscCircleSmallFilled />Responsible for organizing website inventory, processing sales orders, and managing warehouse operations.
                        </p>
                        <p><VscCircleSmallFilled />Ensure efficient inventory management and smooth functioning of the e-commerce platform.</p>
                        <p><VscCircleSmallFilled />Contribute to the optimization of warehouse processes and procedures to enhance productivity and customer satisfaction.</p>
                    </div>
                </ul>

            </ExperienceContainer>

        </>
    )
}