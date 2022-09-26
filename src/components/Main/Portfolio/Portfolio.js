import React from 'react';
import './Portfolio.css';
import arrow from '../../../images/arrow_font-main.svg'

function Portfolio() {
    return (
        <section className="portfolio">
            <h2 className="portfolio__title">Портфолио</h2>
            <ul className="portfolio__list">
                <li className="portfolio__item">
                    <p className="portfolio__item-text">Статичный сайт</p>
                    <a href="https://github.com/maxiair1/how-to-learn" className="portfolio__item-link" target="_blank" rel="noreferrer noopener">
                        <img src={arrow} className="portfolio__item-arrow" alt="icon"/>
                    </a>
                </li>
                <li className="portfolio__item">
                    <p className="portfolio__item-text">Адаптивный сайт</p>
                    <a href="https://github.com/maxiair1/russian-travel" className="portfolio__item-link" target="_blank" rel="noreferrer noopener">
                        <img src={arrow} className="portfolio__item-arrow" alt="icon"/>
                    </a>
                </li>
                <li className="portfolio__item">
                    <p className="portfolio__item-text">Одностраничное приложение</p>
                    <a href="https://github.com/maxiair1/react-mesto-api-full" className="portfolio__item-link" target="_blank" rel="noreferrer noopener">
                        <img src={arrow} className="portfolio__item-arrow" alt="icon"/>
                    </a>
                </li>
            </ul>
        </section>
    )
}

export default Portfolio;
