import React , {useState} from 'react';
import {useHistory, Link} from 'react-router-dom';

const Register = () => {

    const [firstname, setFirstname]=useState("")
    const [middlename, setMiddlename]=useState("")
    const [lastname, setLastname]=useState("")
    const [username, setUsername]=useState("")
    const [email, setEmail]=useState("")
    const [password, setPassword]=useState("")
    const history = useHistory();

    async function signUp()
    {
        
        let item={firstname, middlename, lastname, username, email, password}
        console.warn(item)

        let result = await fetch("http://localhost:8000/api/register",
        {
            method: 'POST',
            body: JSON.stringify(item),
            headers:{
                "Content-Type": 'application/json',
                "Accept": 'application/json',
            }
        })
        
        result = await result.json()
        localStorage.setItem("user-info", JSON.stringify(result))
        history.push("/login")
    }
    return (
        <div className="col-sm-6 offset-sm-3">
           <h1>CREATE ACCOUNT</h1>
           <p>SIgn-up as a seller</p>
           <input type="text" value={firstname} onChange={(e)=>setFirstname(e.target.value)} className="form-control" placeholder="firstname" /><br/>
           <input type="text" value={middlename} onChange={(e)=>setMiddlename(e.target.value)} className="form-control" placeholder="middlename" /><br/>
           <input type="text" value={lastname} onChange={(e)=>setLastname(e.target.value)} className="form-control" placeholder="lastname" /><br/>
           <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} className="form-control" placeholder="username" /><br/>
           <input type="email" value={email}  onChange={(e)=>setEmail(e.target.value)} className="form-control" placeholder="email" /><br/>
           <input type="password" value={password}  onChange={(e)=>setPassword(e.target.value)} className="form-control" placeholder="password" /><br/>
           <button onClick = {signUp} className="btn btn-primary">Register</button>
           <p>Already have an account?<Link to ="/login">Login here</Link></p>
        </div>
    );

}

export default Register;