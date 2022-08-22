import React from 'react';

interface UserContextInterface {
	isLogin: boolean;
	setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
	userName: string;
	setUserName: React.Dispatch<React.SetStateAction<string>>;
}

const UserContext = React.createContext<UserContextInterface>({
	isLogin: false,
	setIsLogin: () => {},
	userName: '',
	setUserName: () => {},
});

UserContext.displayName = 'UserContext';

export default UserContext;
