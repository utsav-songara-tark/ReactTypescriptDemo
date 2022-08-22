import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import UserContext from '../context/UserContext';

export default function Navbar() {
	const userContext = useContext(UserContext);
	return (
		<nav className='navbar navbar-expand-lg bg-light'>
			<div className='container-fluid'>
				<a className='navbar-brand' href='#'>
					RTMS
				</a>
				<button
					className='navbar-toggler'
					type='button'
					data-bs-toggle='collapse'
					data-bs-target='#navbarSupportedContent'
					aria-controls='navbarSupportedContent'
					aria-expanded='false'
					aria-label='Toggle navigation'
				>
					<span className='navbar-toggler-icon'></span>
				</button>
				<div
					className='collapse navbar-collapse justify-content-end'
					id='navbarSupportedContent'
				>
					<ul className='navbar-nav ml-auto mb-2 mb-lg-0'>
						<li className='nav-item'>
							<NavLink to='/' className='nav-link'>
								Home
							</NavLink>
						</li>
						{userContext.isLogin ? (
							<>
								<li className='nav-item'>
									<NavLink to='/user-data' className='nav-link'>
										Data
									</NavLink>
								</li>
								<li className='nav-item'>
									<NavLink to='/logout' className='nav-link'>
										Logout
									</NavLink>
								</li>
							</>
						) : (
							<li className='nav-item'>
								<NavLink to='/login' className='nav-link'>
									Login
								</NavLink>
							</li>
						)}
					</ul>
				</div>
			</div>
		</nav>
	);
}
