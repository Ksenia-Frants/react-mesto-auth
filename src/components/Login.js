import React from "react";

function Login() {
  return (
    <div className="login">
      <form className="login__form">
        <h2 className="login__title">Вход</h2>
        <label htmlFor="email" className="login__label"></label>
        <input
          type="email"
          className="login__input login__input_email"
          id="email"
          name="email"
          placeholder="Email"
          required
        />
        <label htmlFor="password" className="login__label"></label>
        <input
          type="password"
          className="login__input login__input_password"
          id="password"
          name="password"
          placeholder="Пароль"
          required
        />
        <button type="submit" className="login__button">
          Войти
        </button>
      </form>
    </div>
  );
}

export default Login;
