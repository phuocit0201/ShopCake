import React, { useState, useMemo } from 'react';
import { Container, Row, Col, Button, Pagination } from 'react-bootstrap';
import { 
  FaPhone,
  FaSearch,
  FaBirthdayCake,
  FaBreadSlice,
  FaCookie
} from 'react-icons/fa';
import { BiCake } from 'react-icons/bi';
import ProductCard from '../../components/ui/ProductCard';
import ProductFilters from '../../components/ui/ProductFilters';

const Products = () => {
  // State for filters and search
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('name');

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;



  // Categories for filter
  const categories = [
    { value: 'all', label: 'Tất Cả Sản Phẩm', icon: <BiCake /> },
    { value: 'banh-kem', label: 'Bánh Kem', icon: <BiCake /> },
    { value: 'cupcake', label: 'Cupcake', icon: <FaBirthdayCake /> },
    { value: 'banh-mi', label: 'Bánh Mì', icon: <FaBreadSlice /> },
    { value: 'cookies', label: 'Cookies', icon: <FaCookie /> },
    { value: 'banh-sinh-nhat', label: 'Bánh Sinh Nhật', icon: <FaBirthdayCake /> },
    { value: 'donut', label: 'Donut', icon: <BiCake /> }
  ];

  // Sort options
  const sortOptions = [
    { value: 'name', label: 'Tên A-Z' },
    { value: 'name-desc', label: 'Tên Z-A' },
    { value: 'price', label: 'Giá Thấp - Cao' },
    { value: 'price-desc', label: 'Giá Cao - Thấp' },
    { value: 'rating', label: 'Đánh Giá Cao Nhất' }
  ];

  // Filter and sort products
  const filteredAndSortedProducts = useMemo(() => {
    // Sample products data
    const allProducts = [
      {
        id: 1,
        name: 'Bánh Kem Dâu Tươi',
        price: 250000,
        originalPrice: 300000,
        image: <BiCake size={60} style={{ color: 'var(--primary-color)' }} />,
        rating: 5,
        isHot: true,
        category: 'banh-kem',
        description: 'Bánh kem mềm mịn với dâu tươi ngon ngọt, được làm từ kem tươi cao cấp'
      },
      {
        id: 2,
        name: 'Cupcake Chocolate',
        price: 35000,
        originalPrice: null,
        image: <FaBirthdayCake size={60} style={{ color: 'var(--accent-color)' }} />,
        rating: 5,
        isNew: true,
        category: 'cupcake',
        description: 'Cupcake chocolate đậm đà, thơm ngon với lớp kem tươi bên trên'
      },
      {
        id: 3,
        name: 'Bánh Mì Việt Nam',
        price: 25000,
        originalPrice: null,
        image: <FaBreadSlice size={60} style={{ color: 'var(--secondary-color)' }} />,
        rating: 4,
        category: 'banh-mi',
        description: 'Bánh mì giòn rụm, nhân đầy đặn với thịt nguội và pate'
      },
      {
        id: 4,
        name: 'Cookies Bơ',
        price: 120000,
        originalPrice: null,
        image: <FaCookie size={60} style={{ color: 'var(--primary-color)' }} />,
        rating: 5,
        category: 'cookies',
        description: 'Cookies bơ thơm ngon, giòn tan trong miệng'
      },
      {
        id: 5,
        name: 'Bánh Sinh Nhật Vanilla',
        price: 450000,
        originalPrice: 500000,
        image: <FaBirthdayCake size={60} style={{ color: 'var(--primary-color)' }} />,
        rating: 5,
        isHot: true,
        category: 'banh-sinh-nhat',
        description: 'Bánh sinh nhật vanilla 3 tầng đẹp mắt, ngon miệng'
      },
      {
        id: 6,
        name: 'Donut Ngọt Ngào',
        price: 40000,
        originalPrice: null,
        image: <BiCake size={60} style={{ color: 'var(--accent-color)' }} />,
        rating: 4,
        isNew: true,
        category: 'donut',
        description: 'Donut mềm mịn với lớp glaze ngọt ngào nhiều màu sắc'
      },
      {
        id: 7,
        name: 'Bánh Kem Chocolate',
        price: 280000,
        originalPrice: null,
        image: <BiCake size={60} style={{ color: 'var(--secondary-color)' }} />,
        rating: 5,
        category: 'banh-kem',
        description: 'Bánh kem chocolate đậm đà với lớp ganache mềm mịn'
      },
      {
        id: 8,
        name: 'Cupcake Vanilla',
        price: 32000,
        originalPrice: null,
        image: <FaBirthdayCake size={60} style={{ color: 'var(--primary-color)' }} />,
        rating: 4,
        category: 'cupcake',
        description: 'Cupcake vanilla nhẹ nhàng với kem bơ tươi'
      },
      {
        id: 9,
        name: 'Bánh Mì Sandwich',
        price: 35000,
        originalPrice: null,
        image: <FaBreadSlice size={60} style={{ color: 'var(--accent-color)' }} />,
        rating: 4,
        category: 'banh-mi',
        description: 'Sandwich với nhiều loại nhân thịt và rau tươi'
      },
      {
        id: 10,
        name: 'Cookies Chocolate Chip',
        price: 150000,
        originalPrice: null,
        image: <FaCookie size={60} style={{ color: 'var(--secondary-color)' }} />,
        rating: 5,
        isHot: true,
        category: 'cookies',
        description: 'Cookies với chocolate chip thơm ngon, giòn rụm'
      },
      {
        id: 11,
        name: 'Bánh Sinh Nhật Chocolate',
        price: 480000,
        originalPrice: null,
        image: <FaBirthdayCake size={60} style={{ color: 'var(--secondary-color)' }} />,
        rating: 5,
        category: 'banh-sinh-nhat',
        description: 'Bánh sinh nhật chocolate 2 tầng với decorating đẹp mắt'
      },
      {
        id: 12,
        name: 'Donut Glazed',
        price: 38000,
        originalPrice: null,
        image: <BiCake size={60} style={{ color: 'var(--primary-color)' }} />,
        rating: 4,
        category: 'donut',
        description: 'Donut truyền thống với lớp glaze trắng ngọt ngào'
      },
      {
        id: 13,
        name: 'Donut Glazed 1',
        price: 39000,
        originalPrice: null,
        image: <BiCake size={60} style={{ color: 'var(--primary-color)' }} />,
        rating: 4,
        category: 'donut',
        description: 'Donut truyền thống với lớp glaze trắng ngọt ngào'
      }
    ];

    let filtered = allProducts.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           product.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });

    // Sort products
    filtered.sort((a, b) => {
              switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'name-desc':
          return b.name.localeCompare(a.name);
        case 'price':
          return a.price - b.price;
        case 'price-desc':
          return b.price - a.price;
        case 'rating':
          return b.rating - a.rating;
        default:
          return 0;
      }
    });

    return filtered;
  }, [searchTerm, selectedCategory, sortBy]);

  // Pagination
  const totalPages = Math.ceil(filteredAndSortedProducts.length / itemsPerPage);
  const currentProducts = filteredAndSortedProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Handle product actions
  const handleViewDetails = (product) => {
    // TODO: Navigate to product detail page
    console.log('View details for:', product.name);
  };

  const handleAddToCart = (product) => {
    // TODO: Add to cart functionality
    console.log('Add to cart:', product.name);
    // You can add toast notification here
  };

  const handleClearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('all');
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    // Scroll to top of products section
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="products-page py-5">
      <Container>
        {/* Page Header */}
        <div className="text-center mb-5">
          <h1 className="display-4 fw-bold mb-3">
            Sản Phẩm Của Chúng Tôi <BiCake style={{ color: 'var(--primary-color)' }} />
          </h1>
          <p className="lead text-muted">
            Khám phá bộ sưu tập bánh ngọt đa dạng và hấp dẫn
          </p>
        </div>

        {/* Filters and Search */}
        <ProductFilters
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          sortBy={sortBy}
          setSortBy={setSortBy}
          categories={categories}
          sortOptions={sortOptions}
          totalResults={filteredAndSortedProducts.length}
          onClearFilters={handleClearFilters}
        />

        {/* Products Grid */}
        {currentProducts.length > 0 ? (
          <Row>
            {currentProducts.map((product) => (
              <Col lg={3} md={4} sm={6} className="mb-4" key={product.id}>
                <ProductCard
                  product={product}
                  onViewDetails={handleViewDetails}
                  onAddToCart={handleAddToCart}
                />
              </Col>
            ))}
          </Row>
        ) : (
          <div className="text-center py-5">
            <div style={{ fontSize: '4rem', opacity: 0.3 }}>
              <FaSearch />
            </div>
            <h4 className="mt-3 text-muted">Không tìm thấy sản phẩm</h4>
            <p className="text-muted">
              Hãy thử tìm kiếm với từ khóa khác hoặc chọn danh mục khác
            </p>
            <Button 
              variant="outline-primary"
              onClick={handleClearFilters}
            >
              Xem Tất Cả Sản Phẩm
            </Button>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <Row className="mt-5">
            <Col>
              {/* Mobile Pagination Info */}
              <div className="d-block d-md-none text-center mb-3">
                <small className="text-muted">
                  Trang {currentPage} / {totalPages} 
                  <span className="mx-2">•</span>
                  {filteredAndSortedProducts.length} sản phẩm
                </small>
              </div>

              {/* Desktop Pagination */}
              <div className="d-none d-md-flex justify-content-center">
                <Pagination size="lg">
                  <Pagination.First 
                    onClick={() => handlePageChange(1)}
                    disabled={currentPage === 1}
                  />
                  <Pagination.Prev 
                    onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
                    disabled={currentPage === 1}
                  />
                  
                  {Array.from({ length: Math.min(5, totalPages) }, (_, index) => {
                    let pageNum;
                    if (totalPages <= 5) {
                      pageNum = index + 1;
                    } else if (currentPage <= 3) {
                      pageNum = index + 1;
                    } else if (currentPage >= totalPages - 2) {
                      pageNum = totalPages - 4 + index;
                    } else {
                      pageNum = currentPage - 2 + index;
                    }
                    
                    return (
                      <Pagination.Item
                        key={pageNum}
                        active={pageNum === currentPage}
                        onClick={() => handlePageChange(pageNum)}
                      >
                        {pageNum}
                      </Pagination.Item>
                    );
                  })}

                  <Pagination.Next 
                    onClick={() => handlePageChange(Math.min(currentPage + 1, totalPages))}
                    disabled={currentPage === totalPages}
                  />
                  <Pagination.Last 
                    onClick={() => handlePageChange(totalPages)}
                    disabled={currentPage === totalPages}
                  />
                </Pagination>
              </div>

              {/* Mobile Pagination Controls */}
              <div className="d-block d-md-none">
                <Row>
                  <Col xs={6}>
                    <Button 
                      variant="outline-primary" 
                      className="w-100"
                      onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
                      disabled={currentPage === 1}
                    >
                      ← Trang Trước
                    </Button>
                  </Col>
                  <Col xs={6}>
                    <Button 
                      variant="outline-primary" 
                      className="w-100"
                      onClick={() => handlePageChange(Math.min(currentPage + 1, totalPages))}
                      disabled={currentPage === totalPages}
                    >
                      Trang Sau →
                    </Button>
                  </Col>
                </Row>
                
                {/* Quick Page Jump for Mobile */}
                <div className="text-center mt-3">
                  <div className="d-inline-flex align-items-center gap-2">
                    <small className="text-muted">Nhảy đến:</small>
                    <select 
                      value={currentPage} 
                      onChange={(e) => handlePageChange(Number(e.target.value))}
                      className="form-select form-select-sm"
                      style={{ width: 'auto' }}
                    >
                      {Array.from({ length: totalPages }, (_, i) => (
                        <option key={i + 1} value={i + 1}>
                          Trang {i + 1}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Pagination Summary */}
              <div className="text-center mt-4">
                <small className="text-muted">
                  Hiển thị {((currentPage - 1) * itemsPerPage) + 1} - {Math.min(currentPage * itemsPerPage, filteredAndSortedProducts.length)} 
                  <span className="mx-1">trong tổng số</span>
                  <strong>{filteredAndSortedProducts.length}</strong> sản phẩm
                </small>
              </div>
            </Col>
          </Row>
        )}

        {/* Call to Action */}
        <div className="text-center mt-5 pt-5 border-top">
          <h4 className="mb-3">Không Tìm Thấy Sản Phẩm Bạn Muốn?</h4>
          <p className="text-muted mb-4">
            Liên hệ với chúng tôi để đặt hàng theo yêu cầu riêng
          </p>
          <div className="d-flex gap-3 justify-content-center flex-wrap">
            <Button variant="primary" size="lg" href="tel:0123456789">
              <FaPhone className="me-2" />
              Gọi Ngay: 0123.456.789
            </Button>
            <Button variant="outline-primary" size="lg" href="/contact">
              Liên Hệ Đặt Hàng
            </Button>
          </div>
        </div>
      </Container>

      <style jsx>{`
        .product-card {
          transition: all 0.3s ease;
          cursor: pointer;
        }
        
        .product-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.15) !important;
        }
        
        @media (max-width: 768px) {
          .product-card:hover {
            transform: none;
          }
          
          .d-none.d-sm-inline {
            display: none !important;
          }
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

        /* Pagination Styles */
        .pagination {
          margin-bottom: 0;
        }
        
        .pagination .page-link {
          border-radius: 50px;
          margin: 0 2px;
          padding: 12px 18px;
          font-weight: 500;
          border: 2px solid transparent;
          transition: all 0.3s ease;
        }
        
        .pagination .page-item.active .page-link {
          background-color: var(--primary-color);
          border-color: var(--primary-color);
          color: white;
          transform: scale(1.1);
        }
        
        .pagination .page-link:hover {
          background-color: var(--accent-color);
          border-color: var(--accent-color);
          color: white;
          transform: translateY(-2px);
        }
        
        .pagination .page-item.disabled .page-link {
          opacity: 0.5;
          transform: none;
        }
        
        /* Mobile Pagination Buttons */
        .btn-outline-primary {
          border-radius: 25px;
          font-weight: 500;
          padding: 12px 24px;
          transition: all 0.3s ease;
        }
        
        .btn-outline-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
        }
        
        /* Page Jump Select */
        .form-select-sm {
          border-radius: 20px;
          border: 2px solid var(--primary-color);
          color: var(--primary-color);
          font-weight: 500;
        }
        
        .form-select-sm:focus {
          border-color: var(--secondary-color);
          box-shadow: 0 0 0 0.2rem rgba(var(--primary-color-rgb), 0.25);
        }
      `}</style>
    </div>
  );
};

export default Products;