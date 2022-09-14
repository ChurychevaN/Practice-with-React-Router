import { useParams, Route } from 'react-router-dom';
import { Fragment } from 'react';
import Comments from '../components/comments/Comments';
import { PATH } from './path';
import HighlightedQuote from '../components/quotes/HighlightedQuote';

const DUMMY_QUOTES =[
	{id:'q1', author: 'Nati', text: 'Learning React is fan!'},
	{id:'q2', author: 'NT', text: 'Learning React is great!'},
];

const QuoteDetail = () => {
	const params = useParams();

	const QUOTE = DUMMY_QUOTES.find(QUOTE => QUOTE.id === params.QUOTE);

	if(!QUOTE) {
		return <p>No quote found!</p>
	}

	return (
		<Fragment>
			<HighlightedQuote text={QUOTE.text} author={QUOTE.author}/>
			<Route
				path={ `${ PATH.QUOTES }/${ params.QUOTE }/comments` }></Route>
			<Comments />
		</Fragment>
	);
};

export default QuoteDetail;