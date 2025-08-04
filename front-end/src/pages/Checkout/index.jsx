import React, { useState, useMemo } from 'react';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import { 
  FaArrowLeft,
  FaCheck,
  FaPhone,
  FaMapMarkerAlt,
  FaCreditCard,
  FaMoneyBillWave,
  FaTruck,
  FaUser,
  FaHome,
  FaLock
} from 'react-icons/fa';
import { BiCake } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const Checkout = () => {
  // Sample cart data - in real app this would come from Redux/Context
  const cartItems = useMemo(() => [
    {
      id: 1,
      name: 'Bánh Kem Dâu Tươi',
      price: 250000,
      originalPrice: 300000,
      image: <BiCake size={40} style={{ color: 'var(--primary-color)' }} />,
      quantity: 2,
      category: 'banh-kem'
    },
    {
      id: 2,
      name: 'Cupcake Chocolate',
      price: 35000,
      originalPrice: null,
      image: <BiCake size={40} style={{ color: 'var(--accent-color)' }} />,
      quantity: 4,
      category: 'cupcake'
    },
    {
      id: 4,
      name: 'Cookies Bơ',
      price: 120000,
      originalPrice: null,
      image: <BiCake size={40} style={{ color: 'var(--primary-color)' }} />,
      quantity: 1,
      category: 'cookies'
    }
  ], []);

  // Customer Information Form
  const [customerInfo, setCustomerInfo] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    ward: '',
    district: '',
    city: '',
    notes: ''
  });

  // Delivery and Payment Options
  const [deliveryMethod, setDeliveryMethod] = useState('standard'); // 'standard', 'express', 'pickup'
  const [paymentMethod, setPaymentMethod] = useState('cod'); // 'cod', 'bank', 'momo', 'vnpay'
  
  // Form validation
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Calculate totals
  const calculations = useMemo(() => {
    const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    
    // Delivery fees based on method
    let deliveryFee = 0;
    if (deliveryMethod === 'standard') deliveryFee = 30000;
    else if (deliveryMethod === 'express') deliveryFee = 50000;
    else if (deliveryMethod === 'pickup') deliveryFee = 0;

    const total = subtotal + deliveryFee;

    return {
      subtotal,
      deliveryFee,
      total,
      itemCount
    };
  }, [cartItems, deliveryMethod]);

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND'
    }).format(amount);
  };

  const handleInputChange = (field, value) => {
    setCustomerInfo(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!customerInfo.fullName.trim()) newErrors.fullName = 'Vui lòng nhập họ tên';
    if (!customerInfo.phone.trim()) newErrors.phone = 'Vui lòng nhập số điện thoại';
    else if (!/^[0-9]{10,11}$/.test(customerInfo.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Số điện thoại không hợp lệ';
    }
    if (!customerInfo.email.trim()) newErrors.email = 'Vui lòng nhập email';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(customerInfo.email)) {
      newErrors.email = 'Email không hợp lệ';
    }
    
    if (deliveryMethod !== 'pickup') {
      if (!customerInfo.address.trim()) newErrors.address = 'Vui lòng nhập địa chỉ';
      if (!customerInfo.ward.trim()) newErrors.ward = 'Vui lòng nhập phường/xã';
      if (!customerInfo.district.trim()) newErrors.district = 'Vui lòng nhập quận/huyện';
      if (!customerInfo.city.trim()) newErrors.city = 'Vui lòng nhập tỉnh/thành phố';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // TODO: Process order
      console.log('Order Data:', {
        customerInfo,
        cartItems,
        deliveryMethod,
        paymentMethod,
        calculations
      });

      alert('Đặt hàng thành công! Chúng tôi sẽ liên hệ với bạn sớm nhất.');
      
    } catch (error) {
      alert('Có lỗi xảy ra. Vui lòng thử lại.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const deliveryOptions = [
    {
      id: 'standard',
      name: 'Giao hàng tiêu chuẩn',
      description: '3-5 ngày làm việc',
      price: 30000,
      icon: <FaTruck />
    },
    {
      id: 'express',
      name: 'Giao hàng nhanh',
      description: '1-2 ngày làm việc',
      price: 50000,
      icon: <FaTruck style={{ color: 'red' }} />
    },
    {
      id: 'pickup',
      name: 'Nhận tại cửa hàng',
      description: 'Miễn phí - Có thể nhận ngay',
      price: 0,
      icon: <FaHome />
    }
  ];

  const paymentOptions = [
    {
      id: 'cod',
      name: 'Thanh toán khi nhận hàng',
      description: 'Thanh toán bằng tiền mặt khi nhận hàng',
      icon: <FaMoneyBillWave />
    },
    {
      id: 'bank',
      name: 'Chuyển khoản ngân hàng',
      description: 'Chuyển khoản qua số tài khoản',
      icon: <FaCreditCard />
    },
    {
      id: 'momo',
      name: 'Ví MoMo',
      description: 'Thanh toán qua ví điện tử MoMo',
      icon: <FaCreditCard style={{ color: '#D82D8B' }} />
    },
    {
      id: 'vnpay',
      name: 'VNPay',
      description: 'Thanh toán qua cổng VNPay',
      icon: <FaCreditCard style={{ color: '#1E88E5' }} />
    }
  ];

  return (
    <div className="checkout-page py-5">
      <Container>
        {/* Page Header */}
        <div className="d-flex align-items-center mb-4">
          <Button 
            as={Link} 
            to="/cart" 
            variant="outline-secondary" 
            className="me-3"
          >
            <FaArrowLeft />
          </Button>
          <div>
            <h1 className="mb-1">
              <FaLock className="me-3" style={{ color: 'var(--primary-color)' }} />
              Thanh Toán
            </h1>
            <p className="text-muted mb-0">
              Hoàn tất đặt hàng của bạn
            </p>
          </div>
        </div>

        <Form onSubmit={handleSubmit}>
          <Row>
            {/* Left Column - Customer Information */}
            <Col lg={8} className="mb-4">
              {/* Customer Information */}
              <Card className="border-0 shadow-sm mb-4">
                <Card.Header className="bg-white border-bottom">
                  <h5 className="mb-0">
                    <FaUser className="me-2" />
                    Thông Tin Khách Hàng
                  </h5>
                </Card.Header>
                <Card.Body>
                  <Row>
                    <Col md={6} className="mb-3">
                      <Form.Label>Họ và tên *</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Nhập họ và tên"
                        value={customerInfo.fullName}
                        onChange={(e) => handleInputChange('fullName', e.target.value)}
                        isInvalid={!!errors.fullName}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.fullName}
                      </Form.Control.Feedback>
                    </Col>
                    <Col md={6} className="mb-3">
                      <Form.Label>Số điện thoại *</Form.Label>
                      <Form.Control
                        type="tel"
                        placeholder="Nhập số điện thoại"
                        value={customerInfo.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        isInvalid={!!errors.phone}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.phone}
                      </Form.Control.Feedback>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="mb-3">
                      <Form.Label>Email *</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Nhập địa chỉ email"
                        value={customerInfo.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        isInvalid={!!errors.email}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.email}
                      </Form.Control.Feedback>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>

              {/* Delivery Method */}
              <Card className="border-0 shadow-sm mb-4">
                <Card.Header className="bg-white border-bottom">
                  <h5 className="mb-0">
                    <FaTruck className="me-2" />
                    Phương Thức Giao Hàng
                  </h5>
                </Card.Header>
                <Card.Body>
                  {deliveryOptions.map(option => (
                    <Form.Check
                      key={option.id}
                      type="radio"
                      id={`delivery-${option.id}`}
                      name="deliveryMethod"
                      checked={deliveryMethod === option.id}
                      onChange={() => setDeliveryMethod(option.id)}
                      className="mb-3"
                      label={
                        <div className="d-flex justify-content-between align-items-center w-100">
                          <div className="d-flex align-items-center">
                            <span className="me-3">{option.icon}</span>
                            <div>
                              <div className="fw-semibold">{option.name}</div>
                              <small className="text-muted">{option.description}</small>
                            </div>
                          </div>
                          <div className="fw-bold text-primary">
                            {option.price === 0 ? 'Miễn phí' : formatCurrency(option.price)}
                          </div>
                        </div>
                      }
                    />
                  ))}
                </Card.Body>
              </Card>

              {/* Delivery Address */}
              {deliveryMethod !== 'pickup' && (
                <Card className="border-0 shadow-sm mb-4">
                  <Card.Header className="bg-white border-bottom">
                    <h5 className="mb-0">
                      <FaMapMarkerAlt className="me-2" />
                      Địa Chỉ Nhận Hàng
                    </h5>
                  </Card.Header>
                  <Card.Body>
                    <Row>
                      <Col className="mb-3">
                        <Form.Label>Địa chỉ cụ thể *</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Số nhà, tên đường..."
                          value={customerInfo.address}
                          onChange={(e) => handleInputChange('address', e.target.value)}
                          isInvalid={!!errors.address}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.address}
                        </Form.Control.Feedback>
                      </Col>
                    </Row>
                    <Row>
                      <Col md={4} className="mb-3">
                        <Form.Label>Phường/Xã *</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Phường/Xã"
                          value={customerInfo.ward}
                          onChange={(e) => handleInputChange('ward', e.target.value)}
                          isInvalid={!!errors.ward}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.ward}
                        </Form.Control.Feedback>
                      </Col>
                      <Col md={4} className="mb-3">
                        <Form.Label>Quận/Huyện *</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Quận/Huyện"
                          value={customerInfo.district}
                          onChange={(e) => handleInputChange('district', e.target.value)}
                          isInvalid={!!errors.district}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.district}
                        </Form.Control.Feedback>
                      </Col>
                      <Col md={4} className="mb-3">
                        <Form.Label>Tỉnh/Thành phố *</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Tỉnh/Thành phố"
                          value={customerInfo.city}
                          onChange={(e) => handleInputChange('city', e.target.value)}
                          isInvalid={!!errors.city}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.city}
                        </Form.Control.Feedback>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="mb-3">
                        <Form.Label>Ghi chú (tùy chọn)</Form.Label>
                        <Form.Control
                          as="textarea"
                          rows={3}
                          placeholder="Ghi chú thêm cho đơn hàng..."
                          value={customerInfo.notes}
                          onChange={(e) => handleInputChange('notes', e.target.value)}
                        />
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              )}

              {/* Payment Method */}
              <Card className="border-0 shadow-sm mb-4">
                <Card.Header className="bg-white border-bottom">
                  <h5 className="mb-0">
                    <FaCreditCard className="me-2" />
                    Phương Thức Thanh Toán
                  </h5>
                </Card.Header>
                <Card.Body>
                  {paymentOptions.map(option => (
                    <Form.Check
                      key={option.id}
                      type="radio"
                      id={`payment-${option.id}`}
                      name="paymentMethod"
                      checked={paymentMethod === option.id}
                      onChange={() => setPaymentMethod(option.id)}
                      className="mb-3"
                      label={
                        <div className="d-flex align-items-center">
                          <span className="me-3">{option.icon}</span>
                          <div>
                            <div className="fw-semibold">{option.name}</div>
                            <small className="text-muted">{option.description}</small>
                          </div>
                        </div>
                      }
                    />
                  ))}
                </Card.Body>
              </Card>
            </Col>

            {/* Right Column - Order Summary */}
            <Col lg={4}>
              <Card className="border-0 shadow-sm">
                <Card.Header className="bg-primary text-white">
                  <h5 className="mb-0">
                    <FaCheck className="me-2" />
                    Tóm Tắt Đơn Hàng
                  </h5>
                </Card.Header>
                <Card.Body>
                  {/* Cart Items */}
                  <div className="mb-4">
                    {cartItems.map(item => (
                      <div key={item.id} className="d-flex align-items-center mb-3 pb-3 border-bottom">
                        <div className="me-3">
                          {item.image}
                        </div>
                        <div className="flex-grow-1">
                          <h6 className="mb-1 fw-bold">{item.name}</h6>
                          <small className="text-muted">Số lượng: {item.quantity}</small>
                          <div className="fw-semibold text-primary">
                            {formatCurrency(item.price * item.quantity)}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Price Breakdown */}
                  <div className="price-breakdown mb-4">
                    <div className="d-flex justify-content-between mb-2">
                      <span>Tạm tính ({calculations.itemCount} sản phẩm):</span>
                      <span className="fw-semibold">{formatCurrency(calculations.subtotal)}</span>
                    </div>
                    
                    <div className="d-flex justify-content-between mb-2">
                      <span>Phí vận chuyển:</span>
                      <span className="fw-semibold">
                        {calculations.deliveryFee === 0 ? 'Miễn phí' : formatCurrency(calculations.deliveryFee)}
                      </span>
                    </div>
                    
                    <hr />
                    
                    <div className="d-flex justify-content-between mb-4">
                      <strong className="fs-5">Tổng cộng:</strong>
                      <strong className="text-primary fs-4">
                        {formatCurrency(calculations.total)}
                      </strong>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="d-grid mb-3">
                    <Button 
                      type="submit"
                      variant="primary" 
                      size="lg"
                      className="fw-bold py-3"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <span className="spinner-border spinner-border-sm me-2" />
                          Đang xử lý...
                        </>
                      ) : (
                        <>
                          <FaCheck className="me-2" />
                          Hoàn Tất Đặt Hàng
                        </>
                      )}
                    </Button>
                  </div>

                  {/* Security Info */}
                  <div className="text-center">
                    <small className="text-muted">
                      <FaLock className="me-1" />
                      Thông tin của bạn được bảo mật
                    </small>
                  </div>

                  {/* Contact Info */}
                  <div className="text-center mt-4 pt-3 border-top">
                    <small className="text-muted">
                      Cần hỗ trợ? Gọi ngay: 
                      <Button 
                        variant="link" 
                        size="sm" 
                        href="tel:0123456789"
                        className="p-0 ms-1 fw-semibold"
                      >
                        <FaPhone className="me-1" />
                        0123.456.789
                      </Button>
                    </small>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Form>
      </Container>

      <style jsx>{`
        .checkout-page {
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
          min-height: 100vh;
        }
        
        .form-check-input:checked {
          background-color: var(--primary-color);
          border-color: var(--primary-color);
        }
        
        .form-check-label {
          cursor: pointer;
          width: 100%;
        }
        
        .btn-primary {
          background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
          border: none;
          border-radius: 25px;
          transition: all 0.3s ease;
        }
        
        .btn-primary:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0,0,0,0.15);
        }
        
        .btn-outline-secondary {
          border-radius: 25px;
          transition: all 0.3s ease;
        }
        
        .btn-outline-secondary:hover {
          transform: translateY(-2px);
        }
        
        .card {
          border-radius: 15px;
          overflow: hidden;
        }
        
        .form-control, .form-select {
          border-radius: 10px;
          border: 2px solid #e9ecef;
          transition: all 0.3s ease;
        }
        
        .form-control:focus, .form-select:focus {
          border-color: var(--primary-color);
          box-shadow: 0 0 0 0.2rem rgba(var(--primary-color-rgb), 0.25);
        }
      `}</style>
    </div>
  );
};

export default Checkout;