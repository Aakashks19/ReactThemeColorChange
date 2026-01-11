import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react"

const Login = () => {
    const inputref = useRef(0);
    useEffect(()=>{
        if (inputref.current)
        {
            inputref.current.focus()
        }
    },[])

    const [name, setName] = useState({
      "user" : ""
    })


    const handlechange = (e) => {
        setName({ ...name, [e.target.name]: e.target.value } )

    }
     
  return (
    <div className="log">
        <label for="name">User Name:</label>
        <input type="text" name="user"  ref={inputref} value={name.user} onChange={(e) => handlechange(e)} />
<br></br>
        <label for="name">Password:</label>
        <input type="password"/>
<br></br>
        <button onClick={()=>alert("Login Success...!")}>Login</button>
    </div>
  )
}

export default Login