import { NavLink } from "react-router-dom"

function Header(){

    return <div className="header">

        <h1>Router</h1>
        
        <ul>
            <li><NavLink to="/">Home </NavLink> </li>
            <li><NavLink to="/feature">Features</NavLink> </li>
            
            <li>About</li>
            <li>Blogs</li>
        </ul>
    </div>
}

export default Header