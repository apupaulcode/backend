import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
function App() {
  const [users, setUsers] = useState([])
  const [name, setName] = useState('')
  const [age, setAge] = useState('')

  useEffect(()=>{
    axios.get('http://localhost:3001/getusers')
    .then((users)=>{
      setUsers(users.data)
    }).catch(err=>console.log(err))
  },[]);
  const submit = () =>{
    axios.post('http://localhost:3001/createuser',{name,age})
    .then((users2)=>{
      console.log(users2);
    }).catch(err=>console.log(err))
  }
  return (
    <>
      {
        users.map(user=>{
          return(
            <div key={user._id}>
              <h3>{user.name}</h3>
              <h3>{user.age}</h3>
              <h3>{user._id}</h3>
            </div>
          )
        })
      }
      <div>
        <input type="text" onChange={(e)=>setName(e.target.value)} />
        <input type="text" onChange={(e)=>setAge(e.target.value)} />
        <button onClick={submit}>Create User</button>
      </div>
    </>
  )
}

export default App
