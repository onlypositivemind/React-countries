import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'store';
import { selectTheme, themeActions } from 'features/theme';
import { ReactComponent as MoonIcon } from 'assets/images/moon.svg';
import { ReactComponent as SunIcon } from 'assets/images/sun.svg';
import s from './ThemeSwitcher.module.scss';

const ThemeSwitcher = () => {
	const dispatch = useAppDispatch();
	const theme = useSelector(selectTheme);

	const ThemeIcon = theme === 'light' ? SunIcon : MoonIcon;
	const themeText = theme === 'light' ? 'Light Theme' : 'Dark Theme';

	const toggleTheme = () => {
		const t = theme === 'light' ? 'dark' : 'light';
		dispatch(themeActions.setTheme(t));
	};

	useEffect(() => {
		document.body.setAttribute('data-theme', theme);
	}, [theme]);

	return (
		<div className={s.switcher} onClick={toggleTheme}>
			<ThemeIcon className={s.icon} />
			<p>{themeText}</p>
		</div>
	);
};

export default ThemeSwitcher;