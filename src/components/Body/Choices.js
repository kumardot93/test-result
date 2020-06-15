import React, { Component } from 'react';
import styles from './css/Question.module.css';

import { connect } from 'react-redux';
import { updateAnswer } from './../../redux/actions/Test.js';

class Choices extends Component {
	render() {
		return (
			<React.Fragment>
				<div className={[ 'p-0 d-flex w-100', styles.choicesCont ].join(' ')}>
					<div className={[ 'p-0 d-flex w-100 align-items-baseline', styles.choicesCont ].join(' ')}>
						<div className="form-check mt-4 ml-4 pl-4">
							<input
								className="form-check-input"
								type="radio"
								checked={this.props.question.answer[0] == 1}
								readOnly={true}
							/>
							<label className={[ 'form-check-label', styles.choicesLabel ].join(' ')}>
								{this.props.choices[0] !== undefined ? this.props.choices[0] : ''}
							</label>
						</div>
					</div>
					<div className={[ 'p-0 d-flex w-100 align-items-baseline', styles.choicesCont ].join(' ')}>
						<div className="form-check mt-4 ml-4 pl-4">
							<input
								className="form-check-input"
								type="radio"
								checked={this.props.question.answer[1] == 1}
								readOnly={true}
							/>
							<label className={[ 'form-check-label', styles.choicesLabel ].join(' ')}>
								{this.props.choices[1] !== undefined ? this.props.choices[1] : ''}
							</label>
						</div>
					</div>
				</div>
				<div className={[ 'p-0 d-flex w-100', styles.choicesCont ].join(' ')}>
					<div className={[ 'p-0 d-flex w-100 align-items-baseline', styles.choicesCont ].join(' ')}>
						<div className="form-check mt-4 ml-4 pl-4">
							<input
								className="form-check-input"
								type="radio"
								checked={this.props.question.answer[2] == 1}
								readOnly={true}
							/>
							<label className={[ 'form-check-label', styles.choicesLabel ].join(' ')}>
								{this.props.choices[2] !== undefined ? this.props.choices[2] : ''}
							</label>
						</div>
					</div>
					<div className={[ 'p-0 d-flex w-100 align-items-baseline', styles.choicesCont ].join(' ')}>
						<div className="form-check mt-4 ml-4 pl-4">
							<input
								className="form-check-input"
								type="radio"
								checked={this.props.question.answer[3] == 1}
								readOnly={true}
							/>
							<label className={[ 'form-check-label', styles.choicesLabel ].join(' ')}>
								{this.props.choices[0] !== undefined ? this.props.choices[3] : ''}
							</label>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		active: state.Test.active,
		choices:
			state.Test.fields.questions[state.Test.active].fields.jsonChoices !== ''
				? JSON.parse(state.Test.fields.questions[state.Test.active].fields.jsonChoices)
				: [],
		question: state.Test.fields.questions[state.Test.active]
	};
};

export default connect(mapStateToProps)(Choices);
