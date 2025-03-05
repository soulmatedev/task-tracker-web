import React from 'react';
import ReactDOM from 'react-dom/client';
import './shared/config/styles/main.scss';
import './shared/config/styles/global.scss';
import { App } from './App';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement,
);

root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
);
