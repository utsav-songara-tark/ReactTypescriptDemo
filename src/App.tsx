import React, { useEffect, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import { Logout } from './components/Logout';
import Navbar from './components/Navbar';
import PrivateRoute from './components/PrivateRoute';
import { UserDataTable } from './components/UserDataTable';
import { UserDetails } from './components/UserDetails';
import UserContext from './context/UserContext';
import { getCurrentUser } from './services/authService';

function App() {
	const [isLogin, setIsLogin] = useState(true);
	const [userName, setUserName] = useState('');

	function getUserData() {
		const user = getCurrentUser();
		if (user && user.username) {
			setIsLogin(true);
			setUserName(user.username);
		} else {
			setIsLogin(false);
		}
	}

	useEffect(() => {
		getUserData();
	}, []);

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
					<Route
						path='/user-data'
						element={<PrivateRoute children={<UserDataTable />} />}
					/>
					<Route
						path='/user-data/:userId'
						element={<PrivateRoute children={<UserDetails />} />}
					/>
					{/* <Route path='/user/:userId' element={<UserDetails />} /> */}
					<Route path='/' element={<PrivateRoute children={<Home />} />} />
					<Route path='*' element={<Navigate to={'login'} />} />
				</Routes>
			</UserContext.Provider>
		</>
	);
}

export default App;
