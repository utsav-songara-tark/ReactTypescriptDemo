import React, { useContext } from 'react';
import UserContext from '../context/UserContext';

export default function Home() {
	const userContext = useContext(UserContext);
	return <div>Home {userContext.userName}</div>;
}
