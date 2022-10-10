import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { login } from '../action/userAction'
import Loading from '../components/Loading'
import './pages.css'




const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()

    const dispatch = useDispatch()
    const userLogin = useSelector((state)=>state.userLogin)

    const {loading, error, userInfo} = userLogin 
    const handleLogin = (e) =>{
        e.preventDefault();
        dispatch(login(email,password))
    }
    useEffect(() => {
      if(userInfo){
        navigate('/')
      }
    }, [userInfo,navigate])
    
  return (
    <div className="container">
        <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6">
                 
                <div className="box">
                     {loading && <Loading />}
                     <h1>Login</h1>
                     {error && <div className="alert alert-danger">{error}</div>}


                    <form onSubmit={handleLogin}>
                                    <div className="form-group">
                                        <label htmlFor="email">Email address:</label>
                                        <input type="email" className="form-control" placeholder="Enter email" value={email} onChange={(e)=>setEmail(e.target.value)} id="email" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="pwd">Password:</label>
                                        <input type="password" className="form-control" placeholder="Enter password" value={password} onChange={(e)=>setPassword(e.target.value)} id="pwd" />
                                    </div>
                            <button type="submit" className="btn btn-primary">Submit</button><br/>
                            Don't have an account? <Link to="/register">Register</Link>
                    </form>
                </div>
            </div>
            <div className="col-md-3"></div>
        </div>       
    </div>
  )
}

export default Login