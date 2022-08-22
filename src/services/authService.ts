import { LoginInformation } from '../interface/LoginInformation';

const userKey = 'user';

export function login(user: LoginInformation) {
	localStorage.setItem(userKey, JSON.stringify(user));
	return true;
}

export function register(user: LoginInformation) {
	return login(user);
}

export function logout() {
	localStorage.removeItem(userKey);
	return true;
}

export function getCurrentUser() {
	try {
		const user = localStorage.getItem(userKey);
		return JSON.parse(user || '{}');
	} catch (e) {
		return null;
	}
}
