import store from './../Store.js';
import { addToBuffer } from './SocketState.js';

export function updateTestData(data) {
	let questions = data.questions.map((data) => {
		data['changed'] = 0;
		return data;
	});
	data['questions'] = Object.assign([], questions);
	data['active'] = -1;
	return {
		type: 'updateTestData',
		payload: data
	};
}

export function newQuestion() {
	return {
		type: 'newQuestion'
	};
}

export function updateActive(index) {
	let test = store.getState().Test;
	if (test.active !== -1) if (test.questions[test.active].changed === 1) store.dispatch(addToBuffer(test.active));
	console.log(store.getState());
	return {
		type: 'updateActive',
		payload: index
	};
}

export function updateActiveQuestionText(text) {
	return {
		type: 'updateActiveQuestionText',
		payload: text
	};
}

export function updateAnswer(ans) {
	return {
		type: 'updateActiveAnswer',
		payload: ans
	};
}

export function updateMarks(marks) {
	return {
		type: 'updateActiveMarks',
		payload: marks
	};
}

export function updateType(val) {
	console.log(val);
	return {
		type: 'updateActiveQuestionType',
		payload: val
	};
}

export function updateChoice(cindex, cdata) {
	return {
		type: 'updateActiveChoices',
		payload: { cindex, cdata }
	};
}
