import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from '../context/UserContext';
import { login } from '../services/authService';
import '../styles/login.css';

export default function Login() {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');
	const navigation = useNavigate();
	const userContext = useContext(UserContext);

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (username === 'admin' && password === 'admin') {
			userContext.setIsLogin(true);
			userContext.setUserName(username);
			const isLogin = login({
				username,
				password,
			});
			if (isLogin) navigation('/');
		} else {
			setError('Invalid username or password');
		}
	};

	return (
		<div className='back'>
			<div className='div-center'>
				<div className='content'>
					<h3>Login</h3>
					<hr />
					<form onSubmit={handleSubmit}>
						<span className='text-danger'>{error}</span>
						<div className='form-group mt-2'>
							<label htmlFor='username'>Username</label>
							<input
								type='text'
								className='form-control'
								id='username'
								placeholder='Username'
								onChange={(e) => setUsername(e.target.value)}
							/>
						</div>
						<div className='form-group mt-2'>
							<label htmlFor='password'>Password</label>
							<input
								type='password'
								className='form-control'
								id='password'
								placeholder='Password'
								onChange={(e) => setPassword(e.target.value)}
							/>
						</div>
						<div className='d-flex align-items-center justify-content-center mt-4'>
							<button type='submit' className='btn btn-primary w-100'>
								Login
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}
