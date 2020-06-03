export function setSocket(ws) {
	return {
		type: 'setSocket',
		payload: ws
	};
}

export function addToBuffer(index) {
	return {
		type: 'addToBuffer',
		payload: index
	};
}

export function connected() {
	return {
		type: 'connected',
		payload: null
	};
}

export function sending() {
	return {
		type: 'sendingData',
		payload: null
	};
}
