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
	return {
		type: 'updateActive',
		payload: index
	};
}
