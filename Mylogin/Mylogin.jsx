import React,{useState} from 'react';
import './mylog.css';

const Mylogin =()=>
{
    
    const [user,setUser] = useState(" ")
    const [pass,setPass] = useState(" ")
    const[useErr,setUserr] = useState(false)
    const[passErr,setPasserr] =useState(false)

    const handlesub=(e)=>{
        if(user.length<5 || pass.length<5)
        {
            alert("Invalid User And Password")
        }
        else{
            alert("Valid User And Password")
        }
        e.preventDefault();
    }

    const handleUser=(e)=>{
       let item= e.target.value
       if(item.length<5)
       {
        setUserr(true)
       }
       else{
        setUserr(false)
       }
       setUser(item)
    }

    const handlePass=(e)=>{
        let item =e.target.value
        if(item.length<5)
        {
            setPasserr(true)
        }
        else{
            setPasserr(false)
        }
        setPass(item)
    }
    return(
        <React.Fragment>
            <h1>Login Form</h1>
            <form onSubmit={handlesub} className="form">
                <p> UserId: <input type="text" className='box' onChange={handleUser} required/></p> 
                {useErr ? <span>invalid </span>:""}
                <p> Password: <input type="password" className='box' onChange={handlePass} required/></p>
                {passErr? <span>invalid </span>:""} 
                <p><input type="submit" className='btn'/></p> 
            </form>
        </React.Fragment>
    );
}

export default Mylogin;