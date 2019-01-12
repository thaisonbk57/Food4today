import React from "react";
import styled from "styled-components";

const ListItem = styled.li`
  display: block;
  display: flex;
  flex-direction: row;
  padding: 15px 0;
  border-bottom: 1px solid rgba(155, 155, 155, 0.5);
`;

const FormGroup = styled.div`
  border: 1px solid rgba(155, 155, 155, 0.5);
  display: flex;
  height: 33px;
  flex: 1 1 25%;
  margin-right: 13px;
  background: white;
  flex-direction: row;
  align-items: center;
  border-radius: 5px;
  padding: 0 8px;
`;

const Input = styled.input`
  display: block;
  width: 60px;
  outline: none;
  border: none;
`;

const Unit = styled.label``;

const Ingredient = styled.p``;

export default function(props) {
  return (
    <ListItem>
      <FormGroup>
        <Input defaultValue={18} type="number" />
        <Unit>g</Unit>
      </FormGroup>
      <Ingredient>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </Ingredient>
    </ListItem>
  );
}
