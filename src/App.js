import { Switch, Route, Redirect } from 'react-router-dom';
import AllQuotes from './pages/AllQuotes';
import NewQuotes from './pages/NewQuotes';
import QuoteDetail from './pages/QuoteDetail';
import Layout from './components/layout/Layout';

import NotFound from './pages/NotFound';

export const PATH = {
	QUOTES: '/quotes',
	QUOTE: '/quote',
	NEW_QUOTE : '/new-quote'
};

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
				<Route path={`${QUOTE}/:quoteId`}>
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
