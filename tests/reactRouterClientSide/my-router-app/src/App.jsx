import {Routes, Route} from "react-router-dom"

import Layout from "./Layout.jsx"
import Home from "./Home.jsx"
import About from "./About.jsx"

const App=()=>{
  return(
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="about" element={<About/>}/>
      </Route>
    </Routes>
  )
}

export default App