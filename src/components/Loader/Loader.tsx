import s from './Loader.module.scss';

const Loader = () => {
	return (
		<div className={s.wrapper}>
			<div className={s.ring}></div>
			<div className={s.ring}></div>
			<div className={s.ring}></div>
			<span>Loading...</span>
		</div>
	);
};

export default Loader;