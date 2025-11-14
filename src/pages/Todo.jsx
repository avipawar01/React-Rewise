import React, { useEffect, useState } from 'react'

const Todo = () => {

    const [todos,setTodos] = useState([]);

    useEffect(() => {
        const fetchData = async () =>{
        const response = await fetch('https://dummyjson.com/todos');
        console.log(response);
        const result = await response.json();
        console.log(result);
        setTodos(result.todos);
        console.log(todos);
        }
        fetchData();
    },[])

  return (
    <div>
      

        <div className='grid grid-cols-3'>
            {
              todos.map((item) =>(
                <div key={item.id}>
                    <li>{item.todo}</li>
                </div>
              ))  
            }
        </div>
    </div>
  )
}

export default Todo