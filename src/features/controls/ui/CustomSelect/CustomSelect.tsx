import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'store';
import { controlsActions, selectRegion } from 'features/controls/index';
import { ReactComponent as ClearIcon } from 'assets/images/clear.svg';
import { RegionType } from '../../model/types/region';
import s from './CustomSelect.module.scss';

const regions: RegionType[] = ['Africa', 'America', 'Asia', 'Europe', 'Oceania'];

const CustomSelect = () => {
	const [visible, setVisible] = useState(false);

	const dispatch = useAppDispatch();
	const region = useSelector(selectRegion);

	const handleRegion = (reg: RegionType) => {
		dispatch(controlsActions.setRegion(reg));
		setVisible(false);
	};

	const handleClear: React.MouseEventHandler<SVGSVGElement> = (e) => {
		e.stopPropagation();
		dispatch(controlsActions.setRegion(''));
	};

	return (
		<div className={s.wrapper} onClick={() => setVisible(!visible)}>
			<p className={s.title}>{region || 'Filter by Region'}</p>
			<ul className={visible ? `${s.list} ${s.active}` : s.list}>
				{regions.map((region) => (
					<li key={region} onClick={() => handleRegion(region)}>
						{region}
					</li>
				))}
			</ul>
			{region && <ClearIcon className={s.icon} onClick={handleClear} />}
		</div>
	);
};

export default CustomSelect;