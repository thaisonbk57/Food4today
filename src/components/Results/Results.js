import React from "react";
import styled from "styled-components";

import { connect } from "react-redux";

import Result from "./Result/Result";
import Loader from "./../UI/Loader/Loader";

const Results = styled.div`
  flex: 1 0 25%;
  overflow-y: scroll;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 1px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: black;
  }
`;

function results(props) {
  // initially a Spinner will be displayed.
  let recipesList = <Loader borderWidth={7} width={80} />;

  recipesList = props.recipes.map(recipe => {
    const { publisher, title, recipe_id, image_url } = recipe;
    return (
      <Result
        active={recipe_id === props.currentRecipe.recipe_id ? true : false}
        title={title}
        recipe_id={recipe_id}
        image_url={image_url}
        publisher={publisher}
      />
    );
  });

  return <Results>{recipesList}</Results>;
}

const mapStateToProps = state => {
  return {
    recipes: state.recipes,
    currentRecipe: state.currentRecipe.recipe
  };
};

export default connect(mapStateToProps)(results);
