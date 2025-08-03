import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Nguyễn Thị Lan',
      role: 'Khách hàng thân thiết',
      avatar: '👩',
      rating: 5,
      comment: 'Bánh ở Sweet Bakery rất ngon! Tôi đã đặt bánh sinh nhật cho con và cả gia đình đều khen ngợi. Sẽ quay lại đặt tiếp!'
    },
    {
      id: 2,
      name: 'Trần Văn Minh',
      role: 'Chủ quán cafe',
      avatar: '👨',
      rating: 5,
      comment: 'Tôi đã hợp tác với Sweet Bakery cung cấp bánh cho quán cafe của mình. Chất lượng ổn định, giao hàng đúng giờ.'
    },
    {
      id: 3,
      name: 'Lê Thị Hoa',
      role: 'Mẹ bỉm sữa',
      avatar: '👩‍🍼',
      rating: 5,
      comment: 'Bánh mì và cupcake ở đây rất phù hợp với khẩu vị của con tôi. Nguyên liệu tự nhiên, mẹ yên tâm cho con ăn.'
    }
  ];

  const renderStars = (rating) => {
    return '⭐'.repeat(rating);
  };

  return (
    <section className="testimonials-section py-5" style={{ background: 'var(--bg-light)' }}>
      <Container>
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold mb-3">
            Khách Hàng Nói Gì? 💬
          </h2>
          <p className="lead text-muted">
            Những phản hồi chân thật từ khách hàng của chúng tôi
          </p>
        </div>

        <Row>
          {testimonials.map((testimonial) => (
            <Col lg={4} md={6} className="mb-4" key={testimonial.id}>
              <Card className="h-100 border-0 shadow-sm testimonial-card">
                <Card.Body className="p-4">
                  <div className="d-flex align-items-center mb-3">
                    <div 
                      className="avatar me-3 rounded-circle d-flex align-items-center justify-content-center"
                      style={{
                        width: '50px',
                        height: '50px',
                        background: 'linear-gradient(135deg, var(--primary-color), var(--accent-color))',
                        fontSize: '1.5rem'
                      }}
                    >
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h6 className="mb-0 fw-bold">{testimonial.name}</h6>
                      <small className="text-muted">{testimonial.role}</small>
                    </div>
                  </div>

                  <div className="mb-3 text-warning">
                    {renderStars(testimonial.rating)}
                  </div>

                  <blockquote className="mb-0">
                    <p className="text-muted fst-italic">
                      "{testimonial.comment}"
                    </p>
                  </blockquote>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Trust indicators */}
        <div className="trust-section mt-5 pt-5 border-top">
          <Row className="text-center">
            <Col lg={3} md={6} className="mb-4">
              <div className="trust-item">
                <div className="mb-2" style={{ fontSize: '2.5rem' }}>🏆</div>
                <h6 className="fw-bold">Chất Lượng Đảm Bảo</h6>
                <small className="text-muted">ISO 22000 Certified</small>
              </div>
            </Col>
            <Col lg={3} md={6} className="mb-4">
              <div className="trust-item">
                <div className="mb-2" style={{ fontSize: '2.5rem' }}>🚚</div>
                <h6 className="fw-bold">Giao Hàng Miễn Phí</h6>
                <small className="text-muted">Đơn hàng từ 200k</small>
              </div>
            </Col>
            <Col lg={3} md={6} className="mb-4">
              <div className="trust-item">
                <div className="mb-2" style={{ fontSize: '2.5rem' }}>🔄</div>
                <h6 className="fw-bold">Đổi Trả Dễ Dàng</h6>
                <small className="text-muted">Trong vòng 24h</small>
              </div>
            </Col>
            <Col lg={3} md={6} className="mb-4">
              <div className="trust-item">
                <div className="mb-2" style={{ fontSize: '2.5rem' }}>📞</div>
                <h6 className="fw-bold">Hỗ Trợ 24/7</h6>
                <small className="text-muted">Hotline: 0123.456.789</small>
              </div>
            </Col>
          </Row>
        </div>
      </Container>

      <style jsx>{`
        .testimonial-card {
          transition: all 0.3s ease;
        }
        
        .testimonial-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.15) !important;
        }
        
        .trust-item {
          transition: all 0.3s ease;
        }
        
        .trust-item:hover {
          transform: scale(1.05);
        }
        
        @media (max-width: 768px) {
          .testimonial-card:hover,
          .trust-item:hover {
            transform: none;
          }
        }
      `}</style>
    </section>
  );
};

export default TestimonialsSection;