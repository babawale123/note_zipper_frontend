import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Navbar from '../components/Navbar'
import Loading from '../components/Loading'
import { allNote, delNote } from '../action/noteAction'
import { Link, useNavigate } from 'react-router-dom'


const Home = () => {
    const [message, setMessage] = useState("")

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const listNotes = useSelector((state)=>state.listNotes)
    const {loading, notes, error} = listNotes
    const updateNote = useSelector((state)=>state.updateNote)
    const {error:updateError,success:updateSucces} = updateNote
    const userLogin = useSelector((state)=>state.userLogin)
    const {userInfo} = userLogin
    const deleteNote = useSelector((state)=>state.deleteNote)
    const {error:delError, success:delSuccess} = deleteNote

    const createNote = useSelector((state)=>state.createNote)
    const {error:createError, success:createSuccess} = createNote

    const handleDelete = (id) =>{
        if(window.confirm("Are you sure you want to delete")){
            dispatch(delNote(id))
            setMessage("Deleted successfull")
            setTimeout(()=>{
                setMessage("")
            },4000)
        }
    }

    
    useEffect(()=>{
        dispatch(allNote())
        if(!userInfo){
            navigate('/login')
        }
    },[dispatch,userInfo,navigate,updateSucces,delSuccess])
  return (
    <div>
        <Navbar />
<div className="container mt-5">
        {loading && <Loading />}
        {message && <div className="alert alert-success">{message}</div>}
        {error && <div className="alert alert-danger">{error}</div>}
        {createError && <div className="alert alert-danger">{createError}</div>}
        {delError && <div className="alert alert-danger">{delError}</div>}
        {updateError && <div className="alert alert-danger">{updateError}</div>}
    <table className="table table-bordered">
        
        <thead>
        <tr>
            <th>SN</th>
            <th>Title</th>
            <th>Content</th>
            <th>Category</th>
            <th>Action</th>
        </tr>
        </thead>
        <tbody>
            { notes && notes.map((note, index)=>(
               
                <tr key={note._id}>
                    <td>{index + 1}</td>
                    <td>{note.title}</td>
                    <td>{note.content}</td>
                    <td>{note.category}</td>
                    <td>
                        <Link to={`noteview/${note._id}`} className="btn btn-success">view</Link>
                        <Link to={`update/${note._id}`} className="btn btn-info">Edit</Link>
                        {/* <Link to='/' onclick={()=>handleDelete(note._id)} className="btn btn-danger">Delete</Link> */}
                        <a onClick={()=>handleDelete(note._id)} className="btn btn-danger">Delete</a>
                    </td>
                </tr>
            ))}
            </tbody>
            </table>
    </div>
</div>
  )
}

export default Home