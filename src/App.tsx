import { Route, Routes } from 'react-router-dom';
import { Layout } from 'components';
import { Details, HomePage } from 'pages';

const App = () => {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<HomePage />} />
				<Route path='/country/:name' element={<Details />} />
			</Route>
		</Routes>
	);
};

export default App;
