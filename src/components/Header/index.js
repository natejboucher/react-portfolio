import logoImage from '../../assets/images/portfolioLogo.png';

const Header = () => {

    return(
        <header>
        <div className="logo">
            <a href="./index.html">
            <img src={logoImage} alt="Logo" />
            </a>
        </div>

        <nav>
            <ul>
                <li className="nav1">
                    <a href="#bio">/<em>About Me</em></a>
                </li>
                <li className="nav2">
                 <a href ="#projects">/<em>Projects</em></a>
                </li>
                <li className="nav3">
                    <a href="#contact-me">/<em>Contact</em></a>
                </li>
            </ul>
        </nav>
    </header>
    );
}

export default Header;