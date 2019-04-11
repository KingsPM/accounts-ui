import React from 'react';
import PropTypes from 'prop-types';
import { Accounts } from 'meteor/accounts-base';
import { Button as MuiButton } from '@material-ui/core';

export class Button extends React.Component {
  render() {
    const { label, href = null, type, disabled = false, onClick, className, icon } = this.props;
    return type == 'link' ? (
      <MuiButton
        variant="text"
        href={href}
        className={className}
        onClick={onClick}
        disabled={disabled}
        style={{ marginRight: '5px' }}
      >
        {label}
      </MuiButton>
    ) : (
      <MuiButton
        variant="contained"
        color="primary"
        type={type}
        className={className}
        onClick={onClick}
        disabled={disabled}
        style={{ marginRight: '5px' }}
      >
        {label}
      </MuiButton>
    );
  }
}

Button.propTypes = {
  onClick: PropTypes.func
};

Accounts.ui.Button = Button;
