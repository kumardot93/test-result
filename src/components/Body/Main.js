import React, { Component } from 'react';
import styles from './css/Main.module.css';
import Sidebar from './Sidebar.js';

import { connect } from 'react-redux';
import { updateTestData } from './../../redux/actions/Test.js';

class Main extends Component {
	constructor(props) {
		super(props);
	}

	extractKey = () => {
		//extracts the pk form the url
		let url = window.location.href;
		let size = url.length;
		let lastindexofSlash = url.lastIndexOf('/');
		if (lastindexofSlash === size - 1) {
			url = url.slice(0, -1);
			lastindexofSlash = url.lastIndexOf('/');
		}
		return url.substring(lastindexofSlash + 1);
	};

	fetchData = (key) => {
		//fetches all the test data at once
		fetch(window.base + '/material/api/test/data/' + key + '/', { credentials: window.cred })
			.then((Response) => Response.json())
			.then((data) => this.props.updateTestData(data))
			.catch((error) => alert('Error fetching data: possible reasons unauthorised access aur connection issue '));
	};

	componentDidMount = () => {
		//extracts key from url and fetchs all the test data at once
		let key = this.extractKey();
		this.fetchData(key);
	};

	render() {
		return (
			<div id={styles.main} className="p-1 d-flex flex-row pt-2">
				<Sidebar />
			</div>
		);
	}
}

const mapStateToProps = null;

const mapDispatchToProps = (dispatch) => {
	return {
		updateTestData: (data) => dispatch(updateTestData(data))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
