import React, { useState, useMemo } from 'react';
import { Container, Row, Col, Card, Button, Form, Alert, Badge } from 'react-bootstrap';
import { 
  FaShoppingCart,
  FaTrash,
  FaPlus,
  FaMinus,
  FaArrowLeft,
  FaCheck,
  FaPhone,
  FaMapMarkerAlt,
  FaCreditCard,
  FaMoneyBillWave,
  FaTag,
  FaGift
} from 'react-icons/fa';
import { BiCake } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import EmptyState from '../../components/ui/EmptyState';

const Cart = () => {
  // Sample cart data - in real app this would come from Redux/Context
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Bánh Kem Dâu Tươi',
      price: 250000,
      originalPrice: 300000,
      image: <BiCake size={60} style={{ color: 'var(--primary-color)' }} />,
      quantity: 2,
      category: 'banh-kem'
    },
    {
      id: 2,
      name: 'Cupcake Chocolate',
      price: 35000,
      originalPrice: null,
      image: <BiCake size={60} style={{ color: 'var(--accent-color)' }} />,
      quantity: 4,
      category: 'cupcake'
    },
    {
      id: 4,
      name: 'Cookies Bơ',
      price: 120000,
      originalPrice: null,
      image: <BiCake size={60} style={{ color: 'var(--primary-color)' }} />,
      quantity: 1,
      category: 'cookies'
    }
  ]);

  const [couponCode, setCouponCode] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState(null);
  const [deliveryMethod, setDeliveryMethod] = useState('delivery'); // 'delivery' or 'pickup'

  // Calculate totals
  const calculations = useMemo(() => {
    const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const deliveryFee = deliveryMethod === 'delivery' ? 30000 : 0;
    const discount = appliedCoupon ? Math.min(subtotal * 0.1, 50000) : 0; // 10% max 50k
    const total = subtotal + deliveryFee - discount;

    return {
      subtotal,
      deliveryFee,
      discount,
      total,
      itemCount: cartItems.reduce((sum, item) => sum + item.quantity, 0)
    };
  }, [cartItems, deliveryMethod, appliedCoupon]);

  // Handle quantity changes
  const updateQuantity = (id, newQuantity) => {
    if (newQuantity <= 0) {
      removeItem(id);
      return;
    }
    setCartItems(prev => 
      prev.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const clearCart = () => {
    setCartItems([]);
    setAppliedCoupon(null);
    setCouponCode('');
  };

  const applyCoupon = () => {
    // Simple coupon validation
    if (couponCode.toLowerCase() === 'welcome10') {
      setAppliedCoupon({
        code: 'WELCOME10',
        name: 'Giảm 10% cho khách hàng mới',
        discount: 0.1
      });
      setCouponCode('');
    } else {
      alert('Mã giảm giá không hợp lệ!');
    }
  };

  const removeCoupon = () => {
    setAppliedCoupon(null);
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND'
    }).format(amount);
  };

  if (cartItems.length === 0) {
    return (
      <div className="cart-page py-5">
        <Container>
          <Row className="justify-content-center">
            <Col md={6}>
              <EmptyState
                icon={<FaShoppingCart />}
                title="Giỏ Hàng Trống"
                description="Bạn chưa có sản phẩm nào trong giỏ hàng. Hãy khám phá các sản phẩm ngon lành của chúng tôi!"
                actionText={
                  <>
                    <BiCake className="me-2" />
                    Mua Sắm Ngay
                  </>
                }
                actionLink="/products"
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }

  return (
    <div className="cart-page py-5">
      <Container>
        {/* Page Header */}
        <div className="d-flex align-items-center mb-4">
          <Button 
            as={Link} 
            to="/products" 
            variant="outline-secondary" 
            className="me-3"
          >
            <FaArrowLeft />
          </Button>
          <div>
            <h1 className="mb-1">
              <FaShoppingCart className="me-3" style={{ color: 'var(--primary-color)' }} />
              Giỏ Hàng Của Bạn
            </h1>
            <p className="text-muted mb-0">
              {calculations.itemCount} sản phẩm trong giỏ hàng
            </p>
          </div>
        </div>

        <Row>
          {/* Cart Items */}
          <Col lg={8} className="mb-4">
            <Card className="border-0 shadow-sm">
              <Card.Header className="bg-white border-bottom">
                <div className="d-flex justify-content-between align-items-center">
                  <h5 className="mb-0">Sản Phẩm Đã Chọn</h5>
                  <Button 
                    variant="outline-danger" 
                    size="sm"
                    onClick={clearCart}
                  >
                    <FaTrash className="me-1" />
                    Xóa Tất Cả
                  </Button>
                </div>
              </Card.Header>
              <Card.Body className="p-0">
                {cartItems.map((item, index) => (
                  <div key={item.id} className={`cart-item p-4 ${index < cartItems.length - 1 ? 'border-bottom' : ''}`}>
                    <Row className="align-items-center">
                      {/* Mobile Layout */}
                      <div className="d-block d-md-none">
                        <Row className="align-items-center">
                          <Col xs={3} className="text-center">
                            <div className="product-image-container">
                              {item.image}
                            </div>
                          </Col>
                          <Col xs={9}>
                            <div className="d-flex justify-content-between align-items-start">
                              <div>
                                <h6 className="mb-1 fw-bold">{item.name}</h6>
                                <div className="price-container">
                                  <span className="current-price fw-bold text-primary fs-6">
                                    {formatCurrency(item.price)}
                                  </span>
                                  {item.originalPrice && (
                                    <span className="original-price text-muted text-decoration-line-through ms-2 small">
                                      {formatCurrency(item.originalPrice)}
                                    </span>
                                  )}
                                </div>
                              </div>
                              <Button 
                                variant="outline-danger" 
                                size="sm"
                                onClick={() => removeItem(item.id)}
                              >
                                <FaTrash />
                              </Button>
                            </div>
                          </Col>
                        </Row>
                        <Row className="mt-3">
                          <Col xs={6}>
                            <div className="quantity-controls d-flex align-items-center justify-content-center">
                              <Button 
                                variant="outline-secondary" 
                                size="sm"
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                className="quantity-btn"
                              >
                                <FaMinus />
                              </Button>
                              <span className="quantity-display mx-3 fw-bold">
                                {item.quantity}
                              </span>
                              <Button 
                                variant="outline-secondary" 
                                size="sm"
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="quantity-btn"
                              >
                                <FaPlus />
                              </Button>
                            </div>
                          </Col>
                          <Col xs={6} className="text-center">
                            <div className="item-total fw-bold text-primary">
                              {formatCurrency(item.price * item.quantity)}
                            </div>
                            <small className="text-muted">Tổng tiền</small>
                          </Col>
                        </Row>
                      </div>

                      {/* Desktop Layout */}
                      <div className="d-none d-md-block">
                        <Row className="align-items-center">
                          {/* Product Image */}
                          <Col md={2} className="text-center">
                            <div className="product-image-container">
                              {item.image}
                            </div>
                          </Col>

                          {/* Product Info */}
                          <Col md={4}>
                            <h6 className="mb-1 fw-bold">{item.name}</h6>
                            <div className="price-container">
                              <span className="current-price fw-bold text-primary">
                                {formatCurrency(item.price)}
                              </span>
                              {item.originalPrice && (
                                <span className="original-price text-muted text-decoration-line-through ms-2">
                                  {formatCurrency(item.originalPrice)}
                                </span>
                              )}
                            </div>
                          </Col>

                          {/* Quantity Controls */}
                          <Col md={3}>
                            <div className="quantity-controls d-flex align-items-center">
                              <Button 
                                variant="outline-secondary" 
                                size="sm"
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                className="quantity-btn"
                              >
                                <FaMinus />
                              </Button>
                              <span className="quantity-display mx-3 fw-bold">
                                {item.quantity}
                              </span>
                              <Button 
                                variant="outline-secondary" 
                                size="sm"
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="quantity-btn"
                              >
                                <FaPlus />
                              </Button>
                            </div>
                          </Col>

                          {/* Total Price & Remove */}
                          <Col md={3} className="text-end">
                            <div className="item-total fw-bold mb-2">
                              {formatCurrency(item.price * item.quantity)}
                            </div>
                            <Button 
                              variant="outline-danger" 
                              size="sm"
                              onClick={() => removeItem(item.id)}
                            >
                              <FaTrash />
                            </Button>
                          </Col>
                        </Row>
                      </div>
                    </Row>
                  </div>
                ))}
              </Card.Body>
            </Card>
          </Col>

          {/* Order Summary */}
          <Col lg={4}>
            <Card className="border-0 shadow-sm sticky-top" style={{ top: '2rem' }}>
              <Card.Header className="bg-primary text-white">
                <h5 className="mb-0">
                  <FaCheck className="me-2" />
                  Tóm Tắt Đơn Hàng
                </h5>
              </Card.Header>
              <Card.Body>
                {/* Delivery Method */}
                <div className="mb-4">
                  <h6 className="mb-3">Phương Thức Nhận Hàng</h6>
                  <Form.Check
                    type="radio"
                    id="delivery"
                    name="deliveryMethod"
                    label={
                      <span>
                        <FaMapMarkerAlt className="me-2" />
                        Giao hàng tận nơi (+30.000đ)
                      </span>
                    }
                    checked={deliveryMethod === 'delivery'}
                    onChange={(e) => setDeliveryMethod('delivery')}
                    className="mb-2"
                  />
                  <Form.Check
                    type="radio"
                    id="pickup"
                    name="deliveryMethod"
                    label={
                      <span>
                        <FaShoppingCart className="me-2" />
                        Nhận tại cửa hàng (Miễn phí)
                      </span>
                    }
                    checked={deliveryMethod === 'pickup'}
                    onChange={(e) => setDeliveryMethod('pickup')}
                  />
                </div>

                {/* Coupon Code */}
                <div className="mb-4">
                  <h6 className="mb-3">
                    <FaTag className="me-2" />
                    Mã Giảm Giá
                  </h6>
                  {appliedCoupon ? (
                    <Alert variant="success" className="d-flex justify-content-between align-items-center">
                      <span>
                        <FaGift className="me-2" />
                        {appliedCoupon.name}
                      </span>
                      <Button 
                        variant="outline-success" 
                        size="sm"
                        onClick={removeCoupon}
                      >
                        ×
                      </Button>
                    </Alert>
                  ) : (
                    <div className="d-flex gap-2">
                      <Form.Control
                        type="text"
                        placeholder="Nhập mã giảm giá"
                        value={couponCode}
                        onChange={(e) => setCouponCode(e.target.value)}
                      />
                      <Button 
                        variant="outline-primary"
                        onClick={applyCoupon}
                        disabled={!couponCode.trim()}
                      >
                        Áp Dụng
                      </Button>
                    </div>
                  )}
                  <small className="text-muted">
                    Thử mã: <code>WELCOME10</code>
                  </small>
                </div>

                {/* Price Breakdown */}
                <div className="price-breakdown">
                  <div className="d-flex justify-content-between mb-2">
                    <span>Tạm tính:</span>
                    <span>{formatCurrency(calculations.subtotal)}</span>
                  </div>
                  
                  {deliveryMethod === 'delivery' && (
                    <div className="d-flex justify-content-between mb-2">
                      <span>Phí giao hàng:</span>
                      <span>{formatCurrency(calculations.deliveryFee)}</span>
                    </div>
                  )}
                  
                  {appliedCoupon && (
                    <div className="d-flex justify-content-between mb-2 text-success">
                      <span>Giảm giá:</span>
                      <span>-{formatCurrency(calculations.discount)}</span>
                    </div>
                  )}
                  
                  <hr />
                  <div className="d-flex justify-content-between mb-3">
                    <strong>Tổng cộng:</strong>
                    <strong className="text-primary fs-5">
                      {formatCurrency(calculations.total)}
                    </strong>
                  </div>
                </div>

                {/* Checkout Buttons */}
                <div className="d-grid gap-2">
                  <Button 
                    variant="primary" 
                    size="lg"
                    className="fw-bold"
                  >
                    <FaCreditCard className="me-2" />
                    Thanh Toán Online
                  </Button>
                  <Button 
                    variant="outline-primary" 
                    size="lg"
                  >
                    <FaMoneyBillWave className="me-2" />
                    Thanh Toán Khi Nhận Hàng
                  </Button>
                </div>

                {/* Contact Info */}
                <div className="text-center mt-4 pt-3 border-top">
                  <small className="text-muted">
                    Cần hỗ trợ? Gọi ngay: 
                    <Button 
                      variant="link" 
                      size="sm" 
                      href="tel:0123456789"
                      className="p-0 ms-1"
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
      </Container>

      <style jsx>{`
        .cart-item {
          transition: all 0.3s ease;
        }
        
        .cart-item:hover {
          background-color: rgba(0,0,0,0.02);
        }
        
        .product-image-container {
          padding: 1rem;
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
          border-radius: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .quantity-controls {
          background: #f8f9fa;
          border-radius: 25px;
          padding: 0.5rem;
          display: inline-flex;
          align-items: center;
        }
        
        .quantity-btn {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          border: none;
          transition: all 0.3s ease;
        }
        
        .quantity-btn:hover {
          transform: scale(1.1);
          background-color: var(--primary-color);
          color: white;
        }
        
        .quantity-display {
          min-width: 30px;
          text-align: center;
          font-size: 1.1rem;
        }
        
        .price-breakdown {
          font-size: 0.95rem;
        }
        
        .sticky-top {
          position: sticky;
          z-index: 1020;
        }
        
        @media (max-width: 768px) {
          .quantity-controls {
            justify-content: center;
            margin-bottom: 1rem;
          }
          
          .item-total {
            text-align: center !important;
          }
          
          .sticky-top {
            position: relative;
          }
        }
        
        .btn-primary {
          background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
          border: none;
          border-radius: 25px;
          transition: all 0.3s ease;
        }
        
        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0,0,0,0.15);
        }
        
        .btn-outline-primary {
          border-radius: 25px;
          transition: all 0.3s ease;
        }
        
        .btn-outline-primary:hover {
          transform: translateY(-2px);
        }
      `}</style>
    </div>
  );
};

export default Cart;