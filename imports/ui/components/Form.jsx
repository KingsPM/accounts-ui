import React from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { Redirect } from 'react-router-dom';
import { Accounts } from 'meteor/accounts-base';
import { STATES } from '../../helpers';

import './Fields.jsx';
import './Buttons.jsx';
import './FormMessage.jsx';
import './PasswordOrService.jsx';
import './SocialButtons.jsx';
import './FormMessages.jsx';

export class Form extends React.Component {
  componentDidMount() {
    let form = this.form;
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
      });
    }
  }

  render() {
    const {
      hasPasswordService,
      oauthServices,
      fields,
      buttons,
      error,
      message,
      ready = true,
      className,
      formState
    } = this.props;

    return (
      <div className="container">
        {Meteor.userId() && <Redirect to={Accounts.ui._options.homeRoutePath} />}
        <form ref={ref => (this.form = ref)} className={['accounts', className].join(' ')}>
          {Object.keys(fields).length > 0 ? <Accounts.ui.Fields fields={fields} /> : null}
          <br />
          <Accounts.ui.Buttons buttons={buttons} />
          <br />
          {formState == STATES.SIGN_IN || formState == STATES.SIGN_UP ? (
            <div className="or-sep">
              <Accounts.ui.PasswordOrService oauthServices={oauthServices} />
            </div>
          ) : null}
          {formState == STATES.SIGN_IN || formState == STATES.SIGN_UP ? (
            <Accounts.ui.SocialButtons oauthServices={oauthServices} />
          ) : null}
          <br />
          <Accounts.ui.FormMessage {...message} />
        </form>
      </div>
    );
  }
}

Form.propTypes = {
  oauthServices: PropTypes.object,
  fields: PropTypes.object.isRequired,
  buttons: PropTypes.object.isRequired,
  error: PropTypes.string,
  ready: PropTypes.bool
};

Accounts.ui.Form = Form;
