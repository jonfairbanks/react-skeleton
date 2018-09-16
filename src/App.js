import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";

import Sample from "./components/Sample.jsx";

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    height: '100%',
    backgroundColor: '#FAFAFA' || theme.palette.background.paper,
  },
});

class Skeleton extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      sample: null
    };
  }

  render() {
    const { classes } = this.props;
    const { activeTab } = this.state;
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
