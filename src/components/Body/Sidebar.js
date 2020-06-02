import React, { Component } from 'react';
import styles from './css/Sidebar.module.css';
import Question from './Question.js';
import QuestionsBtns from './QuestionsBtns.js';

import { connect } from 'react-redux';
import { newQuestion } from './../../redux/actions/Test.js';

class Sidebar extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		let questions = '';
		return (
			<React.Fragment>
				<div id={styles.sidebarMain} className="p-1 bg-secondary">
					<h1 className="display-4 bg-info text-light pl-2" id={styles.sideHead}>
						Questions
						<button
							className="material-icons p-0 btn btn-primary"
							id={styles.addBtn}
							onClick={this.props.newQuestion}
						>
							add
						</button>
					</h1>
					<QuestionsBtns />
				</div>
				<Question />
			</React.Fragment>
		);
	}
}

const mapStateToProps = null;

const mapDispatchToProps = (dispatch) => {
	return {
		newQuestion: (event) => dispatch(newQuestion())
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
