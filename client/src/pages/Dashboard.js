// import React from "react";
// import { useNavigate } from "react-router-dom";

// const Dashboard = () => {
//   const navigate = useNavigate();

//   // Get user data from local storage
//   const user = JSON.parse(localStorage.getItem("user"));

//   // Logout function
//   const handleLogout = () => {
//     localStorage.removeItem("user"); // ✅ Remove user data
//     navigate("/login"); // ✅ Redirect to login
//   };

//   return (
//     <div>
//       <h1>Welcome, {user?.username}!</h1>
//       <p>Email: {user?.email}</p>
//       <p>Role: {user?.role}</p>
//       <button onClick={handleLogout}>Logout</button>
//     </div>
//   );
// };

// export default Dashboard;
import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  // Get user data from local storage
  const user = JSON.parse(localStorage.getItem("user"));

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem("user");  // ✅ Remove user data
    navigate("/login", { replace: true });  // ✅ Redirect to login immediately
  };

  return (
    <div>
      <h1 style={{ textAlign: "center", marginTop: "50px" }}>Welcome, {user?.username}!</h1>
      {/* <p style={{ textAlign: "center", marginTop: "50px" }}>Email: {user?.email}</p>
      <p style={{ textAlign: "center", marginTop: "50px" }}>Role: {user?.role}</p> */}
      <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Conversion Marketing Reports Site!</h1>
      <h2>Click on the menu above to view your reports</h2>
    </div>
      {/* <button onClick={handleLogout}>Logout</button> */}
    </div>
  );
};

export default Dashboard;
