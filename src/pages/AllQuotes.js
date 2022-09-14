import QuoteList from '../components/quotes/QuoteList';

const DUMMY_QUOTES =[
	{id:'q1', author: 'Nati', text: 'Learning React is fan!'},
	{id:'q2', author: 'NT', text: 'Learning React is great!'},
];
const AllQuotes = () => {
	return(
		<QuoteList quotes={DUMMY_QUOTES}/>
	)
};

export default AllQuotes;