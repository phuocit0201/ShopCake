import { Route } from 'react-router-dom';

// Public Page Components
import Home from '../pages/Home';
import Products from '../pages/Products';
import ProductDetail from '../pages/ProductDetail';
import Contact from '../pages/Contact';
import Blog from '../pages/Blog';
import About from '../pages/About';
import Login from '../pages/Login';
import Register from '../pages/Register';

/**
 * Public Routes - Accessible without authentication
 * These routes are available to all visitors
 */
const publicRoutes = [
  // Home Route
  <Route key="home" path="/" element={<Home />} />,
  
  // Product Routes (Public browsing)
  <Route key="products" path="/products" element={<Products />} />,
  <Route key="product-detail" path="/products/:id" element={<ProductDetail />} />,
  
  // Information Routes
  <Route key="contact" path="/contact" element={<Contact />} />,
  <Route key="blog" path="/blog" element={<Blog />} />,
  <Route key="about" path="/about" element={<About />} />,
  
  // Authentication Routes
  <Route key="login" path="/login" element={<Login />} />,
  <Route key="register" path="/register" element={<Register />} />,
];

export default publicRoutes;