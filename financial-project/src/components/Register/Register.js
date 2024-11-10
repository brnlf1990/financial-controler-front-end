import React from 'react';
import './Register.css';
import { Link, useNavigate } from 'react-router-dom';
import * as auth from '../../utils/auth';
import revenue from '../../images/earnings-banner.png';
import logo from '../../images/ebroxo.png';
function Register({ handleLoggedIn }) {
  const [name, setName] = React.useState('');
  const [about, setAbout] = React.useState('');
  const [avatar, setAvatar] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [emailError, setEmailError] = React.useState('');
  const [errors, setErrors] = React.useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    auth
      .register({ email, password, name, about, avatar })
      .then((data) => {
        if (data.message === 'Este e-mail já está registrado.') {
          setEmailError(data.message);
        } else if (data.errors) {
          setErrors(data.errors);
        }

        if (data.data) {
          setEmailError('');
          setErrors('');
          navigate('/signin', {
            state: { message: 'Registro realizado com sucesso! Faça login.' },
          });
        }
      })
      .catch((error) => {
        console.log('entrou catch');
        if (error.error) {
          console.log(error);

          setErrors(error.errors);
        }
        console.log('[Login] Error', error);
      });
  };

  return (
    <div className="register">
      <div className="register__container">
        <div className="register__information-container">
          <img className="register__logo" src={logo} />
          <img className="register__graph" src={revenue} />
          <h2 className="register__text-title">Não perca tempo!</h2>
          <span className="register__text">
            Registre-se no aplicativo e controle seus gastos da melhor forma!
          </span>
        </div>
        <div className="register__form-container">
          <h2 className="register__title">Registre-se</h2>
          <h3 className="register__sub-title">
            Tenha melhor controle sobre seu dinheiro!
          </h3>
          <form className="register__form" onSubmit={handleSubmit}>
            <input
              name="name"
              placeholder="Nome"
              className="register__input register__input--name"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <span className="register__error register__error--name">
              {errors.name}
            </span>
            <input
              name="about"
              placeholder="Sobre"
              className="register__input register__input--about"
              value={about}
              onChange={(e) => setAbout(e.target.value)}
            />
            <span className="register__error register__error--about">
              {errors.about}
            </span>
            <input
              name="avatar"
              placeholder="Avatar"
              className="register__input register__input--avatar"
              value={avatar}
              onChange={(e) => setAvatar(e.target.value)}
            />
            <span className="register__error register__error--avatar">
              {errors.avatar}
            </span>
            <input
              name="email"
              placeholder="E-mail"
              className="register__input register__input--email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <span className="register__error register__error--email">
              {emailError}
            </span>
            <input
              name="password"
              type="password"
              placeholder="Senha"
              className="register__input register__input--passoword"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span className="register__error register__error--password">
              {errors.password}
            </span>
            <button className="register__button" type="submit">
              Entrar
            </button>
            <p className="register__to-login">
              Já tem conta? Aperte <Link to="/signin">aqui!</Link> para fazer o
              login!
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
