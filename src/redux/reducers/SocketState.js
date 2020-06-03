const SocketState = (state = { socket: null, status: 'connecting', buffer: [], isready: 0 }, action) => {
	state = { ...state };
	switch (action.type) {
		case 'setSocket':
			state.socket = action.payload;
			break;
		case 'connected':
			state.status = 'connected';
			state.isready = 1;
			break;
		case 'addToBuffer':
			state.buffer = [ ...state.buffer, action.payload ];
			state.status = 'saving';
			break;
		case 'sendingData':
			state.isready = 0;
			state.status = 'saving';
	}
	return state;
};

export default SocketState;
