import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {

const [email,setEmail] = useState("");
const [password,setPassword] = useState("");
const [token,setToken] = useState("");
const [tasks,setTasks] = useState([]);
const [title,setTitle] = useState("");
const [description,setDescription] = useState("");

const login = async () => {
  const res = await axios.post("http://localhost:5000/api/v1/auth/login",{
    email,password
  });

  setToken(res.data.token);
};

const loadTasks = async () => {

  const res = await axios.get("http://localhost:5000/api/v1/tasks",{
    headers:{
      Authorization:`Bearer ${token}`
    }
  });

  setTasks(res.data);
};

const createTask = async () => {

  await axios.post("http://localhost:5000/api/v1/tasks",
  {title,description},
  {
    headers:{
      Authorization:`Bearer ${token}`
    }
  });

  loadTasks();
};

useEffect(()=>{
  if(token){
    loadTasks();
  }
},[token]);

if(!token){
  return(
    <div style={{padding:40}}>
      <h2>Login</h2>

      <input placeholder="email"
      onChange={e=>setEmail(e.target.value)} />

      <br/><br/>

      <input type="password"
      placeholder="password"
      onChange={e=>setPassword(e.target.value)} />

      <br/><br/>

      <button onClick={login}>Login</button>
    </div>
  )
}

return(

<div style={{padding:40}}>

<h2>Task Dashboard</h2>

<h3>Create Task</h3>

<input placeholder="title"
onChange={e=>setTitle(e.target.value)}/>

<br/><br/>

<input placeholder="description"
onChange={e=>setDescription(e.target.value)}/>

<br/><br/>

<button onClick={createTask}>Create Task</button>

<h3>Your Tasks</h3>

<ul>
{tasks.map(task=>(
<li key={task._id}>
{task.title} - {task.description}
</li>
))}
</ul>

</div>

)

}

export default App;
