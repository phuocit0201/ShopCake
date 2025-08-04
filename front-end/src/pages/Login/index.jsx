import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Alert, InputGroup } from 'react-bootstrap';
import { 
  FaUser,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaGoogle,
  FaFacebook,
  FaApple,
  FaEnvelope,
  FaArrowLeft,
  FaShieldAlt
} from 'react-icons/fa';
import { BiCake } from 'react-icons/bi';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [loginError, setLoginError] = useState('');

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  // Validation functions
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };



  const validatePassword = (password) => {
    return password.length >= 6;
  };

  // Validate form
  const validateForm = () => {
    const newErrors = {};

    if (!formData.email) {
      newErrors.email = 'Email không được để trống';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Email không hợp lệ';
    }

    if (!formData.password) {
      newErrors.password = 'Mật khẩu không được để trống';
    } else if (!validatePassword(formData.password)) {
      newErrors.password = 'Mật khẩu phải có ít nhất 6 ký tự';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoginError('');

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Mock successful login
      if (formData.email === 'admin@bakery.com' && formData.password === '123456') {
        // Store login state (in real app, use proper auth management)
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('userInfo', JSON.stringify({
          name: 'Nguyễn Văn A',
          email: formData.email,
          phone: '0123456789',
          avatar: null
        }));

        // Redirect to home page
        navigate('/');
        
        // Show success message
        alert('Đăng nhập thành công! Chào mừng bạn trở lại.');
      } else {
        setLoginError('Email hoặc mật khẩu không chính xác');
      }
    } catch (error) {
      setLoginError('Có lỗi xảy ra khi đăng nhập. Vui lòng thử lại.');
    } finally {
      setIsLoading(false);
    }
  };

  // Handle social login
  const handleSocialLogin = (provider) => {
    alert(`Đăng nhập bằng ${provider} sẽ được tích hợp trong phiên bản tiếp theo!`);
  };



  return (
    <div className="login-page" style={{ 
      background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      paddingTop: '2rem',
      paddingBottom: '2rem'
    }}>
      <Container>
        <Row className="justify-content-center">
          <Col md={6} lg={5} xl={4}>
            <Card className="shadow-lg border-0" style={{ borderRadius: '20px', overflow: 'hidden' }}>
              {/* Header */}
              <div className="login-header text-white text-center py-4">
                <div className="mb-3">
                  <BiCake size={50} />
                </div>
                <h3 className="mb-1">Đăng Nhập</h3>
                <p className="mb-0 opacity-75">Chào mừng bạn trở lại!</p>
              </div>

              <Card.Body className="p-4">


                {/* Login Error Alert */}
                {loginError && (
                  <Alert variant="danger" className="text-center">
                    <small>{loginError}</small>
                  </Alert>
                )}

                {/* Demo Account Info */}
                <Alert variant="info" className="text-center">
                  <small>
                    <strong>Tài khoản demo:</strong><br />
                    Email: admin@bakery.com<br />
                    Mật khẩu: 123456
                  </small>
                </Alert>

                {/* Login Form */}
                <Form onSubmit={handleSubmit}>
                  {/* Email Input */}
                  <Form.Group className="mb-3">
                    <InputGroup>
                      <InputGroup.Text>
                        <FaEnvelope className="text-muted" />
                      </InputGroup.Text>
                      <Form.Control
                        type="email"
                        name="email"
                        placeholder="Nhập email của bạn"
                        value={formData.email}
                        onChange={handleChange}
                        isInvalid={!!errors.email}
                        style={{ borderRadius: '0 10px 10px 0' }}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.email}
                      </Form.Control.Feedback>
                    </InputGroup>
                  </Form.Group>

                  {/* Password Input */}
                  <Form.Group className="mb-3">
                    <InputGroup>
                      <InputGroup.Text>
                        <FaLock className="text-muted" />
                      </InputGroup.Text>
                      <Form.Control
                        type={showPassword ? 'text' : 'password'}
                        name="password"
                        placeholder="Nhập mật khẩu"
                        value={formData.password}
                        onChange={handleChange}
                        isInvalid={!!errors.password}
                        style={{ borderRadius: '0' }}
                      />
                      <Button
                        variant="outline-secondary"
                        onClick={() => setShowPassword(!showPassword)}
                        style={{ borderRadius: '0 10px 10px 0', borderLeft: 'none' }}
                      >
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                      </Button>
                      <Form.Control.Feedback type="invalid">
                        {errors.password}
                      </Form.Control.Feedback>
                    </InputGroup>
                  </Form.Group>

                  {/* Remember Me & Forgot Password */}
                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <Form.Check
                      type="checkbox"
                      name="rememberMe"
                      label="Ghi nhớ đăng nhập"
                      checked={formData.rememberMe}
                      onChange={handleChange}
                      className="small"
                    />
                    <Link to="/forgot-password" className="text-decoration-none small">
                      Quên mật khẩu?
                    </Link>
                  </div>

                  {/* Login Button */}
                  <div className="d-grid mb-4">
                    <Button 
                      type="submit" 
                      variant="primary" 
                      size="lg"
                      disabled={isLoading}
                      style={{ 
                        borderRadius: '25px',
                        background: 'linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%)',
                        border: 'none'
                      }}
                    >
                      {isLoading ? (
                        <>
                          <span className="spinner-border spinner-border-sm me-2" role="status" />
                          Đang đăng nhập...
                        </>
                      ) : (
                        <>
                          <FaUser className="me-2" />
                          Đăng Nhập
                        </>
                      )}
                    </Button>
                  </div>
                </Form>

                {/* Divider */}
                <div className="text-center mb-4">
                  <div className="d-flex align-items-center">
                    <hr className="flex-grow-1" />
                    <span className="px-3 text-muted small">Hoặc đăng nhập bằng</span>
                    <hr className="flex-grow-1" />
                  </div>
                </div>

                {/* Social Login */}
                <div className="d-flex gap-2 mb-4">
                  <Button
                    variant="outline-danger"
                    className="flex-grow-1"
                    onClick={() => handleSocialLogin('Google')}
                    style={{ borderRadius: '15px' }}
                  >
                    <FaGoogle />
                  </Button>
                  <Button
                    variant="outline-primary"
                    className="flex-grow-1"
                    onClick={() => handleSocialLogin('Facebook')}
                    style={{ borderRadius: '15px' }}
                  >
                    <FaFacebook />
                  </Button>
                  <Button
                    variant="outline-dark"
                    className="flex-grow-1"
                    onClick={() => handleSocialLogin('Apple')}
                    style={{ borderRadius: '15px' }}
                  >
                    <FaApple />
                  </Button>
                </div>

                {/* Register Link */}
                <div className="text-center">
                  <p className="text-muted small mb-2">
                    Chưa có tài khoản?{' '}
                    <Link to="/register" className="text-decoration-none fw-bold">
                      Đăng ký ngay
                    </Link>
                  </p>
                </div>

                {/* Back to Home */}
                <div className="text-center">
                  <Link to="/" className="text-decoration-none text-muted small">
                    <FaArrowLeft className="me-1" />
                    Về trang chủ
                  </Link>
                </div>
              </Card.Body>

              {/* Footer */}
              <div className="bg-light text-center py-3 border-top">
                <small className="text-muted">
                  <FaShieldAlt className="me-1" />
                  Thông tin của bạn được bảo mật an toàn
                </small>
              </div>
            </Card>
          </Col>
        </Row>

        {/* Features */}
        <Row className="justify-content-center mt-4">
          <Col md={8} lg={6}>
            <div className="text-center text-dark">
              <h5 className="mb-3">Tại sao nên đăng nhập?</h5>
              <Row className="g-3">
                <Col md={4}>
                  <div className="text-center">
                    <div className="bg-primary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-2 text-primary" 
                         style={{ width: '60px', height: '60px' }}>
                      <FaUser size={24} />
                    </div>
                    <h6>Quản lý tài khoản</h6>
                    <small className="text-muted">Theo dõi đơn hàng và thông tin cá nhân</small>
                  </div>
                </Col>
                <Col md={4}>
                  <div className="text-center">
                    <div className="bg-primary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-2 text-primary" 
                         style={{ width: '60px', height: '60px' }}>
                      <BiCake size={24} />
                    </div>
                    <h6>Ưu đãi độc quyền</h6>
                    <small className="text-muted">Nhận khuyến mãi và điểm tích lũy</small>
                  </div>
                </Col>
                <Col md={4}>
                  <div className="text-center">
                    <div className="bg-primary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-2 text-primary" 
                         style={{ width: '60px', height: '60px' }}>
                      <FaShieldAlt size={24} />
                    </div>
                    <h6>Mua sắm an toàn</h6>
                    <small className="text-muted">Thanh toán và giao hàng được đảm bảo</small>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>

      <style jsx>{`
        .login-page {
          position: relative;
        }
        
        .login-page::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="cake" patternUnits="userSpaceOnUse" width="100" height="100"><circle cx="50" cy="50" r="3" fill="white" opacity="0.1"/></pattern></defs><rect width="100" height="100" fill="url(%23cake)"/></svg>');
          pointer-events: none;
        }
        
        .login-header {
          background: linear-gradient(135deg, #6c757d 0%, #495057 100%);
        }
        
        .card {
          position: relative;
          z-index: 1;
        }
        
        .btn-primary {
          transition: all 0.3s ease;
        }
        
        .btn-primary:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0,0,0,0.15);
        }
        
        .form-control:focus {
          border-color: var(--primary-color);
          box-shadow: 0 0 0 0.2rem rgba(var(--primary-color-rgb), 0.25);
        }
        
        .input-group-text {
          background: #f8f9fa;
          border-color: #dee2e6;
        }
        
        .btn-outline-danger:hover {
          background-color: #dc3545;
          border-color: #dc3545;
        }
        
        .btn-outline-primary:hover {
          background-color: #0d6efd;
          border-color: #0d6efd;
        }
        
        .btn-outline-dark:hover {
          background-color: #212529;
          border-color: #212529;
        }
        
        @media (max-width: 768px) {
          .login-page {
            padding-top: 1rem;
            padding-bottom: 1rem;
          }
          
          .card {
            margin: 0 1rem;
          }
          
          .btn-primary:hover:not(:disabled) {
            transform: none;
          }
        }
      `}</style>
    </div>
  );
};

export default Login;