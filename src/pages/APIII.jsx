import React, { useEffect, useState } from 'react'

const APIII = () => {

    const [posts,setPosts] = useState([]);
    
    useEffect(() => {
        const fetchData = async() => {
        const response = await fetch ('https://dummyjson.com/posts');
        console.log(response);
        const result = await response.json();
        console.log(result);
        setPosts(result.posts);
        console.log(posts);
        } 
        fetchData();
    },[] )

  return (
    <div>

    <div className='grid grid-cols-3'>
        {
            posts.map((item) => (
             <div key={item.id}>
                <li>{item.title}</li>
                <p>{item.tags[0]}</p>
                <p>{item.reactions.likes}</p>
                <p>{item.reactions.dislikes}</p>
             </div>   
            ))
        }
    </div>

    </div>
  )
}

export default APIII