import React from 'react';
import './Register.css';
import { Link } from 'react-router-dom'
import logo from '../../images/header_logo.svg'

function Register() {
    const error = "Что-то пошло не так..."
    return (
        <div className="register register__text-style">
            <Link to="/" className="register__logo">
                <img src={logo} alt="logo" />
            </Link>
            <h2 className="register__title">Добро пожаловать!</h2>
            <form className="register__form">
                <label className="register__form-item ">
                    <p className="register__form-label ">Имя</p>
                    <input className="register__form-input "/>
                    <span className="register__form-input-error ">{true ? error : ''}</span>
                </label>
                <label className="register__form-item ">
                    <p className="register__form-label ">E-mail</p>
                    <input className="register__form-input "/>
                    <span className="register__form-input-error ">{false ? error : ''}</span>
                </label>
                <label className="register__form-item ">
                    <p className="register__form-label ">Пароль</p>
                    <input className="register__form-input "/>
                    <span className="register__form-input-error ">{true ? error : ''}</span>
                </label>
                <button type="submit" className="register__form-submit ">Зарегистрироваться</button>
            </form>
            <div className="register__bottom">
                <p className="register__bottom-text ">Уже зарегистрированы?</p>
                <Link to="/signin" className="register__bottom-link ">Войти</Link>
            </div>
        </div>
    )
}

export default Register;
