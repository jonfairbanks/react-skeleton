import Constants from './UserConstants'
import controller from './UserController'

class UserActions {
  create(content) {
    let users = controller.create(content)
    return function( dispatch ) {
      dispatch( {
        type: Constants.USER_CREATE,
        users
      });
    }
  }

  findAll() {
    let users = controller.findAll()
    return function( dispatch ) {
      dispatch( {
        type: Constants.USER_FIND_ALL,
        users
      })
    }
  }

  remove(id) {
    let users = controller.remove(id)
    return function( dispatch ) {
      dispatch( {
        type: Constants.USER_DELETE,
        users
      })
    }
  }

  update(user) {
    let users = controller.update(user)
    return function( dispatch ) {
      dispatch( {
        type: Constants.USER_CREATE,
        users
      })
    }
  }
}

export default new UserActions()
