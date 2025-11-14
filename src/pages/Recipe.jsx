import React, { useEffect, useState } from 'react'

const Recipe = () => {

    const[recipes,setRecipes] = useState([]);

    useEffect(() => {
        const fetchData = async () =>{
        const response = await fetch('https://dummyjson.com/recipes');
        console.log(response);
        const result = await response.json();
        console.log(result);
        setRecipes(result.recipes);
        console.log(recipes);
        }
        fetchData();
    },[])

  return (
    <div>

    <div className='grid grid-cols-3'>
        {
          recipes.map((item) =>(
           <div key={item.id}>
            <li>{item.name}</li>
           </div> 
          ))  
        }
    </div>
    </div>
  )
}

export default Recipe