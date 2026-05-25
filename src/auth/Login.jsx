import { useEffect } from "react"
import { Link } from "react-router-dom"

export const Login = ({ email, setEmail, password, setPassword, error, onSubmit, clearForm}) => {

	useEffect(() => {
		clearForm()
	}, [])

	return (
		<form className="authorization__form" onSubmit={onSubmit}>
			<header className="form__header">
				<div className="form__title">Вход</div>
				<p className="form__description">Добро пожаловать!</p>
			</header>
			<div className="form__field">
				<label className="form__label" htmlFor="loginInput"> 
					<span className="form__label-text">Email</span>
				</label>
				<input 
					className="form__input" 
					type="email" 
					id="loginEmail" 
					value={email} 
					onChange={(e)=> setEmail(e.target.value)} 
					required />
				<p className="form__message">{error}</p>
			</div>
			<div className="form__field">
				<label className="form__label" htmlFor="loginPassword">							
					<span className="form__label-text">Пароль</span>
					<Link className=" form__link form__password-link" to="/password/new">Забыли пароль?</Link>
				</label>
				<input 
					className="form__input" 
					type="password" 
					id="loginPassword" 
					value={password} 
					onChange={(e)=> setPassword(e.target.value)} 
					required />
				<p className="form__message"></p>
			</div>
			<button className="form__btn" type="submit">Войти</button>

			<p className="form__text">
				Нет аккаунта? 
				<Link className="form__link form__link-registration" to="/registration">Зарегистрироваться</Link>
			</p>
		</form>
	)
}
