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

	const [userData, setUserData] = useState({
		username: '',
		email: '',
		password: '',
		confirmPassword: '',
		errorUsername: '',
		errorEmail: '',
		errorPassword: '',
		errorConfirmPassword: ''
	})

	// Получаем адресную строку
	const location = useLocation();

	// Path - Вход
	const isLogin = location.pathname.includes('/login') || location.pathname.includes('/authorization');
	// Path - Регистрация
	const isRegistration = location.pathname.includes('/registration');
	// Path - Сброс пароля
	const isResetPassword = location.pathname.includes('/password/new');


	// Обновленная регистрация
	const newRegistration = async (e) => {
		e.preventDefault();

		setUserData({
			...userData,
			errorUsername: '',
			errorEmail: '',
			errorPassword: '',
			errorConfirmPassword: ''
		})

		if(userData.password !== userData.confirmPassword) {
			setUserData({
				...userData,
				errorPassword: 'Пароли не совпадают',
				errorConfirmPassword: 'Пароли не совпадают'
			})
			return;
		}

		try {
			const usersResponse = await fetch('https://jsonplaceholder.typicode.com/users');
			const users = await usersResponse.json();

			const userExistsName = users.some(u => u.username === userData.username);
			const userExistsEmail = users.some(u => u.email === userData.email);

			if(userExistsName) {
				setUserData({...userData, errorUsername: 'Пользователь с таким именем уже существует'});
				return;
			}
			if(userExistsEmail) {
				setUserData({...userData, errorEmail: 'Пользователь с таким email уже существует'});
				return;
			}


			const response = await fetch('http://localhost:5000/users', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					username: userData.username,
					email: userData.email,
					password: userData.password,
				})
			})

			const newUser = await response.json();

			if(response.ok) {
				console.log(`Пользователь ${newUser.username} Зарегистрирован`);
				window.location.href = '/login';
				alert('Теперь можете войти в свой аккаунт')
				console.log('Зарегистрирован: \n', newUser)
			} else {
				console.log('Ошибка: ', newUser.message)
			}

			
		} catch (error) {
			console.log(error);
		}
	}


	// Вход
	const handleLogin = async (e) => {
		e.preventDefault();

		setError('');

		try {
			// Отправляем запрос на сервер
			const response = await fetch('http://localhost:5000/users');
			
			if(!response.ok) {
				throw new Error("Сервер не отвечает");
			}
			// Получаем users
			const users = await response.json();

			// Ищем user
			const user = users.find(u => u.email === email && u.password === password);


			if(user) {
				// Создаём фейковый токен
				const fakeToken = btoa(`${user.id}-${Date.now()}`);
				// Сохранение в localStorage
				localStorage.setItem('token', fakeToken);
				localStorage.setItem('user', JSON.stringify(user));
				// Уведомление про успешный вход
				alert(`Добро пожаловать ${user.username}`);

				// Очистка форм
				clearForm();

				//Перенаправление 
				window.location.href = '/' 
			} else {
				setError('Неверный email или пароль')
			}
		} catch (error) {
			console.log("Ошибка входа: ", error)
			setError(error);
		}
	}

	// Регистрация
	// const handleRegistration = async (e) => {
	// 	e.preventDefault();

	// 	setError('');
	// 	if(password !== confirmPassword) {
	// 		setError('Пароли не совпадают');
	// 		return;
	// 	}

	// 	try {
	// 		// Проверка на существование user при регистрации
	// 		const usersResponse = await fetch('http://localhost:5000/users');
	// 		const users = await usersResponse.json();

	// 		const userExistsEmail = users.some(u => u.email === email);
	// 		const userExistsUsername = users.some(u => u.username === username);

	// 		if(userExistsEmail) {
	// 			setError('Пользователь с таким email уже существует');
	// 			return;
	// 		}

	// 		if (userExistsUsername) {
	// 			setError('Такой Логин уже существует');
	// 			return;
	// 		}


	// 		// Если пользователь уникальный создаём пользователя
	// 		const response = await fetch('http://localhost:5000/users', {
	// 			method: 'POST',
	// 			headers: {
	// 				'Content-Type': 'application/json'
	// 			},
	// 			body: JSON.stringify({
	// 				username: username,
	// 				email: email,
	// 				password: password
	// 			})
	// 		});

	// 		// Новый пользователь
	// 		const newUser = await response.json()

			
	// 		if(response.ok) {
	// 			alert(`Пользователь ${newUser.username} зарегистрирован`);
	// 			window.location.href = '/login';
	// 			console.log(newUser);
	// 		} else {
	// 			setError(newUser.message)
	// 		}

	// 	} catch (error) {
	// 		console.log("Ошибка регистрации: ", error)
	// 		setError(error);
	// 	}
	// }
	
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
						// username={username}
						// setUsername={setUsername}
						// email={email} 
						// setEmail={setEmail}
						// password={password} 
						// setPassword={setPassword}
						// confirmPassword={confirmPassword} 
						// setConfirmPassword={setConfirmPassword}
						// error={error}
						// onSubmit={handleRegistration} 
						userData={userData}
						edit={setUserData}
						onSubmit={newRegistration}
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
