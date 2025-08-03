import React, { useState } from 'react';
import { Container, Row, Col, Button, Form, Alert } from 'react-bootstrap';
import { 
  FaPhone, 
  FaMapMarkerAlt, 
  FaClock, 
  FaUser, 
  FaMobile, 
  FaComments,
  FaRocket,
  FaBirthdayCake
} from 'react-icons/fa';
import { SiZalo } from 'react-icons/si';

const ContactSection = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Xử lý gửi form ở đây
    setShowAlert(true);
    setFormData({ name: '', phone: '', message: '' });
    setTimeout(() => setShowAlert(false), 5000);
  };

  return (
    <section className="contact-section py-5">
      <Container>
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold mb-3">
            Liên Hệ Đặt Hàng <FaPhone style={{ color: 'var(--primary-color)' }} />
          </h2>
          <p className="lead text-muted">
            Hãy để lại thông tin, chúng tôi sẽ liên hệ tư vấn ngay!
          </p>
        </div>

        <Row className="justify-content-center">
          <Col lg={8}>
            {/* Contact Methods */}
            <Row className="mb-5">
              <Col md={4} className="mb-4 text-center">
                <div className="contact-method p-4 rounded shadow-sm bg-light h-100">
                  <div className="mb-3">
                    <FaPhone size={48} style={{ color: 'var(--primary-color)' }} />
                  </div>
                  <h5 className="fw-bold mb-2">Hotline</h5>
                  <p className="mb-2 fw-bold" style={{ color: 'var(--primary-color)' }}>
                    0123.456.789
                  </p>
                  <small className="text-muted">Hỗ trợ 24/7</small>
                </div>
              </Col>
              <Col md={4} className="mb-4 text-center">
                <div className="contact-method p-4 rounded shadow-sm bg-light h-100">
                  <div className="mb-3">
                    <FaMapMarkerAlt size={48} style={{ color: 'var(--accent-color)' }} />
                  </div>
                  <h5 className="fw-bold mb-2">Địa Chỉ</h5>
                  <p className="mb-2">123 Đường ABC</p>
                  <small className="text-muted">Quận 1, TP.HCM</small>
                </div>
              </Col>
              <Col md={4} className="mb-4 text-center">
                <div className="contact-method p-4 rounded shadow-sm bg-light h-100">
                  <div className="mb-3">
                    <FaClock size={48} style={{ color: 'var(--secondary-color)' }} />
                  </div>
                  <h5 className="fw-bold mb-2">Giờ Mở Cửa</h5>
                  <p className="mb-2">6:00 - 22:00</p>
                  <small className="text-muted">Tất cả các ngày</small>
                </div>
              </Col>
            </Row>

            {/* Contact Form */}
            <div className="contact-form bg-white rounded-4 shadow-lg p-4 p-lg-5">
              <h4 className="text-center mb-4 fw-bold">
                Đặt Hàng Nhanh <FaBirthdayCake style={{ color: 'var(--primary-color)' }} />
              </h4>
              
              {showAlert && (
                <Alert variant="success" className="mb-4">
                  <strong>Cảm ơn bạn!</strong> Chúng tôi sẽ liên hệ trong vòng 15 phút.
                </Alert>
              )}

              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group>
                      <Form.Label className="fw-500">
                        <FaUser className="me-2" />Họ và tên *
                      </Form.Label>
                      <Form.Control
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Nhập họ và tên"
                        required
                        className="py-3"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group>
                      <Form.Label className="fw-500">
                        <FaMobile className="me-2" />Số điện thoại *
                      </Form.Label>
                      <Form.Control
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Nhập số điện thoại"
                        required
                        className="py-3"
                      />
                    </Form.Group>
                  </Col>
                </Row>
                
                <Form.Group className="mb-4">
                  <Form.Label className="fw-500">
                    <FaComments className="me-2" />Yêu cầu đặc biệt
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Mô tả loại bánh bạn muốn đặt, số lượng, thời gian giao hàng..."
                    className="py-3"
                  />
                </Form.Group>

                <div className="d-grid gap-2">
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="btn-primary-custom py-3 fw-bold"
                  >
                    <FaRocket className="me-2" />
                    Gửi Yêu Cầu Ngay
                  </Button>
                  <small className="text-center text-muted mt-2">
                    * Chúng tôi cam kết không spam và bảo mật thông tin khách hàng
                  </small>
                </div>
              </Form>
            </div>

            {/* Quick Order Buttons */}
            <div className="quick-orders mt-4">
              <p className="text-center mb-3 fw-bold">Hoặc đặt hàng nhanh:</p>
              <Row className="g-2">
                <Col sm={6}>
                  <Button 
                    variant="outline-success" 
                    size="lg" 
                    className="w-100 py-3"
                    href="tel:0123456789"
                  >
                    <FaPhone className="me-2" />
                    Gọi Ngay: 0123.456.789
                  </Button>
                </Col>
                <Col sm={6}>
                  <Button 
                    variant="outline-primary" 
                    size="lg" 
                    className="w-100 py-3"
                    href="https://zalo.me/0123456789"
                    target="_blank"
                  >
                    <SiZalo className="me-2" />
                    Chat Zalo
                  </Button>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>

      <style jsx>{`
        .contact-method {
          transition: all 0.3s ease;
        }
        
        .contact-method:hover {
          transform: translateY(-5px);
          background: white !important;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1) !important;
        }
        
        .contact-form {
          background: linear-gradient(135deg, #fff 0%, #f8f9fa 100%) !important;
        }
        
        @media (max-width: 768px) {
          .contact-method:hover {
            transform: none;
          }
        }
      `}</style>
    </section>
  );
};

export default ContactSection;