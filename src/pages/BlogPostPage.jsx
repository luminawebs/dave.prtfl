import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useParams, Link } from 'react-router-dom';
import { fetchBlogPostBySlug } from '../services/contentfulService';
import { useLanguage } from '../contexts/LanguageContext';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';

const BlogPostPage = () => {
  const { slug } = useParams();
  const { getLocalizedPath } = useLanguage();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadPost = async () => {
      try {
        console.log(`BlogPostPage: Loading post with slug: ${slug}`);
        const data = await fetchBlogPostBySlug(slug);
        console.log('BlogPostPage: Received data:', data);
        setPost(data);
      } catch (err) {
        setError('Failed to load the blog post.');
        console.error('BlogPostPage: Error loading post:', err);
      } finally {
        setLoading(false);
      }
    };
    loadPost();
  }, [slug]);

  const options = {
    renderMark: {
      [MARKS.BOLD]: (text) => <strong style={{ color: 'var(--accent-color)', fontWeight: '700' }}>{text}</strong>,
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <p style={{ marginBottom: '1.5rem', lineHeight: '1.8', color: 'rgba(255,255,255,0.9)' }}>{children}</p>,
      [BLOCKS.HEADING_1]: (node, children) => <h1 style={{ color: 'var(--heading-color)', marginTop: '2rem', marginBottom: '1rem' }}>{children}</h1>,
      [BLOCKS.HEADING_2]: (node, children) => <h2 style={{ color: 'var(--heading-color)', marginTop: '1.8rem', marginBottom: '1rem' }}>{children}</h2>,
      [BLOCKS.HEADING_3]: (node, children) => <h3 style={{ color: 'var(--heading-color)', marginTop: '1.5rem', marginBottom: '0.8rem' }}>{children}</h3>,
      [BLOCKS.UL_LIST]: (node, children) => <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem', color: 'rgba(255,255,255,0.9)' }}>{children}</ul>,
      [BLOCKS.OL_LIST]: (node, children) => <ol style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem', color: 'rgba(255,255,255,0.9)' }}>{children}</ol>,
      [BLOCKS.LIST_ITEM]: (node, children) => <li style={{ marginBottom: '0.5rem' }}>{children}</li>,
      [BLOCKS.HR]: () => <hr style={{ borderTop: '1px solid rgba(25, 249, 105, 0.2)', margin: '3rem 0' }} />,
      [BLOCKS.QUOTE]: (node, children) => (
        <blockquote style={{ borderLeft: '4px solid var(--accent-color)', paddingLeft: '1.5rem', margin: '2rem 0', fontStyle: 'italic', color: 'rgba(25, 249, 105, 0.8)' }}>
          {children}
        </blockquote>
      ),
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const { title, file } = node.data.target.fields;
        const imageUrl = file?.url ? (file.url.startsWith('//') ? `https:${file.url}` : file.url) : null;
        if (!imageUrl) return null;
        return (
          <div style={{ margin: '2.5rem 0', textAlign: 'center' }}>
            <img src={imageUrl} alt={title} style={{ maxWidth: '100%', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.3)' }} />
            {title && <p style={{ marginTop: '0.5rem', fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)' }}>{title}</p>}
          </div>
        );
      }
    },
  };

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

  if (!post || error) {
    return (
      <main className="section">
        <div className="container section-title" data-aos="fade-up" style={{ marginTop: '8rem', textAlign: 'center' }}>
          <h2>{error || 'Post Not Found'}</h2>
          <p className="mb-4">The requested blog post could not be loaded or does not exist.</p>
          <Link to={getLocalizedPath('/blog')} className="btn btn-outline">Back to Blog</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="section">
      <Helmet>
        <title>{post.title} | David Castañeda Blog</title>
      </Helmet>

      {/* Hero Header for the Post */}
      <div className="container" data-aos="fade-up" style={{ marginTop: '6rem', marginBottom: '3rem' }}>
        <div className="row justify-content-center">
          <div className="col-lg-10 text-center">
            <small style={{ color: 'var(--accent-color)', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: '600' }}>
              {new Date(post.date).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}
            </small>
            <h1 className="display-4 mt-2 mb-4" style={{ color: 'var(--heading-color)', fontWeight: '800' }}>{post.title}</h1>
            {post.featuredImage && (
              <div style={{ width: '100%', maxHeight: '500px', borderRadius: '32px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.4)', marginBottom: '4rem' }}>
                <img src={post.featuredImage} alt={post.title} style={{ width: '100%', height: 'auto', objectFit: 'cover' }} />
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div
              className="blog-content"
              style={{
                fontSize: '1.15rem',
                lineHeight: '1.8',
                color: 'var(--default-color)'
              }}
            >
              {post.content ? documentToReactComponents(post.content, options) : <p>No content available for this post.</p>}

              <div className="mt-5 pt-5 text-center" style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                <Link to={getLocalizedPath('/blog')} className="btn btn-outline py-3 px-5">
                  <i className="bi bi-arrow-left me-2"></i> Back to All Posts
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default BlogPostPage;
