import React from 'react';
import { Row, Col, Form, InputGroup, Button } from 'react-bootstrap';
import { 
  FaSearch,
  FaFilter,
} from 'react-icons/fa';

const ProductFilters = ({
  searchTerm,
  setSearchTerm,
  selectedCategory,
  setSelectedCategory,
  sortBy,
  setSortBy,
  categories,
  sortOptions,
  totalResults,
  onClearFilters
}) => {
  return (
    <>
      {/* Search and Sort Controls */}
      <Row className="mb-4">
        <Col lg={8} md={7} className="mb-3">
          <InputGroup size="lg">
            <InputGroup.Text>
              <FaSearch />
            </InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="Tìm kiếm sản phẩm theo tên, mô tả..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="py-3"
            />
            {searchTerm && (
              <Button 
                variant="outline-secondary" 
                onClick={() => setSearchTerm('')}
              >
                ✕
              </Button>
            )}
          </InputGroup>
        </Col>
        <Col lg={2} md={2} className="mb-3">
          <Form.Select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="py-3"
            size="lg"
          >
            {categories.map(category => (
              <option key={category.value} value={category.value}>
                {category.label}
              </option>
            ))}
          </Form.Select>
        </Col>
        <Col lg={2} md={3} className="mb-3">
          <Form.Select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="py-3"
            size="lg"
          >
            {sortOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </Form.Select>
        </Col>
      </Row>

      {/* Category Filter Buttons */}
      <Row className="mb-4">
        <Col>
          <div className="d-flex flex-wrap gap-2 justify-content-center">
            {categories.map(category => (
              <Button
                key={category.value}
                variant={selectedCategory === category.value ? "primary" : "outline-primary"}
                size="sm"
                onClick={() => setSelectedCategory(category.value)}
                className="mb-2 px-3 py-2"
                style={{
                  borderRadius: '25px',
                  fontWeight: '500'
                }}
              >
                {category.icon}
                <span className="ms-2 d-none d-sm-inline">{category.label}</span>
              </Button>
            ))}
          </div>
        </Col>
      </Row>

      {/* Results Info and Clear Filters */}
      <Row className="mb-3">
        <Col md={8}>
          <p className="text-muted mb-0 d-flex align-items-center">
            <FaFilter className="me-2" />
            <span>
              Hiển thị <strong>{totalResults}</strong> sản phẩm
              {searchTerm && (
                <span> cho "<strong>{searchTerm}</strong>"</span>
              )}
              {selectedCategory !== 'all' && (
                <span> trong danh mục "<strong>{categories.find(c => c.value === selectedCategory)?.label}</strong>"</span>
              )}
            </span>
          </p>
        </Col>
        <Col md={4} className="text-md-end">
          {(searchTerm || selectedCategory !== 'all') && (
            <Button 
              variant="outline-secondary" 
              size="sm"
              onClick={onClearFilters}
              className="mt-2 mt-md-0"
            >
              Xóa Bộ Lọc
            </Button>
          )}
        </Col>
      </Row>
    </>
  );
};

export default ProductFilters;