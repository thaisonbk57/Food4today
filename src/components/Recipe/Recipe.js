import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
// import Loader from './../UI/Loader/Loader'

import RecipePhoto from "./RecipePhoto/RecipePhoto";
import RecipeCookingTime from "./RecipeCookingTime/RecipeCookingTime";
import RecipeIngredients from "./RecipeIngredients/RecipeIngredients";
import Button from "./../../components/UI/Button/Button";

function recipe(props) {
  const Recipe = styled.div`
    display: flex;
    flex-direction: column;
    flex-basis: 50%;
    background: #10ac84;
    overflow-y: scroll;
    overflow-x: hidden;

    &::-webkit-scrollbar {
      width: 1px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: black;
    }

    .howToCookIt {
      margin-top: 50px;
      background: #18c396;
      h3 {
        color: #ff6b6b;
        text-align: center;
        transform: skewY(-8deg);
        margin-bottom: 30px;
        font-size: 30px;
        padding-top: 20px;
      }

      p {
        text-align: center;
      }
    }
  `;

  // let content = <Loader borderWidth={10} width={100}></Loader>
  const {
    publisher,
    ingredients,
    source_url,
    f2f_url,
    recipe_id,
    image_url,
    title
  } = props.currentRecipe;

  return (
    <Recipe>
      <RecipePhoto title={title} image_url={image_url} />
      <RecipeCookingTime />
      <RecipeIngredients ingredients={ingredients} />
      <Button width={300}>ADD TO SHOPPING LIST</Button>
      <div className="howToCookIt">
        <h3>How to cook it</h3>
        <p>
          This recipe was carefully designed and tested by <b>{publisher}</b>.
          Please check out directions at their website.
        </p>
        <Button width={130}>
          <a
            href={source_url || f2f_url}
            rel="noopener noreferrer"
            target="_blank"
          >
            DIRECTION
          </a>
        </Button>
      </div>
    </Recipe>
  );
}

const mapStateToProps = state => {
  return {
    currentRecipe: state.currentRecipe.recipe
  };
};

export default connect(mapStateToProps)(recipe);
