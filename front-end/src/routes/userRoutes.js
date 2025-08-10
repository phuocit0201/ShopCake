import { Route } from 'react-router-dom';

// User Page Components (Require Authentication)
import Cart from '../pages/Cart';
import Checkout from '../pages/Checkout';
import OrderHistory from '../pages/OrderHistory';
import OrderDetail from '../pages/OrderDetail';
import OrderReview from '../pages/OrderReview';

// Protected Route Wrapper
import ProtectedRoute from './ProtectedRoute';

/**
 * User Routes - Require user authentication
 * These routes are only accessible to logged-in users
 */
const userRoutes = [
  // Shopping Routes (User must be logged in)
  <Route 
    key="cart" 
    path="/cart" 
    element={
      <ProtectedRoute requiredRole="user">
        <Cart />
      </ProtectedRoute>
    } 
  />,
  <Route 
    key="checkout" 
    path="/checkout" 
    element={
      <ProtectedRoute requiredRole="user">
        <Checkout />
      </ProtectedRoute>
    } 
  />,
  
  // Order Management Routes (User must be logged in)
  <Route 
    key="orders-history" 
    path="/orders-history" 
    element={
      <ProtectedRoute requiredRole="user">
        <OrderHistory />
      </ProtectedRoute>
    } 
  />,
  <Route 
    key="order-detail" 
    path="/orders/:orderId" 
    element={
      <ProtectedRoute requiredRole="user">
        <OrderDetail />
      </ProtectedRoute>
    } 
  />,
  <Route 
    key="order-review" 
    path="/orders/:orderId/review" 
    element={
      <ProtectedRoute requiredRole="user">
        <OrderReview />
      </ProtectedRoute>
    } 
  />,
];

export default userRoutes;