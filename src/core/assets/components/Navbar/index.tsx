import './styles.scss';
import {Link} from 'react-router-dom';

const Navbar = () => {

    return (
        <nav className="row bg-primary main-nav">
            <Link to="/" className="main-nav-text">
              Bootcamp DevSuperior   
             </Link>          
        </nav>
    )

}

export default Navbar;