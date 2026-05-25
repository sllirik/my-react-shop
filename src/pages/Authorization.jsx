import { useLocation } from 'react-router-dom';
import { Login } from '../auth/Login';
import { Registration } from '../auth/Registration';
import { ResetNewPassword } from '../auth/ResetNewPassword';
import './Authorization.css';
import { useState } from 'react';


export const Authorization = () => {
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [error, setError] = useState('');

	const location = useLocation();

	// Path - Вход
	const isLogin = location.pathname.includes('/login') || location.pathname.includes('/authorization');
	// Path - Регистрация
	const isRegistration = location.pathname.includes('/registration');
	// Path - Сброс пароля
	const isResetPassword = location.pathname.includes('/password/new');

	// Вход
	const handleLogin = async (e) => {
		e.preventDefault();

		setError('');

		try {
			console.log('Логин:', email, '\nПароль: ', password)
		} catch (error) {
			console.log("Ошибка входа: ", error)
			setError(error);
		}
	}

	// Регистрация
	const handleRegistration = async (e) => {
		e.preventDefault();

		setError('');
		if(password !== confirmPassword) {
			setError('Пароли не совпадают');
			return;
		}

		try {
			console.log('Зарегистрирован:', '\nНик: ', username,  '\nEmail: ', email, '\nПароль: ', password)
		} catch (error) {
			console.log("Ошибка регистрации: ", error)
			setError(error);
		}
	}
	
	// Сброс нового пароля
	const handleResetPassword = async (e) => {
    e.preventDefault();
    setError('');
    
    try {
      console.log('Сброс пароля для:', email);
      // await resetPasswordAPI(email);
    } catch (err) {
      setError('Ошибка сброса пароля');
    }
  };

	// Очистка форм
	const clearForm = () => {
		setUsername('');
		setEmail('');
		setPassword('');
		setConfirmPassword('');
		setError('');
	}
	

  return (
	<section className="authorization">
		<div className="container authorization__container">
			<div className="authorization__inner">
				<div className="authorization__image">
					<img className="authorization__img" src="https://images.unsplash.com/photo-1523325694268-559614c8cc45?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQzfHxhdXN0cmFsaWF8ZW58MHx8MHx8fDA%3D" alt="" />
				</div>

        {/* ВХОД */}
				{isLogin && 
					<Login 
					email={email} 
					setEmail={setEmail}
					password={password} 
					setPassword={setPassword}
					error={error}
					onSubmit={handleLogin} 
					clearForm={clearForm} />}

        {/* РЕГИСТРАЦИЯ */}
				{isRegistration && 
					<Registration 
						username={username}
						setUsername={setUsername}
						email={email} 
						setEmail={setEmail}
						password={password} 
						setPassword={setPassword}
						confirmPassword={confirmPassword} 
						setConfirmPassword={setConfirmPassword}
						error={error}
						onSubmit={handleRegistration} 
						clearForm={clearForm}
						/> }

        {/* СБРОС НОВОГО ПАРОЛЯ */}
        {isResetPassword && 
					<ResetNewPassword 
						email={email}
						setEmail={setEmail}
						error={error}
						onSubmit={handleResetPassword}
						clearForm={clearForm}/> }

			</div>
		</div>
	</section>
  )
}
