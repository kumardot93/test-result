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
			if (state.active !== -1) {
				state.questions[state.active].changed = 0;
			}
			state.active = action.payload;
			break;
		case 'updateActiveQuestionText':
			state.questions[state.active].fields.text = action.payload;
			state.questions[state.active].changed = 1;
			state.questions[state.active] = { ...state.questions[state.active] };
			break;
		case 'updateActiveAnswer':
			state.questions[state.active].fields.answer = action.payload;
			state.questions[state.active].changed = 1;
			state.questions[state.active] = { ...state.questions[state.active] };
			break;
		case 'updateActiveMarks':
			state.questions[state.active].fields.marks = action.payload;
			state.questions[state.active].changed = 1;
			state.questions[state.active] = { ...state.questions[state.active] };
			break;
		case 'updateActiveQuestionType':
			state.questions[state.active].fields.type = action.payload;
			state.questions[state.active].changed = 1;
			state.questions[state.active] = { ...state.questions[state.active] };
			break;
		case 'updateActiveChoices':
			state.questions[state.active].fields.jsonChoices[action.payload.cindex - 1] = action.payload.cdata;
			state.questions[state.active].changed = 1;
			state.questions[state.active] = { ...state.questions[state.active] };
			break;
	}
	return state;
};

export default Test;
