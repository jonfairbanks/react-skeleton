import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Index from "./views/index";
import SignIn from './views/SignIn';
import Login from './views/Login';
import Register from './views/Register';
import Users from './views/Users';

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    height: '100%',
    backgroundColor: theme.palette.background.paper,
  },
});

class Skeleton extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      skeleton: null
    };
  }

  render() {
    const { classes } = this.props;
    return (
      <Router>
        <div className={classes.root}>
          <Switch>
            <Route exact path="/" render={routeProps => (<Index {...routeProps} /> )}/>
            <Route exact path="/login" render={routeProps => (<Login {...routeProps} /> )}/>
            <Route exact path="/register" render={routeProps => (<Register {...routeProps} /> )}/>
            <Route exact path="/users" render={routeProps => (<Users {...routeProps} /> )}/>

            <Route exact path="/signin" render={routeProps => (<SignIn {...routeProps} /> )}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

Skeleton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Skeleton);
