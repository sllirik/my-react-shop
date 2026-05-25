import { useEffect } from "react"

export const ResetNewPassword = ({email, setEmail, error, onSubmit, clearForm}) => {

	useEffect(()=> {
		clearForm();
	}, [])
	
	return (
		<form className="authorization__form" onSubmit={onSubmit}>
			<header className="form__header">
				<div className="form__title">Забыли свой пароль?</div>
				<p className="form__description">Введите адрес электронной почты, связанный с вашей учетной записью, и мы вышлем вам ссылку для сброса пароля.</p>
			</header>

			<div className="form__field">
				<label className="form__label" htmlFor="emailForNewPassword"> 
					<span className="form__label-text">Email</span>
				</label>
				<input 
					className="form__input" 
					type="email" 
					id="emailForNewPassword"
					value={email}
					onChange={(e) => setEmail(e.target.value)} 
					required/>
				<p className="form__message">{error}</p>
			</div>

			<button className="form__btn" type="submit">Сбросить пароль</button>
		</form>
	)
}
