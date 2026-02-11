import { Navbar } from "../components/NavBar.jsx";
import '../styles/Home.scss'
import myImage from '../imgs/thumb2.jpg'
import { Link } from "react-router-dom";
import { RandomReveal } from "react-random-reveal";
import { useState } from "react";

export const Home = () => {
    const [key, setKey] = useState(0);
    return (
        <div className="home-container">
            <header>
                <Navbar />
            </header>
            <main className="main">
                <section className="information">
                    <article className="about">
                        <p className="intro-title">
                            <RandomReveal
                                key={key}
                                isPlaying={true}
                                duration={2}
                                characters={"INTRODUCTION"}
                                characterSet={['!', '@', '#', '$', '%', '^', '&', '*', '(', ')']}
                                updateInterval={0.05}
                                onComplete={() => {
                                    setTimeout(() => {
                                        setKey(prev => prev + 1);
                                    }, 10000);
                                }}
                            />
                        </p>
                        <div className="intro-wrapper">
                            <div className="intro-img">
                                <img src={myImage} alt="profile" className="img-me" />
                            </div>
                            <div className="intro-desc">
                                <p className="subtitle">Hello, my name is</p>
                                <p style={{ fontSize: "4.5rem" }}>ALEXANDER BROWN</p>
                                <p className="subtitle">I’m a front end developer that takes passion in ux <br />
                                    design and maintainable code
                                </p>
                                <div className="intro-buttons">
                                    <Link to='/projects' className="intro-btn">GITHUB</Link>
                                    <Link to='/skills-and-education' className="intro-btn">LINKEDIN</Link>
                                </div>
                            </div>
                        </div>
                    </article>
                    <article className="projects">
                        <p className="project-title">PROJECTS</p>
                        <div className="project-wrapper">


                        </div>
                    </article>
                    <article className="projects">

                    </article>
                    <article className="skills-and-education"></article>
                </section>
            </main>
        </div>
    )
};