import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Sample from "./components/Sample.jsx";

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
            <Route exact path="/" render={routeProps => (<Sample {...routeProps} /> )}/>
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
