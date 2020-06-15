import React, { Component } from 'react';
import styles from './css/Sidebar.module.css';
import Question from './Question.js';
import QuestionsBtns from './QuestionsBtns.js';

//Side bar or the container of the question buttons also the entry point for the qustion body
class Sidebar extends Component {
	render() {
		return (
			<React.Fragment>
				<div id={styles.sidebarMain} className="p-1 bg-secondary">
					<h1 className="display-4 bg-info text-light pl-2" id={styles.sideHead}>
						Questions
						<button id={styles.addBtn} className="btn btn-dark" onClick={() => this.props.enter(1)}>
							result
						</button>
					</h1>

					{/* Container of all the qustion numbers as buttons to navigate */}
					<QuestionsBtns />
				</div>
				{/* Container of the Question body */}
				<Question />
			</React.Fragment>
		);
	}
}

export default Sidebar;
