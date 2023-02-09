import { useNavigate } from 'react-router-dom';
import { CountryInfo } from 'types';
import s from './CountryCard.module.scss';

interface CardProps extends CountryInfo {}

const CountryCard = ({ img, info, name }: CardProps) => {
	const navigate = useNavigate();

	return (
		<li className={s.card} onClick={() => navigate(`/country/${name}`)}>
			<div className={s.image}>
				<img src={img} alt={name} />
			</div>
			<div className={s.text}>
				<p className={s.name}>{name}</p>
				<div className={s.info}>
					{info.map(({ title, description }) => (
						<div key={title} className={s.infoBlock}>
							<p>{title}:</p>
							<p className={s.descr}>{description}</p>
						</div>
					))}
				</div>
			</div>
		</li>
	);
};

export default CountryCard;