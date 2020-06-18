import React, { Component } from 'react';
import styles from './css/QuestionsBtns.module.css';

import { connect } from 'react-redux';
import { updateActive } from './../../redux/actions/Test.js';

class QuestionsBtns extends Component {
	render() {
		let questions = '';
		//mapping question buttons from all the available question in redux state
		questions = this.props.questions.map((data, index) => {
			let state = data.state.join('');
			let cls = '';
			//Btn color based on marks
			if (data.marks == 0) cls = 'btn-danger';
			else if (data.marks !== data.fields.marks) cls = 'btn-warning';
			else cls = 'btn-success';

			if (index === this.props.active) cls = 'btn-primary';
			return (
				<button
					className={[ 'btn m-2', styles.btns, cls ].join(' ')}
					key={index}
					onClick={() => this.props.updateActive(index)}
					//update active questin on change also push to buffer for sending to backend i there is any change se the corrosponding action in redux/action/Top.js
					active={index === this.props.active}
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
		questions: state.Test.fields.questions
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		updateActive: (index) => dispatch(updateActive(index))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionsBtns);
