import React from 'react';
import styles from './css/Question.module.css';

import { connect } from 'react-redux';
import { updateChoice } from './../../redux/actions/Test.js';

function Choices(props) {
	return (
		<React.Fragment>
			<div className={[ 'p-0 d-flex w-100', styles.choicesCont ].join(' ')}>
				<div className={[ 'p-0 d-flex w-100 align-items-baseline', styles.choicesCont ].join(' ')}>
					<label className={[ 'mt-4 ml-4 pl-4', styles.choicesLabel ].join(' ')}>Choice 1:</label>
					<input
						type="text"
						className={[ 'form-control m-4', styles.choices ].join(' ')}
						value={props.choices[0] !== undefined ? props.choices[0] : ''}
						onChange={(ev) => props.updateChoice(1, ev.target.value)}
					/>
				</div>
				<div className={[ 'p-0 d-flex w-100 align-items-baseline', styles.choicesCont ].join(' ')}>
					<label className={[ 'mt-4 ml-4 pl-4', styles.choicesLabel ].join(' ')}>Choice 2:</label>
					<input
						type="text"
						className={[ 'm-4 form-control', styles.choices ].join(' ')}
						value={props.choices[1] !== undefined ? props.choices[1] : ''}
						onChange={(ev) => props.updateChoice(2, ev.target.value)}
					/>
				</div>
			</div>
			<div className={[ 'p-0 d-flex w-100', styles.choicesCont ].join(' ')}>
				<div className={[ 'p-0 d-flex w-100 align-items-baseline', styles.choicesCont ].join(' ')}>
					<label className={[ 'mt-4 ml-4 pl-4', styles.choicesLabel ].join(' ')}>Choice 3:</label>
					<input
						type="text"
						className={[ 'form-control m-4', styles.choices ].join(' ')}
						value={props.choices[2] !== undefined ? props.choices[2] : ''}
						onChange={(ev) => props.updateChoice(3, ev.target.value)}
					/>
				</div>
				<div className={[ 'p-0 d-flex w-100 align-items-baseline', styles.choicesCont ].join(' ')}>
					<label className={[ 'mt-4 ml-4 pl-4', styles.choicesLabel ].join(' ')}>Choice 4:</label>
					<input
						type="text"
						className={[ 'form-control m-4', styles.choices ].join(' ')}
						value={props.choices[3] !== undefined ? props.choices[3] : ''}
						onChange={(ev) => props.updateChoice(4, ev.target.value)}
					/>
				</div>
			</div>
		</React.Fragment>
	);
}

const mapStateToProps = (state) => {
	return {
		active: state.Test.active,
		choices:
			state.Test.questions[state.Test.active].fields.jsonChoices !== ''
				? JSON.parse(state.Test.questions[state.Test.active].fields.jsonChoices)
				: []
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		updateChoice: (cindex, cdata) => dispatch(updateChoice(cindex, cdata))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Choices);
