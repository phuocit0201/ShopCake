import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ActionButton = ({
  to,
  onClick,
  variant = 'outline-primary',
  size = 'sm',
  className = '',
  icon = null,
  children,
}) => {
  const elementProps = to ? { as: Link, to } : { onClick };
  const classes = `action-btn d-inline-flex align-items-center justify-content-center ${className}`.trim();

  return (
    <>
      <Button variant={variant} size={size} className={classes} {...elementProps}>
        {icon ? <span className="action-btn-icon" aria-hidden="true">{icon}</span> : null}
        <span className="action-btn-label">{children}</span>
      </Button>
      <style jsx>{`
        .action-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 38px; /* slightly taller for better tap target (~+5px) */
        }
        .action-btn-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          margin-right: 0.25rem;
          line-height: 1;
          vertical-align: middle;
        }
        .action-btn-icon :global(svg) {
          display: block;
        }
        .action-btn-label {
          line-height: 1;
        }
      `}</style>
    </>
  );
};

export default ActionButton;


