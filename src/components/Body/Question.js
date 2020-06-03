import React, { Component } from 'react';
import styles from './css/Question.module.css';

import { connect } from 'react-redux';
import {
	updateActiveQuestionText,
	updateAnswer,
	updateMarks,
	updateChoice,
	updateType
} from './../../redux/actions/Test.js';

class Question extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		// console.log('question', this.props.question);
		return (
			<div id={styles.questionMain} className="p-1 ml-2 flex-grow-1 mr-1 bg-light">
				{this.props.question === undefined || this.props.active === -1 ? (
					<div className="d-flex flex-row justify-content-center align-items-center h-100 w-100">
						<h1 className="text-muted">No Question Selected</h1>
					</div>
				) : (
					<React.Fragment>
						<h1 className={styles.qno}>
							<span className="mr-4 mt-0 pt-0">Q.{this.props.active + 1}</span>
						</h1>
						<textarea
							className={[ 'mt-4 form-control', styles.qtext ].join(' ')}
							value={this.props.question.fields.text}
							onChange={(ev) => this.props.updateActiveQuestionText(ev.target.value)}
							placeholder="Write your question text here"
							cols="80"
							rows="6"
						/>
						<br />
						<input className="ml-4 pl-4 mt-4" type="file" />
						<br />
						{this.props.question.fields.type === 'O' || this.props.question.fields.type === 'M' ? (
							<React.Fragment>
								<label className="mt-4 ml-4 pl-4">Choice 1:</label>
								<input
									type="text"
									className={[ 'form-control w-25 m-4', styles.choices ].join(' ')}
									onChange={(ev) => this.props.updateChoice(1, ev.target.value)}
								/>

								<label>Choice 2:</label>
								<input
									type="text"
									className={[ 'form-control w-25 m-4', styles.choices ].join(' ')}
									onChange={(ev) => this.props.updateChoice(2, ev.target.value)}
								/>
								<br />
								<label className="mt-4 ml-4 pl-4">Choice 3:</label>
								<input
									type="text"
									className={[ 'form-control w-25 m-4', styles.choices ].join(' ')}
									onChange={(ev) => this.props.updateChoice(3, ev.target.value)}
								/>
								<label>Choice 4:</label>
								<input
									type="text"
									className={[ 'form-control w-25 m-4', styles.choices ].join(' ')}
									onChange={(ev) => this.props.updateChoice(4, ev.target.value)}
								/>
								<br />
							</React.Fragment>
						) : (
							''
						)}
						{this.props.question.fields.type != 'D' ? (
							<React.Fragment>
								<label className="ml-4 pl-4 mt-4">Answer:</label>
								<input
									className="ml-4 pl-4 form-control w-25"
									style={{ display: 'inline' }}
									type="text"
									name="answer"
									onChange={(ev) => this.props.updateAnswer(ev.target.value)}
								/>
							</React.Fragment>
						) : (
							''
						)}
						<div className={[ styles.rightpannel, 'p-2 mt-4 pr-4' ].join(' ')}>
							<label>Marks:</label>
							<input
								className={[ 'form-control w-50 ml-4', styles.marksinp ].join(' ')}
								onChange={(ev) => this.props.updateMarks(ev.target.value)}
							/>
							<br />
							<label className="mt-4">Question Type:</label>
							<select
								className="form-control"
								value={this.props.question.fields.type}
								onChange={(ev) => this.props.updateType(ev.target.value)}
							>
								<option value="">---------</option>
								<option value="D">Descriptive</option>
								<option value="O">One_Option_Correct</option>
								<option value="M">Multu_Option_Correct</option>
								<option value="F">Fill</option>
							</select>
						</div>
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

const mapDispatchToProps = (dispatch) => {
	return {
		updateActiveQuestionText: (text) => dispatch(updateActiveQuestionText(text)),
		updateAnswer: (ans) => dispatch(updateAnswer(ans)),
		updateChoice: (cindex, cdata) => dispatch(updateChoice(cindex, cdata)),
		updateMarks: (marks) => dispatch(updateMarks(marks)),
		updateType: (val) => dispatch(updateType(val))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Question);
