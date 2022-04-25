import logoImage from '../../assets/images/portfolioLogo.png';
import Nav from '../Nav';
import { Link } from "react-router-dom";

const Header = () => {

    return(
        <header>
        <div className="logo">
            <Link to="/react-portfolio">
            <img src={logoImage} alt="Logo" />
            </Link>
        </div>

        <Nav/>
    </header>
    );
}

export default Header;