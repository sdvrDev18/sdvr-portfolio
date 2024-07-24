import "./Navbar.css";
import logo from "../../assets/Sdvr-signature-black.png";

const Navbar = () => {
  const navItems = ["Home", "About", "Work", "Skills", "Contact"];

  return (
    <nav className="navbar">
      <div className="navbar__logo-container">
        <img src={logo} alt="logo" className="navbar__logo-image" />
      </div>
      <ul className="navbar__list">
        {navItems.map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            {item}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
