const Test = (state = { active: -1, fields: { questions: [] } }, action) => {
	state = { ...state };
	switch (action.type) {
		case 'updateTestData':
			state = { ...action.payload };
			break;
		case 'updateActive':
			state.active = action.payload;
			break;
		default:
			break;
	}
	return state;
};

export default Test;
