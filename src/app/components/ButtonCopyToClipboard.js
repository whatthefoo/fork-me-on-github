import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Emoji from 'react-emojis';

// Import utils
import copyToClipboard from './../../utils/copyToClipboardUtil';

// Import styles
import './ButtonCopyToClipboard.scss';

class ButtonCopyToClipboard extends Component {
  constructor (props) {
    super(props);
    this.state = {
      clipboard: '',
      copiedToClipboardStatus: false
    }
  }
  getValueToClipboard () {
    const {
      text = ''
    } = this.props;
    const theClipboard = text ? text : '';
    return theClipboard;
  }
  render () {
    const {
      classes = '',
    } = this.props;
    const {
      copiedToClipboardStatus,
    } = this.state;
    return (
      <button
        className={`copy-to-clipboard${classes ? ' ' + classes : ''}${copiedToClipboardStatus ? ' disabled' : ''}`}
        onClick = {() => {
          copyToClipboard(this.getValueToClipboard());
          this.setState({
            clipboard: this.getValueToClipboard(),
            copiedToClipboardStatus: true
          });
          setTimeout(() => {
            this.setState({
              copiedToClipboardStatus: false
            });
          }, 3000);
        }}
        disabled={copiedToClipboardStatus}
      >
        <div className="copy-to-clipboard__content">
          {copiedToClipboardStatus
            ?
              <>
                <Emoji emoji="check-mark-button"/>&nbsp;
                <span>Copied!</span>
              </>
            :
              <>
                <Emoji emoji="clipboard"/>&nbsp;
                <span>Copy to clipboard</span>
              </>
          }
        </div>
      </button>
    )
  }
}

ButtonCopyToClipboard.propTypes = {
  classes: PropTypes.string,
  text: PropTypes.string,
};

export default ButtonCopyToClipboard;
