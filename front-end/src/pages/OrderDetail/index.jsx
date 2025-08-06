import React, { useState, useMemo } from 'react';
import { Container, Row, Col, Card, Button, Badge, Alert, Modal } from 'react-bootstrap';
import { 
  FaArrowLeft,
  FaMapMarkerAlt,
  FaCreditCard,
  FaPhone,
  FaEnvelope,
  FaTruck,
  FaBox,
  FaCheck,
  FaClock,
  FaHourglass,
  FaTimes,
  FaRedo,
  FaShippingFast,
  FaUser,
} from 'react-icons/fa';
import { Link, useParams } from 'react-router-dom';

const OrderDetail = () => {
  const { orderId } = useParams();
  const [showCancelModal, setShowCancelModal] = useState(false);

  // Sample order data (in real app, this would be fetched from API)
  const orderData = useMemo(() => {
    const orders = {
      'DH001': {
        id: 'DH001',
        orderDate: '2024-01-20T10:30:00',
        status: 'delivered',
        total: 750000,
        subtotal: 720000,
        shippingFee: 30000,
        discount: 0,
        itemCount: 3,
        customer: {
          name: 'Nguyễn Văn A',
          phone: '0123456789',
          email: 'nguyenvana@email.com'
        },
        deliveryAddress: {
          fullAddress: '123 Nguyễn Văn A, Phường 1, Quận 1, TP.HCM',
          ward: 'Phường 1',
          district: 'Quận 1',
          city: 'TP.HCM',
          notes: 'Gọi điện trước khi giao hàng'
        },
        paymentMethod: 'cod',
        deliveryMethod: 'standard',
        estimatedDelivery: '2024-01-23',
        actualDelivery: '2024-01-22T14:20:00',
        trackingNumber: 'VN123456789',
        canCancel: false,
        canReorder: true,
        items: [
          {
            id: 1,
            name: 'Bánh Kem Dâu Tươi',
            price: 250000,
            originalPrice: 300000,
            quantity: 2,
            image: 'https://via.placeholder.com/120x120/ff6b6b/ffffff?text=Cake1',
            category: 'Bánh Kem',
            description: 'Bánh kem tươi với dâu tây tự nhiên, kem tươi thơm ngon',
            weight: '1kg',
            ingredients: 'Bột mì, trứng, đường, kem tươi, dâu tây tươi',
            expiry: '2 ngày'
          },
          {
            id: 2,
            name: 'Cupcake Chocolate',
            price: 35000,
            originalPrice: null,
            quantity: 4,
            image: 'https://via.placeholder.com/120x120/4ecdc4/ffffff?text=Cup1',
            category: 'Cupcake',
            description: 'Cupcake chocolate đậm đà với topping kem vanilla',
            weight: '80g/cái',
            ingredients: 'Bột mì, cacao, đường, trứng, bơ, kem vanilla',
            expiry: '3 ngày'
          },
          {
            id: 3,
            name: 'Cookies Bơ',
            price: 120000,
            originalPrice: null,
            quantity: 1,
            image: 'https://via.placeholder.com/120x120/45b7d1/ffffff?text=Cook1',
            category: 'Cookies',
            description: 'Cookies bơ thơm giòn, làm từ bơ New Zealand',
            weight: '500g',
            ingredients: 'Bột mì, bơ New Zealand, đường, trứng, vani',
            expiry: '7 ngày'
          }
        ],
        timeline: [
          { 
            status: 'pending', 
            time: '2024-01-20T10:30:00', 
            message: 'Đơn hàng đã được đặt', 
            description: 'Chúng tôi đã nhận được đơn hàng của bạn và đang xử lý',
            completed: true 
          },
          { 
            status: 'confirmed', 
            time: '2024-01-20T10:35:00', 
            message: 'Đơn hàng đã được xác nhận', 
            description: 'Đơn hàng đã được xác nhận và chuyển vào khâu chuẩn bị',
            completed: true 
          },
          { 
            status: 'preparing', 
            time: '2024-01-20T11:00:00', 
            message: 'Đang chuẩn bị hàng', 
            description: 'Chúng tôi đang cẩn thận chuẩn bị sản phẩm của bạn',
            completed: true 
          },
          { 
            status: 'shipping', 
            time: '2024-01-21T08:00:00', 
            message: 'Đơn hàng đang được vận chuyển', 
            description: 'Đơn hàng đã được bàn giao cho đối tác vận chuyển',
            completed: true 
          },
          { 
            status: 'delivered', 
            time: '2024-01-22T14:20:00', 
            message: 'Đã giao hàng thành công', 
            description: 'Đơn hàng đã được giao thành công đến địa chỉ của bạn',
            completed: true 
          }
        ]
      },
      'DH002': {
        id: 'DH002',
        orderDate: '2024-01-18T15:45:00',
        status: 'shipping',
        total: 480000,
        subtotal: 450000,
        shippingFee: 50000,
        discount: 20000,
        itemCount: 2,
        customer: {
          name: 'Trần Thị B',
          phone: '0987654321',
          email: 'tranthib@email.com'
        },
        deliveryAddress: {
          fullAddress: '456 Trần Hưng Đạo, Phường 5, Quận 5, TP.HCM',
          ward: 'Phường 5',
          district: 'Quận 5',
          city: 'TP.HCM',
          notes: 'Nhà màu xanh, cổng sắt'
        },
        paymentMethod: 'vnpay',
        deliveryMethod: 'express',
        estimatedDelivery: '2024-01-20',
        trackingNumber: 'VN987654321',
        canCancel: false,
        canReorder: true,
        items: [
          {
            id: 4,
            name: 'Bánh Sinh Nhật Vanilla',
            price: 450000,
            originalPrice: 500000,
            quantity: 1,
            image: 'https://via.placeholder.com/120x120/f9ca24/ffffff?text=Birth1',
            category: 'Bánh Sinh Nhật',
            description: 'Bánh sinh nhật vanilla 3 tầng với trang trí hoa kem',
            weight: '2kg',
            ingredients: 'Bột mì, trứng, đường, kem tươi, vanilla, trang trí đường',
            expiry: '3 ngày'
          }
        ],
        timeline: [
          { 
            status: 'pending', 
            time: '2024-01-18T15:45:00', 
            message: 'Đơn hàng đã được đặt', 
            description: 'Chúng tôi đã nhận được đơn hàng của bạn',
            completed: true 
          },
          { 
            status: 'confirmed', 
            time: '2024-01-18T15:50:00', 
            message: 'Đơn hàng đã được xác nhận', 
            description: 'Đơn hàng đã được xác nhận và thanh toán thành công',
            completed: true 
          },
          { 
            status: 'preparing', 
            time: '2024-01-18T16:30:00', 
            message: 'Đang chuẩn bị hàng', 
            description: 'Đang trong quá trình làm bánh theo yêu cầu',
            completed: true 
          },
          { 
            status: 'shipping', 
            time: '2024-01-19T09:15:00', 
            message: 'Đơn hàng đang được vận chuyển', 
            description: 'Tài xế đang trên đường giao hàng đến bạn',
            completed: true 
          },
          { 
            status: 'delivered', 
            time: null, 
            message: 'Giao hàng thành công', 
            description: 'Đơn hàng sẽ được giao trong thời gian sớm nhất',
            completed: false 
          }
        ]
      }
    };
    return orders[orderId] || null;
  }, [orderId]);

  if (!orderData) {
    return (
      <Container className="py-5">
        <div className="text-center">
          <h3>Không tìm thấy đơn hàng</h3>
          <p className="text-muted">Đơn hàng #{orderId} không tồn tại hoặc đã bị xóa.</p>
          <Button as={Link} to="/orders-history" variant="primary">
            <FaArrowLeft className="me-2" />
            Về Lịch Sử Đặt Hàng
          </Button>
        </div>
      </Container>
    );
  }

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND'
    }).format(amount);
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'Chưa cập nhật';
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
      pending: 'secondary',
      confirmed: 'info',
      preparing: 'warning',
      shipping: 'primary',
      delivered: 'success',
      cancelled: 'danger'
    };
    return colors[status] || 'secondary';
  };

  const getStatusIcon = (status) => {
    const icons = {
      pending: <FaHourglass />,
      confirmed: <FaCheck />,
      preparing: <FaClock />,
      shipping: <FaTruck />,
      delivered: <FaBox />,
      cancelled: <FaTimes />
    };
    return icons[status] || <FaBox />;
  };

  const getStatusText = (status) => {
    const texts = {
      pending: 'Chờ Xác Nhận',
      confirmed: 'Xác Nhận Đơn Hàng',
      preparing: 'Đang Chuẩn Bị',
      shipping: 'Đang Giao Hàng',
      delivered: 'Hoàn Thành',
      cancelled: 'Đã Hủy'
    };
    return texts[status] || status;
  };

  const getPaymentMethodText = (method) => {
    const methods = {
      cod: 'Thanh toán khi nhận hàng (COD)',
      vnpay: 'Ví điện tử VNPay',
      momo: 'Ví điện tử MoMo',
      bank: 'Chuyển khoản ngân hàng'
    };
    return methods[method] || method;
  };

  const getDeliveryMethodText = (method) => {
    const methods = {
      standard: 'Giao hàng tiêu chuẩn',
      express: 'Giao hàng nhanh',
      pickup: 'Nhận tại cửa hàng'
    };
    return methods[method] || method;
  };

  const handleCancelOrder = () => {
    console.log('Cancel order:', orderData.id);
    setShowCancelModal(false);
    alert('Đơn hàng đã được hủy thành công!');
  };

  const handleReorder = () => {
    console.log('Reorder:', orderData.id);
    alert('Sản phẩm đã được thêm vào giỏ hàng!');
  };

  const OrderTimeline = () => (
    <Card className="border-0 shadow-sm mb-4">
      <Card.Header className="bg-primary text-white">
        <h5 className="mb-0">
          <FaTruck className="me-2" />
          Trạng Thái Đơn Hàng
        </h5>
      </Card.Header>
      <Card.Body className="p-4">
        <div className="order-timeline">
          {orderData.timeline.map((step, index) => (
            <div 
              key={index} 
              className={`timeline-item ${step.completed ? 'completed' : 'pending'}`}
            >
              <div className="timeline-marker">
                <div className="timeline-icon">
                  {getStatusIcon(step.status)}
                </div>
              </div>
              <div className="timeline-content">
                <div className="d-flex justify-content-between align-items-start mb-2">
                  <h6 className={`mb-1 ${step.completed ? 'text-success' : 'text-muted'}`}>
                    {step.message}
                  </h6>
                  <small className="text-muted">
                    {formatDate(step.time)}
                  </small>
                </div>
                <p className="text-muted small mb-0">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Card.Body>
    </Card>
  );

  return (
    <div className="order-detail-page py-5" style={{ background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)', minHeight: '100vh' }}>
      <Container>
        {/* Header */}
        <div className="mb-4">
          {/* Mobile Layout */}
          <div className="d-block d-md-none">
            {/* Back Button Row */}
            <div className="mb-2">
              <Button 
                as={Link} 
                to="/orders-history" 
                variant="outline-primary" 
                size="sm"
                style={{ 
                  width: '40px', 
                  height: '36px',
                  padding: '6px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <FaArrowLeft size={14} />
              </Button>
            </div>
            
            {/* Title Row */}
            <div className="text-center mb-3">
              <h3 className="mb-0">Chi Tiết Đơn Hàng</h3>
            </div>
            
            {/* Order Info Row */}
            <div className="text-center">
              <h5 className="mb-2 text-primary">#{orderData.id}</h5>
              <Badge bg={getStatusColor(orderData.status)} className="fs-6 px-3 py-2">
                {getStatusIcon(orderData.status)}
                <span className="ms-1">{getStatusText(orderData.status)}</span>
              </Badge>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="d-none d-md-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <Button 
                as={Link} 
                to="/orders-history" 
                variant="outline-primary" 
                className="me-3"
              >
                <FaArrowLeft />
              </Button>
              <div>
                <h2 className="mb-1">Chi Tiết Đơn Hàng #{orderData.id}</h2>
                <div className="d-flex align-items-center gap-3">
                  <Badge bg={getStatusColor(orderData.status)} className="fs-6">
                    {getStatusIcon(orderData.status)}
                    <span className="ms-1">{getStatusText(orderData.status)}</span>
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Row>
          {/* Left Column */}
          <Col lg={8}>
            {/* Order Timeline */}
            <OrderTimeline />

            {/* Product Details */}
            <Card className="border-0 shadow-sm mb-4">
              <Card.Header className="bg-light">
                <h5 className="mb-0">
                  <FaBox className="me-2" />
                  Thành Phần & Chi Tiết Sản Phẩm
                </h5>
              </Card.Header>
              <Card.Body>
                {orderData.items.map(item => (
                  <div key={item.id} className="product-detail-item mb-4 pb-4 border-bottom">
                    <h6 className="text-primary mb-3">{item.name}</h6>
                    <Row>
                      <Col md={6}>
                        <div className="mb-2">
                          <strong>Thành phần:</strong>
                          <p className="text-muted small mb-0">{item.ingredients}</p>
                        </div>
                      </Col>
                      <Col md={3}>
                        <div className="mb-2">
                          <strong>Khối lượng:</strong>
                          <p className="text-muted small mb-0">{item.weight}</p>
                        </div>
                      </Col>
                      <Col md={3}>
                        <div className="mb-2">
                          <strong>Hạn sử dụng:</strong>
                          <p className="text-muted small mb-0">{item.expiry}</p>
                        </div>
                      </Col>
                    </Row>
                  </div>
                ))}
              </Card.Body>
            </Card>
          </Col>

          {/* Right Column */}
          <Col lg={4}>
            {/* Order Summary */}
            <Card className="border-0 shadow-sm mb-4">
              <Card.Header className="bg-primary text-white">
                <h5 className="mb-0">Tóm Tắt Đơn Hàng</h5>
              </Card.Header>
              <Card.Body>
                <div className="order-summary">
                  <div className="d-flex justify-content-between mb-2">
                    <span>Tạm tính:</span>
                    <span>{formatCurrency(orderData.subtotal)}</span>
                  </div>
                  <div className="d-flex justify-content-between mb-2">
                    <span>Phí vận chuyển:</span>
                    <span>{formatCurrency(orderData.shippingFee)}</span>
                  </div>
                  {orderData.discount > 0 && (
                    <div className="d-flex justify-content-between mb-2 text-success">
                      <span>Giảm giá:</span>
                      <span>-{formatCurrency(orderData.discount)}</span>
                    </div>
                  )}
                  <hr />
                  <div className="d-flex justify-content-between mb-3">
                    <strong>Tổng cộng:</strong>
                    <strong className="text-primary fs-4">
                      {formatCurrency(orderData.total)}
                    </strong>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="d-grid gap-2">
                  {orderData.canReorder && (
                    <Button variant="primary" onClick={handleReorder}>
                      <FaRedo className="me-2" />
                      Đặt Lại Đơn Hàng
                    </Button>
                  )}
                  {orderData.canCancel && (
                    <Button 
                      variant="outline-danger" 
                      onClick={() => setShowCancelModal(true)}
                    >
                      <FaTimes className="me-2" />
                      Hủy Đơn Hàng
                    </Button>
                  )}
                  {orderData.trackingNumber && (
                    <Button variant="outline-info">
                      <FaShippingFast className="me-2" />
                      Theo Dõi Vận Chuyển
                    </Button>
                  )}
                </div>
              </Card.Body>
            </Card>

            {/* Customer Information */}
            <Card className="border-0 shadow-sm mb-4">
              <Card.Header className="bg-light">
                <h5 className="mb-0">
                  <FaUser className="me-2" />
                  Thông Tin Khách Hàng
                </h5>
              </Card.Header>
              <Card.Body>
                <div className="mb-3">
                  <strong>{orderData.customer.name}</strong>
                </div>
                <div className="mb-2">
                  <FaPhone className="me-2 text-muted" />
                  <a href={`tel:${orderData.customer.phone}`} className="text-decoration-none">
                    {orderData.customer.phone}
                  </a>
                </div>
                <div className="mb-2">
                  <FaEnvelope className="me-2 text-muted" />
                  <a href={`mailto:${orderData.customer.email}`} className="text-decoration-none">
                    {orderData.customer.email}
                  </a>
                </div>
              </Card.Body>
            </Card>

            {/* Delivery Information */}
            <Card className="border-0 shadow-sm mb-4">
              <Card.Header className="bg-light">
                <h5 className="mb-0">
                  <FaMapMarkerAlt className="me-2" />
                  Thông Tin Giao Hàng
                </h5>
              </Card.Header>
              <Card.Body>
                <div className="mb-3">
                  <strong>Địa chỉ giao hàng:</strong>
                  <p className="text-muted mb-1">{orderData.deliveryAddress.fullAddress}</p>
                  {orderData.deliveryAddress.notes && (
                    <small className="text-info">
                      <strong>Ghi chú:</strong> {orderData.deliveryAddress.notes}
                    </small>
                  )}
                </div>
                <div className="mb-2">
                  <strong>Phương thức giao hàng:</strong>
                  <p className="text-muted mb-1">
                    {getDeliveryMethodText(orderData.deliveryMethod)}
                  </p>
                </div>
                {orderData.estimatedDelivery && (
                  <div className="mb-2">
                    <strong>Dự kiến giao hàng:</strong>
                    <p className="text-muted mb-1">
                      {formatDate(orderData.estimatedDelivery)}
                    </p>
                  </div>
                )}
                {orderData.trackingNumber && (
                  <div className="mb-2">
                    <strong>Mã vận đơn:</strong>
                    <p className="text-primary mb-1 fw-bold">
                      {orderData.trackingNumber}
                    </p>
                  </div>
                )}
              </Card.Body>
            </Card>

            {/* Payment Information */}
            <Card className="border-0 shadow-sm">
              <Card.Header className="bg-light">
                <h5 className="mb-0">
                  <FaCreditCard className="me-2" />
                  Thông Tin Thanh Toán
                </h5>
              </Card.Header>
              <Card.Body>
                <div className="mb-2">
                  <strong>Phương thức thanh toán:</strong>
                  <p className="text-muted mb-1">
                    {getPaymentMethodText(orderData.paymentMethod)}
                  </p>
                </div>
                <div className="mb-2">
                  <strong>Trạng thái thanh toán:</strong>
                  <Badge 
                    bg={orderData.paymentMethod === 'cod' ? 'warning' : 'success'} 
                    className="ms-2"
                  >
                    {orderData.paymentMethod === 'cod' ? 'Chưa thanh toán' : 'Đã thanh toán'}
                  </Badge>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Contact Support */}
        <div className="text-center mt-5 pt-4 border-top">
          <h5 className="mb-3">Cần Hỗ Trợ Về Đơn Hàng #{orderData.id}?</h5>
          <p className="text-muted mb-4">
            Liên hệ với chúng tôi để được hỗ trợ nhanh chóng
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

      {/* Cancel Order Modal */}
      <Modal show={showCancelModal} onHide={() => setShowCancelModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Xác Nhận Hủy Đơn Hàng</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Alert variant="warning">
            <strong>Chú ý:</strong> Bạn có chắc chắn muốn hủy đơn hàng #{orderData.id}?
            Hành động này không thể hoàn tác.
          </Alert>
          <p>Đơn hàng sẽ bị hủy và bạn sẽ được hoàn tiền (nếu đã thanh toán) trong vòng 3-5 ngày làm việc.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowCancelModal(false)}>
            Không, Giữ Đơn Hàng
          </Button>
          <Button variant="danger" onClick={handleCancelOrder}>
            Có, Hủy Đơn Hàng
          </Button>
        </Modal.Footer>
      </Modal>

      <style jsx>{`
        .order-timeline {
          position: relative;
        }
        
        .timeline-item {
          position: relative;
          padding-left: 3rem;
          padding-bottom: 2rem;
        }
        
        .timeline-item:not(:last-child)::before {
          content: '';
          position: absolute;
          left: 1.125rem;
          top: 2.5rem;
          width: 2px;
          height: calc(100% - 1rem);
          background: #e9ecef;
        }
        
        .timeline-item.completed:not(:last-child)::before {
          background: linear-gradient(to bottom, var(--primary-color) 0%, #e9ecef 100%);
        }
        
        .timeline-marker {
          position: absolute;
          left: 0;
          top: 0;
        }
        
        .timeline-icon {
          width: 2.25rem;
          height: 2.25rem;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.875rem;
          font-weight: bold;
          border: 3px solid #fff;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }
        
        .timeline-item.completed .timeline-icon {
          background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
          color: white;
        }
        
        .timeline-item.pending .timeline-icon {
          background: #f8f9fa;
          color: #6c757d;
          border-color: #e9ecef;
        }
        
        .timeline-content {
          background: #fff;
          border-radius: 12px;
          padding: 1rem 1.5rem;
          box-shadow: 0 2px 8px rgba(0,0,0,0.05);
          border: 1px solid #f1f3f4;
        }
        
        .timeline-item.completed .timeline-content {
          border-left: 4px solid var(--primary-color);
        }
        
        .timeline-item.pending .timeline-content {
          border-left: 4px solid #e9ecef;
          opacity: 0.7;
        }
        
        .product-detail-item:last-child {
          border-bottom: none !important;
          margin-bottom: 0 !important;
          padding-bottom: 0 !important;
        }
        
        .card {
          border-radius: 15px;
          overflow: hidden;
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
        
        .btn-outline-primary, .btn-outline-secondary, .btn-outline-danger, .btn-outline-info {
          border-radius: 20px;
          transition: all 0.3s ease;
        }
        
        .btn-outline-primary:hover, .btn-outline-secondary:hover, .btn-outline-danger:hover, .btn-outline-info:hover {
          transform: translateY(-1px);
        }
        
        @media (max-width: 768px) {
          .timeline-item {
            padding-left: 2.5rem;
          }
          
          .timeline-icon {
            width: 1.875rem;
            height: 1.875rem;
            font-size: 0.75rem;
          }
          
          .timeline-item:not(:last-child)::before {
            left: 0.9375rem;
          }
        }
        
        @media print {
          .btn, .modal {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
};

export default OrderDetail;