import React from 'react';
import { Helmet } from 'react-helmet';
import { useParams, Link } from 'react-router-dom';
import { getPostBySlug } from '../data/blogData';
import { useLanguage } from '../contexts/LanguageContext';

const BlogPostPage = () => {
  const { slug } = useParams();
  const { getLocalizedPath } = useLanguage();
  const post = getPostBySlug(slug);

  if (!post) {
    return (
      <main className="section">
        <div className="container section-title" data-aos="fade-up" style={{ marginTop: '4rem', marginBottom: '2rem' }}>
          <h2>Post Not Found</h2>
          <p>The requested blog post does not exist.</p>
          <Link to={getLocalizedPath('/blog')} className="btn btn-outline">Back to Blog</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="section">
      <Helmet>
        <title>{post.title} • Blog</title>
      </Helmet>
      <div className="container section-title" data-aos="fade-up" style={{ marginTop: '4rem', marginBottom: '2rem' }}>
        <h2>{post.title}</h2>
        <p>{new Date(post.date).toLocaleDateString()}</p>
      </div>
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row">
          <div className="col-12">
            <div
              className="card"
              style={{
                background: 'transparent',
                border: '1px solid rgba(20, 9, 9, 0.12)',
                borderRadius: '14px',
                boxShadow: '0 12px 28px rgba(0,0,0,0.22)'
              }}
            >
              <div
                className="card-body"
                style={{
                  background: 'linear-gradient(180deg, color-mix(in srgb, var(--background-color), #000 8%), var(--background-color))',
                  color: 'var(--contrast-color)',
                  borderRadius: '12px',
                  padding: '1.5rem'
                }}
              >
                <p style={{ whiteSpace: 'pre-line', color: 'rgba(255,255,255,0.92)', fontSize: '1.05rem', lineHeight: 1.75 }}>{post.content}</p>
                <div className="mt-3">
                  <Link to={getLocalizedPath('/blog')} className="btn btn-outline">Back to Blog</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default BlogPostPage;
