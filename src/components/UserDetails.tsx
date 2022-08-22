import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import userData from '../data/userdata.json';
import { User } from '../interface/User';

export function UserDetails() {
	const { userId } = useParams();
	const navigate = useNavigate();
	const [user, setUser] = useState<User>({
		id: 0,
		first_name: '',
		last_name: '',
		email: '',
		gender: '',
		ip_address: '',
	});

	function getUserData() {
		if (userId) {
			const data = userData.find(
				(currentUser) => currentUser.id === parseInt(userId)
			) as User;
			if (data) {
				setUser(data);
			} else {
				navigate('/user-data');
			}
		}
	}

	useEffect(() => {
		getUserData();
	}, []);

	return (
		<div className='container'>
			<h1 className='text-center'>User detail</h1>
			<table className='table'>
				<tbody>
					<tr>
						<th scope='col'>Firstname</th>
						<td>{user.first_name}</td>
					</tr>
					<tr>
						<th scope='col'>Lastname</th>
						<td>{user.last_name}</td>
					</tr>
					<tr>
						<th scope='col'>Email</th>
						<td>{user.email}</td>
					</tr>
					<tr>
						<th scope='col'>Gender</th>
						<td>{user.gender}</td>
					</tr>
					<tr>
						<th scope='col'>Ip</th>
						<td>{user.ip_address}</td>
					</tr>
				</tbody>
			</table>
			<div>
				<button
					className='btn btn-primary'
					onClick={() => navigate('/user-data')}
				>
					Back
				</button>
			</div>
		</div>
	);
}
