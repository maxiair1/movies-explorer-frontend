import React from 'react';
import './PageNotFound.css';
import { Link } from 'react-router-dom';

function PageNotFound() {
    return (
        <div className="notfound">
            <h1 className="notfound__title notfound__text-style">404</h1>
            <p className="notfound__subtitle notfound__text-style">Страница не найдена</p>
            <Link to="/" className="notfound__link notfound__text-style">Назад</Link>
        </div>
    )
}

export default PageNotFound;
