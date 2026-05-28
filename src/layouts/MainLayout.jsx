import { useState } from 'react';
import { Navigation } from '../components/Navigation';
import { Outlet } from 'react-router-dom';

export const MainLayout = () => {
	const [isLogged, setIsLogged] = useState(null);

  return (
	<>
		<Navigation isLogged={isLogged}/>

		<main className="main">
			<Outlet/>
		</main>
		
	</>
  )
}
