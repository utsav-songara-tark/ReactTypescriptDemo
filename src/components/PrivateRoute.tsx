import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import UserContext from '../context/UserContext';

function PrivateRoute({ children }: { children: JSX.Element }) {
	const userContext = useContext(UserContext);

	if (!userContext.isLogin) {
		// Redirect them to the /login page, but save the current location they were
		// trying to go to when they were redirected. This allows us to send them
		// along to that page after they login, which is a nicer user experience
		// than dropping them off on the home page.
		return <Navigate to='/login' />;
	}

	return children;
}

export default PrivateRoute;
