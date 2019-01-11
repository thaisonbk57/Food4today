import React, { Component } from "react";
import styled from "styled-components";

import SearchButton from "./SearchButton";
import SearchField from "./SearchField";

const Form = styled.form`
  background: #fff;
  border-radius: 100px;
  display: flex;
  align-items: center;
  padding-left: 20px;
  transition: all 0.3s;
  position: relative;
  width: 300px;
  justify-content: space-between;
`;

export default class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: ""
    };
  }

  onChange = e => {
    let value = e.target.value;

    this.setState(() => {
      return {
        keyword: value
      };
    });
  };

  onSubmit = e => {
    e.preventDefault();
    this.setState(() => {
      return {
        keyword: ""
      };
    });
  };

  render() {
    return (
      <Form onSubmit={this.onSubmit}>
        <SearchField onChange={this.onChange} value={this.state.keyword} />
        <SearchButton />
      </Form>
    );
  }
}
