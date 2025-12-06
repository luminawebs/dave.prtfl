import React from 'react';
import { Helmet } from 'react-helmet';
import { getAllPosts } from '../data/blogData';

const BlogPage = () => {
  const posts = getAllPosts();

  return (
    <main className="section">
      <Helmet>
        <title>Blog</title>
      </Helmet>
      <div className="container section-title" data-aos="fade-up">
        <h2>Blog</h2>
        <p>Simple blog repository</p>
      </div>
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row g-4">
          {posts.map((post) => (
            <div key={post.id} className="col-lg-4 col-md-6">
              <div className="card h-100">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <h3 className="card-title mb-0" style={{ fontSize: '1.1rem' }}>{post.title}</h3>
                    <small className="text-muted">{new Date(post.date).toLocaleDateString()}</small>
                  </div>
                  <p className="card-text">{post.excerpt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default BlogPage;
