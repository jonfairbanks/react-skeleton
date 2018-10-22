import constants from './UserConstants'
import controller from './UserController'

const initialState = { users: controller.findAll() }

export default function userReducer(state = initialState, action) {

	switch (action.type) {
		case constants.USER_CREATE:
		case constants.USER_FIND_ALL:
		case constants.USER_UPDATE:
		case constants.USER_DELETE:
			return {
				...state,
				users: action.users
			};
		default:
			return state
	}
}
