import { Outlet } from 'react-router-dom';
import { Header } from 'components';
import s from './Layout.module.scss';

const Layout = () => {
	return (
		<>
			<Header />
			<main className={s.main}>
				<Outlet />
			</main>
		</>
	);
};

export default Layout;