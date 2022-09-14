import { useHistory } from 'react-router-dom';
import {PATH} from './path';

import QuoteForm from '../components/quotes/QuoteForm';

const NewQuotes = () => {
	const history = useHistory();
	const addQuoteHandler = ( quoteData ) => {
		console.log(quoteData);
		history.push(PATH.QUOTES);
	};

	return <QuoteForm onAddQuote={ addQuoteHandler } />;
};

export default NewQuotes;