import React, { useState, useMemo } from 'react';
import { Container, Row, Col, Card, Button, Form, Badge } from 'react-bootstrap';
import { 
  FaSearch,
  FaCalendarAlt,
  FaUser,
  FaEye,
  FaHeart,
  FaTag,
  FaArrowRight,
  FaClock,
  FaBookmark
} from 'react-icons/fa';
import { BiCake } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Sample blog posts data
  const blogPosts = useMemo(() => [
    {
      id: 1,
      title: 'Bí Quyết Làm Bánh Kem Dâu Tươi Ngon Hoàn Hảo',
      excerpt: 'Hướng dẫn chi tiết cách làm bánh kem dâu tươi với lớp kem mềm mịn và dâu tây tươi ngon, thơm ngọt.',
      content: 'Bánh kem dâu tươi là một trong những loại bánh được yêu thích nhất...',
      author: 'Chef Mai Anh',
      publishDate: '2024-01-15',
      readTime: '5 phút đọc',
      views: 1250,
      likes: 89,
      category: 'recipe',
      tags: ['bánh kem', 'dâu tây', 'công thức', 'hướng dẫn'],
      image: 'https://miacake.vn/wp-content/uploads/IMG_E9532.jpg',
      featured: true
    },
    {
      id: 2,
      title: 'Top 10 Loại Bánh Sinh Nhật Được Yêu Thích Nhất 2024',
      excerpt: 'Khám phá những mẫu bánh sinh nhật hot trend năm 2024, từ classic đến hiện đại, phù hợp mọi lứa tuổi.',
      content: 'Bánh sinh nhật không chỉ là món tráng miệng mà còn là biểu tượng...',
      author: 'Baker Minh Tuấn',
      publishDate: '2024-01-10',
      readTime: '7 phút đọc',
      views: 2100,
      likes: 156,
      category: 'trend',
      tags: ['bánh sinh nhật', 'xu hướng', '2024', 'thiết kế'],
      image: 'https://miacake.vn/wp-content/uploads/IMG_E9532.jpg',
      featured: true
    },
    {
      id: 3,
      title: 'Cách Bảo Quản Bánh Ngọt Tươi Lâu Nhất',
      excerpt: 'Những mẹo hay giúp bạn bảo quản bánh ngọt luôn tươi ngon, giữ được hương vị và độ mềm mịn.',
      content: 'Bảo quản bánh ngọt đúng cách là điều rất quan trọng...',
      author: 'Chef Lan Hương',
      publishDate: '2024-01-08',
      readTime: '4 phút đọc',
      views: 890,
      likes: 67,
      category: 'tips',
      tags: ['bảo quản', 'mẹo hay', 'bánh ngọt', 'tươi lâu'],
      image: 'https://miacake.vn/wp-content/uploads/IMG_E9532.jpg',
      featured: false
    },
    {
      id: 4,
      title: 'Lịch Sử Và Văn Hóa Bánh Ngọt Việt Nam',
      excerpt: 'Tìm hiểu về nguồn gốc, lịch sử phát triển và những đặc trưng văn hóa của bánh ngọt truyền thống Việt Nam.',
      content: 'Bánh ngọt Việt Nam có một lịch sử lâu đời và phong phú...',
      author: 'PGS.TS Văn Hoá',
      publishDate: '2024-01-05',
      readTime: '8 phút đọc',
      views: 1560,
      likes: 124,
      category: 'culture',
      tags: ['lịch sử', 'văn hóa', 'truyền thống', 'việt nam'],
      image: 'https://miacake.vn/wp-content/uploads/IMG_E9532.jpg',
      featured: false
    },
    {
      id: 5,
      title: 'Chocolate Trong Làm Bánh: Từ Cơ Bản Đến Nâng Cao',
      excerpt: 'Hướng dẫn toàn diện về cách sử dụng chocolate trong làm bánh, từ chọn loại chocolate đến kỹ thuật tempering.',
      content: 'Chocolate là một nguyên liệu quan trọng trong làm bánh...',
      author: 'Chocolatier Đức Minh',
      publishDate: '2024-01-02',
      readTime: '10 phút đọc',
      views: 1890,
      likes: 201,
      category: 'technique',
      tags: ['chocolate', 'kỹ thuật', 'tempering', 'nâng cao'],
      image: 'https://miacake.vn/wp-content/uploads/IMG_E9532.jpg',
      featured: true
    },
    {
      id: 6,
      title: 'Bánh Cupcake: Từ Ý Tưởng Đến Thành Phẩm',
      excerpt: 'Quy trình hoàn chỉnh tạo ra những chiếc cupcake đẹp mắt và ngon miệng, bao gồm cả phần trang trí.',
      content: 'Cupcake là món bánh nhỏ xinh được nhiều người yêu thích...',
      author: 'Baker Thanh Tâm',
      publishDate: '2023-12-28',
      readTime: '6 phút đọc',
      views: 1320,
      likes: 98,
      category: 'recipe',
      tags: ['cupcake', 'trang trí', 'icing', 'công thức'],
      image: 'https://miacake.vn/wp-content/uploads/IMG_E9532.jpg',
      featured: false
    }
  ], []);

  const categories = [
    { value: 'all', label: 'Tất Cả Bài Viết', count: blogPosts.length },
    { value: 'recipe', label: 'Công Thức', count: blogPosts.filter(p => p.category === 'recipe').length },
    { value: 'tips', label: 'Mẹo Hay', count: blogPosts.filter(p => p.category === 'tips').length },
    { value: 'trend', label: 'Xu Hướng', count: blogPosts.filter(p => p.category === 'trend').length },
    { value: 'technique', label: 'Kỹ Thuật', count: blogPosts.filter(p => p.category === 'technique').length },
    { value: 'culture', label: 'Văn Hóa', count: blogPosts.filter(p => p.category === 'culture').length }
  ];

  // Filter posts
  const filteredPosts = useMemo(() => {
    return blogPosts.filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [blogPosts, searchTerm, selectedCategory]);

  const featuredPosts = blogPosts.filter(post => post.featured);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('vi-VN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getCategoryColor = (category) => {
    const colors = {
      recipe: 'success',
      tips: 'info',
      trend: 'warning',
      technique: 'primary',
      culture: 'secondary'
    };
    return colors[category] || 'light';
  };

  const BlogCard = ({ post, featured = false }) => (
    <Card className={`h-100 border-0 shadow-sm blog-card ${featured ? 'featured-post' : ''}`}>
      <div className="position-relative">
        <Card.Img 
          variant="top" 
          src={post.image} 
          alt={post.title}
          style={{ height: featured ? '250px' : '200px', objectFit: 'cover' }}
        />
        <div className="position-absolute top-0 start-0 p-3">
          <Badge bg={getCategoryColor(post.category)} className="mb-2">
            {categories.find(c => c.value === post.category)?.label}
          </Badge>
          {post.featured && (
            <Badge bg="danger" className="ms-2">
              <FaBookmark className="me-1" />
              Nổi Bật
            </Badge>
          )}
        </div>
      </div>
      
      <Card.Body className="d-flex flex-column">
        <div className="mb-2">
          <small className="text-muted d-flex align-items-center flex-wrap">
            <span className="me-3">
              <FaUser className="me-1" />
              {post.author}
            </span>
            <span className="me-3">
              <FaCalendarAlt className="me-1" />
              {formatDate(post.publishDate)}
            </span>
            <span>
              <FaClock className="me-1" />
              {post.readTime}
            </span>
          </small>
        </div>
        
        <Card.Title className={`${featured ? 'h4' : 'h5'} mb-3`}>
          <Link to={`/blog/${post.id}`} className="text-decoration-none text-dark">
            {post.title}
          </Link>
        </Card.Title>
        
        <Card.Text className="text-muted mb-3 flex-grow-1">
          {post.excerpt}
        </Card.Text>
        
        <div className="mb-3">
          {post.tags.slice(0, 3).map(tag => (
            <Badge key={tag} bg="light" text="dark" className="me-1 mb-1">
              <FaTag className="me-1" />
              {tag}
            </Badge>
          ))}
        </div>
        
        <div className="d-flex justify-content-between align-items-center mt-auto">
          <div className="d-flex align-items-center text-muted small">
            <span className="me-3">
              <FaEye className="me-1" />
              {post.views.toLocaleString()}
            </span>
            <span>
              <FaHeart className="me-1" />
              {post.likes}
            </span>
          </div>
          <Button 
            variant="outline-primary" 
            size="sm"
            as={Link}
            to={`/blog/${post.id}`}
          >
            Đọc Tiếp
            <FaArrowRight className="ms-1" />
          </Button>
        </div>
      </Card.Body>
    </Card>
  );

  return (
    <div className="blog-page py-5">
      <Container>
        {/* Page Header */}
        <div className="text-center mb-5">
          <h1 className="display-4 fw-bold mb-3">
            Blog Bánh Ngọt
            <BiCake className="ms-3" style={{ color: 'var(--primary-color)' }} />
          </h1>
          <p className="lead text-muted">
            Khám phá thế giới bánh ngọt qua những bài viết hữu ích và thú vị
          </p>
        </div>

        {/* Search and Filter */}
        <Row className="mb-5">
          <Col lg={8} mx="auto">
            <Card className="border-0 shadow-sm">
              <Card.Body>
                <Row className="align-items-center">
                  <Col md={6} className="mb-3 mb-md-0">
                    <Form.Group>
                      <div className="position-relative">
                        <Form.Control
                          type="text"
                          placeholder="Tìm kiếm bài viết, công thức, mẹo hay..."
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                          className="ps-5"
                          size="lg"
                        />
                        <FaSearch 
                          className="position-absolute text-muted"
                          style={{ left: '15px', top: '50%', transform: 'translateY(-50%)' }}
                        />
                      </div>
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      size="lg"
                    >
                      {categories.map(category => (
                        <option key={category.value} value={category.value}>
                          {category.label} ({category.count})
                        </option>
                      ))}
                    </Form.Select>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && selectedCategory === 'all' && !searchTerm && (
          <div className="mb-5">
            <h2 className="mb-4 d-flex align-items-center">
              <FaBookmark className="me-2 text-danger" />
              Bài Viết Nổi Bật
            </h2>
            <Row>
              {featuredPosts.slice(0, 2).map(post => (
                <Col lg={6} className="mb-4" key={post.id}>
                  <BlogCard post={post} featured={true} />
                </Col>
              ))}
            </Row>
          </div>
        )}

        {/* Results Info */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h3 className="mb-0">
            {searchTerm || selectedCategory !== 'all' ? 'Kết Quả Tìm Kiếm' : 'Tất Cả Bài Viết'}
          </h3>
          <small className="text-muted">
            Hiển thị {filteredPosts.length} bài viết
            {searchTerm && (
              <span> cho "<strong>{searchTerm}</strong>"</span>
            )}
            {selectedCategory !== 'all' && (
              <span> trong danh mục "<strong>{categories.find(c => c.value === selectedCategory)?.label}</strong>"</span>
            )}
          </small>
        </div>

        {/* Blog Posts Grid */}
        {filteredPosts.length > 0 ? (
          <Row>
            {filteredPosts.map(post => (
              <Col lg={4} md={6} className="mb-4" key={post.id}>
                <BlogCard post={post} />
              </Col>
            ))}
          </Row>
        ) : (
          <div className="text-center py-5">
            <div style={{ fontSize: '4rem', opacity: 0.3, marginBottom: '2rem' }}>
              <FaSearch />
            </div>
            <h4 className="mb-3">Không tìm thấy bài viết</h4>
            <p className="text-muted mb-4">
              Hãy thử tìm kiếm với từ khóa khác hoặc chọn danh mục khác
            </p>
            <Button 
              variant="outline-primary"
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
              }}
            >
              Xem Tất Cả Bài Viết
            </Button>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-5 pt-4">
          <h4 className="mb-3">Muốn Chia Sẻ Công Thức Của Bạn?</h4>
          <p className="text-muted mb-4">
            Hãy liên hệ với chúng tôi để chia sẻ những công thức bánh ngọt độc đáo của bạn
          </p>
          <div className="d-flex gap-3 justify-content-center flex-wrap">
            <Button variant="primary" size="lg" as={Link} to="/contact">
              Liên Hệ Với Chúng Tôi
            </Button>
            <Button variant="outline-primary" size="lg" as={Link} to="/products">
              <BiCake className="me-2" />
              Xem Sản Phẩm
            </Button>
          </div>
        </div>
      </Container>

      <style jsx>{`
        .blog-page {
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
          min-height: 100vh;
        }
        
        .blog-card {
          transition: all 0.3s ease;
          cursor: pointer;
        }
        
        .blog-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.15) !important;
        }
        
        .featured-post {
          border-left: 4px solid var(--primary-color) !important;
        }
        
        .featured-post .card-title {
          color: var(--primary-color);
        }
        
        .position-relative .position-absolute {
          z-index: 1;
        }
        
        .card-img-top {
          transition: all 0.3s ease;
        }
        
        .blog-card:hover .card-img-top {
          transform: scale(1.05);
        }
        
        .card {
          border-radius: 15px;
          overflow: hidden;
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
        
        .btn-outline-primary {
          border-radius: 25px;
          transition: all 0.3s ease;
        }
        
        .btn-outline-primary:hover {
          transform: translateY(-2px);
        }
        
        .form-control, .form-select {
          border-radius: 10px;
          border: 2px solid #e9ecef;
          transition: all 0.3s ease;
        }
        
        .form-control:focus, .form-select:focus {
          border-color: var(--primary-color);
          box-shadow: 0 0 0 0.2rem rgba(var(--primary-color-rgb), 0.25);
        }
        
        .badge {
          font-size: 0.7rem;
          padding: 0.4rem 0.6rem;
        }
        
        @media (max-width: 768px) {
          .blog-card:hover {
            transform: none;
          }
          
          .blog-card:hover .card-img-top {
            transform: none;
          }
        }
      `}</style>
    </div>
  );
};

export default Blog;