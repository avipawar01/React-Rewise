import React, { useEffect, useState } from 'react'

const Comment = () => {

    const [comments,setComments] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
        const response = await fetch('https://dummyjson.com/comments');
        console.log(response);
        const result = await response.json();
        console.log(result);
        setComments(result.comments);
        console.log(comments);    
        }
        fetchData();
    },[])

  return (
    <div>
        

        <div className='grid grid-cols-3'>
            {
                comments.map((item)=>(
                  <div key={item.id}>
                    <li>{item.body}</li>
                  </div>  
                ))
            }
        </div>
    </div>
  )
}

export default Comment