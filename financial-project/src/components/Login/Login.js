import React, { useContext } from 'react';
import './Login.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import * as auth from '../../utils/auth';
import { setAuthorizationToken } from '../../utils/revenueApi';
import revenue from '../../images/revenue.png';
import logo from '../../images/ebroxo.png';
import mobileLogo from '../../images/ebroxo.png';
import { CurrentUserContext } from '../context/Usercontext';
function Login({ handleLoggedIn }) {
  const [message, setMessage] = React.useState('');
  const location = useLocation();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [errorMessage, setErrorMessage] = React.useState('');
  const { setCurrentUser } = useContext(CurrentUserContext);
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();

    auth
      .login({ email, password })
      .then((response) => {
        if (response.status === 401) {
          setErrorMessage(
            'Email ou senha invalido, por favor verifique os campos.'
          );
          return;
        }
        if (response.ok) {
          response.json().then((data) => {
            if (data) {
              setAuthorizationToken(data.token);
              localStorage.setItem('token', data.token);
              setCurrentUser(data.user);
              navigate('/main');
              handleLoggedIn();

            }
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  React.useEffect(() => {
    if (location.state) {
      setMessage(location.state.message);
    }
    const timer = setTimeout(() => setMessage(''), 3000);
    return () => clearTimeout(timer);
  }, [location]);

  return (
    <div className="login">
      <div className="login__container">
        <div className="login__information-container">
          <img className="login__logo" src={logo} alt="logo" />
          <img className="login__graph" src={revenue} alt="graph logo" />
          <h2 className="login__text-title">Otimize seu tempo!</h2>
          <span className="login__text">
            Utilize nosso aplicativo para ter um controle mais eficiente dos
            seus gastos e garantir que sobre dinheiro para realizar seus planos
            futuros!
          </span>
        </div>
        <img className="login-mobile__logo" src={mobileLogo} alt="logo" />

        <div className="login__form-container">
          {message && <div className="login__notification">{message}</div>}
          <h2 className="login__title">Bem-vindo à Easy Bucket</h2>
          <span className="login__error-message">{errorMessage}</span>
          <h3 className="login__sub-title">
            Tenha melhor controle sobre seu dinheiro!
          </h3>
          <form className="login__form" method="POST" onSubmit={handleSubmit}>
            <input
              name="email"
              placeholder="E-mail"
              className="login__email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <input
              name="password"
              type="password"
              placeholder="Senha"
              className="login__passoword"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />

            <button className="login__button" type="submit">
              Entrar
            </button>
            <p className="login__register">
              Ainda não é membro? Inscreva-se{' '}
              <Link className="login__signup_link" to="/signup">
                aqui!
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
