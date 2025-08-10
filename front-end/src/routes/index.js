import React from 'react';
import { Routes } from 'react-router-dom';

// Import route groups
import publicRoutes from './publicRoutes';
import userRoutes from './userRoutes';
import adminRoutes from './adminRoutes';

/**
 * Main App Routes Component
 * Combines all route groups: public, user, and admin routes
 */
const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Routes - No authentication required */}
      {publicRoutes.map(route => route)}
      
      {/* User Routes - Require user authentication */}
      {userRoutes.map(route => route)}
      
      {/* Admin Routes - Require admin authentication */}
      {adminRoutes.map(route => route)}
      
      {/* 404 Not Found Route (Future implementation) */}
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
};

export default AppRoutes;