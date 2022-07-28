import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">Support Desk</Link>
      </div>
      <ul>
        <li>
          <Link to="/login">
            <FaSignInAlt></FaSignInAlt>
          </Link>
        </li>
        <li>
          <Link to="/register">
            <FaUser></FaUser>
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
