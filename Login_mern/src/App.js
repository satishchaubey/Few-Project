import React, { useEffect, useState } from 'react';
import './App.css';



function App() {

  const [form,setForm] =useState({}); //value ko store krne ke liye hm useState ka use krte h ..
  const [users,setUsers] =useState([]); //blank array

  const handleValue = (e) =>{
    //  console.log(e.target.value,e.target.name);//storage check krte h

      setForm({
        ...form,      //destructure kr liya //form me hmare pass value jo server pe bhej ske 
        [e.target.name] : e.target.value  //array denge 
      });
  }

  const handleSubmit = async(e)=>{
    //e.preventDefault();
    const post = await fetch('http://localhost:9000/demo',{
      method:"POST",
      body:JSON.stringify(form),
      headers:{
        'Content-Type' : 'application/json'
      }

    })
    const postValue=await post.json();

    console.log(postValue);
  }

  const getUsers =async () =>{
    const response = await fetch('http://localhost:9000/demo',{
      method:"GET"
    })
    const data=await response.json();
      setUsers(data);
  }

  useEffect(()=>{
    getUsers();//ye bs ek bar chlta h
  },[])

  return (
   <React.Fragment>
      <form onSubmit={handleSubmit}>
        {/* {JSON.stringify(form)} */}
          <p>User Email : <input type="text" name="username" onChange={handleValue}/></p>
          <p>Password : <input type="text" name="password" onChange={handleValue}/></p>
          <p><input type="submit" value="Submit"/> </p>
      </form>
      <div>
       <ul type="none">
        {users.map(user =><li key={user._id}>{user.username},{user.password}</li>)}
       </ul>
      </div>
   </React.Fragment>
  );
}

export default App;
