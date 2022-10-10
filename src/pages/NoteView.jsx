import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Loading from '../components/Loading'

const NoteView = ({match}) => {
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [category, setCategory] = useState("")

    const {id} = useParams();

    const dispatch = useDispatch()
    const navigate = useNavigate()

    



   


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
       
    },[id])
  return (
    <div className="container mt-5">
        <div className="row">
            <div className="col-md-2"><h1>{title}</h1></div>
            <div className="col-md-8 text-center"><h5>{content}</h5></div>
            <div className="col-md-2"><h5>{category}</h5></div>
        </div>
        <Link to='/' className="btn btn-primary">Back</Link>
    </div>
  )
}

export default NoteView