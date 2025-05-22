import React from 'react';
import '../App.css';

const About = () => {
    return (
        <section id="about" class="card">
            <div className="section-content">
                <img src="../img/about.png" alt="about" className="section-image" />
                <div className="text-content">
                    <h2>About Me</h2>
                    <p>
                        Hello! I'm Santiago Gómez de la Torre Romero, a passionate and dedicated web developer. With a
                        profound love for coding and a creative mindset, I strive to create web experiences that are not
                        only
                        visually appealing but also highly functional.
                    </p>
                    <p>
                        My journey in web development began with a curiosity to understand how things work on the internet.
                        Over the years, I've honed my skills in HTML, CSS, JavaScript, and React transforming ideas into
                        interactive and responsive websites.
                    </p>
                    <p>
                        Whether it's crafting elegant user ether it's crafting elegant user interfaces, diving into the
                        intricacies of backend development, or
                        experimenting with theinterfaces, diving into the intricacies of backend development, or
                        experimenting with the latest technologies, I'm always eager to expand my knowledge and embrace new
                        challenges.
                    </p>
                    <p>
                        Let's collaborate and turn your ideas into reality! Feel free to explore my portfolio and projects,
                        and don't hesitate to reach out for any inquiries or opportunities.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default About;
