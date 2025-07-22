// Manual form testing script
// Run this with: node test-form-manually.js

const { sendFormData, sendToBackendAPI } = require('./src/services/emailService');

// Mock window.emailjs to simulate the browser environment
global.window = {
  emailjs: null // Simulate EmailJS not being loaded
};

// Test data
const testFormData = {
  fullName: 'John Doe',
  email: 'john.doe@example.com',
  company: 'Tech Corp',
  jobTitle: 'Senior Developer',
  scheduleMeeting: true,
  meetingDate: '2024-12-25',
  meetingTime: '10:00-12:00',
  subscribe: true
};

const testScores = {
  category1: 80, // AI Knowledge
  category2: 65, // Implementation
  category3: 90, // Strategy
  category4: 75  // Future Planning
};

const testAnswers = [
  { question: 'What is AI?', answer: 'Artificial Intelligence systems', score: 40 },
  { question: 'How to implement AI?', answer: 'Step by step approach', score: 40 },
  { question: 'AI strategy importance?', answer: 'Critical for business', score: 35 },
  { question: 'Implementation challenges?', answer: 'Data quality and skills', score: 25 },
  { question: 'Future of AI?', answer: 'Widespread adoption', score: 45 },
  { question: 'AI ethics?', answer: 'Very important consideration', score: 45 },
  { question: 'ROI measurement?', answer: 'Track key metrics', score: 35 },
  { question: 'Team preparation?', answer: 'Training and upskilling', score: 40 }
];

async function testFormSubmission() {
  console.log('🧪 TESTING FORM SUBMISSION');
  console.log('=' .repeat(50));
  
  console.log('📋 Test Data:');
  console.log('Form Data:', JSON.stringify(testFormData, null, 2));
  console.log('Scores:', testScores);
  console.log('Total Score:', Math.round(Object.values(testScores).reduce((a, b) => a + b, 0) / 8));
  console.log('');
  
  try {
    console.log('🔄 Testing EmailJS fallback (no EmailJS loaded)...');
    const result = await sendFormData(testFormData, testScores, testAnswers);
    console.log('✅ EmailJS fallback result:', result);
    console.log('');
  } catch (error) {
    console.error('❌ EmailJS test failed:', error.message);
  }
  
  // Test with EmailJS mock
  try {
    console.log('🔄 Testing with EmailJS mock...');
    global.window.emailjs = {
      send: async (serviceId, templateId, params, publicKey) => {
        console.log('📧 EmailJS.send called with:');
        console.log('  Service ID:', serviceId);
        console.log('  Template ID:', templateId);
        console.log('  Public Key:', publicKey);
        console.log('  Template Parameters:', JSON.stringify(params, null, 2));
        return { status: 200, text: 'Mock success' };
      }
    };
    
    const result2 = await sendFormData(testFormData, testScores, testAnswers);
    console.log('✅ EmailJS mock result:', result2);
    console.log('');
  } catch (error) {
    console.error('❌ EmailJS mock test failed:', error.message);
  }
  
  // Test backend API
  try {
    console.log('🔄 Testing Backend API (will fail - no server)...');
    await sendToBackendAPI(testFormData, testScores, testAnswers);
  } catch (error) {
    console.log('✅ Expected API error (no server running):', error.message);
    console.log('');
  }
  
  console.log('🎉 Form testing completed!');
  console.log('=' .repeat(50));
}

// Run the test
testFormSubmission().catch(console.error);

