import React from 'react';
import './AboutProject.css';
import SectionHeader from '../SectionHeader/SectionHeader';

function AboutProject() {
    return (
        <section className="about-project">
            <SectionHeader text="О проекте" />
            <div className="about-project__content">
                <div className="about-project__content-text">
                    <h3 className="about-project__content-title">
                        Дипломный проект включал 5 этапов
                    </h3>
                    <p className="about-project__content-subtitle">
                        Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные
                        доработки.
                    </p>
                </div>
                <div className="about-project__content-text">
                    <h3 className="about-project__content-title">
                        На выполнение диплома ушло 5 недель
                    </h3>
                    <p className="about-project__content-subtitle">
                        У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно
                        защититься.
                    </p>
                </div>
            </div>
            <div className="about-project__content">
                <div className="about-project__content-period">
                    <p className="about-project__content-period-time about-project__content-period-time_blue">1 неделя</p>
                    <p className="about-project__content-period-description">Back-end</p>
                </div>
                <div className="about-project__content-period">
                    <p className="about-project__content-period-time">4 недели</p>
                    <p className="about-project__content-period-description">Front-end</p>
                </div>
            </div>
        </section>
    )
}

export default AboutProject;
