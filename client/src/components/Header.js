import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Header.css";

const Header = () => {
  const navigate = useNavigate();
  const [openMenu, setOpenMenu] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [menuItems, setMenuItems] = useState({
    main: [
      {
        category: "Language Dubai",
        options: [
          { value: "WooCommerce", url: "/woocommerce" },
          { value: "Social", url: "/social" },
          { value: "Email Campaign", url: "/email-campaign" },
          { value: "Visitor Analytics", url: "/visitoranalytics" },
          { value: "Search Console", url: "/searchconsole" },
        ],
      },
      {
        category: "Language India",
        options: [
          { value: "WooCommerce", url: "/woocommerce" },
          { value: "Social", url: "/social" },
          { value: "Email Campaign", url: "/email-campaign" },
          { value: "Visitor Analytics", url: "/visitoranalytics" },
          { value: "Search Console", url: "/searchconsole" },
        ],
      },
      {
        category: "MBC",
        options: [
          { value: "WooCommerce Analytics", url: "/woocommerce-analytics" },
        ],
      },
      
    ],
  });

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    setUser(storedUser);
  }, []);

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login", { replace: true });
  };

  return (
    <header className="header">
       <div className="logo">
       <img src="/Progility.png" alt="Logo" />
       {/* <p className="logo-paragraph">Driven by insights</p> */}

      </div>
      <nav className="nav-menu">
        <ul>
          {menuItems.main.map((menu, index) => (
            <li 
              className="dropdown"
              key={index}
              onMouseEnter={() => setOpenMenu(menu.category)}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <button>{menu.category} {menu.options && menu.options.length > 0 && "▼"}</button>
              {openMenu === menu.category && menu.options && menu.options.length > 0 && (
                <ul className="submenu">
                  {menu.options.map((item, idx) => (
                    <li key={idx}>
                      <Link to={item.url}>{item.value}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>

      <div className="profile-section">
        {user && (
          <div className="profile-menu">
            <button onClick={toggleDropdown} className="profile-icon">
              {user.username.charAt(0).toUpperCase()}
              <span className="online-indicator"></span>
            </button>
            {dropdownOpen && (
              <div className="profile-dropdown">
                <p className="user-name">{user.username}</p>
                <hr />
                <button className="menu-item logout-btn" onClick={handleLogout}>
                  Log out
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
