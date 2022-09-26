import React from 'react';
import './AboutMe.css';
import SectionHeader from '../SectionHeader/SectionHeader';
import photo from '../../../images/self.jpg'

function AboutMe() {
    return (
        <section className="about-me">
            <SectionHeader text="Студент" />
            <div className="about-me__content">
                <div className="about-me__text">
                    <h2 className="about-me__title">Максим</h2>
                    <p className="about-me__subtitle">Фронтенд-разработчик, 41 год</p>
                    <p className="about-me__description">
                        Я живу в Москве, закончил факультет электроники и математики МИЭМ. У меня есть жена
                        и двое детей. Я люблю слушать музыку, а ещё увлекаюсь велопоходами. Недавно начал кодить.
                        С 2008 года работаю в компании «Беко». Сейчас заканчиваю курс по веб-разработке.
                        Хочу работать и развиваться в этом направлении.
                    </p>
                    <div className="about-me__social">
                        <a href="https://www.linkedin.com/in/maxim-kozhekin-b0265833" className="about-me__social-link" target="_blank" rel="noreferrer noopener">
                            LinedIn
                        </a>
                        <a href="https://github.com/maxiair1" className="about-me__social-link" target="_blank" rel="noreferrer noopener">
                            Github
                        </a>
                    </div>
                </div>
                <img src={photo} className="about-me__photo" alt="Фото"/>
            </div>
        </section>
    )
}

export default AboutMe;
