import React, { Component } from 'react';
import styles from './css/Main.module.css';
import Sidebar from './Sidebar.js';
import Result from './Result.js';
import { extractKey } from './../../SocketManager.js';

import { connect } from 'react-redux';
import { updateTestData } from './../../redux/actions/Test.js';

//Entry point for the main body
class Main extends Component {
	//fetching and saving the test data
	state = {
		enter: 1 //Determines what to render
	};
	fetchData = (key) => {
		//fetches all the test data at once
		fetch(window.base + '/material/api/test/responseData/' + key + '/', { credentials: window.cred })
			.then((Response) => Response.json())
			.then((data) => this.props.updateTestData(data))
			.catch((error) => alert('Error fetching data: possible reasons unauthorised access aur connection issue '));
	};

	//Fetching data after component has been mounted
	componentDidMount = () => {
		//extracts key from url and fetchs all the test data at once
		let key = extractKey();
		this.fetchData(key);
	};

	enter = (val) => {
		this.setState({ enter: val });
	};

	screen = () => {
		//Function to determine what to render
		let res;
		switch (this.state.enter) {
			case 1:
				res = <Result enter={this.enter} />;
				break;
			case 2:
				res = <Sidebar enter={this.enter} submitted={1} />;
				break;
		}

		return res;
	};

	render() {
		return (
			<div id={styles.main} className="p-1 d-flex pt-2">
				{this.screen()}
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		questions: state.Test.fields.questions,
		res: state.Test
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		updateTestData: (data) => dispatch(updateTestData(data)) //to store the fetched test data
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
