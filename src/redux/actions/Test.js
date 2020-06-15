import store from './../Store.js';
import { addToBuffer, addToDataBuffer } from './SocketState.js';

export function updateTestData(data) {
	data = data[0];
	data.fields.questions = JSON.parse(data.fields.questions);
	let ques = data.fields.questions.map((data) => {
		return data;
	});
	data.fields['questions'] = Object.assign([], ques);
	data['active'] = -1;
	console.log(data);
	return {
		type: 'updateTestData',
		payload: data
	};
}

export function updateActive(index) {
	// AddingToBuffer();
	return {
		type: 'updateActive',
		payload: index
	};
}

export function updateMarks(marks) {
	return {
		type: 'updateMarks',
		payload: marks
	};
}

export function updateRemarks(text) {
	return {
		type: 'updateRemarks',
		payload: text
	};
}
