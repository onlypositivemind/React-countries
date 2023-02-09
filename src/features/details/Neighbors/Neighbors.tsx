import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Country } from 'types';
import { useAppDispatch } from 'store';
import { selectDetails, selectNeighbors } from '../detailsSelector';
import { loadNeighborsByBorder } from '../detailsSlice';
import s from './Neighbors.module.scss';

interface NeighborsProps extends Pick<Country, 'borders'> {}

const Neighbors = ({ borders = [] }: NeighborsProps) => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const neighbors = useSelector(selectNeighbors);
	const { errorNeighbors, statusNeighbors } = useSelector(selectDetails);

	useEffect(() => {
		if (borders.length) {
			dispatch(loadNeighborsByBorder(borders));
		}
	}, [borders, dispatch]);

	if (errorNeighbors) {
		return <p className={s.error}>{errorNeighbors}</p>;
	}

	return (
		<div className={s.borders}>
			<span>Border Countries</span>
			{statusNeighbors === 'loading' && <p>Loading...</p>}
			{statusNeighbors === 'received' && (
				<div>
					{!borders.length ? (
						<span className={s.noBorders}>There is no border countries</span>
					) : (
						neighbors.map((countryName) => (
							<span key={countryName} className={s.border} onClick={() => navigate(`/country/${countryName}`)}>
								{countryName}
							</span>
						))
					)}
				</div>
			)}
		</div>
	);
};

export default Neighbors;
