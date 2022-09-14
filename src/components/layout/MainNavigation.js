import { NavLink } from 'react-router-dom';

import { PATH } from '../../pages/path';

import classes from './MainNavigation.module.css';

const MainNavigation = () => {
	return (
		<header className={ classes.header }>
			<div className={ classes.logo }>Great Quotes!</div>
			<nav className={ classes.nav }>
				<ul>
					<li>
						<NavLink to="/quotes"
								 activeClassName={ classes.active }>
							All Quotes.
						</NavLink>
					</li>
					<li>
						<NavLink to={ PATH.NEW_QUOTE }
								 activeClassName={ classes.active }>
							Add a Quote.
						</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default MainNavigation;