import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { register } from '../action/userAction'
import Loading from "../components/Loading"

const Register = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password,setPassword] = useState("")

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const userRegister = useSelector((state)=>state.userRegister)

    const {userInfo, error,loading} = userRegister

    const handleRegister = (e) =>{
        e.preventDefault()
        dispatch(register(name,email,password))
    }
    useEffect(()=>{
        if(userInfo){
            navigate('/')
        }
    },[userInfo,navigate])
  return (
    <div className="container">
        <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6">
                 
                <div className="box">
                     <h1>Register</h1>
                     {loading && <Loading />}
                     {error && <div className="alert alert-danger">{error}</div>}
                                <form onSubmit={handleRegister} >
                                <div className="form-group">
                                        <label htmlFor="email">Name</label>
                                        <input type="text" value={name} onChange={(e)=>setName(e.target.value)} className="form-control" placeholder="Enter name" id="name" />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="email">Email address:</label>
                                        <input type="email"  value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control" placeholder="Enter email" id="email" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="pwd">Password:</label>
                                        <input type="password"  value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control" placeholder="Enter password" id="pwd" />
                                    </div>
                            <button type="submit" className="btn btn-primary">Submit</button><br/>
                           Already have an account? <Link to="/login">Login</Link>

                    </form>
                </div>
            </div>
            <div className="col-md-3"></div>
        </div>       
    </div>
  )
}

export default Register