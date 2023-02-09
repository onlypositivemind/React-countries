import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Loader } from 'components';
import { useAppDispatch } from 'store';
import { detailsActions, loadCountryByName } from '../detailsSlice';
import { selectDetails } from '../detailsSelector';
import Neighbors from '../Neighbors/Neighbors';
import s from './CountryDetails.module.scss';

const CountryDetails = () => {
	const { name } = useParams();
	const dispatch = useAppDispatch();
	const { currentCountry, statusCountry, errorCountry } = useSelector(selectDetails);

	useEffect(() => {
		name && dispatch(loadCountryByName(name));

		return () => {
			dispatch(detailsActions.clearDetails());
		};
	}, [dispatch, name]);

	return (
		<>
			{errorCountry && <h1>{errorCountry}</h1>}
			{statusCountry === 'loading' && <Loader />}

			{currentCountry && (
				<div className={s.wrapper}>
					<div className={s.image}>
						<img src={currentCountry.flag} alt={currentCountry.name} />
					</div>
					<div className={s.text}>
						<h1>{currentCountry.name}</h1>
						<div className={s.infoBlock}>
							<div className={s.info}>
								<p>
									Native Name:
									<span> {currentCountry.nativeName}</span>
								</p>
								<p>
									Population:
									<span> {currentCountry.population}</span>
								</p>
								<p>
									Region:
									<span> {currentCountry.region}</span>
								</p>
								<p>
									Sub Region:
									<span> {currentCountry.subregion}</span>
								</p>
								<p>
									Capital:
									<span> {currentCountry.capital}</span>
								</p>
							</div>
							<div className={s.info}>
								<p>
									Top Level Domain:
									<span> {currentCountry.topLevelDomain}</span>
								</p>
								<p>
									Currency:{' '}
									<span>
										{currentCountry.currencies.map((c) => (
											<span key={c.code}>{c.name} </span>
										))}
									</span>
								</p>
								<p>
									Languages:{' '}
									<span>
										{currentCountry.languages.map((l) => (
											<span key={l.name}>{l.name} </span>
										))}
									</span>
								</p>
							</div>
						</div>
						<Neighbors borders={currentCountry.borders} />
					</div>
				</div>
			)}
		</>
	);
};

export default CountryDetails;
