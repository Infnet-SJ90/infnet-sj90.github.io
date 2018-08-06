import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { Redirect } from 'react-router-dom';
import './style.css';

export default class ButtonComponent extends Component {
  constructor() {
    super();
    this.state = { redirect: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ redirect: true });
  }

  render() {
    const { redirect } = this.state;
    const { children, type, url, color, block, outline } = this.props;

    return (
      <div>
        {redirect && <Redirect to={url} />}
        <Button
          color={color}
          block={block}
          type={type}
          outline={outline}
          onClick={this.handleClick}
        >
          {children}
        </Button>
      </div>
    );
  }
}
