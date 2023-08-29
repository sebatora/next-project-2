"use client"
import Link from 'next/link'
import React from 'react'

function Users( { users }) {
  return (
    <ul>
    {
      users.map(user => (
        <Link href={`/users/${user.id}`} key={user.id}>
          <li className='bg-slate-400 mb-2 p-4 rounded-md text-black flex justify-between'>
            
          <img src={user.avatar} alt={user.first_name} className='rounded-full w-20' />

            <div>
              <h4 className='font-bold'>{user.first_name} {user.last_name}</h4>
              <p className='text-slate-100'>{user.email}</p>
            </div>

          </li>
        </Link>
      ) )
    }
  </ul>
  )
}

export default Users