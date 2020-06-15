const Test = (state = { active: -1, fields: { questions: [] } }, action) => {
	state = { ...state };
	switch (action.type) {
		case 'updateTestData':
			state = { ...action.payload };
			break;

		case 'updateActive':
			state.active = action.payload;
			break;
		case 'updateMarks':
			state.fields.questions[state.active].marks = action.payload;
			break;
		case 'updateRemarks':
			state.fields.questions[state.active].remarks = action.payload;
			state.fields.questions = [ ...state.fields.questions ];
			break;
		default:
			break;
	}
	return state;
};

export default Test;
