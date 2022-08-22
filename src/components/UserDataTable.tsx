import React from 'react';
import userData from '../data/userdata.json';

export function UserDataTable() {
	return (
		<div className='container'>
			<h1 className='text-center'>User Data</h1>
			<table className='table'>
				<thead>
					<tr>
						<th scope='col'>#</th>
						<th scope='col'>Firstname</th>
						<th scope='col'>Lastname</th>
						<th scope='col'>Email</th>
						<th scope='col'>Gender</th>
						<th scope='col'>Ip</th>
					</tr>
				</thead>
				<tbody>
					{userData.map((user, index) => (
						<tr key={index}>
							<th scope='row'>{index + 1}</th>
							<td>{user.first_name}</td>
							<td>{user.last_name}</td>
							<td>{user.email}</td>
							<td>{user.gender}</td>
							<td>{user.ip_address}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}
