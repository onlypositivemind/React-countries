import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Loader, CountryCard } from 'components';
import { RootState, useAppDispatch } from 'store';
import { selectControls } from 'features/controls';
import { selectCountriesInfo, selectVisibleCountries } from 'features/countries';
import { loadCountries } from '../countriesSlice';
import s from './CountryList.module.scss';

const CountryList = () => {
	const dispatch = useAppDispatch();
	const { qty, error, status } = useSelector(selectCountriesInfo);
	const controls = useSelector(selectControls);
	const countries = useSelector((state: RootState) => selectVisibleCountries(state, controls));

	useEffect(() => {
		if (!qty) {
			dispatch(loadCountries());
		}
	}, [dispatch, qty]);

	return (
		<>
			{error && <h1>{error}</h1>}
			{status === 'loading' && <Loader />}

			{status === 'received' && (
				<ul className={s.list}>
					{countries.map((c) => {
						const countryInfo = {
							img: c.flags.png,
							name: c.name,
							info: [
								{
									title: 'Population',
									description: c.population.toLocaleString(),
								},
								{
									title: 'Region',
									description: c.region,
								},
								{
									title: 'Capital',
									description: c.capital,
								},
							],
						};

						return <CountryCard key={c.name} {...countryInfo} />;
					})}
				</ul>
			)}
		</>
	);
};

export default CountryList;