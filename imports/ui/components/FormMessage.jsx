import React from 'react';
import { Accounts } from 'meteor/accounts-base';
import {
  Snackbar,
  SnackbarContent
} from '@material-ui/core';

export class FormMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.message) {
      this.setState({ open: true });
    }
  }

  handleRequestClose = () => {
    this.setState({ open: false });
  };

  render() {
    let { message } = this.props;
    message = message === Object(message) ? message.message : message;  // get message from object
    return message ? (
      <Snackbar
        style={{ width: '100%', padding: 20 }}
        open={this.state.open}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        message={message}
        onClose={this.handleRequestClose}
        autoHideDuration={4000}
      >
        <SnackbarContent
          style={{ backgroundColor: '#03a9f4', padding: 10, fontSize: 20 }}
          message={
            <span style={{ display:'flex', alignItems: 'center' }}>
              {message}
            </span>
          }
        />
      </Snackbar>
    ) : null;
  }
}

Accounts.ui.FormMessage = FormMessage;
