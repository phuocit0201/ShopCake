import React, { useEffect, useMemo, useState, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import { FaArrowLeft, FaStar, FaCamera } from 'react-icons/fa';

const OrderReview = () => {
  const { orderId } = useParams();
  const navigate = useNavigate();

  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const MAX_IMAGES = 5;
  const [images, setImages] = useState(Array(MAX_IMAGES).fill(null)); // (null | { file: File, url: string })[]
  const fileInputRef = useRef(null);
  const selectedSlotIndexRef = useRef(0);
  const triggerFileSelect = () => fileInputRef.current?.click();
  const handleKeyDownUpload = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      triggerFileSelect();
    }
  };

  const handleImagesChange = (event) => {
    const fileList = Array.from(event.target.files || []);
    if (fileList.length === 0) return;

    setImages((prev) => {
      const next = [...prev];
      const availableIndices = next
        .map((val, idx) => (val === null ? idx : -1))
        .filter((idx) => idx !== -1);

      if (availableIndices.length === 0) {
        alert(`Bạn chỉ có thể chọn tối đa ${MAX_IMAGES} ảnh.`);
        event.target.value = '';
        return next;
      }

      // Start filling from the clicked slot forward
      const startIdx = selectedSlotIndexRef.current ?? availableIndices[0];
      const orderedTargets = [
        ...availableIndices.filter((i) => i >= startIdx),
        ...availableIndices.filter((i) => i < startIdx),
      ];

      let used = 0;
      for (let i = 0; i < orderedTargets.length && used < fileList.length; i += 1) {
        const targetIndex = orderedTargets[i];
        const file = fileList[used];
        if (!file) break;
        next[targetIndex] = { file, url: URL.createObjectURL(file) };
        used += 1;
      }

      if (used < fileList.length) {
        alert(`Chỉ thêm được ${used} ảnh do giới hạn ${MAX_IMAGES} ảnh.`);
      }

      event.target.value = '';
      return next;
    });
  };

  const handleRemoveImage = (index) => {
    setImages((prev) => {
      const next = [...prev];
      const removed = next[index];
      if (removed) URL.revokeObjectURL(removed.url);
      next[index] = null;
      return next;
    });
  };

  useEffect(() => {
    return () => {
      images.forEach((img) => {
        if (img) URL.revokeObjectURL(img.url);
      });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const canSubmit = useMemo(() => rating > 0 && comment.trim().length >= 10, [rating, comment]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!canSubmit) return;
    setSubmitting(true);
    try {
      // Placeholder: integrate with API later
      await new Promise((res) => setTimeout(res, 800));
      // Example payload shape when integrating API later
      // const payload = { orderId, rating, comment, images: images.filter(Boolean).map(i => i.file) };
      alert('Cảm ơn bạn đã đánh giá!');
      navigate(`/orders/${orderId}`);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="py-4">
      <Container>
        <Row className="mb-3 align-items-center">
          <Col xs={12} md="auto" className="mb-2 mb-md-0">
            <Button as={Link} to={`/orders/${orderId}`} variant="light" className="border back-btn">
              <FaArrowLeft className="me-md-2" />
              <span className="d-none d-md-inline">Quay lại</span>
            </Button>
          </Col>
          <Col xs={12} md className="d-flex align-items-center">
            <h4 className="mb-0">Đánh Giá Đơn Hàng #{orderId}</h4>
          </Col>
        </Row>

        <Card className="border-0 shadow-sm">
          <Card.Body>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label className="fw-semibold">Đánh giá của bạn</Form.Label>
                <div className="d-flex gap-2">
                  {[1,2,3,4,5].map((star) => (
                    <Button
                      key={star}
                      type="button"
                      variant={star <= rating ? 'warning' : 'outline-secondary'}
                      onClick={() => setRating(star)}
                    >
                      <FaStar />
                    </Button>
                  ))}
                </div>
                <div className="small text-muted mt-1">Chọn từ 1 đến 5 sao</div>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label className="fw-semibold">Nhận xét</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={5}
                  placeholder="Chia sẻ trải nghiệm của bạn về sản phẩm và dịch vụ... (tối thiểu 10 ký tự)"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label className="fw-semibold">Hình ảnh (không bắt buộc)</Form.Label>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handleImagesChange}
                  style={{ display: 'none' }}
                />

                <Row className="g-2 mt-1">
                  {Array.from({ length: MAX_IMAGES }).map((_, idx) => {
                    const img = images[idx];
                    return (
                      <Col xs={4} sm={3} md={2} key={`slot-${idx}`}>
                        {img ? (
                          <div className="position-relative">
                            <img
                              src={img.url}
                              alt={`review-${idx}`}
                              className="img-fluid rounded"
                              style={{ width: '100%', height: '110px', objectFit: 'cover' }}
                            />
                            <Button
                              type="button"
                              size="sm"
                              variant="danger"
                              className="position-absolute top-0 end-0 p-1"
                              onClick={() => handleRemoveImage(idx)}
                            >
                              &times;
                            </Button>
                          </div>
                        ) : (
                          <div
                            role="button"
                            tabIndex={0}
                            className="upload-box d-flex flex-column align-items-center justify-content-center"
                            style={{ height: '110px' }}
                            onClick={() => { selectedSlotIndexRef.current = idx; triggerFileSelect(); }}
                            onKeyDown={(e) => { selectedSlotIndexRef.current = idx; handleKeyDownUpload(e); }}
                          >
                            <FaCamera size={24} className="mb-2 text-muted" />
                            <small className="text-muted">Thêm ảnh</small>
                          </div>
                        )}
                      </Col>
                    );
                  })}
                </Row>

                <div className="small text-muted mt-2">
                  Đã chọn {images.filter(Boolean).length}/{MAX_IMAGES} ảnh
                </div>
              </Form.Group>

              <div className="d-flex gap-2">
                <Button type="submit" variant="primary" disabled={!canSubmit || submitting}>
                  {submitting ? 'Đang gửi...' : 'Gửi đánh giá'}
                </Button>
                <Button type="button" variant="outline-secondary" onClick={() => navigate(-1)}>
                  Hủy
                </Button>
              </div>
            </Form>
          </Card.Body>
        </Card>
      </Container>

      <style jsx>{`
        .btn-warning {
          color: #fff;
        }
        .upload-box {
          border: 2px dashed #dee2e6;
          border-radius: 12px;
          padding: 18px;
          background: #fafafa;
          text-align: center;
          cursor: pointer;
          transition: background 0.2s ease;
        }
        .upload-box:hover {
          background: #f1f3f5;
        }
        .upload-box:focus {
          outline: 2px solid var(--primary-color);
          outline-offset: 2px;
        }
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
      `}</style>
    </div>
  );
};

export default OrderReview;


