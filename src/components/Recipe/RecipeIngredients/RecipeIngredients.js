import React from "react";
import RecipeIngredient from "./RecipeIngredient/RecipeIngredient";
import styled from "styled-components";

const Ingrdients = styled.ul`
  list-style-type: none;
  padding: 10px 30px;

  &::after {
    content: "";
    display: block;
    clear: both;
  }
`;

export default function(props) {
  let ingrItems = null;

  ingrItems = props.ingredients.map(ingredient => {
    return <RecipeIngredient key={ingredient} ingredient={ingredient} />;
  });

  return <Ingrdients>{ingrItems}</Ingrdients>;
}
