import React, { useState } from "react";

function RecipeCreate({createRecipe}) {

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  
  const [name, setName] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [photo, setPhoto] = useState("");
  const [rating, setRating] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [preparation, setPreparation] = useState("");
  
  const addRecipe = (e) => {
    e.preventDefault();
    createRecipe(
      {
        name, cuisine, photo, ingredients, preparation
      }
    )
    setName("")
    setCuisine("")
    setPhoto("")
    setIngredients("")
    setPreparation("")
  }

  return (
    <form name="create" onSubmit={addRecipe}>
      <table>
        <tbody>
          <tr>
            <td>
                <input name="name" onChange={e => setName(e.target.value)} value={name}/>
            </td>
            <td>
                <input name="cuisine" onChange={e => setCuisine(e.target.value)} value={cuisine}/>
            </td>
            <td>
                <input name="photo" onChange={e => setPhoto(e.target.value)} value={photo}/>
            </td>
            <td>
              <textarea name="ingredients" onChange={e => setIngredients(e.target.value)} value={ingredients}/>
            </td>
            <td>
              <textarea name="preparation" onChange={e => setPreparation(e.target.value)} value={preparation}/>
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
