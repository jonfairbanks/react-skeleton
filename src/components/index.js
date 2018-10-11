import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import Navbar from '../components/navbar';

const styles = theme => ({
  appBar: {
    position: 'relative',
  },
  icon: {
    marginRight: theme.spacing.unit * 2,
  },
  heroUnit: {
    backgroundColor: theme.palette.background.paper,
  },
  heroContent: {
    maxWidth: 600,
    margin: '0 auto',
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
  },
  heroButtons: {
    marginTop: theme.spacing.unit * 4,
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing.unit,
    position: 'absolute',
    width: '100vw',
    bottom: '0px',
  },
});

function Home(props) {
  const { classes } = props;

  return (
    <React.Fragment>
      <CssBaseline />
      <Navbar />
      <main>
        {/* Hero unit */}
        <div className={classes.heroUnit}>
            <div className={classes.heroContent}>
              <Typography variant="display3" align="center" color="textPrimary" gutterBottom>
                <i style={{ paddingRight: '10px' }} className="fab fa-react"/>
                React-Skelton
              </Typography>
              <Typography variant="title" align="center" color="textSecondary" paragraph>
                A simple framework to help get you started with your client-side React.js app.
              </Typography>
              <div className={classes.heroButtons}>
                <Grid container spacing={16} justify="center">
                  <Grid item>
                    <a style={{ textDecoration: 'none' }} href='https://github.com/Fairbanks-io/react-skeleton' target='_blank' rel='noopener noreferrer'>
                      <Button variant="contained" color="primary">
                        <i style={{ paddingRight: '10px' }} className="fab fa-github"/>
                        View on GitHub
                      </Button>
                    </a>
                  </Grid>
                  <Grid item>
                    <a style={{ textDecoration: 'none' }} href='https://reactjs.org/docs/getting-started.html' target='_blank' rel='noopener noreferrer'>
                      <Button variant="outlined" color="primary">
                        Learning React.js
                      </Button>
                    </a>
                  </Grid>
                </Grid>
              </div>
            </div>
          </div>
          <div className={classNames(classes.layout, classes.contentGrid)}>
            {/* End hero unit */}
            <Grid container spacing={40}>
              <Grid item sm={6} md={4} lg={4}>
                <h3>Server-Side Rendered Pages</h3>
                <List component="nav">
                  <ListItem button component="a" href="/page/first">
                    <i className="fas fa-xs fa-minus"></i>
                    <ListItemText primary="Sample Page 1" />
                  </ListItem>
                  <ListItem button component="a" href="/page/second">
                    <i className="fas fa-xs fa-minus"></i>
                    <ListItemText primary="Sample Page 2" />
                  </ListItem>
                  <ListItem button component="a" href="/page/third">
                    <i className="fas fa-xs fa-minus"></i>
                    <ListItemText primary="Sample Page 3" />
                  </ListItem>
                </List>
              </Grid>
              <Grid item sm={6} md={4} lg={4}>
                <h3>Included Features</h3>
                <List component="nav">
                  <ListItem button component="a" href="https://material-ui.com/" target='_blank' rel='noopener noreferrer'>
                    <i className="fab fa-2x fa-uikit"></i>
                    <ListItemText primary="Material UI" />
                  </ListItem>
                  <ListItem button component="a" href="https://fontawesome.com/icons" target='_blank' rel='noopener noreferrer'>
                    <i className="fab fa-2x fa-font-awesome-alt"></i>
                    <ListItemText primary="FontAwesome 5" />
                  </ListItem>
                  <ListItem button component="a" href="https://github.com/jaredhanson/passport" target='_blank' rel='noopener noreferrer'>
                    <i className="fas fa-2x fa-user-lock"></i>
                    <ListItemText primary="OAuth Integrated" />
                  </ListItem>
                  <ListItem button component="a" href="https://mongoosejs.com/" target='_blank' rel='noopener noreferrer'>
                    <i className="fas fa-2x fa-stream"></i>
                    <ListItemText primary="MongoDB Modeling via Mongoose" />
                  </ListItem>
                  <ListItem button component="a" href="https://mongoosejs.com/" target='_blank' rel='noopener noreferrer'>
                    <i className="far fa-2x fa-file-code"></i>
                    <ListItemText primary="Winston Logging" />
                  </ListItem>
                </List>
              </Grid>
              <Grid item sm={6} md={4} lg={4}>
                <h3>Links and Documentation</h3>
                <List component="nav">
                  <ListItem button component="a" href="https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md" target='_blank' rel='noopener noreferrer'>
                    <i className="fas fa-xs fa-minus"></i>
                    <ListItemText primary="Create-React-App User Guide" />
                  </ListItem>
                  <ListItem button component="a" href="https://github.com/jonfairbanks/ExpressHTTP" target='_blank' rel='noopener noreferrer'>
                    <i className="fas fa-xs fa-minus"></i>
                    <ListItemText primary="Deploy to Production with ExpressHTTP" />
                  </ListItem>
                  <ListItem button component="a" href="https://www.digitalocean.com/community/tutorials/how-to-use-winston-to-log-node-js-applications" target='_blank' rel='noopener noreferrer'>
                    <i className="fas fa-xs fa-minus"></i>
                    <ListItemText primary="Utilizing Winston Logger" />
                  </ListItem>
                </List>
              </Grid>
            </Grid>
          </div>
        </main>
        {/* Footer */}
        <footer className={classes.footer}>
          <Typography variant="title" align="center" gutterBottom>
            Footer
          </Typography>
          <Typography variant="subheading" align="center" color="textSecondary" component="p">
            Copyright &copy; React-Skelton {(new Date()).getFullYear()}
          </Typography>
        </footer>
        {/* End footer */}
    </React.Fragment>
  );
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);