import React from 'react';
import { trackError } from '../utils/unifiedAnalytics';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log the error to analytics
    const errorMessage = error.message || 'Unknown error';
    const errorStack = error.stack || null;
    const componentStack = errorInfo.componentStack || null;

    // Track the error in both GA and Clarity
    trackError('React Error Boundary', errorMessage, `${errorStack}\n\nComponent Stack:\n${componentStack}`);

    // Store error details in state for display
    this.setState({
      error: error,
      errorInfo: errorInfo
    });

    // Also log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('ErrorBoundary caught an error:', error, errorInfo);
    }
  }

  render() {
    if (this.state.hasError) {
      // Fallback UI
      return (
        <div className="container mt-5">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <div className="card border-danger">
                <div className="card-body">
                  <h2 className="card-title text-danger">
                    <i className="fas fa-exclamation-triangle me-2"></i>
                    Oops! Something went wrong
                  </h2>
                  <p className="card-text lead">
                    We're sorry, but something unexpected happened. Our team has been notified and we're working to fix the issue.
                  </p>
                  
                  {process.env.NODE_ENV === 'development' && this.state.error && (
                    <div className="mt-4">
                      <div className="alert alert-warning">
                        <h5>Development Error Details:</h5>
                        <p><strong>Error:</strong> {this.state.error.message}</p>
                        {this.state.errorInfo && (
                          <details>
                            <summary>Component Stack</summary>
                            <pre className="text-start mt-2" style={{ fontSize: '0.8rem' }}>
                              {this.state.errorInfo.componentStack}
                            </pre>
                          </details>
                        )}
                      </div>
                    </div>
                  )}
                  
                  <div className="mt-4">
                    <button
                      className="btn btn-primary me-3"
                      onClick={() => window.location.reload()}
                    >
                      <i className="fas fa-refresh me-2"></i>
                      Reload Page
                    </button>
                    <button
                      className="btn btn-outline-secondary"
                      onClick={() => window.history.back()}
                    >
                      <i className="fas fa-arrow-left me-2"></i>
                      Go Back
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
