import React from "react";
import styled from "styled-components";
import ListItem from "./ListItem/ListItem";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex: 1 0 25%;
  padding-top: 20px;
`;

const Heading = styled.h3`
  color: #ff6b6b;
  text-align: center;
  transform: skewY(-8deg);
  margin-bottom: 40px;
  font-size: 30px;
  padding-top: 20px;
`;

const List = styled.ul`
  list-style: none;
  flex: 1;
  overflow-y: scroll;
  padding: 0 5px 0 20px;

  &::-webkit-scrollbar {
    width: 1px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: black;
  }
`;

export default props => {
  return (
    <Wrapper>
      <Heading>My shopping list</Heading>
      <List>
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
      </List>
    </Wrapper>
  );
};
