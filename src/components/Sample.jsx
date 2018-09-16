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
    backgroundColor: '#FAFAFA' || theme.palette.background.paper,
  }
});

class Sample extends React.Component {
  constructor(props) {
    super(props);
    this.state = { sample: null };
  }

  componentWillMount(){

  }

  render() {
    const { classes } = this.props;
    const { expanded } = this.state;

    return (
      <TabContainer>
        <div className={classes.root}>
          <span><a href='https://github.com/Fairbanks-io/react-skeleton/'>React-Skeleton</a> is up and running. Edit the source to get started.</span>
          <br/>
        </div>
      </TabContainer>
    );
  }
}

Sample.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Sample);
