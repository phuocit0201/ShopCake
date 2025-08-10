import { Route } from 'react-router-dom';

// Admin Page Components
import Dashboard from '../pages/Dashboard';
// Future admin pages
// import UserManagement from '../pages/Admin/UserManagement';
// import ProductManagement from '../pages/Admin/ProductManagement';
// import OrderManagement from '../pages/Admin/OrderManagement';
// import Analytics from '../pages/Admin/Analytics';

// Protected Route Wrapper
import ProtectedRoute from './ProtectedRoute';

/**
 * Admin Routes - Require admin authentication
 * These routes are only accessible to admin users
 */
const adminRoutes = [
  // Admin Dashboard
  <Route 
    key="dashboard" 
    path="/dashboard" 
    element={
      <ProtectedRoute requiredRole="admin">
        <Dashboard />
      </ProtectedRoute>
    } 
  />,
  
  // Future Admin Routes (commented for now)
  /*
  <Route 
    key="admin-users" 
    path="/admin/users" 
    element={
      <ProtectedRoute requiredRole="admin">
        <UserManagement />
      </ProtectedRoute>
    } 
  />,
  <Route 
    key="admin-products" 
    path="/admin/products" 
    element={
      <ProtectedRoute requiredRole="admin">
        <ProductManagement />
      </ProtectedRoute>
    } 
  />,
  <Route 
    key="admin-orders" 
    path="/admin/orders" 
    element={
      <ProtectedRoute requiredRole="admin">
        <OrderManagement />
      </ProtectedRoute>
    } 
  />,
  <Route 
    key="admin-analytics" 
    path="/admin/analytics" 
    element={
      <ProtectedRoute requiredRole="admin">
        <Analytics />
      </ProtectedRoute>
    } 
  />,
  */
];

export default adminRoutes;