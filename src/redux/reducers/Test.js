const Test = (state = { active: -1, questions: [] }, action) => {
	state = { ...state };
	switch (action.type) {
		case 'updateTestData':
			state = { ...action.payload };
			break;
		case 'newQuestion':
			state.questions = [
				...state.questions,
				{
					pk: null,
					fields: { parent_test: state.pk, text: '', type: '', image: '', answer: '', jsonChoices: '' }
				}
			];
			state.active = state.questions.length - 1;
			break;
		case 'updateActive':
			state.active = action.payload;
			break;
	}
	return state;
};

export default Test;
