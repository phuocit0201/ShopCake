import React from 'react';
import { Navigate } from 'react-router-dom';

/**
 * ProtectedRoute Component
 * Handles authentication and authorization for protected routes
 * 
 * @param {React.ReactNode} children - The component to render if authorized
 * @param {string} requiredRole - Required role: 'user' or 'admin'
 */
const ProtectedRoute = ({ children, requiredRole = 'user' }) => {
  // Check if user is logged in (from localStorage for now)
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  
  // Get user info from localStorage
  const userInfoString = localStorage.getItem('userInfo');
  let userInfo = null;
  
  try {
    userInfo = userInfoString ? JSON.parse(userInfoString) : null;
  } catch (error) {
    console.error('Error parsing user info:', error);
    userInfo = null;
  }

  // If not logged in, redirect to login
  if (!isLoggedIn || !userInfo) {
    return <Navigate to="/login" replace />;
  }

  // Check role-based access
  if (requiredRole === 'admin') {
    // Check if user has admin role
    // For demo purposes, you can set admin role in userInfo
    // Example: userInfo.role === 'admin'
    const isAdmin = userInfo.role === 'admin' || userInfo.email === 'admin@sweetbakery.com';
    
    if (!isAdmin) {
      // Redirect to home if not admin
      return <Navigate to="/" replace />;
    }
  }

  // If all checks pass, render the protected component
  return children;
};

export default ProtectedRoute;