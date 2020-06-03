import React, { Component } from 'react';
import styles from './css/QuestionsBtns.module.css';

import { connect } from 'react-redux';
import { updateActive } from './../../redux/actions/Test.js';

class QuestionsBtns extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		let questions = '';
		questions = this.props.questions.map((data, index) => {
			return (
				<button
					className={[ 'btn btn-dark m-2', styles.btns ].join(' ')}
					key={index}
					onClick={() => this.props.updateActive(index)}
					disabled={index == this.props.active}
				>
					{index + 1}
				</button>
			);
		});
		return <div id={styles.qBtnsCont}>{questions}</div>;
	}
}

const mapStateToProps = (state) => {
	return {
		active: state.Test.active,
		questions: state.Test.questions
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		updateActive: (index) => dispatch(updateActive(index))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionsBtns);
