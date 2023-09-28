import {Link} from 'react-router-dom';

function Main(){
    return(
        <center>
        <div className='ll'>
            <Link to="/">Home</Link>    |
            <Link to="/About">About</Link>    |
            <Link to="/Services">Services</Link>   |
            <Link to="/Contact">Contact</Link>    |
            <Link to="/Student">Student</Link>    |
            <Link to="/Events">Events</Link> |
            <Link to="/Events1">Events1</Link> |
            <Link to="/Hooks">Hooks</Link> |
            <Link to="/Product">Product</Link>
        </div>
        </center>
    )
}
export default Main;