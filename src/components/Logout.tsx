import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from '../context/UserContext';
import { logout } from '../services/authService';

export function Logout() {
	const userContext = useContext(UserContext);
	const navigate = useNavigate();
	useEffect(() => {
		userContext.setIsLogin(false);
		const isLogout = logout();
		if (isLogout) navigate('/login');
	}, []);
	return <div>Logout</div>;
}
