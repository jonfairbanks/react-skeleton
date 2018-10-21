import { connect } from 'react-redux';
import UserList from './UserList';
import actions from './UserActions';

const mapStateToProps = (state, ownProps) => {
	return {
		users:	state.users.users
	}
};

const mapDispatchToProps = (dispatch) => {
	 return {
		 addUser: (content) => {
			 dispatch( actions.create( content ))
	 	},
    update: (user) => {
      dispatch( actions.create( user ))
    },
    remove: (id) => {
      dispatch( actions.remove( id ))
    }
	 }
};

let UserContainer = connect(mapStateToProps, mapDispatchToProps)(UserList);

export default UserContainer;
