import React, { Component } from 'react';

import { Tooltip, Button } from 'antd';
import CopyToClipboard from 'react-copy-to-clipboard';

export default class CopyButton extends Component {
  constructor() {
    super();
    this.state = {
      toolTip: false,
    };

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.toggleToolTip(true);

    clearTimeout(this.toggleTimeout);
    this.toggleTimeout = setTimeout(() => {
      this.toggleToolTip(false);
    }, 3000);
  }

  toggleToolTip(enabled) {
    this.setState({
      toolTip: enabled,
    });
  }

  render() {
    const { toolTip } = this.state;
    const { valueToCopy } = this.props;
    return (
      <CopyToClipboard text={valueToCopy}>
        <Tooltip title="Copied!" visible={toolTip}>
          <Button type="primary" onClick={this.onClick}>
            <i className="fa fa-clipboard" aria-hidden="true" /> 复制代码
          </Button>
        </Tooltip>
      </CopyToClipboard>
    );
  }
}
