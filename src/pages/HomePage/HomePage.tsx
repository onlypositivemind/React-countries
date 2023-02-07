import { Controls } from 'features/controls';
import { CountryList } from 'features/countries';
import s from './HomePage.module.scss';

const HomePage = () => {
	return (
		<div className={s.homePage}>
			<Controls />
			<CountryList />
		</div>
	);
};

export default HomePage;