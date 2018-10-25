import React from 'react'
import PropTypes from 'prop-types'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import Input from '@material-ui/core/Input'
import Badge from '@material-ui/core/Badge'
import MenuItem from '@material-ui/core/MenuItem'
import Menu from '@material-ui/core/Menu'
import { fade } from '@material-ui/core/styles/colorManipulator'
import { withStyles } from '@material-ui/core/styles'
import SearchIcon from '@material-ui/icons/Search'
import AccountCircle from '@material-ui/icons/AccountCircle'
import MailIcon from '@material-ui/icons/Mail'
import NotificationsIcon from '@material-ui/icons/Notifications'
import MoreIcon from '@material-ui/icons/MoreVert'

const styles = theme => ({
  root: {
    width: '100%',
  },
  grow: {
    flexGrow: 1,
  },
  button: {
    margin: theme.spacing.unit,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'absolute',
    right: '95px',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing.unit * 2,
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit * 3,
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing.unit * 5,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 5,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 180,
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
})

class NavBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      anchorEl: null,
      mobileMoreAnchorEl: null,
      session: props.session,
      isSignedIn: false,
      isAdminUser: false,
      name: null,
      email: null,
      photo: null
    }
  }

  state = {
    anchorEl: null,
    mobileMoreAnchorEl: null,
  }

  handleProfileMenuOpen = event => {
    this.setState({ anchorEl: event.currentTarget })
  }

  handleMenuClose = () => {
    this.setState({ anchorEl: null })
    this.handleMobileMenuClose()
  }

  handleMobileMenuOpen = event => {
    this.setState({ mobileMoreAnchorEl: event.currentTarget })
  }

  handleMobileMenuClose = () => {
    this.setState({ mobileMoreAnchorEl: null })
  }

  handleSignIn = () => {
    this.handleMobileMenuClose()
    this.props.history.push('/signin')
  }

  handleGoToDashboard = () => {
    this.handleMobileMenuClose()
    this.props.history.push('/dashboard')
  }

  handleGoToAdmin = () => {
    this.handleMobileMenuClose()
    this.props.history.push('/admin')
  }

  handleGoToAccount = () => {
    this.handleMobileMenuClose()
    //Router.push('/account') // TO DO
  }

  handleSignOut = () => {
    localStorage.removeItem('jwtToken')
    localStorage.removeItem('username')
    localStorage.removeItem('name')
    window.location.reload()
  }

  componentWillMount() {
    if (localStorage.getItem('jwtToken')) {
      this.setState({ isSignedIn: true, anchorEl: null })
    } else {
      this.setState({ isSignedIn: false, anchorEl: null })
    }

    var session = JSON.parse(localStorage.getItem('session'));
    if(session.user) {
      this.setState({ 
        name: session.user.name,
        email: session.user.email,
        photo: session.user.photo,
        isAdminUser: (session.user.admin === true) ? true : false
      })
    }
  }

  componentDidMount() {
    console.log(this.props.location.pathname);
    console.log(this.state);
  }

  render() {
    const { anchorEl, mobileMoreAnchorEl } = this.state
    const { classes } = this.props
    const isMenuOpen = Boolean(anchorEl)
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl)

    const renderMenu = (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMenuOpen}
        onClose={this.handleMenuClose}
      >
        {this.state.isSignedIn === true ? (
          <div>
            <MenuItem onClick={this.handleGoToDashboard}>Dashboard</MenuItem>
            {this.state.isAdminUser === true ? (
              <MenuItem onClick={this.handleGoToAdmin}>Admin</MenuItem>
            ) : null}
            <MenuItem onClick={this.handleGoToAccount}>Account</MenuItem>
            <MenuItem onClick={this.handleSignOut}>Sign Out</MenuItem>
          </div>
        ) : null}
      </Menu>
    )

    const renderMobileMenu = (
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMobileMenuOpen}
        onClose={this.handleMobileMenuClose}
      >
        <MenuItem>
          <IconButton color="inherit">
            <Badge
              className={classes.margin}
              badgeContent={4}
              color="secondary"
            >
              <MailIcon />
            </Badge>
          </IconButton>
          <p>Messages</p>
        </MenuItem>
        <MenuItem>
          <IconButton color="inherit">
            <Badge
              className={classes.margin}
              badgeContent={11}
              color="secondary"
            >
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <p>Notifications</p>
        </MenuItem>
        <MenuItem onClick={this.handleProfileMenuOpen}>
          <IconButton color="inherit">
            {this.state.isSignedIn === true ? (
              <AccountCircle />
            ) : (
              <Button
                onClick={this.handleSignIn}
                style={{ color: '#FFF', borderColor: '#FFF' }}
                variant="outlined"
                color="primary"
                size="small"
                className={classes.button}
              >
                Sign In
              </Button>
            )}
          </IconButton>
          <p>Profile</p>
        </MenuItem>
      </Menu>
    )

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography
              className={classes.title}
              variant="title"
              color="inherit"
              noWrap
            >
              <a style={{ textDecoration: 'none', color: 'white' }} href="/">
                <i style={{ paddingRight: '10px' }} className="fab fa-react" />
                React-Skeleton
              </a>
            </Typography>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <Input
                placeholder="Search…"
                disableUnderline
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
              />
            </div>
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              {this.state.isSignedIn === true ? (
                <IconButton
                  aria-owns={isMenuOpen ? 'material-appbar' : null}
                  aria-haspopup="true"
                  onClick={this.handleProfileMenuOpen}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
              ) : (
                <Button
                  onClick={this.handleSignIn}
                  style={{ color: '#FFF', borderColor: '#FFF' }}
                  variant="outlined"
                  color="primary"
                  size="small"
                  className={classes.button}
                >
                  Sign In
                </Button>
              )}
            </div>
            <div className={classes.sectionMobile}>
              <IconButton
                aria-haspopup="true"
                onClick={this.handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        {renderMenu}
        {renderMobileMenu}
      </div>
    )
  }
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(NavBar)
