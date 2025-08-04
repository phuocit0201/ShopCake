import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const EmptyState = ({ 
  icon, 
  title, 
  description, 
  actionText, 
  actionLink, 
  className = "" 
}) => {
  return (
    <div className={`text-center py-5 ${className}`}>
      <div 
        className="empty-state-icon mb-4" 
        style={{ 
          fontSize: '5rem', 
          opacity: 0.3, 
          color: 'var(--primary-color)' 
        }}
      >
        {icon}
      </div>
      <h2 className="mb-3 fw-bold">{title}</h2>
      <p className="text-muted mb-4 fs-6" style={{ maxWidth: '400px', margin: '0 auto' }}>
        {description}
      </p>
      {actionText && actionLink && (
        <Button 
          as={Link} 
          to={actionLink} 
          variant="primary" 
          size="lg"
          className="px-4"
          style={{
            borderRadius: '25px',
            fontWeight: '600'
          }}
        >
          {actionText}
        </Button>
      )}
    </div>
  );
};

export default EmptyState;