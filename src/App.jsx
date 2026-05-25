import { useState } from 'react'
import './App.css'
import { MainLayout } from './layouts/MainLayout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Authorization } from './pages/Authorization';
import { NotFoundPage } from './pages/NotfoundPage';
import { Products } from './pages/Products';
import { Contacts } from './pages/Contacts';
import { Hero } from './pages/Hero';

function App() {
	const [isOpenLogin, setIsOpenLogin] = useState(false);






  return (
    <>
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<MainLayout />}>

					<Route path='/' element={<Hero />} />
					<Route path='/products' element={<Products />} />
					<Route path='/products/equipment' element={<Products />} />
					<Route path='/products/plants' element={<Products />} />
					
					<Route path='/contacts' element={<Contacts />} />
					<Route path='/authorization' element={<Authorization />} />
					<Route path='/login' element={<Authorization />} />
					<Route path='/registration' element={<Authorization />} />
					<Route path='/password/new' element={<Authorization />} />
					<Route path='*' element={<NotFoundPage/>} />
				</Route>
				
			</Routes>
		</BrowserRouter>
    </>
  )
}

export default App
