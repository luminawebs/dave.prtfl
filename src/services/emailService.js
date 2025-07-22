// Email service using EmailJS for client-side email sending
// Alternative: You can replace this with your own backend API

// For EmailJS setup:
// 1. Go to https://www.emailjs.com/
// 2. Create an account and get your PUBLIC_KEY, SERVICE_ID, and TEMPLATE_ID
// 3. Replace the values below with your actual EmailJS configuration

const EMAILJS_CONFIG = {
  PUBLIC_KEY: process.env.REACT_APP_EMAILJS_PUBLIC_KEY || 'your_emailjs_public_key',
  SERVICE_ID: process.env.REACT_APP_EMAILJS_SERVICE_ID || 'your_service_id',
  TEMPLATE_ID: process.env.REACT_APP_EMAILJS_TEMPLATE_ID || 'your_template_id'
};

/**
 * Send form data via email
 * @param {Object} formData - The form data to send
 * @param {Object} scores - Quiz scores
 * @param {Array} answers - Quiz answers
 * @returns {Promise} - EmailJS promise
 */
export const sendFormData = async (formData, scores, answers) => {
  // Initialize EmailJS if not already done
  if (window.emailjs && !window.emailjs.initialized) {
    try {
      window.emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
      window.emailjs.initialized = true;
      console.log('EmailJS initialized with public key');
    } catch (error) {
      console.warn('Failed to initialize EmailJS:', error);
    }
  }
  
  // Check if EmailJS is properly configured
  const isEmailJSConfigured = (
    window.emailjs && 
    EMAILJS_CONFIG.PUBLIC_KEY && 
    EMAILJS_CONFIG.SERVICE_ID && 
    EMAILJS_CONFIG.TEMPLATE_ID &&
    !EMAILJS_CONFIG.PUBLIC_KEY.includes('your_actual_public_key_here') &&
    !EMAILJS_CONFIG.PUBLIC_KEY.includes('your_emailjs_public_key') &&
    EMAILJS_CONFIG.PUBLIC_KEY.length > 10 // Valid keys are longer
  );
  
  if (!isEmailJSConfigured) {
    console.warn('EmailJS not loaded. Form data logged to console instead.');
    console.log('Form Data:', { formData, scores, answers });
    return Promise.resolve({ status: 200, text: 'Logged to console' });
  }

  // Prepare email template parameters
  const templateParams = {
    // User Information
    user_name: formData.fullName,
    user_email: formData.email,
    user_company: formData.company || 'Not provided',
    user_job_title: formData.jobTitle || 'Not provided',
    
    // Quiz Results
    total_score: Math.round(Object.values(scores).reduce((a, b) => a + b, 0) / 8),
    category1_score: Math.round(scores.category1 / 2),
    category2_score: Math.round(scores.category2 / 2),
    category3_score: Math.round(scores.category3 / 2),
    category4_score: Math.round(scores.category4 / 2),
    
    // Meeting Information
    schedule_meeting: formData.scheduleMeeting ? 'Yes' : 'No',
    meeting_date: formData.meetingDate || 'Not requested',
    meeting_time: formData.meetingTime || 'Not requested',
    
    // Newsletter subscription
    subscribe_newsletter: formData.subscribe ? 'Yes' : 'No',
    
    // Detailed answers (formatted as text)
    detailed_answers: answers.map((answer, index) => 
      `Q${index + 1}: ${answer.answer} (Score: ${answer.score})`
    ).join('\n'),
    
    // Submission timestamp
    submission_date: new Date().toLocaleString(),
    
    // Recipient email (your email where you want to receive the form data)
    to_email: process.env.REACT_APP_RECIPIENT_EMAIL || 'your-email@example.com'
  };

  try {
    const response = await window.emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.TEMPLATE_ID,
      templateParams,
      EMAILJS_CONFIG.PUBLIC_KEY
    );
    
    console.log('Email sent successfully:', response);
    return response;
  } catch (error) {
    console.error('Failed to send email:', error);
    // Fallback: log to console if email fails
    console.log('Form Data (Email failed):', { formData, scores, answers });
    throw error;
  }
};

/**
 * Alternative backend API method
 * Use this if you have your own backend API
 */
export const sendToBackendAPI = async (formData, scores, answers) => {
  const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT || '/api/submit-form';
  
  try {
    const response = await fetch(API_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        formData,
        scores,
        answers,
        submissionTime: new Date().toISOString()
      })
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const result = await response.json();
    console.log('Form submitted to backend:', result);
    return result;
  } catch (error) {
    console.error('Failed to submit to backend:', error);
    // Fallback: log to console if API fails
    console.log('Form Data (API failed):', { formData, scores, answers });
    throw error;
  }
};

