import { ChangeEventHandler } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'store';
import { controlsActions, selectSearch } from 'features/controls/index';
import { ReactComponent as SearchIcon } from 'assets/images/search.svg';
import { ReactComponent as ClearIcon } from 'assets/images/clear.svg';
import s from './Search.module.scss';

const Search = () => {
	const dispatch = useAppDispatch();
	const search = useSelector(selectSearch);

	const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
		dispatch(controlsActions.setSearch(e.target.value));
	};

	return (
		<div className={s.searchBlock}>
			<SearchIcon className={s.iconS} />
			<input type='text' placeholder='Search for a country...' value={search} onChange={handleChange} />
			{search && <ClearIcon className={s.iconC} onClick={() => dispatch(controlsActions.setSearch(''))} />}
		</div>
	);
};

export default Search;
