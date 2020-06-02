//ver0: resolved

import React, { Component } from 'react';
import CloseOverlay from './../CloseOverlay.js';
import styles from './css/OverlayForm.module.css';

/*Everything similar to OverlayForm.js 
submit button text changed to delete*/

class OverlayDeleteForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			form_data: '',
			success: 0,
			spinner: 'spinner-grow',
			btnSpinner: ''
		};

		fetch(this.props.url, { credentials: window.cred }).then((response) => response.text()).then((data) => {
			this.setState((state, props) => {
				return { form_data: data, spinner: '' };
			});
		});
	}

	submitHandler = (event) => {
		event.preventDefault();
		var form = new FormData(document.querySelector([ '#', styles.form ].join('')));
		this.setState({ btnSpinner: 'spinner-border spinner-border-sm' });
		fetch(this.props.url, {
			method: 'POST',
			credentials: window.cred,
			body: form
		})
			.then((response) => response.text())
			.then((data) => {
				if (data.indexOf('success') != -1) {
					this.setState((state, props) => {
						return {
							form_data: data,
							success: 1
						};
					});
					this.props.updateBoard();
				} else {
					this.setState((state, props) => {
						return {
							form_data: data
						};
					});
				}
			});
	};

	render() {
		return (
			<div className="container bg-light" id={styles.overlaymain}>
				<button id={styles.cross} onClick={(event) => CloseOverlay(event, styles.overlaymain)}>
					<i className="material-icons">cancel</i>
				</button>
				{this.state.spinner == '' ? (
					<form onSubmit={this.submitHandler} id={styles.form}>
						<div dangerouslySetInnerHTML={{ __html: this.state.form_data }} />
						{this.state.success == 0 ? (
							<button
								style={{ marginTop: '10px' }}
								className="btn btn-primary"
								id={styles.submit}
								type="submit"
								disabled={this.state.btnSpinner != ''}
							>
								Delete
								<span className={this.state.btnSpinner} style={{ marginLeft: '6px' }} />
							</button>
						) : (
							''
						)}
					</form>
				) : (
					<div id={styles.spinnerCont} className="text-dark">
						<div className={[ 'spinner-grow', styles.spinner ].join(' ')} />
						<div className={[ 'spinner-grow', styles.spinner ].join(' ')} />
						<div className={[ 'spinner-grow', styles.spinner ].join(' ')} />
					</div>
				)}
			</div>
		);
	}
}

export default OverlayDeleteForm;
