import React, { useEffect, useState } from 'react'

const API = () => {

    const [products, setProducts] = useState([]);


    useEffect(() => {

        const fetchData = async () => {
            const response =  await fetch('https://fakestoreapi.com/products');
            console.log(response);
            const result = await response.json();
            console.log(result);
            setProducts(result);
            console.log(products);
        }
    
        fetchData();

    }, [])

    



  return (
    <div>
        UseEffect Hook

        <div className='grid grid-cols-3'>

            {
                products.map((item) => (
                    <div key={item.id}>   
                        <img src={item.image} alt="" />
                        <li>{item.title}</li>
                    </div>
                ))
            }

        </div>


    </div>
  )
}

export default API