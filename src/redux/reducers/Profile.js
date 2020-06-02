const Profile = (state = {}, action) => {
	switch (action.type) {
		case 'updateProfile':
			state = { ...action.payload };
			break;
	}
	return state;
};

export default Profile;
