import React from "react";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="register">
      <form className="register__form">
        <h2 className="register__title">Регистрация</h2>
        <label htmlFor="email" className="register__label"></label>
        <input
          type="email"
          className="register__input register__input_email"
          id="email"
          name="email"
          placeholder="Email"
          required
        />
        <label htmlFor="password" className="register__label"></label>
        <input
          type="password"
          className="register__input register__input_password"
          id="password"
          name="password"
          placeholder="Пароль"
          required
        />
        <button type="submit" className="register__button">
          Зарегистрироваться
        </button>
      </form>
      <div className="register__signin-container">
        <p className="register__text">Уже зарегистрированы?</p>
        <Link to="/sign-in" className="register__signin">
          Войти
        </Link>
      </div>
    </div>
  );
}

export default Register;
