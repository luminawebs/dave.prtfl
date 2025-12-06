import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { getAllPosts } from '../data/blogData';
import { useLanguage } from '../contexts/LanguageContext';

const BlogPage = () => {
  const posts = getAllPosts();
  const { getLocalizedPath } = useLanguage();

  return (
    <main className="section">
      <Helmet>
        <title>Blog</title>
      </Helmet>
      <div className="container section-title" data-aos="fade-up" style={{ marginTop: '4rem', marginBottom: '2rem' }}>
        <h2>Blog</h2>
        {/* <p>Simple blog repository</p> */}
      </div>
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row g-4">
          {posts.map((post) => (
            <div key={post.id} className="col-lg-4 col-md-6">
              <Link to={getLocalizedPath(`/blog/${post.slug}`)} style={{ textDecoration: 'none' }}>
                <div
                  className="card h-100"
                  style={{
                    background: 'transparent',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    borderRadius: '14px',
                    boxShadow: '0 10px 24px rgba(0,0,0,0.18)'
                  }}
                >
                  <div
                    className="card-body"
                    style={{
                      background: 'linear-gradient(180deg, color-mix(in srgb, var(--background-color), #000 8%), var(--background-color))',
                      color: 'var(--contrast-color)',
                      borderRadius: '12px',
                      padding: '1.25rem'
                    }}
                  >
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <h3 className="card-title mb-0" style={{ fontSize: '1.1rem', color: 'var(--contrast-color)' }}>{post.title}</h3>
                      <small style={{ color: 'rgba(255,255,255,0.7)' }}>{new Date(post.date).toLocaleDateString()}</small>
                    </div>
                    <p className="card-text" style={{ color: 'rgba(255,255,255,0.85)' }}>{post.excerpt}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default BlogPage;
