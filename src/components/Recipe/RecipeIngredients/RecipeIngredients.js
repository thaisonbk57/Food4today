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
  return (
    <Ingrdients>
      <RecipeIngredient />
      <RecipeIngredient />
      <RecipeIngredient />
      <RecipeIngredient />
    </Ingrdients>
  );
}
