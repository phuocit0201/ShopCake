import React, { useState, useMemo } from 'react';
import { Container, Row, Col, Card, Button, Badge, Form } from 'react-bootstrap';
import { 
  FaShoppingBag,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaCreditCard,
  FaEye,
  FaDownload,
  FaRedo,
  FaShippingFast,
  FaCheck,
  FaClock,
  FaTimes,
  FaSearch,
  FaPhone,
  FaTruck,
  FaBox
} from 'react-icons/fa';
import { BiCake } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const OrderHistory = () => {
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [confirmedOrders, setConfirmedOrders] = useState({});

  // Sample order data
  const orders = useMemo(() => [
    {
      id: 'DH001',
      orderDate: '2024-01-20T10:30:00',
      status: 'delivered',
      total: 750000,
      itemCount: 3,
      deliveryAddress: '123 Nguyễn Văn A, Phường 1, Quận 1, TP.HCM',
      paymentMethod: 'cod',
      deliveryMethod: 'standard',
      estimatedDelivery: '2024-01-23',
      actualDelivery: '2024-01-22T14:20:00',
      trackingNumber: 'VN123456789',
      items: [
        {
          id: 1,
          name: 'Bánh Kem Dâu Tươi',
          price: 250000,
          quantity: 2,
          image: 'https://miacake.vn/wp-content/uploads/IMG_E9532.jpg'
        },
        {
          id: 2,
          name: 'Cupcake Chocolate',
          price: 35000,
          quantity: 4,
          image: 'https://miacake.vn/wp-content/uploads/IMG_E9532.jpg'
        },
        {
          id: 3,
          name: 'Cookies Bơ',
          price: 120000,
          quantity: 1,
          image: 'https://miacake.vn/wp-content/uploads/IMG_E9532.jpg'
        }
      ],
      timeline: [
        { status: 'confirmed', time: '2024-01-20T10:35:00', message: 'Đơn hàng đã được xác nhận' },
        { status: 'preparing', time: '2024-01-20T11:00:00', message: 'Đang chuẩn bị hàng' },
        { status: 'shipping', time: '2024-01-21T08:00:00', message: 'Đơn hàng đang được vận chuyển' },
        { status: 'delivered', time: '2024-01-22T14:20:00', message: 'Đã giao hàng thành công' }
      ]
    },
    {
      id: 'DH002',
      orderDate: '2024-01-18T15:45:00',
      status: 'shipping',
      total: 480000,
      itemCount: 2,
      deliveryAddress: '456 Trần Hưng Đạo, Phường 5, Quận 5, TP.HCM',
      paymentMethod: 'vnpay',
      deliveryMethod: 'express',
      estimatedDelivery: '2024-01-20',
      trackingNumber: 'VN987654321',
      items: [
        {
          id: 4,
          name: 'Bánh Sinh Nhật Vanilla',
          price: 450000,
          quantity: 1,
          image: 'https://miacake.vn/wp-content/uploads/IMG_E9532.jpg'
        },
        {
          id: 5,
          name: 'Donut Glazed',
          price: 38000,
          quantity: 1,
          image: 'https://miacake.vn/wp-content/uploads/IMG_E9532.jpg'
        }
      ],
      timeline: [
        { status: 'confirmed', time: '2024-01-18T15:50:00', message: 'Đơn hàng đã được xác nhận' },
        { status: 'preparing', time: '2024-01-18T16:30:00', message: 'Đang chuẩn bị hàng' },
        { status: 'shipping', time: '2024-01-19T09:15:00', message: 'Đơn hàng đang được vận chuyển' }
      ]
    },
    {
      id: 'DH003',
      orderDate: '2024-01-15T09:20:00',
      status: 'preparing',
      total: 320000,
      itemCount: 4,
      deliveryAddress: '789 Lê Lợi, Phường 3, Quận 3, TP.HCM',
      paymentMethod: 'momo',
      deliveryMethod: 'standard',
      estimatedDelivery: '2024-01-18',
      items: [
        {
          id: 6,
          name: 'Cupcake Vanilla',
          price: 32000,
          quantity: 4,
          image: 'https://miacake.vn/wp-content/uploads/IMG_E9532.jpg'
        },
        {
          id: 7,
          name: 'Bánh Mì Sandwich',
          price: 35000,
          quantity: 4,
          image: 'https://miacake.vn/wp-content/uploads/IMG_E9532.jpg'
        }
      ],
      timeline: [
        { status: 'confirmed', time: '2024-01-15T09:25:00', message: 'Đơn hàng đã được xác nhận' },
        { status: 'preparing', time: '2024-01-15T10:00:00', message: 'Đang chuẩn bị hàng' }
      ]
    },
    {
      id: 'DH004',
      orderDate: '2024-01-10T14:15:00',
      status: 'cancelled',
      total: 180000,
      itemCount: 2,
      deliveryAddress: '321 Võ Văn Tần, Phường 6, Quận 3, TP.HCM',
      paymentMethod: 'cod',
      deliveryMethod: 'standard',
      cancelReason: 'Khách hàng hủy đơn',
      items: [
        {
          id: 8,
          name: 'Cookies Chocolate Chip',
          price: 150000,
          quantity: 1,
          image: 'https://miacake.vn/wp-content/uploads/IMG_E9532.jpg'
        },
        {
          id: 9,
          name: 'Donut Ngọt Ngào',
          price: 40000,
          quantity: 1,
          image: 'https://miacake.vn/wp-content/uploads/IMG_E9532.jpg'
        }
      ],
      timeline: [
        { status: 'confirmed', time: '2024-01-10T14:20:00', message: 'Đơn hàng đã được xác nhận' },
        { status: 'cancelled', time: '2024-01-10T16:30:00', message: 'Đơn hàng đã bị hủy' }
      ]
    }
  ], []);

  const orderStatuses = [
    { value: 'all', label: 'Tất Cả Đơn Hàng', count: orders.length },
    { value: 'preparing', label: 'Đang Chuẩn Bị', count: orders.filter(o => o.status === 'preparing').length },
    { value: 'shipping', label: 'Đang Giao Hàng', count: orders.filter(o => o.status === 'shipping').length },
    { value: 'delivered', label: 'Đã Giao Hàng', count: orders.filter(o => o.status === 'delivered').length },
    { value: 'cancelled', label: 'Đã Hủy', count: orders.filter(o => o.status === 'cancelled').length }
  ];

  // Filter orders
  const filteredOrders = useMemo(() => {
    return orders.filter(order => {
      const matchesStatus = selectedStatus === 'all' || order.status === selectedStatus;
      const matchesSearch = order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           order.items.some(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()));
      return matchesStatus && matchesSearch;
    });
  }, [orders, selectedStatus, searchTerm]);

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND'
    }).format(amount);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('vi-VN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getStatusColor = (status) => {
    const colors = {
      preparing: 'warning',
      shipping: 'info',
      delivered: 'success',
      cancelled: 'danger'
    };
    return colors[status] || 'secondary';
  };

  const getStatusIcon = (status) => {
    const icons = {
      preparing: <FaClock />,
      shipping: <FaTruck />,
      delivered: <FaCheck />,
      cancelled: <FaTimes />
    };
    return icons[status] || <FaBox />;
  };

  const getStatusText = (status) => {
    const texts = {
      preparing: 'Đang Chuẩn Bị',
      shipping: 'Đang Giao Hàng',
      delivered: 'Đã Giao Hàng',
      cancelled: 'Đã Hủy'
    };
    return texts[status] || status;
  };

  const getPaymentMethodText = (method) => {
    const methods = {
      cod: 'Thanh toán khi nhận hàng',
      vnpay: 'VNPay',
      momo: 'Ví MoMo',
      bank: 'Chuyển khoản ngân hàng'
    };
    return methods[method] || method;
  };



  const handleReorder = (order) => {
    console.log('Reorder:', order.id);
    alert(`Đặt lại đơn hàng ${order.id}. Sản phẩm đã được thêm vào giỏ hàng!`);
  };

  const handleConfirmReceived = (orderId) => {
    setConfirmedOrders((prev) => ({ ...prev, [orderId]: true }));
    alert(`Xác nhận đã nhận hàng cho đơn ${orderId}. Bạn có thể đánh giá sản phẩm.`);
  };

  const OrderCard = ({ order }) => (
    <Card className="border-0 shadow-sm mb-4 order-card">
      <Card.Body>
        <Row className="align-items-center">
          {/* Order Info */}
          <Col lg={8}>
            <div className="d-flex justify-content-between align-items-start mb-3">
              <div>
                <h5 className="mb-1">
                  Đơn hàng #{order.id}
                  <Badge bg={getStatusColor(order.status)} className="ms-2">
                    {getStatusIcon(order.status)}
                    <span className="ms-1">{getStatusText(order.status)}</span>
                  </Badge>
                </h5>
                <small className="text-muted">
                  <FaCalendarAlt className="me-1" />
                  Đặt ngày: {formatDate(order.orderDate)}
                </small>
              </div>
              <div className="text-end">
                <div className="total-price text-primary fw-bold fs-5">
                  {formatCurrency(order.total)}
                </div>
                <small className="text-muted">{order.itemCount} sản phẩm</small>
              </div>
            </div>

            {/* Order Items Preview */}
            <div className="order-items-preview mb-3">
              <Row className="g-2">
                {order.items.slice(0, 3).map(item => (
                  <Col xs={4} sm={3} md={2} key={item.id}>
                    <div className="item-preview">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="img-fluid rounded"
                        style={{ width: '100%', height: '60px', objectFit: 'cover' }}
                      />
                      <div className="item-overlay">
                        <small className="text-white fw-bold">×{item.quantity}</small>
                      </div>
                    </div>
                  </Col>
                ))}
                {order.items.length > 3 && (
                  <Col xs={4} sm={3} md={2}>
                    <div 
                      className="more-items d-flex align-items-center justify-content-center rounded"
                      style={{ height: '60px', background: '#f8f9fa' }}
                    >
                      <small className="text-muted">+{order.items.length - 3}</small>
                    </div>
                  </Col>
                )}
              </Row>
            </div>

            {/* Order Details */}
            <div className="order-details">
              <Row className="g-2 text-muted small">
                <Col md={6}>
                  <FaMapMarkerAlt className="me-1" />
                  {order.deliveryAddress.substring(0, 40)}...
                </Col>
                <Col md={6}>
                  <FaCreditCard className="me-1" />
                  {getPaymentMethodText(order.paymentMethod)}
                </Col>
              </Row>
            </div>
          </Col>

          {/* Action Buttons */}
          <Col lg={4} className="text-lg-end">
            <div className="d-flex flex-lg-column gap-2">
              <Button 
                variant="outline-primary" 
                size="sm"
                as={Link}
                to={`/orders/${order.id}`}
                className="flex-grow-1"
              >
                <FaEye className="me-1" />
                Xem Chi Tiết
              </Button>
              
              {order.status === 'delivered' && (
                <>
                  {!confirmedOrders[order.id] ? (
                    <Button
                      variant="success"
                      size="sm"
                      className="flex-grow-1"
                      onClick={() => handleConfirmReceived(order.id)}
                    >
                      <FaCheck className="me-1" />
                      Đã Nhận Hàng
                    </Button>
                  ) : (
                    <Button
                      variant="warning"
                      size="sm"
                      className="flex-grow-1"
                      as={Link}
                      to={`/orders/${order.id}/review`}
                    >
                      Đánh Giá
                    </Button>
                  )}
                  <Button 
                    variant="outline-success" 
                    size="sm"
                    onClick={() => handleReorder(order)}
                    className="flex-grow-1"
                  >
                    <FaRedo className="me-1" />
                    Đặt Lại
                  </Button>
                  <Button 
                    variant="outline-secondary" 
                    size="sm"
                    className="flex-grow-1"
                  >
                    <FaDownload className="me-1" />
                    Hóa Đơn
                  </Button>
                </>
              )}
              
              {(order.status === 'shipping' || order.status === 'preparing') && (
                <Button 
                  variant="outline-info" 
                  size="sm"
                  className="flex-grow-1"
                >
                  <FaShippingFast className="me-1" />
                  Theo Dõi
                </Button>
              )}
            </div>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );

  return (
    <div className="order-history-page py-5">
      <Container>
        {/* Page Header */}
        <div className="text-center mb-5">
          <h1 className="display-4 fw-bold mb-3">
            Lịch Sử Đặt Hàng
            <FaShoppingBag className="ms-3" style={{ color: 'var(--primary-color)' }} />
          </h1>
          <p className="lead text-muted">
            Theo dõi và quản lý tất cả đơn hàng của bạn
          </p>
        </div>

        {/* Search and Filter */}
        <Row className="mb-4">
          <Col lg={8}>
            <Card className="border-0 shadow-sm">
              <Card.Body>
                <Row className="align-items-center">
                  <Col md={6} className="mb-3 mb-md-0">
                    <div className="position-relative">
                      <Form.Control
                        type="text"
                        placeholder="Tìm kiếm theo mã đơn hàng hoặc tên sản phẩm..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="ps-5"
                      />
                      <FaSearch 
                        className="position-absolute text-muted"
                        style={{ left: '15px', top: '50%', transform: 'translateY(-50%)' }}
                      />
                    </div>
                  </Col>
                  <Col md={6}>
                    <Form.Select
                      value={selectedStatus}
                      onChange={(e) => setSelectedStatus(e.target.value)}
                    >
                      {orderStatuses.map(status => (
                        <option key={status.value} value={status.value}>
                          {status.label} ({status.count})
                        </option>
                      ))}
                    </Form.Select>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} className="text-lg-end">
            <div className="stats-info">
              <div className="text-muted small">Tổng số đơn hàng</div>
              <div className="fw-bold fs-4 text-primary">{orders.length}</div>
            </div>
          </Col>
        </Row>

        {/* Orders List */}
        {filteredOrders.length > 0 ? (
          <>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h4 className="mb-0">
                {selectedStatus === 'all' ? 'Tất Cả Đơn Hàng' : orderStatuses.find(s => s.value === selectedStatus)?.label}
              </h4>
              <small className="text-muted">
                Hiển thị {filteredOrders.length} đơn hàng
              </small>
            </div>

            {filteredOrders.map(order => (
              <OrderCard key={order.id} order={order} />
            ))}
          </>
        ) : (
          <div className="text-center py-5">
            <div style={{ fontSize: '4rem', opacity: 0.3, marginBottom: '2rem' }}>
              <FaShoppingBag />
            </div>
            <h4 className="mb-3">Không tìm thấy đơn hàng</h4>
            <p className="text-muted mb-4">
              {searchTerm ? 'Hãy thử tìm kiếm với từ khóa khác' : 'Bạn chưa có đơn hàng nào'}
            </p>
            <div className="d-flex gap-3 justify-content-center flex-wrap">
              {searchTerm ? (
                <Button 
                  variant="outline-primary"
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedStatus('all');
                  }}
                >
                  Xem Tất Cả Đơn Hàng
                </Button>
              ) : (
                <Button variant="primary" as={Link} to="/products" size="lg">
                  <BiCake className="me-2" />
                  Mua Sắm Ngay
                </Button>
              )}
            </div>
          </div>
        )}

        {/* Contact Support */}
        <div className="text-center mt-5 pt-4 border-top">
          <h5 className="mb-3">Cần Hỗ Trợ Về Đơn Hàng?</h5>
          <p className="text-muted mb-4">
            Liên hệ với chúng tôi để được hỗ trợ nhanh chóng về đơn hàng của bạn
          </p>
          <div className="d-flex gap-3 justify-content-center flex-wrap">
            <Button variant="primary" href="tel:0123456789" size="lg">
              <FaPhone className="me-2" />
              Hotline: 0123.456.789
            </Button>
            <Button variant="outline-primary" as={Link} to="/contact" size="lg">
              Liên Hệ Hỗ Trợ
            </Button>
          </div>
        </div>
      </Container>



      <style jsx>{`
        .order-history-page {
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
          min-height: 100vh;
        }
        
        .order-card {
          transition: all 0.3s ease;
        }
        
        .order-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0,0,0,0.1) !important;
        }
        
        .item-preview {
          position: relative;
        }
        
        .item-overlay {
          position: absolute;
          top: 0;
          right: 0;
          background: rgba(0,0,0,0.7);
          border-radius: 0 0 0 8px;
          padding: 2px 6px;
        }
        
        .timeline {
          position: relative;
          padding-left: 2rem;
        }
        
        .timeline::before {
          content: '';
          position: absolute;
          left: 0.5rem;
          top: 0;
          bottom: 0;
          width: 2px;
          background: var(--primary-color);
        }
        
        .timeline-item {
          position: relative;
          margin-bottom: 1rem;
        }
        
        .timeline-item::before {
          content: '';
          position: absolute;
          left: -1.5rem;
          top: 0.5rem;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: var(--primary-color);
        }
        
        .timeline-content {
          background: #f8f9fa;
          padding: 0.75rem;
          border-radius: 8px;
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
        
        .btn-outline-primary, .btn-outline-secondary, .btn-outline-success, .btn-outline-info {
          border-radius: 20px;
          transition: all 0.3s ease;
        }
        
        .btn-outline-primary:hover, .btn-outline-secondary:hover, .btn-outline-success:hover, .btn-outline-info:hover {
          transform: translateY(-1px);
        }

        /* Ensure filled variants match rounded corners of outline buttons */
        .btn-success, .btn-warning {
          border-radius: 20px;
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
        
        @media (max-width: 768px) {
          .order-card:hover {
            transform: none;
          }
          
          .d-flex.flex-lg-column {
            flex-direction: row !important;
          }
        }
      `}</style>
    </div>
  );
};

export default OrderHistory;