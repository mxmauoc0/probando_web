import { NavLink, Navigate} from 'react-router-dom';
import './Navbar.css';
import logo from '../../assets/Logo.png'; 

export default function Navbar() {
  const links = [
    { to: '/', label: 'Home'},
    { to: '/about',    label: 'About Us' },
    { to: '/market',   label: 'Market'   },
    { to: '/other',    label: 'Other'    },
    { to: '/checkout', label: 'CheckOut' },
    { to: '/me', label: 'Perfil' },
  ];

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <span className="navbar__logo-icon"> <img src={logo} alt="logo" /> </span>
        <span className="navbar__logo-text">Adventure Shop </span>
      </div>

      <ul className="navbar__links">

        
        {links.map(({ to, label }) => (
          <li key={to}>
            <NavLink
              to={to}
              className={({ isActive }) =>
                isActive ? 'navbar__link navbar__link--active' : 'navbar__link'
              }
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>

    </nav>
  );
}