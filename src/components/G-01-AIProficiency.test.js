import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';

// Define mocks first
const mockNavigate = jest.fn();
const mockSendFormData = jest.fn().mockResolvedValue({ status: 200, text: 'Success' });

// Create the component with mocked dependencies inline
const MockedComponent = () => {
  // Mock the hook inside the component
  const originalModule = require('./G-01-AIProficiency');
  
  // We'll test the logic without the routing dependency
  return React.createElement('div', {
    'data-testid': 'test-container'
  }, 'Component Loading Test');
};

// Mock console.log to capture form submissions
const mockConsoleLog = jest.spyOn(console, 'log').mockImplementation(() => {});

// Simple wrapper component
const TestWrapper = ({ children }) => (
  <div>{children}</div>
);

describe('G-01-AIProficiency Form End-to-End Tests', () => {
  beforeEach(() => {
    mockConsoleLog.mockClear();
  });

  afterAll(() => {
    mockConsoleLog.mockRestore();
  });

  test('Complete quiz flow and form submission', async () => {
    render(
      <TestWrapper>
        <XRAIProficiencyChallenge />
      </TestWrapper>
    );

    // 1. Verify intro screen appears
    expect(screen.getByText('Learning & AI Proficiency Challenge')).toBeInTheDocument();
    expect(screen.getByText('Start the Challenge')).toBeInTheDocument();

    // 2. Start the quiz
    fireEvent.click(screen.getByText('Start the Challenge'));

    // 3. Answer all quiz questions
    for (let questionIndex = 0; questionIndex < 8; questionIndex++) {
      // Wait for question to load
      await waitFor(() => {
        expect(screen.getByText(/Hollywood-Level Training Videos|Choose-Your-Own-Adventure Training|AI-Generated Content|Ethics & Deepfakes/)).toBeInTheDocument();
      });

      // Select the first option (index 0)
      const options = screen.getAllByText(/Generic AF|They don't|Linear|No branching|We don't trust robots|Weeks|We don't|Nope/i);
      if (options.length > 0) {
        fireEvent.click(options[0]);
      }

      // Wait for feedback to appear
      await waitFor(() => {
        expect(screen.getByText(/This is an area where your company could benefit from new approaches/)).toBeInTheDocument();
      });

      // Click Next Question
      const nextButton = screen.getByText('Next Question');
      fireEvent.click(nextButton);
    }

    // 4. Verify results screen appears
    await waitFor(() => {
      expect(screen.getByText('Your XR & AI Proficiency Score')).toBeInTheDocument();
      expect(screen.getByText('0%')).toBeInTheDocument(); // Should be 0% since we selected all lowest options
    });

    // 5. Fill out the form
    const nameInput = screen.getByPlaceholderText('Elon Musk');
    const emailInput = screen.getByPlaceholderText('elon@spacex.com');
    
    fireEvent.change(nameInput, { target: { value: 'Test User' } });
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });

    // Wait for conditional fields to appear
    await waitFor(() => {
      expect(screen.getByPlaceholderText('SpaceX')).toBeInTheDocument();
    });

    const companyInput = screen.getByPlaceholderText('SpaceX');
    const jobTitleInput = screen.getByPlaceholderText('Chief Meme Officer');
    
    fireEvent.change(companyInput, { target: { value: 'Test Company' } });
    fireEvent.change(jobTitleInput, { target: { value: 'Test Title' } });

    // 6. Test meeting scheduling option
    const meetingCheckbox = screen.getByLabelText(/Schedule a 15-min consultation/);
    fireEvent.click(meetingCheckbox);

    await waitFor(() => {
      expect(screen.getByLabelText('Preferred Date *')).toBeInTheDocument();
    });

    const dateInput = screen.getByLabelText('Preferred Date *');
    const timeSelect = screen.getByLabelText('Time Slot *');
    
    // Set a future date
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const tomorrowISO = tomorrow.toISOString().split('T')[0];
    
    fireEvent.change(dateInput, { target: { value: tomorrowISO } });
    fireEvent.change(timeSelect, { target: { value: '9-11' } });

    // 7. Submit the form
    const submitButton = screen.getByText('Get Report & Schedule Meeting');
    fireEvent.click(submitButton);

    // 8. Verify form submission (currently logs to console)
    await waitFor(() => {
      expect(mockConsoleLog).toHaveBeenCalledWith(
        'Form submitted:',
        expect.objectContaining({
          fullName: 'Test User',
          email: 'test@example.com',
          company: 'Test Company',
          jobTitle: 'Test Title',
          scheduleMeeting: true,
          meetingDate: tomorrowISO,
          meetingTime: '9-11',
          subscribe: true,
          scores: expect.objectContaining({
            category1: 0,
            category2: 0,
            category3: 0,
            category4: 0
          }),
          answers: expect.arrayContaining([
            expect.objectContaining({
              score: 0
            })
          ])
        })
      );
    });

    // 9. Verify confirmation screen appears
    await waitFor(() => {
      expect(screen.getByText('Thank You!')).toBeInTheDocument();
      expect(screen.getByText(/Your proficiency report is on its way to your inbox/)).toBeInTheDocument();
      expect(screen.getByText(/We'll be in touch shortly to confirm your 15-minute consultation/)).toBeInTheDocument();
    });
  });

  test('Form validation - missing email', async () => {
    render(
      <TestWrapper>
        <XRAIProficiencyChallenge />
      </TestWrapper>
    );

    // Navigate to results (skip quiz for this test)
    fireEvent.click(screen.getByText('Start the Challenge'));
    
    // Complete quiz quickly by clicking through
    for (let i = 0; i < 8; i++) {
      await waitFor(() => {
        const options = screen.getAllByRole('button', { name: /Generic AF|They don't|Linear|No branching|We don't trust robots|Weeks|We don't|Nope/i });
        if (options.length > 0) {
          fireEvent.click(options[0]);
        }
      });
      
      if (i < 7) {
        const nextButton = screen.getByText('Next Question');
        fireEvent.click(nextButton);
      }
    }

    await waitFor(() => {
      expect(screen.getByText('Your XR & AI Proficiency Score')).toBeInTheDocument();
    });

    // Try to submit without email
    const submitButton = screen.getByText('Get My Free Report');
    
    // Mock alert
    const mockAlert = jest.spyOn(window, 'alert').mockImplementation(() => {});
    
    fireEvent.click(submitButton);
    
    expect(mockAlert).toHaveBeenCalledWith('Please enter your email address');
    
    mockAlert.mockRestore();
  });

  test('Scoring calculation works correctly', async () => {
    render(
      <TestWrapper>
        <XRAIProficiencyChallenge />
      </TestWrapper>
    );

    fireEvent.click(screen.getByText('Start the Challenge'));

    // Answer all questions with highest scores (index 4, score 100 each)
    for (let questionIndex = 0; questionIndex < 8; questionIndex++) {
      await waitFor(() => {
        expect(screen.getByText(/Hollywood-Level Training Videos|Choose-Your-Own-Adventure Training|AI-Generated Content|Ethics & Deepfakes/)).toBeInTheDocument();
      });

      // Select the last option (highest score)
      const options = screen.getAllByText(/Our AI rebuilds videos|Our AI creates custom pathways|Full AI-driven simulation|Infinite possibilities|100% AI-generated|5 minutes|Full transparency|Full provenance tracking/i);
      if (options.length > 0) {
        fireEvent.click(options[options.length - 1]);
      }

      await waitFor(() => {
        expect(screen.getByText(/Excellent! You're ahead of most companies/)).toBeInTheDocument();
      });

      if (questionIndex < 7) {
        fireEvent.click(screen.getByText('Next Question'));
      }
    }

    // Verify perfect score
    await waitFor(() => {
      expect(screen.getByText('100%')).toBeInTheDocument();
      expect(screen.getByText(/Your company is a leader in immersive learning technology/)).toBeInTheDocument();
    });
  });
});

