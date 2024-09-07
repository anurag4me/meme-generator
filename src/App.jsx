import React from "react"
import {Routes, Route} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import Home from "./pages/Home"
import EditPage from "./pages/Edit"

function App() {

  return (
    <div>
      <h1 className="px-3 py-2">Meme Generator</h1>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/edit" element={<EditPage />}/>
      </Routes>
    </div>
  )
}

export default App
