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
  FaPhone,
  FaUserPlus,
  FaArrowLeft,
  FaShieldAlt,
  FaCheck,
  FaExclamationTriangle
} from 'react-icons/fa';
import { BiCake } from 'react-icons/bi';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false,
    receiveNewsletters: true
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [registerError, setRegisterError] = useState('');

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

  const validatePhone = (phone) => {
    const phoneRegex = /^(\+84|84|0)?[3|5|7|8|9][0-9]{8}$/;
    return phoneRegex.test(phone.replace(/\s/g, ''));
  };

  const validatePassword = (password) => {
    return password.length >= 6;
  };

  const validateFullName = (name) => {
    return name.trim().length >= 2;
  };

  // Validate form
  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName) {
      newErrors.fullName = 'Họ và tên không được để trống';
    } else if (!validateFullName(formData.fullName)) {
      newErrors.fullName = 'Họ và tên phải có ít nhất 2 ký tự';
    }

    if (!formData.email) {
      newErrors.email = 'Email không được để trống';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Email không hợp lệ';
    }

    if (!formData.phone) {
      newErrors.phone = 'Số điện thoại không được để trống';
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = 'Số điện thoại không hợp lệ';
    }

    if (!formData.password) {
      newErrors.password = 'Mật khẩu không được để trống';
    } else if (!validatePassword(formData.password)) {
      newErrors.password = 'Mật khẩu phải có ít nhất 6 ký tự';
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Xác nhận mật khẩu không được để trống';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Mật khẩu xác nhận không khớp';
    }

    if (!formData.acceptTerms) {
      newErrors.acceptTerms = 'Bạn phải đồng ý với điều khoản sử dụng';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setRegisterError('');

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Mock successful registration
      // Store user info (in real app, this would be handled by backend)
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('userInfo', JSON.stringify({
        name: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        avatar: null,
        registeredAt: new Date().toISOString()
      }));

      // Redirect to home page
      navigate('/');
      
      // Show success message
      alert('Đăng ký thành công! Chào mừng bạn đến với Sweet Bakery.');
    } catch (error) {
      setRegisterError('Có lỗi xảy ra khi đăng ký. Vui lòng thử lại.');
    } finally {
      setIsLoading(false);
    }
  };

  // Handle social register
  const handleSocialRegister = (provider) => {
    alert(`Đăng ký bằng ${provider} sẽ được tích hợp trong phiên bản tiếp theo!`);
  };

  // Get password strength
  const getPasswordStrength = (password) => {
    if (password.length === 0) return { strength: 0, text: '', color: '' };
    if (password.length < 4) return { strength: 25, text: 'Yếu', color: 'danger' };
    if (password.length < 6) return { strength: 50, text: 'Trung bình', color: 'warning' };
    if (password.length < 8) return { strength: 75, text: 'Mạnh', color: 'info' };
    return { strength: 100, text: 'Rất mạnh', color: 'success' };
  };

  const passwordStrength = getPasswordStrength(formData.password);

  return (
    <div className="register-page" style={{ 
      background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      paddingTop: '2rem',
      paddingBottom: '2rem'
    }}>
      <Container>
        <Row className="justify-content-center">
          <Col md={8} lg={6} xl={5}>
            <Card className="shadow-lg border-0" style={{ borderRadius: '20px', overflow: 'hidden' }}>
              {/* Header */}
              <div className="register-header text-white text-center py-4">
                <div className="mb-3">
                  <BiCake size={50} />
                </div>
                <h3 className="mb-1">Đăng Ký Tài Khoản</h3>
                <p className="mb-0 opacity-75">Tham gia cùng Sweet Bakery!</p>
              </div>

              <Card.Body className="p-4">
                {/* Register Error Alert */}
                {registerError && (
                  <Alert variant="danger" className="text-center">
                    <small>{registerError}</small>
                  </Alert>
                )}

                {/* Register Form */}
                <Form onSubmit={handleSubmit}>
                  {/* Full Name Input */}
                  <Form.Group className="mb-3">
                    <InputGroup>
                      <InputGroup.Text>
                        <FaUser className="text-muted" />
                      </InputGroup.Text>
                      <Form.Control
                        type="text"
                        name="fullName"
                        placeholder="Nhập họ và tên đầy đủ"
                        value={formData.fullName}
                        onChange={handleChange}
                        isInvalid={!!errors.fullName}
                        style={{ borderRadius: '0 10px 10px 0' }}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.fullName}
                      </Form.Control.Feedback>
                    </InputGroup>
                  </Form.Group>

                  {/* Email Input */}
                  <Form.Group className="mb-3">
                    <InputGroup>
                      <InputGroup.Text>
                        <FaEnvelope className="text-muted" />
                      </InputGroup.Text>
                      <Form.Control
                        type="email"
                        name="email"
                        placeholder="Nhập địa chỉ email"
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

                  {/* Phone Input */}
                  <Form.Group className="mb-3">
                    <InputGroup>
                      <InputGroup.Text>
                        <FaPhone className="text-muted" />
                      </InputGroup.Text>
                      <Form.Control
                        type="tel"
                        name="phone"
                        placeholder="Nhập số điện thoại"
                        value={formData.phone}
                        onChange={handleChange}
                        isInvalid={!!errors.phone}
                        style={{ borderRadius: '0 10px 10px 0' }}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.phone}
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
                    
                    {/* Password Strength Indicator */}
                    {formData.password && (
                      <div className="mt-2">
                        <div className="d-flex justify-content-between align-items-center mb-1">
                          <small className="text-muted">Độ mạnh mật khẩu:</small>
                          <small className={`text-${passwordStrength.color}`}>
                            {passwordStrength.text}
                          </small>
                        </div>
                        <div className="progress" style={{ height: '4px' }}>
                          <div 
                            className={`progress-bar bg-${passwordStrength.color}`}
                            style={{ width: `${passwordStrength.strength}%` }}
                          ></div>
                        </div>
                      </div>
                    )}
                  </Form.Group>

                  {/* Confirm Password Input */}
                  <Form.Group className="mb-3">
                    <InputGroup>
                      <InputGroup.Text>
                        <FaLock className="text-muted" />
                      </InputGroup.Text>
                      <Form.Control
                        type={showConfirmPassword ? 'text' : 'password'}
                        name="confirmPassword"
                        placeholder="Xác nhận mật khẩu"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        isInvalid={!!errors.confirmPassword}
                        style={{ borderRadius: '0' }}
                      />
                      <Button
                        variant="outline-secondary"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        style={{ borderRadius: '0 10px 10px 0', borderLeft: 'none' }}
                      >
                        {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                      </Button>
                      <Form.Control.Feedback type="invalid">
                        {errors.confirmPassword}
                      </Form.Control.Feedback>
                    </InputGroup>
                    
                    {/* Password Match Indicator */}
                    {formData.confirmPassword && (
                      <div className="mt-1">
                        {formData.password === formData.confirmPassword ? (
                          <small className="text-success">
                            <FaCheck className="me-1" />
                            Mật khẩu khớp
                          </small>
                        ) : (
                          <small className="text-danger">
                            <FaExclamationTriangle className="me-1" />
                            Mật khẩu không khớp
                          </small>
                        )}
                      </div>
                    )}
                  </Form.Group>

                  {/* Terms & Newsletter */}
                  <div className="mb-4">
                    <Form.Check
                      type="checkbox"
                      name="acceptTerms"
                      checked={formData.acceptTerms}
                      onChange={handleChange}
                      isInvalid={!!errors.acceptTerms}
                      className="mb-2"
                      label={
                        <span className="small">
                          Tôi đồng ý với{' '}
                          <Link to="/terms" className="text-decoration-none">
                            điều khoản sử dụng
                          </Link>{' '}
                          và{' '}
                          <Link to="/privacy" className="text-decoration-none">
                            chính sách bảo mật
                          </Link>
                        </span>
                      }
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.acceptTerms}
                    </Form.Control.Feedback>

                    <Form.Check
                      type="checkbox"
                      name="receiveNewsletters"
                      checked={formData.receiveNewsletters}
                      onChange={handleChange}
                      className="small"
                      label="Nhận thông báo về khuyến mãi và sản phẩm mới qua email"
                    />
                  </div>

                  {/* Register Button */}
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
                          Đang xử lý...
                        </>
                      ) : (
                        <>
                          <FaUserPlus className="me-2" />
                          Đăng Ký Tài Khoản
                        </>
                      )}
                    </Button>
                  </div>
                </Form>

                {/* Divider */}
                <div className="text-center mb-4">
                  <div className="d-flex align-items-center">
                    <hr className="flex-grow-1" />
                    <span className="px-3 text-muted small">Hoặc đăng ký bằng</span>
                    <hr className="flex-grow-1" />
                  </div>
                </div>

                {/* Social Register */}
                <div className="d-flex gap-2 mb-4">
                  <Button
                    variant="outline-danger"
                    className="flex-grow-1"
                    onClick={() => handleSocialRegister('Google')}
                    style={{ borderRadius: '15px' }}
                  >
                    <FaGoogle />
                  </Button>
                  <Button
                    variant="outline-primary"
                    className="flex-grow-1"
                    onClick={() => handleSocialRegister('Facebook')}
                    style={{ borderRadius: '15px' }}
                  >
                    <FaFacebook />
                  </Button>
                  <Button
                    variant="outline-dark"
                    className="flex-grow-1"
                    onClick={() => handleSocialRegister('Apple')}
                    style={{ borderRadius: '15px' }}
                  >
                    <FaApple />
                  </Button>
                </div>

                {/* Login Link */}
                <div className="text-center">
                  <p className="text-muted small mb-2">
                    Đã có tài khoản?{' '}
                    <Link to="/login" className="text-decoration-none fw-bold">
                      Đăng nhập ngay
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
                  Thông tin của bạn được bảo mật tuyệt đối
                </small>
              </div>
            </Card>
          </Col>
        </Row>

        {/* Benefits */}
        <Row className="justify-content-center mt-4">
          <Col md={10} lg={8}>
            <div className="text-center text-dark">
              <h5 className="mb-3">Lợi ích khi đăng ký tài khoản</h5>
              <Row className="g-3">
                <Col md={3}>
                  <div className="text-center">
                    <div className="bg-primary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-2 text-primary" 
                         style={{ width: '60px', height: '60px' }}>
                      <FaUser size={24} />
                    </div>
                    <h6>Quản lý đơn hàng</h6>
                    <small className="text-muted">Theo dõi lịch sử và trạng thái đơn hàng</small>
                  </div>
                </Col>
                <Col md={3}>
                  <div className="text-center">
                    <div className="bg-primary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-2 text-primary" 
                         style={{ width: '60px', height: '60px' }}>
                      <BiCake size={24} />
                    </div>
                    <h6>Ưu đãi đặc biệt</h6>
                    <small className="text-muted">Nhận khuyến mãi và điểm tích lũy</small>
                  </div>
                </Col>
                <Col md={3}>
                  <div className="text-center">
                    <div className="bg-primary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-2 text-primary" 
                         style={{ width: '60px', height: '60px' }}>
                      <FaShieldAlt size={24} />
                    </div>
                    <h6>Bảo mật cao</h6>
                    <small className="text-muted">Thông tin được mã hóa an toàn</small>
                  </div>
                </Col>
                <Col md={3}>
                  <div className="text-center">
                    <div className="bg-primary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-2 text-primary" 
                         style={{ width: '60px', height: '60px' }}>
                      <FaEnvelope size={24} />
                    </div>
                    <h6>Thông báo nhanh</h6>
                    <small className="text-muted">Cập nhật sản phẩm mới qua email</small>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>

      <style jsx>{`
        .register-page {
          position: relative;
        }
        
        .register-page::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="cake" patternUnits="userSpaceOnUse" width="100" height="100"><circle cx="50" cy="50" r="3" fill="white" opacity="0.1"/></pattern></defs><rect width="100" height="100" fill="url(%23cake)"/></svg>');
          pointer-events: none;
        }
        
        .register-header {
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
        
        .progress {
          border-radius: 2px;
        }
        
        .progress-bar {
          transition: width 0.3s ease;
        }
        
        @media (max-width: 768px) {
          .register-page {
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

export default Register;