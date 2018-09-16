import React from "react";
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    height: '100%',
    backgroundColor: theme.palette.background.paper,
  }
});

class Sample extends React.Component {
  constructor(props) {
    super(props);
    this.state = { sample: null };
  }

  render() {
    const { classes } = this.props;
    return (
      <TabContainer>
        <div className={classes.root}>
          <h3><a href='https://github.com/Fairbanks-io/react-skeleton/'>React-Skeleton</a> is up and running. Edit the source to get started.</h3>
          <h4>Included in React-Skeleton:</h4>
          <ul>
            <li><a href='https://reactjs.org/docs/getting-started.html' target='_blank' rel='noopener noreferrer'>React</a></li>
            <li><a href='https://material-ui.com/' target='_blank' rel='noopener noreferrer'>Material UI</a></li>
            <li><a href='https://fontawesome.com/icons' target='_blank' rel='noopener noreferrer'>FontAwesome 5</a><i className="fab fa-fort-awesome" style={{ 'paddingLeft': '5px' }}></i></li>
            <li><a href='https://mongoosejs.com/' target='_blank' rel='noopener noreferrer'>Mongoose</a></li>
            <li><a href='https://github.com/winstonjs/winston' target='_blank' rel='noopener noreferrer'>Winston Logging</a></li>
          </ul>
        </div>
      </TabContainer>
    );
  }
}

Sample.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Sample);
