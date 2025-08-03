import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const AboutSection = () => {
  const features = [
    {
      icon: '🌱',
      title: 'Nguyên Liệu Tự Nhiên',
      description: 'Chúng tôi chỉ sử dụng nguyên liệu tự nhiên, tươi ngon được chọn lọc kỹ càng từ các nhà cung cấp uy tín.'
    },
    {
      icon: '👨‍🍳',
      title: 'Thầy Bánh Chuyên Nghiệp',
      description: 'Đội ngũ thầy bánh giàu kinh nghiệm với nhiều năm học tập và làm việc tại các tiệm bánh nổi tiếng.'
    },
    {
      icon: '🚚',
      title: 'Giao Hàng Nhanh Chóng',
      description: 'Hệ thống giao hàng 24/7 với cam kết giữ nguyên chất lượng và độ tươi ngon của sản phẩm.'
    },
    {
      icon: '💝',
      title: 'Dịch Vụ Tận Tâm',
      description: 'Chúng tôi luôn lắng nghe và đáp ứng mọi yêu cầu đặc biệt của khách hàng với thái độ nhiệt tình.'
    }
  ];

  return (
    <section className="about-section py-5">
      <Container>
        <Row className="align-items-center">
          <Col lg={6} className="mb-5 mb-lg-0">
            <div className="about-content">
              <h2 className="display-5 fw-bold mb-4">
                Về Sweet Bakery 🧁
              </h2>
              <p className="lead mb-4">
                Với hơn 5 năm kinh nghiệm, Sweet Bakery tự hào là một trong những 
                tiệm bánh uy tín nhất khu vực, mang đến cho khách hàng những sản phẩm 
                bánh ngọt chất lượng cao với hương vị độc đáo.
              </p>
              
              <div className="story-stats">
                <Row className="g-4">
                  <Col sm={6}>
                    <div className="stat-item text-center p-3 rounded bg-light">
                      <div className="h3 fw-bold mb-1" style={{ color: 'var(--primary-color)' }}>
                        5+
                      </div>
                      <small className="text-muted">Năm kinh nghiệm</small>
                    </div>
                  </Col>
                  <Col sm={6}>
                    <div className="stat-item text-center p-3 rounded bg-light">
                      <div className="h3 fw-bold mb-1" style={{ color: 'var(--primary-color)' }}>
                        10.000+
                      </div>
                      <small className="text-muted">Đơn hàng thành công</small>
                    </div>
                  </Col>
                  <Col sm={6}>
                    <div className="stat-item text-center p-3 rounded bg-light">
                      <div className="h3 fw-bold mb-1" style={{ color: 'var(--primary-color)' }}>
                        50+
                      </div>
                      <small className="text-muted">Loại bánh khác nhau</small>
                    </div>
                  </Col>
                  <Col sm={6}>
                    <div className="stat-item text-center p-3 rounded bg-light">
                      <div className="h3 fw-bold mb-1" style={{ color: 'var(--primary-color)' }}>
                        98%
                      </div>
                      <small className="text-muted">Khách hàng hài lòng</small>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
          
          <Col lg={6}>
            <div className="about-image">
              {/* Placeholder cho hình ảnh tiệm bánh */}
              <div 
                className="rounded-4 shadow-lg"
                style={{
                  width: '100%',
                  height: '400px',
                  background: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '8rem'
                }}
              >
                🏪
              </div>
            </div>
          </Col>
        </Row>

        {/* Features Section */}
        <Row className="mt-5 pt-5">
          <Col lg={12}>
            <h3 className="text-center mb-5 fw-bold">
              Tại Sao Chọn Sweet Bakery? 🤔
            </h3>
            <Row className="g-4">
              {features.map((feature, index) => (
                <Col lg={3} md={6} key={index}>
                  <Card className="text-center h-100 border-0 shadow-sm">
                    <Card.Body className="p-4">
                      <div className="feature-icon mb-3" style={{ fontSize: '3rem' }}>
                        {feature.icon}
                      </div>
                      <Card.Title className="h5 mb-3">
                        {feature.title}
                      </Card.Title>
                      <Card.Text className="text-muted small">
                        {feature.description}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;