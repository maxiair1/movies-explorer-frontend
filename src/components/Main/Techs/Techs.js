import React from 'react';
import './Techs.css';
import SectionHeader from '../SectionHeader/SectionHeader';

function Techs() {
    return (
        <section className="techs">
            <SectionHeader text="Технологии" />
            <div className="techs__context">
                <h2 className="techs__title">7 технологий</h2>
                <p className="techs__subtitle">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
            </div>
            <ul className="techs__context techs__list">
                <li className="techs__item">HTML</li>
                <li className="techs__item">CSS</li>
                <li className="techs__item">JS</li>
                <li className="techs__item">React</li>
                <li className="techs__item">Git</li>
                <li className="techs__item">Express.js</li>
                <li className="techs__item">mongoDB</li>
            </ul>
        </section>
    )
}

export default Techs;
