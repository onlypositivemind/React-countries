import { useNavigate } from 'react-router-dom';
import { CountryDetails } from 'features/details';
import { ReactComponent as BackIcon } from 'assets/images/arrow.svg';
import s from './Details.module.scss';

const Details = () => {
	const navigate = useNavigate();

	return (
		<div className={s.wrapper}>
			<button onClick={() => navigate(-1)}>
				<BackIcon className={s.icon} />
				Back
			</button>
			<CountryDetails />
		</div>
	);
};

export default Details;