import React from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import { 
  FaStar, 
  FaRegStar, 
  FaShoppingCart, 
  FaEye,
  FaFire,
  FaBreadSlice,
  FaCookie,
  FaBirthdayCake
} from 'react-icons/fa';
import { AiFillStar } from 'react-icons/ai';
import { BiCake } from 'react-icons/bi';

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: 'Bánh Kem Dâu Tươi',
      price: '250.000đ',
      originalPrice: '300.000đ',
      image: <BiCake size={60} style={{ color: 'var(--primary-color)' }} />,
      rating: 5,
      isHot: true,
      description: 'Bánh kem mềm mịn với dâu tươi ngon ngọt'
    },
    {
      id: 2,
      name: 'Cupcake Chocolate',
      price: '35.000đ',
      originalPrice: null,
      image: <FaBirthdayCake size={60} style={{ color: 'var(--accent-color)' }} />,
      rating: 5,
      isNew: true,
      description: 'Cupcake chocolate đậm đà, thơm ngon'
    },
    {
      id: 3,
      name: 'Bánh Mì Việt Nam',
      price: '25.000đ',
      originalPrice: null,
      image: <FaBreadSlice size={60} style={{ color: 'var(--secondary-color)' }} />,
      rating: 4,
      description: 'Bánh mì giòn rụm, nhân đầy đặn'
    },
    {
      id: 4,
      name: 'Cookies Bơ',
      price: '120.000đ',
      originalPrice: null,
      image: <FaCookie size={60} style={{ color: 'var(--primary-color)' }} />,
      rating: 5,
      description: 'Cookies bơ thơm ngon, giòn tan'
    },
    {
      id: 5,
      name: 'Bánh Sinh Nhật',
      price: '450.000đ',
      originalPrice: '500.000đ',
      image: <FaBirthdayCake size={60} style={{ color: 'var(--primary-color)' }} />,
      rating: 5,
      isHot: true,
      description: 'Bánh sinh nhật đẹp mắt, ngon miệng'
    },
    {
      id: 6,
      name: 'Donut Ngọt Ngào',
      price: '40.000đ',
      originalPrice: null,
      image: <BiCake size={60} style={{ color: 'var(--accent-color)' }} />,
      rating: 4,
      isNew: true,
      description: 'Donut mềm mịn với lớp glaze ngọt ngào'
    }
  ];

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<FaStar key={i} className="text-warning" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-warning" />);
      }
    }
    return stars;
  };

  return (
    <section className="featured-products py-5" style={{ background: 'var(--bg-light)' }}>
      <Container>
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold mb-3">
            Sản Phẩm Nổi Bật <AiFillStar className="text-warning" />
          </h2>
          <p className="lead text-muted">
            Những chiếc bánh được yêu thích nhất tại Sweet Bakery
          </p>
        </div>

        <Row>
          {products.map((product) => (
            <Col lg={4} md={6} className="mb-4" key={product.id}>
              <Card className="h-100 position-relative product-card">
                {/* Badge */}
                {product.isHot && (
                  <Badge 
                    bg="danger" 
                    className="position-absolute top-0 start-0 m-3 z-3"
                    style={{ fontSize: '0.8rem' }}
                  >
                    <FaFire className="me-1" /> Hot
                  </Badge>
                )}
                {product.isNew && (
                  <Badge 
                    bg="success" 
                    className="position-absolute top-0 start-0 m-3 z-3"
                    style={{ fontSize: '0.8rem' }}
                  >
                    <AiFillStar className="me-1" /> New
                  </Badge>
                )}

                {                /* Product Image */}
                <div 
                  className="d-flex align-items-center justify-content-center"
                  style={{
                    height: '200px',
                    background: 'linear-gradient(135deg, #fff 0%, #f8f9fa 100%)'
                  }}
                >
                  {product.image}
                </div>

                <Card.Body className="d-flex flex-column">
                  <div className="mb-2">
                    <span className="text-warning small">
                      {renderStars(product.rating)}
                    </span>
                    <span className="text-muted small ms-2">
                      ({Math.floor(Math.random() * 50) + 10} đánh giá)
                    </span>
                  </div>

                  <Card.Title className="h5 mb-2">{product.name}</Card.Title>
                  <Card.Text className="text-muted small mb-3 flex-grow-1">
                    {product.description}
                  </Card.Text>

                  <div className="price-section mb-3">
                    <span className="h5 fw-bold" style={{ color: 'var(--primary-color)' }}>
                      {product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="text-muted text-decoration-line-through ms-2">
                        {product.originalPrice}
                      </span>
                    )}
                  </div>

                  <div className="d-grid gap-2">
                    <Button variant="outline-primary" size="sm">
                      <FaEye className="me-2" />
                      Xem Chi Tiết
                    </Button>
                    <Button className="btn-primary-custom" size="sm">
                      <FaShoppingCart className="me-2" />
                      Thêm Vào Giỏ
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <div className="text-center mt-5">
          <Button 
            variant="outline-dark" 
            size="lg" 
            className="px-5"
          >
            <BiCake className="me-2" />
            Xem Tất Cả Sản Phẩm
          </Button>
        </div>
      </Container>

      <style jsx>{`
        .product-card {
          transition: all 0.3s ease;
          cursor: pointer;
        }
        
        .product-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.15) !important;
        }
        
        @media (max-width: 768px) {
          .product-card:hover {
            transform: none;
          }
        }
      `}</style>
    </section>
  );
};

export default FeaturedProducts;