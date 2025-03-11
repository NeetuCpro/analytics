
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, Outlet, useLocation } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Header from "./components/Header"; 
import WooCommerce from './pages/WooCommerce';
import Social from './pages/Social';
import VisitorAnalytics from './pages/VisitorAnalytics';
import SearchConsole from './pages/SearchConsole';
import WooCommerceAnalytics from './pages/WooCommerceAnalytics';
import Report from './pages/Report';

// ✅ Protected Route - Redirects if not authenticated
function ProtectedRoute() {
  const isAuthenticated = localStorage.getItem("user");
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
}

// ✅ Layout Wrapper - Show Header on Dashboard
const Layout = ({ children }) => {
  const location = useLocation();
  return (
    <>
      {location.pathname !== "/login" && <Header />}
      {children}
    </>
  );
};

function App() {
  return (
    <Router>
      <Layout>
        <Routes>

          <Route path="/login" element={<Login />} />
          
          {/* ✅ Protected Routes */}
          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>

          <Route path="/woocommerce" element={<WooCommerce />} />
        <Route path="/social" element={<Social />} />
        <Route path="/visitoranalytics" element={<VisitorAnalytics />} />
        <Route path="/searchconsole" element={<SearchConsole />} />
        <Route path="/woocommerce-analytics" element={<WooCommerceAnalytics />} />
        <Route path="/report" element={<Report />} />

        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
