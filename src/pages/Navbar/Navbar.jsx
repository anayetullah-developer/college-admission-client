import { useContext, useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/authprovider";

const Navbar = () => {
  const { user, logoutUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleLogOut = () => {
    logoutUser()
      .then(() => {
        // Sign-out successful.
      })
      .catch(() => {
        // An error happened.
      });

    navigate("/");
  };

 
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsDropdownOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <div className={`navbar border-[#EE4672] border-b-2 pb-8`}>
        <div className="navbar-start">
          <div className="dropdown">
            <label
              tabIndex={0}
              className="btn btn-ghost lg:hidden"
            >
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
            </label>
            {isDropdownOpen && (
              <div className="dropdown-menu">
                {/* Dropdown menu content */}
                <NavLink to="/" className="block">Home</NavLink>
                <NavLink to="classes" className="block">Classes</NavLink>
                <NavLink to="instructors" className="block">Instructors</NavLink>
                {user && <NavLink to="dashboard" className="block">Dashboard</NavLink>}
              </div>
            )}
          </div>
          <a
            className={`md:text-3xl font-extrabold uppercase `}
          >
            Campus Navigator
          </a>
        </div>
        <div className="navbar-center hidden lg:flex md:justify-end">
          <ul
            className={`menu menu-horizontal px-1 text-lg`}
          >
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="classes">Colleges</NavLink>
            </li>
            <li>
              <NavLink to="instructors">Admission</NavLink>
            </li>
            {user && (
              <li>
                <NavLink to="dashboard">My Colleges</NavLink>
              </li>
            )}
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <>
             <p className="font-bold">{user?.displayName}</p>
              <Link
                to="/login"
                className="mx-4 btn md:btn-md sm:btn-sm"
                onClick={handleLogOut}
              >
                Logout
              </Link>
            </>
          ) : (
            <Link to="/login" className="mx-4 btn md:btn-md sm:btn-sm">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
