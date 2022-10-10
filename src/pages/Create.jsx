import React, {useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate} from 'react-router-dom'
import { create } from '../action/noteAction'
import Loading from '../components/Loading'

const Create = () => {
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [category, setCategory] = useState("")


    const dispatch = useDispatch()
    const navigate = useNavigate()

    const createNote = useSelector((state)=>state.createNote)
    const {loading} = createNote



    const createHandler = (e) => {
        e.preventDefault()
        dispatch(create(title,content,category))
        navigate('/')
    }


   
  return (
    <div className="container mt-5">
         {loading && <Loading />}
            <form onSubmit={createHandler}>
                    <div className="row">
                        <div className="col-3">
                            <div className="form-group">
                                        <label htmlFor="text">Title</label>
                                        <input type="text" required   className="form-control" onChange={(e)=>setTitle(e.target.value)}  />
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="form">
                                <div className="form-group">
                                    <label htmlFor="text">Content</label>
                                    <input type="text" required  className="form-control" onChange={(e)=>setContent(e.target.value)} />
                                </div>
                            </div>
                        </div>

                        <div className="col-3">
                            <div className="form">
                                <div className="form-group">
                                    <label htmlFor="text">Category</label>
                                    <input type="text" required  className="form-control" onChange={(e)=>setCategory(e.target.value)} v />
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <input type="submit" value='submit' className="btn btn-primary" />
            </form>
    </div>
  )
}

export default Create