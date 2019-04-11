import React from 'react';
import { Accounts } from 'meteor/accounts-base';
import './Field.jsx';

export class Fields extends React.Component {
  render() {
    let { fields = {}, className = '' } = this.props;
    return (
      <div className={[className].join(' ')}>
        {Object.keys(fields).map((id, i) => (
          <div key={i}>
            <Accounts.ui.Field {...fields[id]} />
            <br />
          </div>
        ))}
      </div>
    );
  }
}

Accounts.ui.Fields = Fields;
