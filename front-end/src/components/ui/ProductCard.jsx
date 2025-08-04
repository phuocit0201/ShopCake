import React from 'react';
import { Card, Button, Badge } from 'react-bootstrap';
import { 
  FaStar, 
  FaRegStar, 
  FaShoppingCart, 
  FaEye,
  FaFire
} from 'react-icons/fa';
import { AiFillStar } from 'react-icons/ai';

const ProductCard = ({ product, onViewDetails, onAddToCart }) => {
  // Render stars for rating
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

  // Format price
  const formatPrice = (price) => {
    return new Intl.NumberFormat('vi-VN').format(price) + 'đ';
  };

  return (
    <Card className="h-100 position-relative product-card">
      {/* Badges */}
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

      {/* Product Image */}
      <div 
        className="d-flex align-items-center justify-content-center product-image"
        style={{
          height: '200px',
          background: 'linear-gradient(135deg, #fff 0%, #f8f9fa 100%)',
          cursor: 'pointer'
        }}
        onClick={() => onViewDetails && onViewDetails(product)}
      >
        {product.image}
      </div>

      <Card.Body className="d-flex flex-column">
        {/* Rating */}
        <div className="mb-2">
          <span className="text-warning small">
            {renderStars(product.rating)}
          </span>
          <span className="text-muted small ms-2">
            ({Math.floor(Math.random() * 50) + 10})
          </span>
        </div>

        {/* Product Name */}
        <Card.Title 
          className="h6 mb-2 product-name" 
          style={{ cursor: 'pointer' }}
          onClick={() => onViewDetails && onViewDetails(product)}
        >
          {product.name}
        </Card.Title>

        {/* Description */}
        <Card.Text className="text-muted small mb-3 flex-grow-1">
          {product.description}
        </Card.Text>

        {/* Price */}
        <div className="price-section mb-3">
          <span className="h6 fw-bold" style={{ color: 'var(--primary-color)' }}>
            {formatPrice(product.price)}
          </span>
          {product.originalPrice && (
            <span className="text-muted text-decoration-line-through ms-2 small">
              {formatPrice(product.originalPrice)}
            </span>
          )}
          {product.originalPrice && (
            <div className="text-success small fw-bold">
              Tiết kiệm: {formatPrice(product.originalPrice - product.price)}
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="d-grid gap-2">
          <Button 
            variant="outline-primary" 
            size="sm"
            onClick={() => onViewDetails && onViewDetails(product)}
          >
            <FaEye className="me-2" />
            Chi Tiết
          </Button>
          <Button 
            className="btn-primary-custom" 
            size="sm"
            onClick={() => onAddToCart && onAddToCart(product)}
          >
            <FaShoppingCart className="me-2" />
            Thêm Vào Giỏ
          </Button>
        </div>
      </Card.Body>

      <style jsx>{`
        .product-card {
          transition: all 0.3s ease;
          cursor: pointer;
          border: none;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        
        .product-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.15) !important;
        }
        
        .product-image:hover {
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%) !important;
        }
        
        .product-name:hover {
          color: var(--primary-color) !important;
        }
        
        .btn-primary-custom {
          background-color: var(--primary-color);
          border-color: var(--primary-color);
          border-radius: 25px;
          font-weight: 500;
          transition: all 0.3s ease;
        }
        
        .btn-primary-custom:hover {
          background-color: var(--secondary-color);
          border-color: var(--secondary-color);
          transform: translateY(-2px);
        }
        
        @media (max-width: 768px) {
          .product-card:hover {
            transform: none;
          }
          
          .btn-primary-custom:hover {
            transform: none;
          }
        }
      `}</style>
    </Card>
  );
};

export default ProductCard;