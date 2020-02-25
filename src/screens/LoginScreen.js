import React, { Component } from "react";
import { Form, Button, Col, Row } from "react-bootstrap";

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  handleOnChange = e => {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  };

  handleOnSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <Form onSubmit={this.handleOnSubmit}>
        <Form.Group as={Row} className="offset-2">
          <Col sm="3">Username</Col>
          <Col sm="3">
            <Form.Control
              type="text"
              name="username"
              onChange={this.handleOnChange}
              placeholder="Username *"
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="offset-2">
          <Col sm="3">Password</Col>
          <Col sm="3">
            <Form.Control
              type="password"
              name="password"
              onChange={this.handleOnChange}
              placeholder="Password *"
            />
          </Col>
          <Col sm="2">
            <Button variant="primary" type="submit">
              Login
            </Button>
          </Col>
        </Form.Group>
      </Form>
    );
  }
}
