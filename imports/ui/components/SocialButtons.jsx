import React from 'react';
import './Button.jsx';
import {Accounts} from 'meteor/accounts-base';
import {
  Button as MuiButton,
} from '@material-ui/core';

export class SocialButtons extends React.Component {
  render() {
    let { oauthServices = {} } = this.props;
    if (Object.keys(oauthServices).length > 0) {
      return (
        <div className="social-buttons">
          {Object.keys(oauthServices).map((id, i) => {
            const { label, type, onClick, disabled } = oauthServices[id];
            return (
              <MuiButton
                variant="contained"
                key={i}
                type={type}
                onClick={onClick}
                disabled={disabled}
                style={{ marginRight: '5px' }}
              >
                {label}
              </MuiButton>
            );
          })}
        </div>
      );
    } else {
      return null;
    }
  }
}

Accounts.ui.SocialButtons = SocialButtons;
