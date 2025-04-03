import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, Outlet, useLocation } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Header from "./components/Header";
import Footer from "./components/Footer"; 
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

// ✅ Layout Wrapper - Show Header on Dashboard and Footer on all pages
const Layout = ({ children }) => {
  const location = useLocation();
  return (
    <div className="app-container">
      {location.pathname !== "/login" && <Header />}
      <div className="content-wrapper">{children}</div>
      <Footer /> {/* ✅ Footer appears on all pages */}
    </div>
  );
};

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* ✅ This ensures "/" redirects to "/login" */}
          <Route path="/" element={<Navigate to="/login" replace />} />

          {/* ✅ Login Page Route */}
          <Route path="/login" element={<Login />} />

          {/* ✅ Protected Routes */}
          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/woocommerce" element={<WooCommerce />} />
            <Route path="/social" element={<Social />} />
            <Route path="/visitoranalytics" element={<VisitorAnalytics />} />
            <Route path="/searchconsole" element={<SearchConsole />} />
            <Route path="/woocommerce-analytics" element={<WooCommerceAnalytics />} />
            <Route path="/report" element={<Report />} />
          </Route>
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
