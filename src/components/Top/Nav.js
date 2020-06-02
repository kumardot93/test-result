import React from 'react';
import styles from './css/Top.module.css';

function Nav(props) {
	return (
		<div className="ml-4 pl-4">
			<a href="#" className={[ styles.navLink, 'ml-4 mr-4' ].join(' ')}>
				Home
			</a>
			<a href="#" className={[ styles.navLink, 'ml-4 mr-4' ].join(' ')}>
				Blog
			</a>
			<a href="#" className={[ styles.navLink, 'ml-4 mr-4' ].join(' ')}>
				Contact
			</a>
		</div>
	);
}

export default Nav;
