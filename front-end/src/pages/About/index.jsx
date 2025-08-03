import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const About = () => {
  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col lg={8} className="text-center">
          <h1 className="display-4 fw-bold mb-4">Về Sweet Bakery</h1>
          <p className="lead">
            Trang này đang được phát triển. Vui lòng quay lại sau!
          </p>
          <div style={{ fontSize: '5rem' }}>🚧</div>
        </Col>
      </Row>
    </Container>
  );
};

export default About;