import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { update } from '../action/noteAction'
import Loading from '../components/Loading'

const Update = ({match}) => {
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [category, setCategory] = useState("")

    const {id} = useParams();

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const updateNote = useSelector((state)=>state.updateNote)
    const {loading, success} = updateNote



    const updateHandler = (e) => {
        e.preventDefault()
        dispatch(update(id,title,content,category))
        navigate('/')
    }


    useEffect(()=>{
        const fetchNote = async() =>{
            try {
                
                const {data} = await axios.get(`http://localhost:5000/api/notes/${id}`)
                setTitle(data.note.title)
                setContent(data.note.content)
                setCategory(data.note.category)
                //console.log(data.note.title)
            } catch (error) {
                console.log(error)
            };
        };
        fetchNote()
       
    },[id,success])
  return (
    <div className="container mt-5">
         {loading && <Loading />}
            <form onSubmit={updateHandler}>
                    <div className="row">
                        <div className="col-3">
                            <div className="form-group">
                                        <label htmlFor="text">Title</label>
                                        <input type="text" required  value={title} className="form-control" onChange={(e)=>setTitle(e.target.value)}  />
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="form">
                                <div className="form-group">
                                    <label htmlFor="text">Content</label>
                                    <input type="text" required value={content} className="form-control" onChange={(e)=>setContent(e.target.value)} />
                                </div>
                            </div>
                        </div>

                        <div className="col-3">
                            <div className="form">
                                <div className="form-group">
                                    <label htmlFor="text">Category</label>
                                    <input type="text" required  value={category} className="form-control" onChange={(e)=>setCategory(e.target.value)} v />
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <input type="submit" value='submit' className="btn btn-primary" />
            </form>
    </div>
  )
}

export default Update