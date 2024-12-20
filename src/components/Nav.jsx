
import { NavLink } from 'react-router-dom';


function Nav() {
  const theLi = (
    <>
      <li>
        <NavLink 
          to="/" 
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink 
          to="/listed-book" 
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Listed Book
        </NavLink>
      </li>
      <li>
        <NavLink 
          to="/pages-to-read" 
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Pages to Read
        </NavLink>
      </li>
      <li>
        <NavLink 
          to="/about" // New link for About
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink 
          to="/contact" // New link for Contact
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Contact
        </NavLink>
      </li>
    </>
  );
  

  
  return (
    <div className='container mx-auto'>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
             {theLi}
            </ul>
          </div>
          <a className="font-bold text-2xl">Book Vibe</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
          {theLi}
          </ul>
        </div>
        <div className="navbar-end gap-3">
          <a className="btn btn-info">Sign In</a>
          <a className="btn btn-success">Sign Up</a>
        </div>
      </div>
    </div>
  );
}

export default Nav;
