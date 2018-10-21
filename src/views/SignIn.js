import React from 'react'
import PropTypes from 'prop-types'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import LockIcon from '@material-ui/icons/LockOutlined'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import withStyles from '@material-ui/core/styles/withStyles'
import axios from 'axios'

const apiEndpoint = process.env.REACT_APP_API

const styles = theme => ({
	layout: {
		width: 'auto',
		display: 'block', // Fix IE11 issue.
		marginLeft: theme.spacing.unit * 3,
		marginRight: theme.spacing.unit * 3,
		[theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
			width: 400,
			marginLeft: 'auto',
			marginRight: 'auto',
		},
	},
	paper: {
		marginTop: theme.spacing.unit * 8,
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme
			.spacing.unit * 3}px`,
	},
	avatar: {
		margin: theme.spacing.unit,
		backgroundColor: theme.palette.primary.main,
	},
	form: {
		width: '100%', // Fix IE11 issue.
		marginTop: theme.spacing.unit,
	},
	submit: {
		marginTop: theme.spacing.unit * 3,
	},
})

class SignIn extends React.Component {
	constructor() {
		super()
		this.state = {
			username: '',
			password: '',
			message: '',
		}
	}

	onChange = e => {
		const state = this.state
		state[e.target.name] = e.target.value
		this.setState(state)
	}

	onSubmit = e => {
		e.preventDefault()

		const { username, password } = this.state

		axios
			.post('https://' + apiEndpoint + '/login', { username, password })
			.then(result => {
				localStorage.setItem('jwtToken', result.data.token)
				localStorage.setItem('name', result.data.name)
				localStorage.setItem('username', result.data.username)

				this.setState({ message: '' })
				this.props.history.push('/dashboard')
			})
			.catch(error => {
				if (error.response.status === 401) {
					this.setState({
						message: 'Login failed. Username or password not match',
					})
				}
			})
	}

	onRegister = e => {
		this.props.history.push('/register')
	}

	render() {
		const { classes } = this.props
		const { username, password, message } = this.state
		return (
			<React.Fragment>
				<CssBaseline />
				<main className={classes.layout}>
					<Paper className={classes.paper}>
						<Avatar className={classes.avatar}>
							<LockIcon />
						</Avatar>
						<Typography variant="headline">Sign in</Typography>
						<form className={classes.form} onSubmit={this.onSubmit}>
							{message !== '' && <div role="alert">{message}</div>}
							<FormControl margin="normal" required fullWidth>
								<InputLabel htmlFor="email">Email Address</InputLabel>
								<Input
									id="username"
									name="username"
									autoComplete="email"
									autoFocus
									onChange={this.onChange}
									value={username}
								/>
							</FormControl>
							<FormControl margin="normal" required fullWidth>
								<InputLabel htmlFor="password">Password</InputLabel>
								<Input
									name="password"
									type="password"
									id="password"
									autoComplete="current-password"
									onChange={this.onChange}
									value={password}
								/>
							</FormControl>
							<FormControlLabel
								control={<Checkbox value="remember" color="primary" />}
								label="Remember me"
							/>
							<Button
								type="submit"
								fullWidth
								variant="contained"
								color="primary"
								className={classes.submit}
							>
								Sign In
							</Button>
						</form>
						<Button
							type="button"
							fullWidth
							variant="outlined"
							color="primary"
							className={classes.submit}
							onClick={this.onRegister}
						>
							Register
						</Button>
					</Paper>
				</main>
			</React.Fragment>
		)
	}
}

SignIn.propTypes = {
	classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(SignIn)
