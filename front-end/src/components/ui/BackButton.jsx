import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const BackButton = ({
  to,
  onClick,
  variant = 'light',
  className = '',
  size = 'md',
  showTextMdUp = true,
  text = 'Quay lại',
}) => {
  const elementProps = to ? { as: Link, to } : { onClick };
  const combinedClassName = `border back-btn ${className}`.trim();

  return (
    <>
      <Button variant={variant} className={combinedClassName} size={size} {...elementProps}>
        <FaArrowLeft className={showTextMdUp ? 'me-md-2' : ''} />
        {showTextMdUp && <span className="d-none d-md-inline">{text}</span>}
      </Button>
      <style jsx>{`
        @media (max-width: 767.98px) {
          .back-btn {
            width: 40px;
            height: 36px;
            padding: 0;
            display: inline-flex;
            align-items: center;
            justify-content: center;
          }
        }

        .back-button {
          border-radius: 20px;
          transition: all 0.3s ease;
        }
      `}</style>
    </>
  );
};

export default BackButton;


