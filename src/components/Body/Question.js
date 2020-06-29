import React, { Component } from 'react';
import styles from './css/Question.module.css';
import Choices from './Choices.js';
import Image from './Image.js';

import { connect } from 'react-redux';

class Question extends Component {
	check = () => {
		// check given marks and total marks and tag the question accordingly
		let res = '';
		if (this.props.question.fields.type !== 'D') {
			if (this.props.question.marks === this.props.question.fields.marks)
				res = <h6 className="text-success ml-4 mt-4 pl-1">Correct</h6>;
			else if (this.props.question.marks !== 0)
				res = <h6 className="text-warning ml-4 mt-4 pl-1">Partially Correct</h6>;
			else res = <h6 className="text-danger ml-4 mt-4 pl-1">Wrong</h6>;
		}
		return res;
	};

	render() {
		return (
			<div id={styles.questionMain} className="p-1 m-1 flex-grow-1 bg-light pb-4">
				{this.props.active == -1 ? (
					<h1 className="text-center text-muted mt-4">Select question for the side pannel</h1>
				) : (
					<React.Fragment>
						<div className="d-flex flex-row align-items-top">
							<h2 className={[ 'd-inline mr-0 mr-2', styles.qno ].join(' ')}>
								Q.{this.props.active + 1}
							</h2>
							<h4 className={[ 'mt-3 mr-0 pr-0 ml-1', styles.qinfo ].join(' ')}>
								{this.props.question.fields.text}
							</h4>
							<div className={[ styles.rightpannel, 'ml-auto mr-3 mt-2' ].join(' ')}>
								<h6>{this.props.question.fields.marks}</h6>
								<h6>{this.props.question.fields.type}</h6>
							</div>
						</div>

						<Image />
						<br />

						{this.props.question.fields.type !== 'F' && this.props.question.fields.type !== 'D' ? (
							<Choices type={this.props.question.fields.type} submitted={this.props.submitted} />
						) : this.props.question.fields.type !== 'D' ? (
							<React.Fragment>
								<label className="ml-4 pl-4 mt-4">Answer:</label>
								<input
									className={[ 'ml-4 pl-4 form-control w-50', styles.ansInp ].join(' ')}
									style={{ display: 'inline' }}
									type="text"
									name="answer"
									value={this.props.question.answer}
									readOnly={true}
								/>
							</React.Fragment>
						) : (
							<div className="d-flex align-items-strech flex-column pr-4 mr-4 ml-4">
								<label className="mt-4">Answer:</label>
								<textarea
									className={[ 'pl-4 form-control' ].join(' ')}
									style={{ display: 'inline' }}
									type="text"
									name="answer"
									rows="8"
									value={this.props.question.answer}
									onChange={(ev) => this.props.updateAnswer(ev.target.value)}
									readOnly={true}
								/>
								<label className="mt-4">Remarks:</label>
								<textarea
									className={[ 'pl-4 form-control' ].join(' ')}
									rows="4"
									value={this.props.question.remarks ? this.props.question.remarks : ''}
									readOnly={true}
								/>
								<label className="mt-4">Marks:</label>
								<input
									className={[ 'pl-4 form-control w-25', styles.ansInp ].join(' ')}
									type="number"
									name="marks"
									value={this.props.question.marks}
									readOnly={true}
								/>
							</div>
						)}
						{this.check()}
					</React.Fragment>
				)}
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		active: state.Test.active,
		question: state.Test.active !== -1 ? state.Test.fields.questions[state.Test.active] : { fields: {} },
		test: state.Test
	};
};

export default connect(mapStateToProps)(Question);
