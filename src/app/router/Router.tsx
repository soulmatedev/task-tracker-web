import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import styles from './Router.module.scss';
import { AuthorizationPage } from '../../pages/auth/login';
import { RegistrationPage } from '../../pages/auth/registration';

const Router = () => {
	const location = useLocation();

	const isAuthRoute = location.pathname === '/' || location.pathname === '/registration';

	return (
		<div className={isAuthRoute ? styles.router : styles.authorization}>
			<Routes>
				<Route path="/" element={<AuthorizationPage />} />
				<Route path="/registration" element={<RegistrationPage />} />
			</Routes>
		</div>
	);
};

export default Router;
