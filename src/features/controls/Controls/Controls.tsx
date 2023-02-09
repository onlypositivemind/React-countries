import Search from '../Search/Search';
import CustomSelect from '../CustomSelect/CustomSelect';
import s from './Controls.module.scss';

const Controls = () => {
	return (
		<div className={s.wrapper}>
			<Search />
			<CustomSelect />
		</div>
	);
};

export default Controls;