import React from "react";
import './Header.css';
import { Link } from 'react-router-dom';
import headerLogo from '../../images/header_logo.svg';

function Header(props) {

    return (
        <div className={ `header__block ${ props.loggedIn ? '' : 'header__block_gray' }` }>
            <Link to={ '/' }>
                <img src={ headerLogo } alt="logo" className={ 'header__logo' }/>
            </Link>
            { props.loggedIn ?
                <nav>
                    <li>1</li>
                </nav> :
                <nav className="header__nav-block">
                    <Link to="/signup" className="header__nav-item header__registration">Регистрация</Link>
                    <Link to="/signin" className="header__nav-item header__login">Войти</Link>
                </nav>
            }
        </div>
    )
}

export default Header;
