import logoImage from '../../assets/images/portfolioLogo.png';
import Nav from '../Nav';

const Header = () => {

    return(
        <header>
        <div className="logo">
            <a href="./index.html">
            <img src={logoImage} alt="Logo" />
            </a>
        </div>

        <Nav/>
    </header>
    );
}

export default Header;