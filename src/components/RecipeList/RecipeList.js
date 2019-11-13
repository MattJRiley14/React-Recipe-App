import React, { Component } from 'react';
import { get } from 'https';

class RecipeList extends Component {

    // displayText(){
    //     const shouldDisplayText = true;
    //     if (shouldDisplayText){
    //         return <h1>Text</h1>
    //     }
    // }

    getListItems(){
        return this.props.recipes.map((recipe) =>
        <li key={recipe.idMeal}>
            <h1>{recipe.strMeal}</h1>
            <img src={recipe.strMealThumb} alt={recipe.strMeal} />
            <p>{recipe.strInstructions}</p>
            <ul>
                {this.getIngredientsList(recipe)}
            </ul>
        </li>
        );
    }

    getIngredientsList(recipe){
        let output = [];
        
        for (var i = 1; i <= 20; i++) {
            const ingredientIdentifier = 'strIngredient' + i;
            const amountIdentifier = 'strMeasure' + i;
            if (recipe[ingredientIdentifier] !== '' && recipe[ingredientIdentifier] !== null){
                output.push(<li>{recipe[ingredientIdentifier]}: {recipe[amountIdentifier]}</li>);
            }
        }
        return output;
    }

    render() {

        console.log(this.props.recipes);        

        return (
            // <div>
            //     {this.displayText()}
            // </div>
            <ul>{this.getListItems()}</ul>
        );
    }
}

export default RecipeList;

