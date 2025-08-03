import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { 
  FaFacebook, 
  FaInstagram, 
  FaPhone, 
  FaMapMarkerAlt, 
  FaEnvelope, 
  FaClock,
  FaBirthdayCake,
  FaBreadSlice,
  FaCookie
} from 'react-icons/fa';
import { BiCake } from 'react-icons/bi';

const Footer = () => {
  return (
    <footer className="bg-dark text-light mt-5">
      <Container className="py-5">
        <Row>
          <Col md={4} className="mb-4">
            <h5 className="text-warning mb-3">
              <FaBirthdayCake className="me-2" /> Sweet Bakery
            </h5>
            <p className="text-light-50">
              Tiệm bánh handmade với hương vị tự nhiên, 
              được làm từ những nguyên liệu tươi ngon nhất.
            </p>
            <div className="d-flex gap-3">
              <a href="https://facebook.com" className="text-light text-decoration-none" target="_blank" rel="noopener noreferrer">
                <FaFacebook size={24} />
              </a>
              <a href="https://instagram.com" className="text-light text-decoration-none" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={24} />
              </a>
              <a href="tel:0123456789" className="text-light text-decoration-none">
                <FaPhone size={24} />
              </a>
            </div>
          </Col>
          
          <Col md={4} className="mb-4">
            <h6 className="text-warning mb-3">Liên Hệ</h6>
            <div className="mb-2">
              <FaMapMarkerAlt className="me-2" />
              <small>123 Đường ABC, Quận 1, TP.HCM</small>
            </div>
            <div className="mb-2">
              <FaPhone className="me-2" />
              <small>0123.456.789</small>
            </div>
            <div className="mb-2">
              <FaEnvelope className="me-2" />
              <small>sweetbakery@gmail.com</small>
            </div>
            <div className="mb-2">
              <FaClock className="me-2" />
              <small>6:00 - 22:00 (Hàng ngày)</small>
            </div>
          </Col>
          
          <Col md={4} className="mb-4">
            <h6 className="text-warning mb-3">Danh Mục</h6>
            <div className="d-flex flex-column gap-2">
              <a href="/products/banh-kem" className="text-light text-decoration-none small">
                <BiCake className="me-2" /> Bánh Kem
              </a>
              <a href="/products/cupcake" className="text-light text-decoration-none small">
                <FaBirthdayCake className="me-2" /> Cupcake
              </a>
              <a href="/products/banh-mi" className="text-light text-decoration-none small">
                <FaBreadSlice className="me-2" /> Bánh Mì
              </a>
              <a href="/products/cookies" className="text-light text-decoration-none small">
                <FaCookie className="me-2" /> Cookies
              </a>
              <a href="/products/banh-sinh-nhat" className="text-light text-decoration-none small">
                <FaBirthdayCake className="me-2" /> Bánh Sinh Nhật
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