import { useEffect } from "react"
import { Link } from "react-router-dom"

export const Registration = ({username, setUsername, email, setEmail, password, setPassword, confirmPassword, setConfirmPassword, error, onSubmit, clearForm}) => {
	
	useEffect(()=> {
		clearForm();
	},[])

	return (
		<form className="authorization__form" onSubmit={onSubmit}>
			<header className="form__header">
				<div className="form__title">Регистрация</div>
				<p className="form__description">Добро пожаловать!</p>
			</header>
			<div className="form__field">
				<label className="form__label" htmlFor="registrationInput"> 
					<span className="form__label-text">Логин</span>
				</label>
				<input
					className="form__input" 
					type="text" 
					id="registrationInput" 
					value={username}
					onChange={(e)=> setUsername(e.target.value)}
					required/>
				<p className="form__message">{error}</p>
			</div>
			<div className="form__field">
				<label className="form__label" htmlFor="registrationEmail"> 
					<span className="form__label-text">Email</span>
				</label>
				<input
					className="form__input" 
					type="email" 
					id="registrationEmail" 
					value={email}
					onChange={(e)=> setEmail(e.target.value)}
					required/>
				<p className="form__message">{error}</p>
			</div>
			<div className="form__field">
				<label className="form__label" htmlFor="registrationPassword">							
					<span className="form__label-text">Пароль</span>
				</label>
				<input
					className="form__input" 
					type="password" 
					id="registrationPassword" 
					value={password}
					onChange={(e)=> setPassword(e.target.value)}
					required/>
				<p className="form__message">{error}</p>
			</div>
			<div className="form__field">
				<label className="form__label" htmlFor="registrationConfirmPassword">							
					<span className="form__label-text">Повторите пароль</span>
				</label>
				<input
					className="form__input" 
					type="password" 
					id="registrationConfirmPassword" 
					value={confirmPassword}
					onChange={(e)=> setConfirmPassword(e.target.value)}
					required/>
				<p className="form__message">{error}</p>
			</div>
			<button className="form__btn" type="submit">Зарегистрироваться</button>

			<p className="form__text">
				Есть аккаунт? Вы можете
				<Link className="form__link form__link-login" to="/login">Войти</Link>
			</p>
		</form>
	)
}
