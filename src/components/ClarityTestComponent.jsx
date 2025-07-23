import React, { useState } from 'react';
import { trackCustomEvent } from '../utils/unifiedAnalytics';

const ClarityTestComponent = () => {
  const [testResults, setTestResults] = useState([]);

  const runTests = () => {
    const results = [];
    
    // Test 1: Check if Clarity is loaded
    if (window.clarity) {
      results.push('✅ Clarity library is loaded');
    } else {
      results.push('❌ Clarity library is NOT loaded');
    }

    // Test 2: Check environment variable
    const clarityId = process.env.REACT_APP_CLARITY_PROJECT_ID;
    if (clarityId && clarityId !== 'YOUR_CLARITY_PROJECT_ID' && clarityId !== 'your_actual_clarity_project_id_here') {
      results.push(`✅ Clarity Project ID is configured: ${clarityId}`);
    } else {
      results.push('❌ Clarity Project ID is NOT properly configured');
    }

    // Test 3: Test custom event tracking
    try {
      trackCustomEvent('clarity_test_event', {
        test_type: 'integration_verification',
        timestamp: new Date().toISOString(),
        user_agent: navigator.userAgent
      });
      results.push('✅ Custom event tracking executed successfully');
    } catch (error) {
      results.push(`❌ Custom event tracking failed: ${error.message}`);
    }

    // Test 4: Check network requests
    if (performance && performance.getEntriesByName) {
      const clarityRequests = performance.getEntriesByName('https://www.clarity.ms/tag/' + clarityId);
      if (clarityRequests && clarityRequests.length > 0) {
        results.push('✅ Network requests to Clarity detected');
      } else {
        results.push('⚠️ No network requests to Clarity detected yet (may take a moment)');
      }
    }

    setTestResults(results);
  };

  const clearResults = () => {
    setTestResults([]);
  };

  // Test button click tracking
  const testButtonClick = () => {
    trackCustomEvent('test_button_clicked', {
      component: 'ClarityTestComponent',
      action: 'test_button_interaction',
      timestamp: new Date().toISOString()
    });
    alert('Button click event sent to Clarity! Check your Clarity dashboard in a few minutes.');
  };

  return (
    <div className="card mt-4 border-info">
      <div className="card-header bg-info text-white">
        <h5 className="mb-0">
          <i className="fas fa-flask me-2"></i>
          Microsoft Clarity Integration Test
        </h5>
      </div>
      <div className="card-body">
        <p className="card-text">
          Use this component to verify that Microsoft Clarity is properly integrated with your website.
        </p>
        
        <div className="d-flex gap-2 mb-3">
          <button 
            className="btn btn-primary"
            onClick={runTests}
          >
            <i className="fas fa-play me-2"></i>
            Run Integration Tests
          </button>
          
          <button 
            className="btn btn-success"
            onClick={testButtonClick}
          >
            <i className="fas fa-mouse-pointer me-2"></i>
            Test Event Tracking
          </button>
          
          {testResults.length > 0 && (
            <button 
              className="btn btn-outline-secondary"
              onClick={clearResults}
            >
              <i className="fas fa-times me-2"></i>
              Clear Results
            </button>
          )}
        </div>

        {testResults.length > 0 && (
          <div className="alert alert-light">
            <h6><i className="fas fa-list-check me-2"></i>Test Results:</h6>
            <ul className="mb-0">
              {testResults.map((result, index) => (
                <li key={index} className="mb-1">
                  <code>{result}</code>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-3">
          <h6><i className="fas fa-info-circle me-2"></i>Setup Instructions:</h6>
          <ol className="small">
            <li>Go to <a href="https://clarity.microsoft.com/" target="_blank" rel="noopener noreferrer">clarity.microsoft.com</a></li>
            <li>Create a new project for your website</li>
            <li>Copy your Project ID</li>
            <li>Add it to your <code>.env</code> file: <code>REACT_APP_CLARITY_PROJECT_ID=your_project_id</code></li>
            <li>Restart your development server</li>
            <li>Run the integration tests above</li>
          </ol>
        </div>

        <div className="alert alert-warning mt-3">
          <small>
            <i className="fas fa-exclamation-triangle me-2"></i>
            <strong>Note:</strong> This test component should be removed before deploying to production.
            It's only meant for development and testing purposes.
          </small>
        </div>
      </div>
    </div>
  );
};

export default ClarityTestComponent;
