import React, { Component } from 'react';
import styles from './css/Question.module.css';

import { connect } from 'react-redux';

class Question extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		// console.log('question', this.props.question);
		return (
			<div id={styles.questionMain} className="p-1 ml-2 flex-grow-1 mr-1 bg-light">
				{this.props.question == undefined ? (
					''
				) : (
					<React.Fragment>
						<h1 style={{ display: 'inline' }}>
							<span className="mr-4">Q.{this.props.active + 1}</span>
						</h1>
						<textarea className="mt-4" value={this.props.question.fields.text} />
					</React.Fragment>
				)}
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		active: state.Test.active,
		question: state.Test.questions[state.Test.active]
	};
};

export default connect(mapStateToProps)(Question);
