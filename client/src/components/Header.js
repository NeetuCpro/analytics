// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import "../styles/Header.css"; // ✅ Import CSS

// const Header = () => {
//   const [openMenu, setOpenMenu] = useState(null);

//   // Toggle submenu visibility
//   const toggleMenu = (menu) => {
//     setOpenMenu(openMenu === menu ? null : menu);
//   };

//   return (
//     <header className="header">
//       {/* Logo */}
//       <div className="logo">
//         <img src="/Progility.png" alt="Logo" />
//       </div>

//       {/* Navigation Menu */}
//       <nav className="nav-menu">
//         <ul>
//           {/* Language India */}
//           <li className="dropdown">
//             <button onClick={() => toggleMenu("india")}>Language India ▼</button>
//             {openMenu === "india" && (
//               <ul className="submenu">
//                 <li><Link to="/sbuk">SBUK</Link></li>
//                 <li><Link to="/sude">SUDE</Link></li>
//                 <li><Link to="/sbus">SBUS</Link></li>
//               </ul>
//             )}
//           </li>

//           {/* Language Dubai */}
//           <li className="dropdown">
//             <button onClick={() => toggleMenu("dubai")}>Language Dubai ▼</button>
//             {openMenu === "dubai" && (
//               <ul className="submenu">
//                 <li><Link to="/mbc">MBC</Link></li>
//                 <li><Link to="/gdc">GDC</Link></li>
//               </ul>
//             )}
//           </li>
//         </ul>
//       </nav>
//     </header>
//   );
// };

// export default Header;
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Header.css";

const Header = () => {
  const navigate = useNavigate();
  const [openMenu, setOpenMenu] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [user, setUser] = useState(null);

  // Fetch user from localStorage on component mount
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    setUser(storedUser);
  }, []);

  // Toggle submenu visibility
  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  // Toggle profile dropdown
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login", { replace: true });
  };

  return (
    <header className="header">
      {/* Logo */}
      <div className="logo">
        <img src="/Progility.png" alt="Logo" />
      </div>

      {/* Navigation Menu */}
      <nav className="nav-menu">
        <ul>
          {/* Language India */}
          <li className="dropdown">
            <button onClick={() => toggleMenu("india")}>Language India ▼</button>
            {openMenu === "india" && (
              <ul className="submenu">
                <li><Link to="/sbuk">SBUK</Link></li>
                <li><Link to="/sude">SUDE</Link></li>
                <li><Link to="/sbus">SBUS</Link></li>
              </ul>
            )}
          </li>

          {/* Language Dubai */}
          <li className="dropdown">
            <button onClick={() => toggleMenu("dubai")}>Language Dubai ▼</button>
            {openMenu === "dubai" && (
              <ul className="submenu">
                <li><Link to="/mbc">MBC</Link></li>
                <li><Link to="/gdc">GDC</Link></li>
              </ul>
            )}
          </li>
        </ul>
      </nav>

      {/* Profile Section */}
      <div className="profile-section">
        {user && (
          <div className="profile-menu">
            {/* Profile Icon with Online Indicator */}
            <button onClick={toggleDropdown} className="profile-icon">
              {user.username.charAt(0).toUpperCase()}
              <span className="online-indicator"></span> {/* Small light icon */}
            </button>

            {/* Dropdown Menu */}
            {dropdownOpen && (
              <div className="dropdown">
                <p className="user-name">{user.username}</p>
                <hr />
                {/* <button className="menu-item">⚙️ Settings</button> */}
                <button className="menu-item logout-btn" onClick={handleLogout}> Log out</button>
              </div>
            )}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
