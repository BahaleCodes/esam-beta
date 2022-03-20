import { useState, useCallback, useEffect } from 'react';

let logoutTimer;

export const useAuth = () => {
	const [access_token, setToken] = useState(false);
	const [tokenExpirationDate, setTokenExpirationDate] = useState();
	const [userId, setUserId] = useState(false);

	const login = useCallback((uid, access_token, expirationDate) => {
		setToken(access_token);
		setUserId(uid);
		const tokenExpirationDate =
			expirationDate || new Date(new Date().getTime() + 1000 * 60 * 60);
		setTokenExpirationDate(tokenExpirationDate);
		localStorage.setItem(
			'userData',
			JSON.stringify({
				userId: uid,
				access_token: access_token,
				expiration: tokenExpirationDate.toISOString()
			})
		);
	}, []);

	const logout = useCallback(() => {
		setToken(null);
		setTokenExpirationDate(null);
		setUserId(null);
		localStorage.removeItem('userData');
	}, []);

	useEffect(() => {
		if (access_token && tokenExpirationDate) {
			const remainingTime = tokenExpirationDate.getTime() - new Date().getTime();
			logoutTimer = setTimeout(logout, remainingTime);
		}
		else {
			clearTimeout(logoutTimer);
		}
	}, [access_token, logout, tokenExpirationDate]);

	useEffect(() => {
		const storedData = JSON.parse(localStorage.getItem('userData'));
		if (
			storedData &&
			storedData.access_token &&
			new Date(storedData.expiration) > new Date()
		) {
			login(storedData.userId, storedData.access_token, new Date(storedData.expiration));
		}
	}, [login]);

	return { access_token, login, logout, userId };
};