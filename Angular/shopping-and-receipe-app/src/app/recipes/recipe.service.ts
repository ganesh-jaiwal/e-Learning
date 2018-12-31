import {EventEmitter} from '@angular/core';
import {Recipe} from './recipe.model';
import {Ingredients} from '../shared/ingredients.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Scrambled Eggs with Chicken Sausages Recipe',
      'Smack your lips over simple and easy to prepare scrambled eggs tossed in mild spices with chicken sausages.',
      'https://www.ndtv.com/cooks/images/scrambled%20egg%20with%20sausages-620.jpg?downsize=650:400&output-quality=70&output-format=webp',
      [
        new Ingredients('Onion, chopped', 1),
        new Ingredients('Potato , chopped', 1),
        new Ingredients('Chicken sausages (sliced)', 2),
        new Ingredients('Tbsp Olive oil', 3),
        new Ingredients('Eggs', 6),
        new Ingredients('Tbsp Cheese, grated', 2),
        new Ingredients('Cup Milk', 1)
      ]
      ),
    new Recipe('Rawa Upma Recipe',
      'A delicious south Indian breakfast dish made with semolina, vegetables and topped with some grated coconut.',
      'https://i.ndtvimg.com/i/2018-03/bread-upma_620x350_71522139974.jpg?downsize=650:400&output-quality=70&output-format=webp',
      [
        new Ingredients('Gram Semolina', 250),
        new Ingredients('Ml Water', 650),
        new Ingredients('Gram Ghee', 75),
        new Ingredients('Gram Mustard seeds', 5),
        new Ingredients('Gram Black gram dal', 2),
        new Ingredients('Gram Bengal gram dal', 2),
        new Ingredients('Gram Onions', 100),
        new Ingredients('Gram Green chillies', 5),
        new Ingredients('Gram Cashew nuts', 25),
        new Ingredients('Gram Curry leaves salt', 2)
      ]),
    new Recipe('Masala Cheese French Toast Recipe',
      'Give the classic French toast a spicy twist by coating the bread in a mixture of herbs added in the egg batter and a mixture of sauces along with cheese.',
      'https://www.ndtv.com/cooks/images/masal%20french%20toast.jpg?downsize=650:400&output-quality=70&output-format=webp',
      [
        new Ingredients('Tbsp Chilli tomato ketchup', 3),
        new Ingredients('tsp Mustard', 3),
        new Ingredients('Tbsp Mayonnaise', 2),
        new Ingredients('slices White or brown bread', 3),
        new Ingredients('slices Cheese', 4),
        new Ingredients('Spring onion', 1),
        new Ingredients('Green chillies', 2),
        new Ingredients('Bunch Chives, small', 1)
      ]),
    new Recipe('Bombay Toasty Recipe',
      'A simple and speedy solution for your hunger pangs. Pan fried sandwiches filled with cucumber, tomatoes, onion and potatoes. A delicious, quick, easy and fuss-free breakfast recipe, full of nutrients.',
      'https://i.ndtvimg.com/i/2016-02/club-sandwich-625_625x350_81455029974.jpg?downsize=650:400&output-quality=70&output-format=webp',
      [
        new Ingredients('Brown bread slices', 4),
        new Ingredients('Gram Butter', 50),
        new Ingredients('Onion (sliced), peeled', 1),
        new Ingredients('Capsicum (de-seeded), sliced', 1),
        new Ingredients('Tomato, sliced', 1),
        new Ingredients('Cucumber, sliced', 1),
        new Ingredients('Potato (sliced), boiled', 1),
        new Ingredients('Ml Mint chutney', 30),
        new Ingredients('Tbsp taste Chaat masala', 1)
      ]),
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
