import React from 'react';
import PropTypes from 'prop-types';
import { Accounts } from 'meteor/accounts-base';
import {
  TextField,
} from '@material-ui/core';
import uuid from 'uuid/v4';

export class Field extends React.Component {
  input = null;
  constructor(props) {
    super(props);
    this.state = {
      mount: true
    };
  }

  triggerUpdate() {
    const { onChange } = this.props;
    if (this.input) {
      onChange({ target: { value: this.input.value } });
    }
  }

  componentDidMount() {
    this.triggerUpdate();
  }

  componentDidUpdate(prevProps) {
    // Re-mount component so that we don't expose browser prefilled passwords if the component was
    // a password before and now something else.
    if (prevProps.id !== this.props.id) {
      this.setState({mount: false});
    }
    else if (!this.state.mount) {
      this.setState({mount: true});
      this.triggerUpdate();
    }
  }

  render() {
    const {
      id,
      hint,
      label,
      type = 'text',
      onChange,
      required = false,
      className,
      defaultValue = '',
      message
    } = this.props;
    const { mount = true } = this.state;
    const fieldId = id || uuid();
    return mount ? (
      <div className={className}>
        <TextField
          label={label}
          placeholder={hint}
          onChange={onChange}
          fullWidth={true}
          defaultValue={defaultValue}
          name={fieldId}
          type={type}
          // ref={(ref) => { console.log('ref',ref); this.input = ref }}
          required={!!required}
        />
        {message && (
          <span className={['message', message.type].join(' ').trim()}>
            {message.message}
          </span>
        )}
      </div>
    ) : null;
  }
}

Field.propTypes = {
  onChange: PropTypes.func
};

Accounts.ui.Field = Field;
