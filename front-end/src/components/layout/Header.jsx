import React, { useState } from 'react';
import { Navbar, Nav, Container, Offcanvas } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {
  FaHome,
  FaInfoCircle,
  FaPhone,
  FaShoppingCart,
  FaBirthdayCake,
  FaBookmark,
  FaUser
} from 'react-icons/fa';
import { BiCake } from 'react-icons/bi';

const Header = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar expand="lg" className="bg-white shadow-sm sticky-top">
        <Container>
          <Navbar.Brand as={Link} to="/" className="fw-bold fs-3">
            <FaBirthdayCake style={{ color: 'var(--primary-color)' }} />
            <span className="ms-2" style={{ color: 'var(--text-dark)' }}>Sweet Bakery</span>
          </Navbar.Brand>

          {/* Mobile Menu Button */}
          <Navbar.Toggle 
            aria-controls="offcanvasNavbar" 
            onClick={handleShow}
            className="border-0"
          />

          {/* Desktop Menu */}
          <Navbar.Collapse id="basic-navbar-nav" className="d-none d-lg-block">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/" className="mx-2 fw-500">
                Trang Chủ
              </Nav.Link>
              <Nav.Link as={Link} to="/products" className="mx-2 fw-500">
                Sản Phẩm
              </Nav.Link>
              <Nav.Link as={Link} to="/blog" className="mx-2 fw-500">
                Bài Viết
              </Nav.Link>
              <Nav.Link as={Link} to="/about" className="mx-2 fw-500">
                Giới Thiệu
              </Nav.Link>
              <Nav.Link as={Link} to="/contact" className="mx-2 fw-500">
                Liên Hệ
              </Nav.Link>
              <Nav.Link as={Link} to="/login" className="mx-2 fw-500">
                Đăng Nhập
              </Nav.Link>
              <Nav.Link as={Link} to="/register" className="mx-2 fw-500">
                Đăng Ký
              </Nav.Link>
              <Nav.Link as={Link} to="/cart" className="mx-2">
                <span className="position-relative">
                  <FaShoppingCart size={20} />
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{ fontSize: '0.7em' }}>
                    3
                  </span>
                </span>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Mobile Menu Offcanvas */}
      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton className="border-bottom">
          <Offcanvas.Title>
            <FaBirthdayCake style={{ color: 'var(--primary-color)' }} />
            <span className="ms-2" style={{ color: 'var(--text-dark)' }}>Sweet Bakery</span>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            <Nav.Link as={Link} to="/" className="py-3 border-bottom" onClick={handleClose}>
              <FaHome size={20} />
              <span className="ms-3">Trang Chủ</span>
            </Nav.Link>
            <Nav.Link as={Link} to="/products" className="py-3 border-bottom" onClick={handleClose}>
              <BiCake size={20} />
              <span className="ms-3">Sản Phẩm</span>
            </Nav.Link>
            <Nav.Link as={Link} to="/blog" className="py-3 border-bottom" onClick={handleClose}>
              <FaBookmark size={20} />
              <span className="ms-3">Blog</span>
            </Nav.Link>
            <Nav.Link as={Link} to="/about" className="py-3 border-bottom" onClick={handleClose}>
              <FaInfoCircle size={20} />
              <span className="ms-3">Giới Thiệu</span>
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" className="py-3 border-bottom" onClick={handleClose}>
              <FaPhone size={20} />
              <span className="ms-3">Liên Hệ</span>
            </Nav.Link>
            <Nav.Link as={Link} to="/login" className="py-3 border-bottom" onClick={handleClose}>
              <FaUser size={20} />
              <span className="ms-3">Đăng Nhập</span>
            </Nav.Link>
            <Nav.Link as={Link} to="/register" className="py-3 border-bottom" onClick={handleClose}>
              <FaUser size={20} />
              <span className="ms-3">Đăng Ký</span>
            </Nav.Link>
            <Nav.Link as={Link} to="/cart" className="py-3" onClick={handleClose}>
              <FaShoppingCart size={20} />
              <span className="ms-3">Giỏ Hàng</span>
              <span className="badge bg-danger ms-auto">3</span>
            </Nav.Link>
          </Nav>
          
          <div className="mt-4 pt-4 border-top">
            <div className="d-grid gap-2">
              <button className="btn btn-primary-custom">
                <FaPhone className="me-2" />
                Gọi Đặt Hàng
              </button>
              <small className="text-center text-muted">
                Hotline: 0123.456.789
              </small>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Header;