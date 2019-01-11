import React, { Component } from "react";
import styled from "styled-components";

import SearchButton from "./SearchButton/SearchButton";
import SearchField from "./SearchField/SearchField";

const Form = styled.form`
  background: #fff;
  border-radius: 100px;
  display: flex;
  align-items: center;
  transition: all 0.3s;
  position: relative;
  justify-content: space-between;
  height: 40px;
  width: 450px;

  &:focus-within {
    transform: translateY(-5px);
    box-shadow: 0 2px 40px #555;
  }
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
