import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { fetchBlogPosts } from '../services/contentfulService';
import { useLanguage } from '../contexts/LanguageContext';

const BlogPage = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { getLocalizedPath } = useLanguage();

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const data = await fetchBlogPosts();
        setPosts(data);
      } catch (err) {
        setError('Failed to load blog posts.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    loadPosts();
  }, []);

  if (loading) {
    return (
      <main className="section">
        <div className="container" style={{ marginTop: '8rem', textAlign: 'center' }}>
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="section">
      <Helmet>
        <title>Blog | David Castañeda</title>
      </Helmet>
      <div className="container section-title" data-aos="fade-up" style={{ marginTop: '4rem', marginBottom: '2rem' }}>
        <h2>Blog</h2>
      </div>
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        {error ? (
          <div className="alert alert-danger">{error}</div>
        ) : (
          <div className="row g-4">
            {posts.map((post) => (
              <div key={post.id} className="col-lg-4 col-md-6">
                <Link to={getLocalizedPath(`/blog/${post.slug}`)} style={{ textDecoration: 'none' }}>
                  <div
                    className="card h-100"
                    style={{
                      background: 'var(--surface-color)',
                      border: '1px solid rgba(25, 249, 105, 0.1)',
                      borderRadius: '24px',
                      padding: '1px',
                      position: 'relative',
                      overflow: 'hidden',
                      transition: 'transform 0.3s ease'
                    }}
                    onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-10px)'; }}
                    onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; }}
                  >
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, var(--accent-color) 0%, transparent 100%)', opacity: 0.15 }}></div>
                    <div
                      className="card-body"
                      style={{
                        background: 'var(--background-color)',
                        borderRadius: '23px',
                        padding: '1.5rem',
                        height: '100%',
                        position: 'relative',
                        zIndex: 1
                      }}
                    >
                      {post.featuredImage && (
                        <div style={{ width: '100%', height: '180px', borderRadius: '12px', overflow: 'hidden', marginBottom: '1rem' }}>
                          <img src={post.featuredImage} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                      )}
                      <div className="d-flex justify-content-between align-items-start mb-2 flex-column">
                        <h3 className="card-title mb-2" style={{ fontSize: '1.25rem', color: 'var(--heading-color)' }}>{post.title}</h3>
                        <small style={{ color: 'var(--accent-color)', opacity: 0.8 }}>{new Date(post.date).toLocaleDateString()}</small>
                      </div>
                      <p className="card-text mt-2" style={{ color: 'var(--default-color)', fontSize: '0.95rem' }}>{post.excerpt}</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
};

export default BlogPage;
