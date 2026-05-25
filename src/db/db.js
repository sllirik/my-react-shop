
export const users = [
	{
		id: 1,
		name: 'Админ',
		email: "admin@users.com",
		password: "admin",
		role: 'admin'
	},
	{
		id: 2,
		name: 'Николай Петрович',
		email: "nik.petr@users.com",
		password: "nik.petr",
		role: 'user'
	},
	{
		id: 3,
		name: 'Анна Пух',
		email: "ann.puh@users.com",
		password: "ann.puh",
		role: 'user'
	}
]


export const products = [
	{
		id: 1,
		name: 'iPhone 14 Plus',
		category: 'Смартфоны',
		brand: 'Apple',
		price: 60000,
		description: 'iPhone 14 Plus – это мощный смартфон, подходящий для пользователей, которым важен большой экран и высокая производительность. Сочетание качественного дисплея, мощного процессора, длительного времени автономной работы и современных технологий делает его отличным выбором среди смартфонов в своем классе',
		image: 'https://www.google.com/url?sa=t&source=web&rct=j&url=https%3A%2F%2Fbuy.gazelle.com%2Fproducts%2Fiphone-14-plus-128gb-unlocked&ved=0CBYQjRxqFwoTCJDBpMvp05QDFQAAAAAdAAAAABAF&opi=89978449',
		rating: 4.7
	},
	{
		id: 2,
		name: 'Sony PlayStation 5 PS5 Digital Edition',
		category: 'Игровые консоли',
		brand: 'Sony PlayStation ',
		price: 51990,
		description: 'PS5 Digital Edition — это полностью цифровая версия консоли PS5 без дисковода. Войдите в свою учетную запись PlayStation Network и перейдите в PlayStation®Store, чтобы покупать и загружать игры',
		image: 'https://xtel-lg.com/image/cache/wp/gj/image/catalog/gadgets/consol/SonyPlayStation5PS5DigitalEdition/Screenshot_110-500x500.webp',
		rating: 4.8
	},
]


export const orders = [
	{
		id: 1,
		userId: 3, 											
		userName: 'Анна Пух', 					
		userEmail: 'ann.puh@users.com', 
		items: [
			{productsId: 1, name: 'iPhone 14 Plus', price:60000, quantity: 1}, 
			{productsId: 2, name: 'Sony PlayStation 5 PS5 Digital Edition', price:51990, quantity: 3},
		],
		totalSum: calc( [
			{productsId: 1, name: 'iPhone 14 Plus', price:60000, quantity: 1}, 
			{productsId: 2, name: 'Sony PlayStation 5 PS5 Digital Edition', price:51990, quantity: 3},
		]),
		deliveryAddress: 'ул.Гагарина 43, д.58, кв. 13'
	}
]

// Рассчёт стоимости корзины
const calc = (items) => items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
