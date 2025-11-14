import React, { useEffect, useState } from 'react'

const Quote = () => {

    const [quotes,setQuotes] = useState([]);

    useEffect(() => {
        const fetchData = async()=>{
        const response = await fetch('https://dummyjson.com/quotes');
        console.log(response);
        const result = await response.json();
        console.log(result);
        setQuotes(result.quotes);
        console.log(quotes);    
        }
        fetchData();
    },[])

  return (
    <div>
    <div className='grid grid-cols-3'>
        {
            quotes.map((item)=>(
             <div key={item.id}>
                <li>{item.quote}</li>
             </div>   
            ))
        }

        </div>
    </div>
  )
}

export default Quote