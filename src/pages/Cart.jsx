import React, { useEffect, useState } from 'react'

const Cart = () => {

    const [carts,setCarts] = useState([]);

    useEffect(()=>{
        const fetchData = async () => {
        const response = await fetch('https://dummyjson.com/carts');
        console.log(response);
        const result = await response.json();
        console.log(result.carts);
        setCarts(result.carts);
        console.log(carts);
        }

       fetchData(); 
    }, [])

  return (
    <div>
      

        <div className='grid grid-cols-3'>
            {
               carts.map((item)=>(
                <div key={item.id}>
                 <li>{item.products[0].title}</li>   
                </div>
               )) 
            }
        </div>

    </div>
  )
}

export default Cart