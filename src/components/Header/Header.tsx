import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from 'store';
import { ThemeSwitcher } from 'features/theme';
import { controlsActions } from 'features/controls';
import s from './Header.module.scss';

const Header = () => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();

	const handleClick = () => {
		navigate('/');
		dispatch(controlsActions.clearControls());
	};

	return (
		<header className={s.header}>
			<div className={s.content}>
				<h1 onClick={handleClick}>Where is the world?</h1>
				<ThemeSwitcher />
			</div>
		</header>
	);
};

export default Header;