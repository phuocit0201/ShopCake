import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-light mt-5">
      <Container className="py-5">
        <Row>
          <Col md={4} className="mb-4">
            <h5 className="text-warning mb-3">
              <span>🧁</span> Sweet Bakery
            </h5>
            <p className="text-light-50">
              Tiệm bánh handmade với hương vị tự nhiên, 
              được làm từ những nguyên liệu tươi ngon nhất.
            </p>
            <div className="d-flex gap-3">
              <a href="#" className="text-light text-decoration-none">
                <span className="fs-4">📘</span>
              </a>
              <a href="#" className="text-light text-decoration-none">
                <span className="fs-4">📷</span>
              </a>
              <a href="#" className="text-light text-decoration-none">
                <span className="fs-4">📞</span>
              </a>
            </div>
          </Col>
          
          <Col md={4} className="mb-4">
            <h6 className="text-warning mb-3">Liên Hệ</h6>
            <div className="mb-2">
              <span className="me-2">📍</span>
              <small>123 Đường ABC, Quận 1, TP.HCM</small>
            </div>
            <div className="mb-2">
              <span className="me-2">📞</span>
              <small>0123.456.789</small>
            </div>
            <div className="mb-2">
              <span className="me-2">✉️</span>
              <small>sweetbakery@gmail.com</small>
            </div>
            <div className="mb-2">
              <span className="me-2">🕒</span>
              <small>6:00 - 22:00 (Hàng ngày)</small>
            </div>
          </Col>
          
          <Col md={4} className="mb-4">
            <h6 className="text-warning mb-3">Danh Mục</h6>
            <div className="d-flex flex-column gap-2">
              <a href="#" className="text-light text-decoration-none small">
                🍰 Bánh Kem
              </a>
              <a href="#" className="text-light text-decoration-none small">
                🧁 Cupcake
              </a>
              <a href="#" className="text-light text-decoration-none small">
                🥖 Bánh Mì
              </a>
              <a href="#" className="text-light text-decoration-none small">
                🍪 Cookies
              </a>
              <a href="#" className="text-light text-decoration-none small">
                🎂 Bánh Sinh Nhật
              </a>
            </div>
          </Col>
        </Row>
        
        <hr className="my-4 border-secondary" />
        
        <Row className="align-items-center">
          <Col md={6}>
            <small className="text-light-50">
              © 2024 Sweet Bakery. All rights reserved.
            </small>
          </Col>
          <Col md={6} className="text-md-end">
            <small className="text-light-50">
              Made with ❤️ for bánh lovers
            </small>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;