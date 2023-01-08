import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import FormUsers from './components/FormUsers'
import UserCard from './components/UserCard'

const BASE_URL = "https://users-crud.academlo.tech/"

function App() {

  //Estado para almacenar los usuarios y poder modificar
  const [users, setUsers] = useState()
  const [userUpdate, setUserUpdate] = useState()

  //Funcion que obtiene todos los usuarios
  const getAllUsers = () => {
    const URL = `${BASE_URL}users/`
    axios.get(URL)
    .then(res => setUsers(res.data))
    .catch(err => console.log(err))
  }

  //Funcion que crea un usuario
  const createUser = (data) => {
    const URL = `${BASE_URL}users/`
    axios.post(URL, data)
      .then(res => {
        console.log(res.data)
      getAllUsers()
    })
    .catch(err => console.log(err))
  }

  const deleteUser = (id) => {
    const URL = `${BASE_URL}users/${id}`
    axios.delete(URL)
      .then(res => {
        console.log(res.data)
        getAllUsers()
      })
      .catch(err => console.log(err))
  }

  const updateUser = (id, data) => {
    const URL = `${BASE_URL}users/${id}/`
    axios.patch(URL, data)
      .then(res => {
        console.log(res.data)
        getAllUsers()
        setUserUpdate()
      })
      .catch(err => console.log(err))
  }

  //Se obtienen todos los usuarios al cargar la app
  useEffect(() => {
    getAllUsers()
  }, [])

  return (
    <div className="App">
      <h1>Crud Users</h1>
      <FormUsers 
        createUser={createUser} 
        userUpdate={userUpdate}
        updateUser={updateUser}
        />
        <div className='users-container'>
        {
          users?.map(user => (
          <UserCard 
            key={user.id} 
            user={user}
            deleteUser={deleteUser}
            setUserUpdate={setUserUpdate}
           />
        ))
      }
        </div>
      </div>
  )
}

export default App
