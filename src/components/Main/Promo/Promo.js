import React from 'react';
import { Link } from 'react-router-dom';
import './Promo.css';
import promoLogo from '../../../images/landing-logo.svg';

function Promo() {
    return (
        <div className="promo">
            <div className="promo__text-block">
                <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
                <p className="promo__subtitle">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
                <Link className="promo__link">Узнать больше</Link>
            </div>
            <div className="promo__logo-block">
                <img src={promoLogo} className="promo__logo"/>
            </div>
        </div>
    )
}

export default Promo;
