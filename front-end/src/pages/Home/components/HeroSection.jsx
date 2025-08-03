import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const HeroSection = () => {
  return (
    <section className="hero-section position-relative overflow-hidden" 
             style={{ 
               background: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
               minHeight: '100vh',
               display: 'flex',
               alignItems: 'center'
             }}>
      <Container>
        <Row className="align-items-center min-vh-100 py-5">
          <Col lg={6} className="mb-5 mb-lg-0">
            <div className="hero-content">
              <h1 className="display-4 fw-bold mb-4" style={{ color: 'var(--text-dark)' }}>
                Bánh Ngon 🧁
                <br />
                <span style={{ color: 'var(--primary-color)' }}>
                  Từ Trái Tim
                </span>
              </h1>
              <p className="lead mb-4 text-muted">
                Khám phá thế giới bánh ngọt handmade với hương vị tự nhiên, 
                được chế biến từ những nguyên liệu tươi ngon nhất.
              </p>
              
              <div className="hero-features mb-4">
                <div className="d-flex align-items-center mb-2">
                  <span className="me-3 fs-5">✅</span>
                  <span>100% nguyên liệu tự nhiên</span>
                </div>
                <div className="d-flex align-items-center mb-2">
                  <span className="me-3 fs-5">✅</span>
                  <span>Giao hàng tận nơi miễn phí</span>
                </div>
                <div className="d-flex align-items-center mb-2">
                  <span className="me-3 fs-5">✅</span>
                  <span>Đặt hàng online 24/7</span>
                </div>
              </div>
              
              <div className="hero-actions d-flex flex-column flex-sm-row gap-3">
                <Button 
                  size="lg" 
                  className="btn-primary-custom px-4"
                  style={{ minWidth: '200px' }}
                >
                  🛒 Đặt Hàng Ngay
                </Button>
                <Button 
                  variant="outline-dark" 
                  size="lg" 
                  className="px-4"
                  style={{ minWidth: '200px' }}
                >
                  📞 Gọi Tư Vấn
                </Button>
              </div>
              
              <div className="hero-stats mt-4 d-flex justify-content-between">
                <div className="text-center">
                  <div className="fw-bold fs-4" style={{ color: 'var(--primary-color)' }}>
                    1000+
                  </div>
                  <small className="text-muted">Khách hàng</small>
                </div>
                <div className="text-center">
                  <div className="fw-bold fs-4" style={{ color: 'var(--primary-color)' }}>
                    50+
                  </div>
                  <small className="text-muted">Loại bánh</small>
                </div>
                <div className="text-center">
                  <div className="fw-bold fs-4" style={{ color: 'var(--primary-color)' }}>
                    5⭐
                  </div>
                  <small className="text-muted">Đánh giá</small>
                </div>
              </div>
            </div>
          </Col>
          
          <Col lg={6}>
            <div className="hero-image position-relative">
              <div className="text-center">
                {/* Placeholder cho hình ảnh bánh */}
                <div 
                  className="rounded-4 shadow-lg mx-auto"
                  style={{
                    width: '100%',
                    maxWidth: '400px',
                    height: '400px',
                    background: 'linear-gradient(45deg, #fff, #f8f9fa)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '6rem',
                    border: '3px solid var(--primary-color)'
                  }}
                >
                  🎂
                </div>
                
                {/* Floating elements */}
                <div className="position-absolute top-0 start-0 translate-middle">
                  <div className="bg-white rounded-circle p-3 shadow animate-float">
                    <span className="fs-4">🧁</span>
                  </div>
                </div>
                
                <div className="position-absolute top-0 end-0 translate-middle">
                  <div className="bg-white rounded-circle p-3 shadow animate-float" style={{ animationDelay: '0.5s' }}>
                    <span className="fs-4">🍪</span>
                  </div>
                </div>
                
                <div className="position-absolute bottom-0 start-0 translate-middle">
                  <div className="bg-white rounded-circle p-3 shadow animate-float" style={{ animationDelay: '1s' }}>
                    <span className="fs-4">🥖</span>
                  </div>
                </div>
                
                <div className="position-absolute bottom-0 end-0 translate-middle">
                  <div className="bg-white rounded-circle p-3 shadow animate-float" style={{ animationDelay: '1.5s' }}>
                    <span className="fs-4">🍰</span>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-10px) rotate(2deg); }
          66% { transform: translateY(-5px) rotate(-2deg); }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        @media (max-width: 768px) {
          .hero-section {
            min-height: 80vh !important;
          }
          
          .hero-stats {
            justify-content: space-around !important;
          }
          
          .position-absolute {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;