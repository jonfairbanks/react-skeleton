import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import EditIcon from '@material-ui/icons/Edit';
import axios from 'axios';
 export default class EditUserDialog extends React.Component {
   callBack = () => {
    this.props.callBack();
  };
   state = {
    open: false,
    data: {
      _id: '',
      name: '',
      username: ''
    }
  }
   handleClickOpen = (event) => {
    event.stopPropagation();
    this.setState({ open: true });
    this.getUserData()
  };
   handleClose = () => {
    this.updateUserData()
    this.setState({ open: false });
    this.callBack()
  };
   getUserData = () => {
    console.log(this.props.id);
    // Get all users from API
    axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
    axios.get('https://rskeletonapi.bsord.io/users/' + this.props.id)
      .then(res => {
        this.setState({ data: res.data });
      })
      .catch((error) => {
        if(error.response.status === 401) {
          this.props.history.push("/signin");
        }
      });
  }
   updateUserData = () => {
    const data = this.state.data
    console.log(this.props.id);
    // Get all users from API
    axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
    axios.put('https://rskeletonapi.bsord.io/users', {data})
      .then(res => {
        console.log(res)
      })
      .catch((error) => {
        if(error.response.status === 401) {
          this.props.history.push("/signin");
        }
      });
  }
   onChange = (e) => {
    const {data} = this.state
    data[e.target.name] = e.target.value;
    this.setState({data});
  }
   render() {
    const { _id, username, name } = this.state.data;
    return (
      <div>
        <EditIcon onClick={this.handleClickOpen} />
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">{name}</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Modify user attributes and then click the 'update' button.
            </DialogContentText>
            <TextField
              autoFocus
              disabled="true"
              margin="dense"
              id="_id"
              label="Unique User Identifier"
              fullWidth
              name="_id"
              value={_id}
              onChange={this.onChange}
            />
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Display Name"
              type="email"
              fullWidth
              name="name"
              value={name}
              onChange={this.onChange}
            />
            <TextField
              autoFocus
              margin="dense"
              id="username"
              label="Email Address"
              type="email"
              fullWidth
              name="username"
              value={username}
              onChange={this.onChange}
            />
           </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleClose} color="primary">
              Update
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
