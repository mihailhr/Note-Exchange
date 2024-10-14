import { Route, Routes,} from "react-router-dom"
import Navbar from "./Components/Navbar/Navbar"
import Register from "./Components/Register/Resgister"


function App() {
 

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="register" element={<Register/>}/>
    </Routes>
    </>
  )
}

export default App
