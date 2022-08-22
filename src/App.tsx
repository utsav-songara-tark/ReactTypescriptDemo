import React, { useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import { Logout } from './components/Logout';
import Navbar from './components/Navbar';
import PrivateRoute from './components/PrivateRoute';
import { UserDataTable } from './components/UserDataTable';
import UserContext from './context/UserContext';

function App() {
	const [isLogin, setIsLogin] = useState(false);
	const [userName, setUserName] = useState('');

	return (
		<>
			<UserContext.Provider
				value={{ isLogin, setIsLogin, userName, setUserName }}
			>
				<Navbar />
				<Routes>
					<Route path='/login' element={<Login />} />
					<Route
						path='/logout'
						element={<PrivateRoute children={<Logout />} />}
					/>
					<Route path='/user-data' element={<UserDataTable />} />
					<Route path='/' element={<PrivateRoute children={<Home />} />} />
					<Route path='*' element={<Navigate to={'login'} />} />
				</Routes>
			</UserContext.Provider>
		</>
	);
}

export default App;
