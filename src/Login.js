// import { useState, useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


function Login() {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    })

    function handleChange(e){
        const {name, value} = e.target
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const navigate = useNavigate();
    
    function loginUser(e){
        e.preventDefault();
        
        setFormData({
            username: '',
            password: ''
        })
        navigate("/filtertitlerate");
    }

      return (
        <div>
            <h2>Enter your details to Login</h2>
            <form onSubmit={loginUser}>
            <input value={formData.username} type="text" placeholder="Enter username" name="username" onChange={handleChange} /> 
            <br/><br/>
            <input value={formData.password} type="password" placeholder="Enter password" name="password" onChange={handleChange} />
            <br/>
            <button>Log In</button>
            </form>
        </div>
    )
}

export default Login