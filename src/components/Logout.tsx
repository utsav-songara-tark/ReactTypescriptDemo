import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from '../context/UserContext';

export function Logout() {
	const userContext = useContext(UserContext);
	const navigate = useNavigate();
	useEffect(() => {
		userContext.setIsLogin(false);
		navigate('/login');
	}, []);
	return <div>Logout</div>;
}
