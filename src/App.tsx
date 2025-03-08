import { ToastContainer } from 'react-toastify';
import Router from './app/router/Router';
import css from './shared/config/styles/main.scss';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
	const a = '';
	return (
		<>
			<div className={css.wrapper}>
				<Router />
			</div>
			<ToastContainer
				position="top-right"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				pauseOnHover
				theme="colored"
			/>
		</>
	);
};

export default App;
