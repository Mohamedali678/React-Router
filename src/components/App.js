
import {Routes, Route} from "react-router-dom"
import Home from "../Pages/Home"
import Feature from "../Pages/Feature"

function App() {
  return <Routes>

    //single route
    <Route path="/" element={<Home /> } />
    <Route path="/feature" element={<Feature />} />
    
  </Routes>
  
}
export default App;
