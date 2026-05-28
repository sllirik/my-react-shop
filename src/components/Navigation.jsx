import { NavLink } from 'react-router-dom'
import { IoLogInOutline, IoLogOut } from 'react-icons/io5'
import './Navigation.css'
import { useTheme } from '../context/ThemeContext'

export const Navigation = ({isLogged}) => {
	const {theme, toggleTheme} = useTheme();

  return (
	<header className="header">
		<div className="container header__container">
			<div className="logo">Routes</div>
			<nav className="nav">
				<ul className="nav__list">
					<li className="nav__item">
						<NavLink className="nav__link" to="/">Главная</NavLink>
					</li>
					<li className="nav__item">
						<NavLink className="nav__link" to="products/equipment">Оборудование</NavLink>
					</li>
					<li className="nav__item">
						<NavLink className="nav__link" to="products/plants">Установки</NavLink>
					</li>
					<li className="nav__item">
						<NavLink className="nav__link" to="/contacts">Контакты</NavLink>
					</li>
					
					{!isLogged 
					? 	(<li className="nav__item">
							<NavLink className="nav__link" to="/authorization">
								<IoLogInOutline className="nav__link-icon"/>
								Войти
							</NavLink>
						</li>) 
					: 	(<li className="nav__item">
							<NavLink className="nav__link" to="/logout">
								<IoLogOut className="nav__link-icon" />
								Выйти
							</NavLink>
						</li>)
					}

					<button onClick={toggleTheme}>{theme}</button>
					
				</ul>
			</nav>
		</div>
	</header>
  )
}
