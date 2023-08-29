import Users from '@/components/Users';
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
    <Users users={ users }/>
  )
}

export default HomePage