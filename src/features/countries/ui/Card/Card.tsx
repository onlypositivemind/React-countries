import { useNavigate } from 'react-router-dom';
import { CountryInfo } from '../../model/types/country';
import s from './Card.module.scss';

interface CardProps extends CountryInfo {}

const Card = ({ img, info, name }: CardProps) => {
	const navigate = useNavigate();

	return (
		<li className={s.card} onClick={() => navigate(`/country/${name}`)}>
			<div className={s.image}>
				<img src={img} alt={name} />
			</div>
			<div className={s.info}>
				<p className={s.name}>{name}</p>
				<div className={s.descr}>
					{info.map(({ title, description }) => (
						<div key={title} className={s.infoBlock}>
							<p>{title}:</p>
							<p className={s.subinfo}>{description}</p>
						</div>
					))}
				</div>
			</div>
		</li>
	);
};

export default Card;