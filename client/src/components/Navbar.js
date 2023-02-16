import { Link } from "react-router-dom";

export default function Navbar(){
    return(
        <nav>
            <Link to="/"> Homepage</Link>
            <Link to="/phones"> Phones List</Link>
        </nav>
    )
}