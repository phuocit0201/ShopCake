import React, { useState, useMemo } from 'react';
import { Container, Row, Col, Card, Button, Badge, Tab, Nav } from 'react-bootstrap';
import { 
  FaArrowLeft,
  FaStar,
  FaRegStar,
  FaHeart,
  FaRegHeart,
  FaShoppingCart,
  FaPlus,
  FaMinus,
  FaShare,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaCheck,
  FaTruck,
  FaShieldAlt,
  FaPhone,
  FaTag,
  FaInfoCircle
} from 'react-icons/fa';
import { BiCake } from 'react-icons/bi';
import { Link, useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);

  // Sample product data - in real app this would come from API
  const product = useMemo(() => ({
    id: parseInt(id) || 1,
    name: 'Bánh Kem Dâu Tươi Cao Cấp',
    price: 250000,
    originalPrice: 300000,
    discount: 17,
    rating: 4.8,
    reviewCount: 124,
    category: 'Bánh Kem',
    tags: ['Dâu tây', 'Kem tươi', 'Bánh sinh nhật', 'Cao cấp'],
    inStock: true,
    stockCount: 15,
    description: 'Bánh kem dâu tươi cao cấp được làm từ những nguyên liệu tươi ngon nhất. Lớp bánh mềm mịn kết hợp với kem tươi béo ngậy và dâu tây tươi ngọt tạo nên một hương vị tuyệt vời.',
    images: [
      'https://miacake.vn/wp-content/uploads/IMG_E9532.jpg',
      'https://miacake.vn/wp-content/uploads/IMG_E9532.jpg',
      'https://miacake.vn/wp-content/uploads/IMG_E9532.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-A4LYSiZXkumJQNZ1JlwEteznAQ3jxWu5Kg&s'
    ],
    ingredients: [
      'Bột mì cao cấp',
      'Trứng gà tươi',
      'Kem tươi nguyên chất',
      'Dâu tây Đà Lạt',
      'Đường mía tinh luyện',
      'Bơ nhạt Anchor',
      'Vanilla Madagascar'
    ],
    nutritionInfo: {
      calories: '285 kcal/100g',
      protein: '4.5g',
      carbs: '32g',
      fat: '15g',
      sugar: '28g'
    },
    specifications: {
      size: 'Đường kính 20cm',
      weight: '800g',
      serves: '6-8 người',
      shelf_life: '3 ngày trong tủ lạnh',
      storage: 'Bảo quản trong tủ lạnh 2-8°C'
    },
    features: [
      { icon: <FaCheck />, text: 'Nguyên liệu tươi 100%' },
      { icon: <FaShieldAlt />, text: 'An toàn vệ sinh thực phẩm' },
      { icon: <FaTruck />, text: 'Giao hàng tận nơi' },
      { icon: <FaPhone />, text: 'Hỗ trợ 24/7' }
    ]
  }), [id]);

  // Related products
  const relatedProducts = useMemo(() => [
    {
      id: 2,
      name: 'Bánh Kem Chocolate',
      price: 280000,
      originalPrice: 320000,
      image: 'https://miacake.vn/wp-content/uploads/IMG_E9532.jpg',
      rating: 4.9,
      isHot: true
    },
    {
      id: 3,
      name: 'Bánh Kem Vanilla',
      price: 220000,
      originalPrice: null,
      image: 'https://miacake.vn/wp-content/uploads/IMG_E9532.jpg',
      rating: 4.7,
      isNew: true
    },
    {
      id: 4,
      name: 'Bánh Kem Matcha',
      price: 260000,
      originalPrice: null,
      image: 'https://miacake.vn/wp-content/uploads/IMG_E9532.jpg',
      rating: 4.6,
      isHot: false
    }
  ], []);

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND'
    }).format(amount);
  };

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={i} className="text-warning" />);
    }

    if (hasHalfStar) {
      stars.push(<FaStar key="half" className="text-warning" style={{ opacity: 0.5 }} />);
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<FaRegStar key={`empty-${i}`} className="text-muted" />);
    }

    return stars;
  };

  const handleQuantityChange = (delta) => {
    const newQuantity = quantity + delta;
    if (newQuantity >= 1 && newQuantity <= product.stockCount) {
      setQuantity(newQuantity);
    }
  };

  const handleAddToCart = () => {
    console.log('Added to cart:', { product, quantity });
    alert(`Đã thêm ${quantity} ${product.name} vào giỏ hàng!`);
  };

  const ProductCard = ({ product: relatedProduct }) => (
    <Card className="h-100 border-0 shadow-sm product-card">
      <div className="position-relative">
        <Card.Img 
          variant="top" 
          src={relatedProduct.image} 
          alt={relatedProduct.name}
          style={{ height: '200px', objectFit: 'cover' }}
        />
        {relatedProduct.isHot && (
          <Badge bg="danger" className="position-absolute top-0 start-0 m-2">
            Hot
          </Badge>
        )}
        {relatedProduct.isNew && (
          <Badge bg="success" className="position-absolute top-0 start-0 m-2">
            Mới
          </Badge>
        )}
      </div>
      <Card.Body>
        <Card.Title className="h6">{relatedProduct.name}</Card.Title>
        <div className="mb-2">
          {renderStars(relatedProduct.rating)}
          <small className="text-muted ms-1">({relatedProduct.rating})</small>
        </div>
        <div className="price-container mb-3">
          <span className="current-price fw-bold text-primary">
            {formatCurrency(relatedProduct.price)}
          </span>
          {relatedProduct.originalPrice && (
            <span className="original-price text-muted text-decoration-line-through ms-2">
              {formatCurrency(relatedProduct.originalPrice)}
            </span>
          )}
        </div>
        <Button 
          variant="outline-primary" 
          size="sm" 
          className="w-100"
          as={Link}
          to={`/products/${relatedProduct.id}`}
        >
          Xem Chi Tiết
        </Button>
      </Card.Body>
    </Card>
  );

  return (
    <div className="product-detail-page py-5">
      <Container>
        {/* Breadcrumb */}
        <div className="d-flex align-items-center mb-4">
          <Button 
            as={Link} 
            to="/products" 
            variant="outline-secondary" 
            className="me-3"
          >
            <FaArrowLeft />
          </Button>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item">
                <Link to="/" className="text-decoration-none">Trang chủ</Link>
              </li>
              <li className="breadcrumb-item">
                <Link to="/products" className="text-decoration-none">Sản phẩm</Link>
              </li>
              <li className="breadcrumb-item active">{product.name}</li>
            </ol>
          </nav>
        </div>

        <Row>
          {/* Product Images */}
          <Col lg={6} className="mb-4">
            <Card className="border-0 shadow-sm">
              <div className="main-image-container position-relative">
                <img 
                  src={product.images[selectedImage]} 
                  alt={product.name}
                  className="img-fluid rounded"
                  style={{ width: '100%', height: '400px', objectFit: 'cover' }}
                />
                {product.discount && (
                  <Badge bg="danger" className="position-absolute top-0 end-0 m-3 fs-6">
                    -{product.discount}%
                  </Badge>
                )}
              </div>
              
              {/* Thumbnail Images */}
              <div className="thumbnail-container p-3">
                <Row className="g-2">
                  {product.images.map((image, index) => (
                    <Col xs={3} key={index}>
                      <img 
                        src={image} 
                        alt={`${product.name} ${index + 1}`}
                        className={`img-fluid rounded cursor-pointer thumbnail ${
                          selectedImage === index ? 'selected' : ''
                        }`}
                        style={{ height: '80px', objectFit: 'cover', width: '100%' }}
                        onClick={() => setSelectedImage(index)}
                      />
                    </Col>
                  ))}
                </Row>
              </div>
            </Card>
          </Col>

          {/* Product Info */}
          <Col lg={6}>
            <div className="product-info">
              {/* Category & Tags */}
              <div className="mb-3">
                <Badge bg="light" text="dark" className="me-2">
                  <FaTag className="me-1" />
                  {product.category}
                </Badge>
                {product.tags.map(tag => (
                  <Badge key={tag} bg="outline-secondary" className="me-1">
                    {tag}
                  </Badge>
                ))}
              </div>

              {/* Product Name */}
              <h1 className="mb-3">{product.name}</h1>

              {/* Rating & Reviews */}
              <div className="rating-container mb-3 d-flex align-items-center">
                <div className="stars me-2">
                  {renderStars(product.rating)}
                </div>
                <span className="rating-text me-2">
                  <strong>{product.rating}</strong>
                </span>
                <span className="text-muted">
                  ({product.reviewCount} đánh giá)
                </span>
              </div>

              {/* Price */}
              <div className="price-section mb-4">
                <div className="current-price text-primary fw-bold fs-2 mb-1">
                  {formatCurrency(product.price)}
                </div>
                {product.originalPrice && (
                  <div className="d-flex align-items-center">
                    <span className="original-price text-muted text-decoration-line-through me-2">
                      {formatCurrency(product.originalPrice)}
                    </span>
                    <Badge bg="danger">
                      Tiết kiệm {formatCurrency(product.originalPrice - product.price)}
                    </Badge>
                  </div>
                )}
              </div>

              {/* Stock Status */}
              <div className="stock-status mb-4">
                {product.inStock ? (
                  <div className="text-success d-flex align-items-center">
                    <FaCheck className="me-2" />
                    <span>Còn hàng ({product.stockCount} sản phẩm)</span>
                  </div>
                ) : (
                  <div className="text-danger d-flex align-items-center">
                    <FaInfoCircle className="me-2" />
                    <span>Hết hàng</span>
                  </div>
                )}
              </div>

              {/* Description */}
              <div className="description mb-4">
                <p className="text-muted">{product.description}</p>
              </div>

              {/* Features */}
              <div className="features mb-4">
                <Row>
                  {product.features.map((feature, index) => (
                    <Col md={6} className="mb-2" key={index}>
                      <div className="d-flex align-items-center">
                        <span className="text-success me-2">{feature.icon}</span>
                        <small>{feature.text}</small>
                      </div>
                    </Col>
                  ))}
                </Row>
              </div>

              {/* Quantity & Add to Cart */}
              {product.inStock && (
                <div className="purchase-section">
                  <Row className="align-items-center mb-4">
                    <Col md={4}>
                      <div className="quantity-selector d-flex align-items-center">
                        <Button 
                          variant="outline-secondary" 
                          size="sm"
                          onClick={() => handleQuantityChange(-1)}
                          disabled={quantity <= 1}
                        >
                          <FaMinus />
                        </Button>
                        <span className="quantity-display mx-3 fw-bold fs-5">
                          {quantity}
                        </span>
                        <Button 
                          variant="outline-secondary" 
                          size="sm"
                          onClick={() => handleQuantityChange(1)}
                          disabled={quantity >= product.stockCount}
                        >
                          <FaPlus />
                        </Button>
                      </div>
                    </Col>
                    <Col md={8}>
                      <div className="action-buttons d-flex gap-2">
                        <Button 
                          variant="primary" 
                          size="lg"
                          className="flex-grow-1"
                          onClick={handleAddToCart}
                        >
                          <FaShoppingCart className="me-2" />
                          Thêm Vào Giỏ - {formatCurrency(product.price * quantity)}
                        </Button>
                        <Button 
                          variant={isFavorite ? "danger" : "outline-danger"}
                          size="lg"
                          onClick={() => setIsFavorite(!isFavorite)}
                        >
                          {isFavorite ? <FaHeart /> : <FaRegHeart />}
                        </Button>
                      </div>
                    </Col>
                  </Row>

                  {/* Share */}
                  <div className="share-section text-center">
                    <small className="text-muted me-3">Chia sẻ:</small>
                    <Button variant="link" size="sm" className="p-1 me-2">
                      <FaFacebook style={{ color: '#1877f2' }} />
                    </Button>
                    <Button variant="link" size="sm" className="p-1 me-2">
                      <FaTwitter style={{ color: '#1da1f2' }} />
                    </Button>
                    <Button variant="link" size="sm" className="p-1 me-2">
                      <FaInstagram style={{ color: '#e4405f' }} />
                    </Button>
                    <Button variant="link" size="sm" className="p-1">
                      <FaShare />
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </Col>
        </Row>

        {/* Product Details Tabs */}
        <Row className="mt-5">
          <Col>
            <Card className="border-0 shadow-sm">
              <Tab.Container defaultActiveKey="ingredients">
                <Card.Header className="bg-white">
                  <Nav variant="tabs" className="border-0">
                    <Nav.Item>
                      <Nav.Link eventKey="ingredients">Thành Phần</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="nutrition">Dinh Dưỡng</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="specifications">Thông Số</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Card.Header>
                <Card.Body>
                  <Tab.Content>
                    <Tab.Pane eventKey="ingredients">
                      <h5 className="mb-3">Thành Phần Nguyên Liệu</h5>
                      <Row>
                        {product.ingredients.map((ingredient, index) => (
                          <Col md={6} className="mb-2" key={index}>
                            <div className="d-flex align-items-center">
                              <FaCheck className="text-success me-2" />
                              <span>{ingredient}</span>
                            </div>
                          </Col>
                        ))}
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="nutrition">
                      <h5 className="mb-3">Thông Tin Dinh Dưỡng</h5>
                      <Row>
                        {Object.entries(product.nutritionInfo).map(([key, value]) => (
                          <Col md={6} className="mb-3" key={key}>
                            <div className="d-flex justify-content-between border-bottom pb-2">
                              <span className="fw-semibold">
                                {key === 'calories' && 'Calories'}
                                {key === 'protein' && 'Protein'}
                                {key === 'carbs' && 'Carbohydrate'}
                                {key === 'fat' && 'Chất béo'}
                                {key === 'sugar' && 'Đường'}
                              </span>
                              <span>{value}</span>
                            </div>
                          </Col>
                        ))}
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="specifications">
                      <h5 className="mb-3">Thông Số Kỹ Thuật</h5>
                      <Row>
                        {Object.entries(product.specifications).map(([key, value]) => (
                          <Col md={6} className="mb-3" key={key}>
                            <div className="d-flex justify-content-between border-bottom pb-2">
                              <span className="fw-semibold">
                                {key === 'size' && 'Kích thước'}
                                {key === 'weight' && 'Trọng lượng'}
                                {key === 'serves' && 'Phục vụ'}
                                {key === 'shelf_life' && 'Hạn sử dụng'}
                                {key === 'storage' && 'Bảo quản'}
                              </span>
                              <span>{value}</span>
                            </div>
                          </Col>
                        ))}
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Card.Body>
              </Tab.Container>
            </Card>
          </Col>
        </Row>

        {/* Related Products */}
        <Row className="mt-5">
          <Col>
            <h3 className="mb-4 d-flex align-items-center">
              <BiCake className="me-2 text-primary" />
              Sản Phẩm Liên Quan
            </h3>
            <Row>
              {relatedProducts.map(relatedProduct => (
                <Col lg={4} md={6} className="mb-4" key={relatedProduct.id}>
                  <ProductCard product={relatedProduct} />
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>

      <style jsx>{`
        .product-detail-page {
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
          min-height: 100vh;
        }
        
        .thumbnail {
          border: 2px solid transparent;
          transition: all 0.3s ease;
          cursor: pointer;
        }
        
        .thumbnail:hover {
          border-color: var(--primary-color);
        }
        
        .thumbnail.selected {
          border-color: var(--primary-color);
          box-shadow: 0 0 10px rgba(var(--primary-color-rgb), 0.3);
        }
        
        .quantity-selector {
          background: #f8f9fa;
          border-radius: 25px;
          padding: 0.5rem;
          display: inline-flex;
          align-items: center;
        }
        
        .quantity-display {
          min-width: 40px;
          text-align: center;
        }
        
        .product-card {
          transition: all 0.3s ease;
        }
        
        .product-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.15) !important;
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
        
        .btn-outline-primary, .btn-outline-secondary {
          border-radius: 25px;
          transition: all 0.3s ease;
        }
        
        .btn-outline-primary:hover, .btn-outline-secondary:hover {
          transform: translateY(-2px);
        }
        
        .card {
          border-radius: 15px;
          overflow: hidden;
        }
        
        .nav-tabs .nav-link {
          border: none;
          color: var(--bs-gray-600);
          font-weight: 500;
        }
        
        .nav-tabs .nav-link.active {
          color: var(--primary-color);
          border-bottom: 2px solid var(--primary-color);
          background: none;
        }
        
        .breadcrumb-item a {
          color: var(--primary-color);
        }
        
        @media (max-width: 768px) {
          .product-card:hover {
            transform: none;
          }
          
          .quantity-display {
            font-size: 1.1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default ProductDetail;