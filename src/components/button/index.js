import React, { Component } from 'react';
import { Button } from 'reactstrap';
import './button.css';

export default class ButtonComponent extends Component {
  render() {
    const { children, url, color, block, outline } = this.props;

    return (
      <Button color={color} href={url} block={block} outline={outline}>
        {children}
      </Button>
    );
  }
}
