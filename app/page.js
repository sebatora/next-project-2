import React from 'react'

async function fetchUsers() {
  const response = await fetch("https://reqres.in/api/users")
  const { data } = await response.json();
  console.log(data);
  return data;
}

async function HomePage() {
  const users =  await fetchUsers();
  return (
    <ul>
      {
        users.map(user => (
          <li key={user.id} className='bg-slate-400 mb-2 p-4 rounded-md'>
            <div>
              <img src={user.avatar} alt={user.first_name} />
              <h4>{user.first_name} {user.last_name}</h4>
              <p>{user.email}</p>
            </div>
          </li>
        ) )
      }
    </ul>
  )
}

export default HomePage