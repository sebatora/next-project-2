import Users from '@/components/Users';
import React from 'react'

async function getUsers() {
  const response = await fetch(`https://reqres.in/api/users`)
  const { data } = await response.json();
  return data;
}

async function HomePage() {

  const users =  await getUsers();

  return (
    <Users users={ users }/>
  )
}

export default HomePage