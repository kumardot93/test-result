import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Message from './components/Message.js';

import store from './redux/Store.js';
import { connect } from 'react-redux';
import { setSocket, connected, sending } from './redux/actions/SocketState.js';

class SocketManager extends Component {
	constructor(props) {
		super(props);
		this.ws = null;
	}

	NewWebSocket = () => {
		this.ws = new WebSocket('ws://' + window.hostName + '/ws/material/testMaker/');
		let key = extractKey();
		key = parseInt(key);

		this.ws.onopen = () => {
			let raw_data = { type: 'initilization', payload: key };
			this.ws.send(JSON.stringify(raw_data));
		};

		this.ws.onmessage = (ev) => {
			console.log('ev: ', ev);
			console.log('data:', ev.data);
			let msg = JSON.parse(ev.data);
			switch (msg.type) {
				case 'connected':
					this.props.socketConnected();
					break;
			}
		};

		this.props.setSocket(this.ws);
		let el = document.getElementById('message');
		el.style.display = 'block';
		ReactDOM.render(<Message message="Connection successful" />, el);
	};

	componentDidMount = () => {
		this.NewWebSocket();
	};

	BufferManager = () => {
		let questions = store.getState().Test.questions;
		let isready = store.getState().SocketState.isready;
		if (this.props.isready === 0) return;
		if (this.props.buffer.length === 0) return;
		let qstn = questions[0];
		let data = {
			type: 'questionUpdate',
			payload: qstn
		};
		data = JSON.stringify(data);
		this.props.sendingData();
		this.ws.send(data);
	};

	render() {
		this.BufferManager();
		return <React.Fragment />;
	}
}

const mapStateToProps = (state) => {
	return {
		buffer: state.SocketState.buffer
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		setSocket: (ws) => dispatch(setSocket(ws)),
		socketConnected: () => dispatch(connected()),
		sendingData: () => dispatch(sending())
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(SocketManager);

var extractKey = () => {
	//extracts the pk form the url
	let url = window.location.href;
	let size = url.length;
	let lastindexofSlash = url.lastIndexOf('/');
	if (lastindexofSlash === size - 1) {
		url = url.slice(0, -1);
		lastindexofSlash = url.lastIndexOf('/');
	}
	return url.substring(lastindexofSlash + 1);
};

export { extractKey };
