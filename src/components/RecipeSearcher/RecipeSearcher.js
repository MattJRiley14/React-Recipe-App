import React, { Component } from 'react';
import axios from 'axios';

class RecipeSearcher extends Component {

    constructor(props){
        super(props);
        this.state = { recipes: [] }
    }

    getRandomRecipe = () => {
        axios({
            // We can configure everything we need to about the http request in here
            method: 'GET',
            url: 'https://www.themealdb.com/api/json/v1/1/random.php'
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    getRecipeByName = (name) => {

        axios({
            // We can configure everything we need to about the http request in here
            method: 'GET',
            url: 'https://www.themealdb.com/api/json/v1/1/search.php',
            params: {
                s: name
            }
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            })
    }


    getRecipesByLetter = (letter) => {

        axios({
            // We can configure everything we need to about the http request in here
            method: 'GET',
            url: 'https://www.themealdb.com/api/json/v1/1/search.php',
            params: {
                f: letter
            }
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            })
    }




    render() {
        // this.getRandomRecipe();
        // this.getRecipeByName('Chicken');
        this.getRecipesByLetter('M');

        return (
            <div className='RecipeSearcher'>
            </div>
        );
    }
}

export default RecipeSearcher;