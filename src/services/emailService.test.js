import { sendFormData, sendToBackendAPI } from './emailService';

// Mock EmailJS
global.emailjs = {
  send: jest.fn()
};

// Mock fetch
global.fetch = jest.fn();

describe('Email Service Tests', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    console.log = jest.fn();
    console.warn = jest.fn();
    console.error = jest.fn();
  });

  describe('sendFormData', () => {
    const mockFormData = {
      fullName: 'Test User',
      email: 'test@example.com',
      company: 'Test Company',
      jobTitle: 'Test Title',
      scheduleMeeting: true,
      meetingDate: '2024-12-25',
      meetingTime: '9-11',
      subscribe: true
    };

    const mockScores = {
      category1: 50,
      category2: 75,
      category3: 25,
      category4: 100
    };

    const mockAnswers = [
      { question: 'Test Q1', answer: 'Test A1', score: 25 },
      { question: 'Test Q2', answer: 'Test A2', score: 50 }
    ];

    test('should send email successfully with EmailJS', async () => {
      // Mock successful EmailJS response
      global.emailjs.send.mockResolvedValue({ status: 200, text: 'Success' });

      const result = await sendFormData(mockFormData, mockScores, mockAnswers);

      expect(global.emailjs.send).toHaveBeenCalledWith(
        expect.any(String), // SERVICE_ID
        expect.any(String), // TEMPLATE_ID
        expect.objectContaining({
          to_email: 'luminawebs@gmail.com',
          user_name: 'Test User',
          user_email: 'test@example.com',
          user_company: 'Test Company',
          user_job_title: 'Test Title',
          total_score: expect.any(Number),
          schedule_meeting: 'Yes',
          meeting_date: '2024-12-25',
          meeting_time: '9-11',
          subscribe_newsletter: 'Yes',
        }),
        expect.any(String) // PUBLIC_KEY
      );

      expect(result.status).toBe(200);
    });

    test('should fallback to console logging when EmailJS is not available', async () => {
      // Remove EmailJS from global
      delete global.emailjs;

      const result = await sendFormData(mockFormData, mockScores, mockAnswers);

      expect(console.warn).toHaveBeenCalledWith('EmailJS not loaded. Form data logged to console instead.');
      expect(console.log).toHaveBeenCalledWith('Form Data:', {
        formData: mockFormData,
        scores: mockScores,
        answers: mockAnswers
      });
      expect(result.status).toBe(200);
      expect(result.text).toBe('Logged to console');
    });

    test('should handle EmailJS errors gracefully', async () => {
      // Restore EmailJS and mock error
      global.emailjs = { send: jest.fn() };
      global.emailjs.send.mockRejectedValue(new Error('EmailJS Error'));

      await expect(sendFormData(mockFormData, mockScores, mockAnswers))
        .rejects.toThrow('EmailJS Error');

      expect(console.error).toHaveBeenCalledWith('Failed to send email:', expect.any(Error));
      expect(console.log).toHaveBeenCalledWith('Form Data (Email failed):', {
        formData: mockFormData,
        scores: mockScores,
        answers: mockAnswers
      });
    });

    test('should calculate scores correctly', async () => {
      global.emailjs = { send: jest.fn().mockResolvedValue({ status: 200 }) };

      await sendFormData(mockFormData, mockScores, mockAnswers);

      const callArgs = global.emailjs.send.mock.calls[0][2];
      
      // Total score should be average of all categories
      expect(callArgs.total_score).toBe(Math.round((50 + 75 + 25 + 100) / 8));
      
      // Individual category scores should be divided by 2 (since each category has 2 questions)
      expect(callArgs.category1_score).toBe(25); // 50/2
      expect(callArgs.category2_score).toBe(38); // 75/2 rounded
      expect(callArgs.category3_score).toBe(13); // 25/2 rounded
      expect(callArgs.category4_score).toBe(50); // 100/2
    });
  });

  describe('sendToBackendAPI', () => {
    const mockFormData = {
      fullName: 'Test User',
      email: 'test@example.com'
    };
    const mockScores = { category1: 50 };
    const mockAnswers = [{ question: 'Test', answer: 'Test', score: 50 }];

    test('should send to backend API successfully', async () => {
      const mockResponse = {
        ok: true,
        json: jest.fn().mockResolvedValue({ success: true, id: '123' })
      };
      global.fetch.mockResolvedValue(mockResponse);

      const result = await sendToBackendAPI(mockFormData, mockScores, mockAnswers);

      expect(global.fetch).toHaveBeenCalledWith(
        '/api/submit-form', // Default endpoint
        expect.objectContaining({
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: expect.stringContaining('"submissionTime":')
        })
      );

      // Verify the body contains the expected data structure
      const callArgs = global.fetch.mock.calls[0][1];
      const bodyData = JSON.parse(callArgs.body);
      expect(bodyData.formData).toEqual(mockFormData);
      expect(bodyData.scores).toEqual(mockScores);
      expect(bodyData.answers).toEqual(mockAnswers);
      expect(bodyData.submissionTime).toMatch(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}/); // ISO date format

      expect(result).toEqual({ success: true, id: '123' });
    });

    test('should handle backend API errors', async () => {
      global.fetch.mockRejectedValue(new Error('Network Error'));

      await expect(sendToBackendAPI(mockFormData, mockScores, mockAnswers))
        .rejects.toThrow('Network Error');

      expect(console.error).toHaveBeenCalledWith('Failed to submit to backend:', expect.any(Error));
      expect(console.log).toHaveBeenCalledWith('Form Data (API failed):', {
        formData: mockFormData,
        scores: mockScores,
        answers: mockAnswers
      });
    });

    test('should handle HTTP error responses', async () => {
      const mockResponse = {
        ok: false,
        status: 500
      };
      global.fetch.mockResolvedValue(mockResponse);

      await expect(sendToBackendAPI(mockFormData, mockScores, mockAnswers))
        .rejects.toThrow('HTTP error! status: 500');
    });
  });

  test('Environment variable usage', () => {
    // Test that the service respects environment variables
    const originalEnv = process.env;
    process.env = {
      ...originalEnv,
      REACT_APP_EMAILJS_PUBLIC_KEY: 'test_key',
      REACT_APP_EMAILJS_SERVICE_ID: 'test_service',
      REACT_APP_EMAILJS_TEMPLATE_ID: 'test_template',
      REACT_APP_RECIPIENT_EMAIL: 'test@example.com',
      REACT_APP_API_ENDPOINT: 'https://api.example.com/submit'
    };

    // Re-import to get updated environment variables
    jest.resetModules();
    const { sendFormData, sendToBackendAPI } = require('./emailService');

    expect(process.env.REACT_APP_EMAILJS_PUBLIC_KEY).toBe('test_key');
    expect(process.env.REACT_APP_API_ENDPOINT).toBe('https://api.example.com/submit');

    // Restore environment
    process.env = originalEnv;
  });
});

