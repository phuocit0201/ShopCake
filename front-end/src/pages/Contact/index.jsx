import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Form, Alert } from 'react-bootstrap';
import { 
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTiktok,
  FaComments,
  FaPaperPlane,
  FaStore,
  FaCar,
  FaWifi,
  FaCreditCard,
  FaHeart,
  FaQuestionCircle
} from 'react-icons/fa';
import { BiCake } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const Contact = () => {
  // Contact form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = 'Vui lòng nhập họ tên';
    if (!formData.email.trim()) newErrors.email = 'Vui lòng nhập email';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email không hợp lệ';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Vui lòng nhập số điện thoại';
    else if (!/^[0-9]{10,11}$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Số điện thoại không hợp lệ';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Vui lòng nhập chủ đề';
    if (!formData.message.trim()) newErrors.message = 'Vui lòng nhập nội dung';

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
      
      console.log('Contact Form Data:', formData);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      
      setShowSuccessAlert(true);
      setTimeout(() => setShowSuccessAlert(false), 5000);
      
    } catch (error) {
      alert('Có lỗi xảy ra. Vui lòng thử lại.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const storeInfo = {
    name: 'Sweet Bakery',
    address: '123 Đường Bánh Ngọt, Phường 1, Quận 1, TP.HCM',
    phone: '0123.456.789',
    email: 'hello@sweetbakery.vn',
    website: 'www.sweetbakery.vn',
    hours: {
      weekdays: '6:00 - 22:00',
      weekend: '6:00 - 23:00'
    }
  };

  const contactMethods = [
    {
      icon: <FaPhone size={24} style={{ color: '#28a745' }} />,
      title: 'Điện thoại',
      content: storeInfo.phone,
      description: 'Gọi ngay để được tư vấn',
      action: `tel:${storeInfo.phone.replace(/\./g, '')}`
    },
    {
      icon: <FaEnvelope size={24} style={{ color: '#dc3545' }} />,
      title: 'Email',
      content: storeInfo.email,
      description: 'Gửi email cho chúng tôi',
      action: `mailto:${storeInfo.email}`
    },
    {
      icon: <FaMapMarkerAlt size={24} style={{ color: '#007bff' }} />,
      title: 'Địa chỉ',
      content: storeInfo.address,
      description: 'Đến thăm cửa hàng',
      action: '#'
    }
  ];

  const features = [
    { icon: <FaWifi />, text: 'WiFi miễn phí' },
    { icon: <FaCar />, text: 'Bãi đỗ xe rộng rãi' },
    { icon: <FaCreditCard />, text: 'Thanh toán thẻ' },
    { icon: <FaStore />, text: 'Không gian thoải mái' }
  ];

  const socialLinks = [
    { icon: <FaFacebook />, name: 'Facebook', url: '#', color: '#1877f2' },
    { icon: <FaInstagram />, name: 'Instagram', url: '#', color: '#E4405F' },
    { icon: <FaYoutube />, name: 'YouTube', url: '#', color: '#FF0000' },
    { icon: <FaTiktok />, name: 'TikTok', url: '#', color: '#000000' }
  ];

  const faqItems = [
    {
      question: 'Tôi có thể đặt bánh trước không?',
      answer: 'Có, bạn có thể đặt trước qua điện thoại hoặc trực tiếp tại cửa hàng. Đặt trước 1-2 ngày để đảm bảo có bánh.'
    },
    {
      question: 'Cửa hàng có giao hàng không?',
      answer: 'Có, chúng tôi giao hàng trong bán kính 10km. Phí giao hàng từ 30.000đ tùy khoảng cách.'
    },
    {
      question: 'Có làm bánh theo yêu cầu riêng không?',
      answer: 'Có, chúng tôi nhận làm bánh sinh nhật và bánh theo thiết kế riêng. Liên hệ trước 3-5 ngày.'
    }
  ];

  return (
    <div className="contact-page py-5">
      <Container>
        {/* Page Header */}
        <div className="text-center mb-5">
          <h1 className="display-4 fw-bold mb-3">
            Liên Hệ Với Chúng Tôi
            <BiCake className="ms-3" style={{ color: 'var(--primary-color)' }} />
          </h1>
          <p className="lead text-muted">
            Chúng tôi luôn sẵn sàng lắng nghe và hỗ trợ bạn
          </p>
        </div>

        {/* Success Alert */}
        {showSuccessAlert && (
          <Alert variant="success" className="mb-4" dismissible onClose={() => setShowSuccessAlert(false)}>
            <Alert.Heading>Gửi thành công!</Alert.Heading>
            <p className="mb-0">
              Cảm ơn bạn đã liên hệ. Chúng tôi sẽ phản hồi trong vòng 24 giờ.
            </p>
          </Alert>
        )}

        {/* Quick Contact Methods */}
        <Row className="mb-5">
          {contactMethods.map((method, index) => (
            <Col md={4} className="mb-4" key={index}>
              <Card className="h-100 border-0 shadow-sm contact-method-card">
                <Card.Body className="text-center p-4">
                  <div className="contact-icon mb-3">
                    {method.icon}
                  </div>
                  <h5 className="fw-bold mb-2">{method.title}</h5>
                  <p className="text-primary fw-semibold mb-2">{method.content}</p>
                  <p className="text-muted small mb-3">{method.description}</p>
                  <Button 
                    variant="outline-primary" 
                    size="sm"
                    href={method.action}
                    className="rounded-pill"
                  >
                    Liên hệ ngay
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <Row>
          {/* Contact Form */}
          <Col lg={8} className="mb-5">
            <Card className="border-0 shadow-sm">
              <Card.Header className="bg-primary text-white">
                <h4 className="mb-0">
                  <FaComments className="me-2" />
                  Gửi Tin Nhắn
                </h4>
              </Card.Header>
              <Card.Body className="p-4">
                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col md={6} className="mb-3">
                      <Form.Label>Họ và tên *</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Nhập họ và tên"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        isInvalid={!!errors.name}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.name}
                      </Form.Control.Feedback>
                    </Col>
                    <Col md={6} className="mb-3">
                      <Form.Label>Email *</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Nhập địa chỉ email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        isInvalid={!!errors.email}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.email}
                      </Form.Control.Feedback>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={6} className="mb-3">
                      <Form.Label>Số điện thoại *</Form.Label>
                      <Form.Control
                        type="tel"
                        placeholder="Nhập số điện thoại"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        isInvalid={!!errors.phone}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.phone}
                      </Form.Control.Feedback>
                    </Col>
                    <Col md={6} className="mb-3">
                      <Form.Label>Chủ đề *</Form.Label>
                      <Form.Select
                        value={formData.subject}
                        onChange={(e) => handleInputChange('subject', e.target.value)}
                        isInvalid={!!errors.subject}
                      >
                        <option value="">Chọn chủ đề</option>
                        <option value="order">Đặt hàng</option>
                        <option value="complaint">Khiếu nại</option>
                        <option value="suggestion">Góp ý</option>
                        <option value="partnership">Hợp tác</option>
                        <option value="other">Khác</option>
                      </Form.Select>
                      <Form.Control.Feedback type="invalid">
                        {errors.subject}
                      </Form.Control.Feedback>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="mb-4">
                      <Form.Label>Nội dung *</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={5}
                        placeholder="Nhập nội dung tin nhắn..."
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        isInvalid={!!errors.message}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.message}
                      </Form.Control.Feedback>
                    </Col>
                  </Row>
                  <div className="d-grid">
                    <Button 
                      type="submit"
                      variant="primary" 
                      size="lg"
                      disabled={isSubmitting}
                      className="fw-bold"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="spinner-border spinner-border-sm me-2" />
                          Đang gửi...
                        </>
                      ) : (
                        <>
                          <FaPaperPlane className="me-2" />
                          Gửi tin nhắn
                        </>
                      )}
                    </Button>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Col>

          {/* Store Information */}
          <Col lg={4}>
            {/* Store Details */}
            <Card className="border-0 shadow-sm mb-4">
              <Card.Header className="bg-white border-bottom">
                <h5 className="mb-0">
                  <FaStore className="me-2" />
                  Thông Tin Cửa Hàng
                </h5>
              </Card.Header>
              <Card.Body>
                <div className="store-info">
                  <div className="info-item mb-3">
                    <div className="d-flex align-items-center mb-2">
                      <FaMapMarkerAlt className="text-primary me-2" />
                      <strong>Địa chỉ:</strong>
                    </div>
                    <p className="ms-4 text-muted mb-0">{storeInfo.address}</p>
                  </div>

                  <div className="info-item mb-3">
                    <div className="d-flex align-items-center mb-2">
                      <FaClock className="text-success me-2" />
                      <strong>Giờ mở cửa:</strong>
                    </div>
                    <div className="ms-4">
                      <p className="mb-1 text-muted">T2-T6: {storeInfo.hours.weekdays}</p>
                      <p className="mb-0 text-muted">T7-CN: {storeInfo.hours.weekend}</p>
                    </div>
                  </div>

                  <div className="info-item mb-3">
                    <div className="d-flex align-items-center mb-2">
                      <FaPhone className="text-warning me-2" />
                      <strong>Hotline:</strong>
                    </div>
                    <p className="ms-4 text-muted mb-0">
                      <a href={`tel:${storeInfo.phone.replace(/\./g, '')}`} className="text-decoration-none">
                        {storeInfo.phone}
                      </a>
                    </p>
                  </div>

                  <div className="info-item">
                    <div className="d-flex align-items-center mb-2">
                      <FaEnvelope className="text-danger me-2" />
                      <strong>Email:</strong>
                    </div>
                    <p className="ms-4 text-muted mb-0">
                      <a href={`mailto:${storeInfo.email}`} className="text-decoration-none">
                        {storeInfo.email}
                      </a>
                    </p>
                  </div>
                </div>
              </Card.Body>
            </Card>

            {/* Features */}
            <Card className="border-0 shadow-sm mb-4">
              <Card.Header className="bg-white border-bottom">
                <h5 className="mb-0">
                  <FaHeart className="me-2" />
                  Tiện Ích
                </h5>
              </Card.Header>
              <Card.Body>
                <Row>
                  {features.map((feature, index) => (
                    <Col xs={6} className="mb-3" key={index}>
                      <div className="d-flex align-items-center">
                        <span className="text-primary me-2">{feature.icon}</span>
                        <small className="text-muted">{feature.text}</small>
                      </div>
                    </Col>
                  ))}
                </Row>
              </Card.Body>
            </Card>

            {/* Social Media */}
            <Card className="border-0 shadow-sm">
              <Card.Header className="bg-white border-bottom">
                <h5 className="mb-0">Theo Dõi Chúng Tôi</h5>
              </Card.Header>
              <Card.Body>
                <div className="d-flex justify-content-around">
                  {socialLinks.map((social, index) => (
                    <Button
                      key={index}
                      variant="outline-secondary"
                      size="lg"
                      href={social.url}
                      className="social-btn rounded-circle"
                      style={{ 
                        width: '50px', 
                        height: '50px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <span style={{ color: social.color }}>
                        {social.icon}
                      </span>
                    </Button>
                  ))}
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* FAQ Section */}
        <Row className="mt-5">
          <Col>
            <Card className="border-0 shadow-sm">
              <Card.Header className="bg-light">
                <h4 className="mb-0">
                  <FaQuestionCircle className="me-2" />
                  Câu Hỏi Thường Gặp
                </h4>
              </Card.Header>
              <Card.Body>
                <Row>
                  {faqItems.map((faq, index) => (
                    <Col md={4} className="mb-4" key={index}>
                      <div className="faq-item">
                        <h6 className="fw-bold text-primary mb-2">{faq.question}</h6>
                        <p className="text-muted small mb-0">{faq.answer}</p>
                      </div>
                    </Col>
                  ))}
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Call to Action */}
        <div className="text-center mt-5 pt-4 border-top">
          <h4 className="mb-3">Bạn Muốn Đặt Bánh Ngay?</h4>
          <p className="text-muted mb-4">
            Liên hệ với chúng tôi hoặc ghé thăm cửa hàng để trải nghiệm các sản phẩm tươi ngon nhất
          </p>
          <div className="d-flex gap-3 justify-content-center flex-wrap">
            <Button variant="primary" size="lg" href={`tel:${storeInfo.phone.replace(/\./g, '')}`}>
              <FaPhone className="me-2" />
              Gọi Đặt Hàng: {storeInfo.phone}
            </Button>
            <Button variant="outline-primary" size="lg" as={Link} to="/products">
              <BiCake className="me-2" />
              Xem Sản Phẩm
            </Button>
          </div>
        </div>
      </Container>

      <style jsx>{`
        .contact-page {
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
          min-height: 100vh;
        }
        
        .contact-method-card {
          transition: all 0.3s ease;
          cursor: pointer;
        }
        
        .contact-method-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.15) !important;
        }
        
        .contact-icon {
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto;
        }
        
        .social-btn {
          transition: all 0.3s ease;
        }
        
        .social-btn:hover {
          transform: scale(1.1);
          box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        }
        
        .faq-item {
          padding: 1rem;
          background: #f8f9fa;
          border-radius: 10px;
          border-left: 4px solid var(--primary-color);
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
        
        .btn-outline-primary {
          border-radius: 25px;
          transition: all 0.3s ease;
        }
        
        .btn-outline-primary:hover {
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
        
        .store-info .info-item {
          padding: 0.5rem 0;
        }
        
        @media (max-width: 768px) {
          .contact-method-card:hover {
            transform: none;
          }
        }
      `}</style>
    </div>
  );
};

export default Contact;