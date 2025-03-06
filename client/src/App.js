
// // export default App;
// import React from "react";
// import { BrowserRouter as Router, Routes, Route, Navigate, Outlet, useLocation } from "react-router-dom";
// import Login from "./pages/Login";
// import Dashboard from "./pages/Dashboard";
// import Header from "./components/Header"; // ✅ Import Header Component

// function ProtectedRoute() {
//   const isAuthenticated = localStorage.getItem("user"); // ✅ Check if user is logged in
//   return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
// }

// // ✅ New Layout Wrapper to Hide Header on Login Page
// const Layout = ({ children }) => {
//   const location = useLocation(); // ✅ Get current route

//   return (
//     <>
//       {location.pathname !== "/login" && <Header />} {/* ✅ Hide Header on Login */}
//       {children}
//     </>
//   );
// };

// function App() {
//   return (
//     <Router>
//       <Layout>
//         <Routes>
//           {/* Public Routes */}
//           <Route path="/login" element={<Login />} />
          
//           {/* Protected Routes */}
//           <Route element={<ProtectedRoute />}>
//             <Route path="/dashboard" element={<Dashboard />} />
//           </Route>

//           {/* 404 Page */}
//           <Route path="/dashboard" element={<h1>404 - Page Not Found</h1>} />
//         </Routes>
//       </Layout>
//     </Router>
//   );
// }

// export default App;
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, Outlet, useLocation } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Header from "./components/Header"; // ✅ Import Header Component

// ✅ Protected Route - Redirects if not authenticated
function ProtectedRoute() {
  const isAuthenticated = localStorage.getItem("user"); // ✅ Check if user is logged in
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
}

// ✅ Layout Wrapper - Hides Header on Login Page
const Layout = ({ children }) => {
  const location = useLocation(); // ✅ Get current route
  return (
    <>
      {location.pathname !== "/login" && <Header />} {/* ✅ Hide Header on Login */}
      {children}
    </>
  );
};

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* ✅ Redirect root path based on authentication */}
          <Route path="/" element={localStorage.getItem("user") ? <Navigate to="/dashboard" /> : <Navigate to="/login" />} />
          
          {/* Public Route */}
          <Route path="/login" element={<Login />} />
          
          {/* Protected Routes */}
          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>

          {/* 404 Page */}
          <Route path="*" element={<h1>404 - Page Not Found</h1>} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
