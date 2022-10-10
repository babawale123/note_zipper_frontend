import "./asset/css/bootstrap.min.css";
import "./pages/pages.css"
import Home from "./pages/Home";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Login from "./pages/Login";
import Register from "./pages/Register";
import NoteView from "./pages/NoteView";
import Update from "./pages/Update";
import Create from "./pages/Create";



const  App = () => {

  return (
    <div className="box-container ">

    
    <BrowserRouter>
        <Routes>
            <Route path="/" exact  element = { <Home /> }/>
            <Route path="/login"  element = { <Login /> }/>
            <Route path="/register"  element = { <Register /> }/>
            <Route path="/create"  element = { <Create /> }/>
            <Route path="/noteview/:id"  element = { <NoteView /> }/>
            <Route path="/update/:id"  element = { <Update /> }/>
        </Routes>
    </BrowserRouter>
</div>   
  )
}

export default App
