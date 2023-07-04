import React from 'react'

const Recipe = ({name, cuisine, photo, ingredients, preparation, deleteRecipe, index}) => {

  return (
    <tr>
        <td>{name}</td>
        <td>{cuisine}</td>
        <td><img src={photo} /></td>
        <td>{ingredients}</td>
        <td>{preparation}</td>
        <td><button name="delete" onClick={e=> deleteRecipe(index)}>Delete</button></td>
    </tr>
  )
}

export default Recipe