import React, { useEffect } from 'react';
import {
	Route, Routes, useLocation, useNavigate,
} from 'react-router-dom';
import styles from './Router.module.scss';
import { AuthorizationPage } from '../../pages/auth/login';
import { RegistrationPage } from '../../pages/auth/registration';
import { ProjectsListPage } from '../../pages/projects-list';

const Router = () => {
	const location = useLocation();
	const navigate = useNavigate();

	const isAuthenticated = localStorage.getItem('token');

	const isAuthRoute = location.pathname === '/' || location.pathname === '/registration';

	useEffect(() => {
		if (!isAuthenticated && !isAuthRoute) {
			navigate('/');
		}
	}, [isAuthenticated, isAuthRoute, navigate]);

	return (
		<div className={isAuthRoute ? styles.router : styles.authorization}>
			<Routes>
				<Route path="/" element={<AuthorizationPage />} />
				<Route path="/registration" element={<RegistrationPage />} />
				<Route path="/projects-list/:id" element={<ProjectsListPage />} />
			</Routes>
		</div>
	);
};

export default Router;
