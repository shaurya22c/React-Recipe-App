import React,{useEffect, useState} from "react";
import './App.css';
import Recipe from './Recipe';

//here App.js and Recipe.js are components
const App= ()=> {

  const APP_ID= "164ae060";
  const APP_KEY= "405566ec9e4d545568498b16dc4f1835";

  //creating states
  const[recipes, setRecipes]= useState([]);
  const[search, setSearch]= useState("");
  const[query, setQuery]= useState('banana');

  useEffect( ()=>{
    getRecipes();
  }, [query]);

  const getRecipes= async ()=>{
    const response= await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data= await response.json();
    console.log(data.hits);
    setRecipes(data.hits);
  };

  const updateSearch= e=>{
    setSearch(e.target.value);
    // console.log(search);
  }

  const getSearch= e=>{
    //preventing page refresh
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }
// here title, calories, image, ingredients are props. we send props(properties) from one component to another in react
  return(
    <div className= "App">
      <form onSubmit= {getSearch} className= "search-form">
        <input className= "search-bar" type= "text" value={search} onChange={updateSearch}/>
        <button className= "search-button" type= "submit">Search</button>
      </form>
      <div className= "recipes">
     
      {recipes.map(recipe=> (
        <Recipe 
        key= {recipe.recipe.label}
        title={recipe.recipe.label} 
        calories={recipe.recipe.calories} 
        image={recipe.recipe.image}
        ingredients={recipe.recipe.ingredients}
        />
      ))}
      </div>
    </div>
  );
}

export default App;
