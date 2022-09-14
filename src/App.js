import { Switch, Route, Redirect } from 'react-router-dom';
import AllQuotes from './pages/AllQuotes';
import NewQuotes from './pages/NewQuotes';
import QuoteDetail from './pages/QuoteDetail';
import Layout from './components/layout/Layout';

import { PATH } from './pages/path';
import NotFound from './pages/NotFound';

function App() {
	const { QUOTES, QUOTE, NEW_QUOTE } = PATH;

	return (
		<Layout>
			<Switch>
				<Route path="/" exact>
					<Redirect to={ QUOTES } />
				</Route>
				<Route path={ QUOTES } exact>
					<AllQuotes />
				</Route>
				<Route path={ QUOTE }>
					<QuoteDetail />
				</Route>
				<Route path={ NEW_QUOTE }>
					<NewQuotes />
				</Route>
				<Route path='*'>
					<NotFound/>
				</Route>
			</Switch>
		</Layout>
	);
}

export default App;
