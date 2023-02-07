import { useParams } from 'react-router-dom';
import s from './CountryDetails.module.scss';

const CountryDetails = () => {
	const { name } = useParams();
	return <div>CountryDetails {name}</div>;
};

export default CountryDetails;