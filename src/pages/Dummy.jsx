import React, { useEffect, useState } from 'react'

const Dummy = () => {

  const [users,setUsers] = useState([]);

  useEffect( () => {
    const fetchData = async () => {
      const response = await fetch('https://dummyjson.com/users');
      console.log(response);
      const result = await response.json();
      console.log(result);
      setUsers(result.users);
      console.log(users);
    }


   fetchData();

  },[])

  return (
    
    <div>
   

    <div className='grid grid-cols-3'>
      {
        users.map((item) => (
          <div key={item.id}>
            <img src={item.image} alt="" />
              <p><strong>Name</strong> {item.firstName}</p>
              <p><strong>lastName</strong> {item.lastName}</p>
              <p><strong>Password</strong> {item.password}</p>
              <p><strong>Gender</strong> {item.gender}</p>
              <p><strong>age</strong> {item.age}</p>
              <p><strong>eyeColor</strong> {item.eyeColor}</p>
          </div>
        ))
      }
    </div>

    </div>
  )
}

export default Dummy