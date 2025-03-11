// import React, { useState, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import "../styles/Header.css";

// const Header = () => {
//   const navigate = useNavigate();
//   const [openMenu, setOpenMenu] = useState(null);
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const [user, setUser] = useState(null);
//   const [menuItems, setMenuItems] = useState({
//     main: [
//       {
//         category: "LD",
//         options: [
//           { value: "WooCommerce", url: "/woocommerce" },
//           { value: "Social", url: "/social" },
//           { value: "Email Campaign", url: "/email-campaign" },
//           { value: "Visitor Analytics", url: "/visitoranalytics" },
//           { value: "Search Console", url: "/searchconsole" },
//         ],
//       },
//       {
//         category: "LI",
//         options: [
//           { value: "WooCommerce", url: "/woocommerce" },
//           { value: "Social", url: "/social" },
//           { value: "Email Campaign", url: "/email-campaign" },
//           { value: "Visitor Analytics", url: "/visitoranalytics" },
//           { value: "Search Console", url: "/searchconsole" },
//         ],
//       },
//       {
//         category: "MBC",
//         options: [
//           { value: "WooCommerce Analytics", url: "/woocommerce-analytics" },
//         ],
//       },
//       {
//         category: "Moral Code",
//         about: {
//           value: "We provide comprehensive tools and reports for your business.",
//         },
//       },
//     ],
//   });
//   // Fetch user from localStorage
//   useEffect(() => {
//     const storedUser = JSON.parse(localStorage.getItem("user"));
//     setUser(storedUser);
//   }, []);

//   // Fetch menu dynamically
//   useEffect(() => {
//     // Replace this with an API call if necessary
//     const fetchMenuData = async () => {
//       const data = {
//         india: [
//           { name: "Report", path: "/reports" },
//           { name: "Woocommerce", path: "/social" },
//           { name: "Visitoranalytics", path: "/visitoranalytics" },
//         ],
//         dubai: [
//           { name: "Searchconsole", path: "/searchconsole" },
//           { name: "Woocommerce-analytics", path: "/woocommerce-analytics" },
//         ],
//       };
//       setMenuItems(data);
//     };

//     fetchMenuData();
//   }, []);

//   // Toggle submenu
//   const toggleMenu = (menu) => {
//     setOpenMenu(openMenu === menu ? null : menu);
//   };

//   // Toggle profile dropdown
//   const toggleDropdown = () => {
//     setDropdownOpen(!dropdownOpen);
//   };

//   // Logout function
//   const handleLogout = () => {
//     localStorage.removeItem("user");
//     navigate("/login", { replace: true });
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
//             <button onClick={() => toggleMenu("india")}>
//               Language India ▼
//             </button>
//             {openMenu === "india" && (
//               <ul className="submenu">
//                 {menuItems.india.map((item, index) => (
//                   <li key={index}>
//                     <Link to={item.path}>{item.name}</Link>
//                   </li>
//                 ))}
//               </ul>
//             )}
//           </li>

//           {/* Language Dubai */}
//           <li className="dropdown">
//             <button onClick={() => toggleMenu("dubai")}>
//               Language Dubai ▼
//             </button>
//             {openMenu === "dubai" && (
//               <ul className="submenu">
//                 {menuItems.dubai.map((item, index) => (
//                   <li key={index}>
//                     <Link to={item.path}>{item.name}</Link>
//                   </li>
//                 ))}
//               </ul>
//             )}
//           </li>
//         </ul>
//       </nav>

//       {/* Profile Section */}
//       <div className="profile-section">
//         {user && (
//           <div className="profile-menu">
//             {/* Profile Icon */}
//             <button onClick={toggleDropdown} className="profile-icon">
//               {user.username.charAt(0).toUpperCase()}
//               <span className="online-indicator"></span>
//             </button>

//             {/* Profile Dropdown */}
//             {dropdownOpen && (
//               <div className="profile-dropdown">
//                 <p className="user-name">{user.username}</p>
//                 <hr />
//                 <button className="menu-item logout-btn" onClick={handleLogout}>
//                   Log out
//                 </button>
//               </div>
//             )}
//           </div>
//         )}
//       </div>
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
  const [menuItems, setMenuItems] = useState({
    main: [
      {
        category: "LD",
        options: [
          { value: "WooCommerce", url: "/woocommerce" },
          { value: "Social", url: "/social" },
          { value: "Email Campaign", url: "/email-campaign" },
          { value: "Visitor Analytics", url: "/visitoranalytics" },
          { value: "Search Console", url: "/searchconsole" },
        ],
      },
      {
        category: "LI",
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
      {
        category: "Moral Code",
        about: {
          value: "We provide comprehensive tools and reports for your business.",
        },
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
