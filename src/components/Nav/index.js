import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <Link to='/about' className="navButton">
        /<em>About Me</em>
      </Link>

      <Link to='/projects' className="navButton" href='#projects'>
        /<em>Projects</em>
      </Link>

      <Link to='/contact' className="navButton" href='#contact-me'>
        /<em>Contact</em>
      </Link>

      <a className="navButton" href='https://docs.google.com/document/d/1W2GTXjtN1VLhStqjbz1U3N21neRcaP8Yk0BDTz9txpI/edit?usp=sharing' target='_blank' rel="noreferrer">
        /<em>Resume</em>
      </a>
    </nav>
  );
};

export default Nav;
