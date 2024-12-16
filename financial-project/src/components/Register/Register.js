import React from 'react';
import './Register.css';
import { Link, useNavigate } from 'react-router-dom';
import * as auth from '../../utils/auth';
import revenue from '../../images/earnings-banner.png';
import logo from '../../images/ebroxo.png';
import mobileLogo from '../../images/ebroxo.png';
function Register() {
  const [name, setName] = React.useState('');
  const [about, setAbout] = React.useState('');
  const [avatar, setAvatar] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [errors, setErrors] = React.useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    auth
      .register({ email, password, name, about, avatar })
      .then((data) => {

        if (data.data) {
          setErrors('');
          navigate('/signin', {
            state: { message: 'Registro realizado com sucesso! Faça login.' },
          });
        }
      })
      .catch((errors) => {

        setErrors('Preeccher corretamente os campos');
      });
  };

  return (
    <div className="register">
      <div className="register__container">
        <div className="register__information-container">
          <img className="register__logo" src={logo} alt='logo' />
          <img className="register__graph" src={revenue} alt='graph register'/>
          <h2 className="register__text-title">Não perca tempo!</h2>
          <span className="register__text">
            Registre-se no aplicativo e controle seus gastos da melhor forma!
          </span>
        </div>
        <img className="login-mobile__logo" src={mobileLogo} alt="logo" />
        <div className="register__form-container">
          <h2 className="register__title">Registre-se</h2>
          <span className="register__error">{errors}</span>
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

            <input
              name="about"
              placeholder="Sobre"
              className="register__input register__input--about"
              value={about}
              onChange={(e) => setAbout(e.target.value)}
            />

            <input
              name="avatar"
              placeholder="Avatar"
              className="register__input register__input--avatar"
              value={avatar}
              onChange={(e) => setAvatar(e.target.value)}
            />

            <input
              name="email"
              placeholder="E-mail"
              className="register__input register__input--email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              name="password"
              type="password"
              placeholder="Senha"
              className="register__input register__input--passoword"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button className="register__button" type="submit">
              Entrar
            </button>
            <p className="register__to-login">
              Já tem conta? Aperte <Link className="register__signin_link" to="/signin">aqui!</Link> para fazer o
              login!
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
