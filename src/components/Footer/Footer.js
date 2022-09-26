import React from "react";
import './Footer.css';

function Footer(props) {

    return (
        <footer className="footer">
            <h2 className="footer__text-style footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
            <div className="footer__bottom">
                <p className="footer__text-style footer__copyrigth">© 2022</p>
                    <ul className="footer__nav-block">
                        <li className="footer__nav-item">
                            <a href="https://practicum.yandex.ru/profile/web/" className="footer__text-style footer__link" target="_blank" rel="noreferrer noopener">
                                Яндекс.Практикум
                            </a>
                        </li>
                        <li className="footer__nav-item">
                            <a href="https://github.com/maxiair1" className="footer__text-style footer__link" target="_blank" rel="noreferrer noopener">
                                Github
                            </a>
                        </li>
                        <li className="footer__nav-item">
                            <a href="https://www.linkedin.com/in/maxim-kozhekin-b0265833" className="footer__text-style footer__link" target="_blank" rel="noreferrer noopener">
                                LinkedIn
                            </a>
                        </li>
                    </ul>
            </div>
        </footer>
    )
}

export default Footer;
