import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom'
import logo from '../../images/header_logo.svg'

function Login() {
    const error = "Что-то пошло не так..."
    return (
        <div className="Login">
            <Link to="/" className="register__logo">
                <img src={logo} alt="logo" />
            </Link>
            <h2 className="register__titile register__text-style">Добро пожаловать!</h2>
            <form className="register__form">
                <label className="register__form-label register__text-style">Имя</label>
                <input className="register__form-input register__text-style"/>
                <span className="register__form-input-error register__text-style">{error}</span>
                <label className="register__form-label register__text-style">E-mail</label>
                <input className="register__form-input register__text-style"/>
                <span className="register__form-input-error register__text-style">{error}</span>
                <label className="register__form-label register__text-style">Пароль</label>
                <input className="register__form-input register__text-style"/>
                <span className="register__form-input-error register__text-style">{error}</span>
                <button type="submit" className="register__form-submit register__text-style">Зарегистрироваться</button>
            </form>
            <div className="register__bottom">
                <p className="register__bottom-text register__text-style">Уже зарегистрированы?</p>
                <Link to="/signin" className="register__bottom-link register__text-style">Войти</Link>
            </div>
        </div>
    )
}

export default Login;
