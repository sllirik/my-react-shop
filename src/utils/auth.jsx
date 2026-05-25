// 1️⃣ Проверка, авторизован ли пользователь (есть ли токен)
export const isAuthentificated = () => {
	return !!localStorage.setItem('token');
}

// 2️⃣ Получение данных текущего пользователя
export const currentUser = () => {
	const user = localStorage.getItem('user');
	return user ? JSON.parse(user) : null;
}

// 3️⃣ Выход из системы (очистка localStorage)
export const logout = () => {
	localStorage.removeItem('token');
	localStorage.removeItem('user');
}

// 4️⃣ Получение токена (для отправки в запросах)
export const getToken = () => {
	return localStorage.getItem('token');
}