import React from 'react';
import { Badge } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const CartIcon = ({ itemCount = 0, className = "" }) => {
  return (
    <Link to="/cart" className={`text-decoration-none ${className}`}>
      <span className="position-relative">
        <FaShoppingCart size={20} />
        {itemCount > 0 && (
          <Badge 
            bg="danger" 
            className="position-absolute top-0 start-100 translate-middle rounded-pill"
            style={{ fontSize: '0.7em' }}
          >
            {itemCount > 99 ? '99+' : itemCount}
          </Badge>
        )}
      </span>
    </Link>
  );
};

export default CartIcon;