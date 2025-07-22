import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import MinimalistLayout from './MinimalistLayout';
import { sendFormData } from '../services/emailService';

const XRAIProficiencyChallenge = () => {
  const navigate = useNavigate();

  // Go back to resources page
  const goBack = () => {
    navigate('/resources');
  };

  // Go to home page
  const goHome = () => {
    navigate('/');
  };

  // Handle embed functionality
  const handleEmbed = () => {
    const embedCode = `<iframe src="${window.location.origin}/ai-proficiency-challenge" width="800" height="600" frameborder="0" style="border-radius: 15px; box-shadow: 0 10px 30px rgba(0,0,0,0.1);"></iframe>`;
    
    // Copy to clipboard
    navigator.clipboard.writeText(embedCode).then(() => {
      alert('Embed code copied to clipboard!\n\nYou can now paste this code into your website or LMS.');
    }).catch(() => {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = embedCode;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      alert('Embed code copied to clipboard!\n\nYou can now paste this code into your website or LMS.');
    });
  };


  const quizData = [
    // Category 1: Personalized Video
    {
      category: "🎬 Hollywood-Level Training Videos",
      question: "Roe Jogan: 'Bro, imagine if Tony Hawk’s training videos were made for YOU. How personalized are your videos?'",
      image: "/assets/img/g/01-how-personalized-are-your-training-videos.png",
      options: [
        "Generic AF. Like a 90s infomercial (0% personalization)",
        "We’ve got different vids for sales vs. engineers (Basic segmentation)",
        "We slap the learner’s name in there like a birthday card (Mildly personal)",
        "Videos adapt like a Netflix algorithm (Role + skill-based)",
        "Our AI rebuilds videos in real-time. It’s like *Minority Report*, but for HR."
      ],
      scores: [0, 25, 50, 75, 100]
    },
    {
      category: "🎬 Hollywood-Level Training Videos",
      question: "Roe: 'Dude, what if your videos could read minds? How do they adapt to learning styles?'",
      image: "/assets/img/g/02-how-does-your-video-content-adapt-to-different-learning-styles.png",
      options: [
        "They don’t. It’s like a college lecture from 1982.",
        "Learners pick ‘fast’ or ‘slow’ versions (Like DVD menus)",
        "The system recommends stuff based on a quiz (Kind of like Spotify)",
        "Videos auto-adjust pacing/style (Like TikTok’s algorithm)",
        "Our AI creates custom pathways like a D&D dungeon master."
      ],
      scores: [0, 25, 50, 75, 100]
    },

    // Category 2: Interactive Videos
    {
      category: "🕹️ Choose-Your-Own-Adventure Training",
      question: "Roe: 'What if learners could branch like a *Black Mirror* episode? How interactive are your videos?'",
      image: "/assets/img/g/03-how-interactive-are-your-training videos.png",
      options: [
        "Linear. Like watching paint dry (No interaction)",
        "We added a quiz at the end (Bare minimum)",
        "Some clickable options (Like a Wikipedia rabbit hole)",
        "Complex branching (Think: *Detroit: Become Human* for compliance training)",
        "Full AI-driven simulation. Learners might accidentally start a virtual union."
      ],
      scores: [0, 25, 50, 75, 100]
    },
    {
      category: "🕹️ Choose-Your-Own-Adventure Training",
      question: "Roe: 'Ever seen *Bandersnatch*? How nuts does your branching get?'",
      image: "/assets/img/g/how-does-your-system-handle-branching-scenarios.png",
      options: [
        "No branching. It’s a straight road to Snoozeville.",
        "Simple ‘right/wrong’ paths (Like a morality system in *Fable*)",
        "Multiple forks (Like picking dialogue in *Mass Effect*)",
        "Adapts based on past choices (Like *AI Dungeon*)",
        "Infinite possibilities. Our AI writes new scenarios on the fly (*Westworld* vibes)."
      ],
      scores: [0, 25, 50, 75, 100]
    },

    // Category 3: Synthetic Content
    {
      category: "🤖 AI-Generated Content (No Humans Allowed)",
      question: "Roe: 'What if your training content was made by robots? How deep does the AI rabbit hole go?'",
      image: "/assets/img/g/04-how-does-your-organization-use-synthetic-media(AI-generated-content).png",
      options: [
        "We don’t trust robots. Humans write everything.",
        "We use text-to-speech that sounds like a GPS (Robotic but functional)",
        "AI generates quiz questions (Like a lazy professor reusing tests)",
        "Synthetic presenters host our videos (Deepfake news anchors)",
        "100% AI-generated. Our LMS is basically *Skynet* for training."
      ],
      scores: [0, 25, 50, 75, 100]
    },
    {
      category: "🤖 AI-Generated Content (No Humans Allowed)",
      question: "Roe: 'How fast could you train employees on, say, *how to fight a bear*?'",
      image: "/assets/img/g/04-how-quickly can-you-create-new-training content.png",
      options: [
        "Weeks. Our process is slower than DMV lines.",
        "Days. We’ve got templates, but still need coffee breaks.",
        "24 hours. Like Amazon Prime for content.",
        "Under 4 hours. *Chef’s kiss* efficiency.",
        "5 minutes. Our AI writes faster than I talk."
      ],
      scores: [0, 25, 50, 75, 100]
    },

    // Category 4: Ethics & Deepfakes
    {
      category: "👁️ Ethics & Deepfakes (Don’t Be Creepy)",
      question: "Roe: 'What if your AI clones someone’s voice? How do you handle the ethics?'",
      image: "/assets/img/g/05-how-does-your-organization-address-ethical-concerns with-synthetic-media.png",
      options: [
        "We don’t. It’s the Wild West up in here.",
        "We pinky-swore not to deepfake the CEO (No written policy)",
        "Formal policy (Like a boring Terms & Conditions doc)",
        "Clear labels + usage rules (Like ‘may contain nuts’)",
        "Full transparency + blockchain audits (We’re *too* ethical)."
      ],
      scores: [0, 25, 50, 75, 100]
    },
    {
      category: "👁️ Ethics & Deepfakes (Don’t Be Creepy)",
      question: "Roe: 'If you use AI, do you tell people? Or is it a *Black Mirror* secret?'",
      image: "/assets/img/g/how-transparent-are-you-about-using-AI-generated-content.png",
      options: [
        "Nope. Let them think it’s magic.",
        "Only if they ask (Like a dodgy politician)",
        "Tiny disclaimer (Buried in the footer)",
        "Big labels (Like ‘CAUTION: HOT’ on coffee cups)",
        "Full provenance tracking. You could audit our AI’s *thoughts*."
      ],
      scores: [0, 25, 50, 75, 100]
    }
  ];

  // Game state
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [scores, setScores] = useState({
    category1: 0,
    category2: 0,
    category3: 0,
    category4: 0
  });
  const [answers, setAnswers] = useState([]);
  const [screen, setScreen] = useState('intro'); // intro, quiz, result, confirmation
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    jobTitle: '',
    scheduleMeeting: false,
    meetingDate: '',
    meetingTime: '',
    subscribe: true // Default opt-in for newsletter
  });

  // Get feedback for selected option
  const getFeedbackForOption = (index) => {
    const questionData = quizData[currentQuestion];
    const score = questionData.scores[index];

    if (score >= 75) {
      return "Excellent! You're ahead of most companies in this area.";
    } else if (score >= 50) {
      return "Good! You're on the right track but there's room for improvement.";
    } else if (score >= 25) {
      return "You've made a start, but significant improvements are possible.";
    } else {
      return "This is an area where your company could benefit from new approaches.";
    }
  };

  // Start the quiz
  const startQuiz = () => {
    setScreen('quiz');
  };

  // Select an option
  const selectOption = (index) => {
    setSelectedOption(index);
  };

  // Move to next question
  const nextQuestion = () => {
    // Record the answer
    const questionData = quizData[currentQuestion];
    const score = questionData.scores[selectedOption];
    const newAnswer = {
      question: questionData.question,
      answer: questionData.options[selectedOption],
      score: score
    };

    // Update category score - map questions to categories
    let categoryKey;
    if (currentQuestion >= 0 && currentQuestion <= 1) {
      categoryKey = 'category1'; // Hollywood-Level Training Videos
    } else if (currentQuestion >= 2 && currentQuestion <= 3) {
      categoryKey = 'category2'; // Choose-Your-Own-Adventure Training
    } else if (currentQuestion >= 4 && currentQuestion <= 5) {
      categoryKey = 'category3'; // AI-Generated Content
    } else if (currentQuestion >= 6 && currentQuestion <= 7) {
      categoryKey = 'category4'; // Ethics & Deepfakes
    }

    setScores(prevScores => ({
      ...prevScores,
      [categoryKey]: prevScores[categoryKey] + score
    }));

    setAnswers([...answers, newAnswer]);
    setSelectedOption(null);

    // Move to next question or show results
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setScreen('result');
    }
  };

  // Toggle meeting fields
  const toggleMeetingFields = (e) => {
    setFormData({
      ...formData,
      scheduleMeeting: e.target.checked
    });
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Submit form
  const submitForm = async () => {
    const { email, fullName, meetingDate, meetingTime, scheduleMeeting } = formData;

    // Basic validation
    if (!email) {
      alert('Please enter your email address');
      return;
    }

    if (!fullName) {
      alert('Please enter your full name');
      return;
    }

    // Validate meeting fields if meeting is scheduled
    if (scheduleMeeting) {
      if (!meetingDate) {
        alert('Please select a preferred date for your meeting');
        return;
      }
      if (!meetingTime) {
        alert('Please select a preferred time slot for your meeting');
        return;
      }
    }

    // Show loading state (optional)
    const submitButton = document.querySelector('.btn-primary');
    const originalText = submitButton.textContent;
    submitButton.textContent = 'Sending...';
    submitButton.disabled = true;

    try {
      // Send email with form data
      await sendFormData(formData, scores, answers);
      
      // Log success (for debugging)
      console.log('Form submitted successfully:', {
        ...formData,
        scores,
        answers
      });

      // Show confirmation
      setScreen('confirmation');
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error sending your information. Please try again or contact us directly.');
      
      // Reset button
      submitButton.textContent = originalText;
      submitButton.disabled = false;
    }
  };

  // Calculate total score
  const totalScore = Math.round(Object.values(scores).reduce((a, b) => a + b, 0) / quizData.length);

  // Get feedback based on score
  const getOverallFeedback = () => {
    if (totalScore >= 80) {
      return "Your company is a leader in immersive learning technology! You're implementing cutting-edge solutions across all key areas.";
    } else if (totalScore >= 60) {
      return "Your company is doing well with some advanced implementations, but there are opportunities to expand your use of these technologies.";
    } else if (totalScore >= 40) {
      return "You have some foundational elements in place, but significant improvements are possible to fully leverage these technologies.";
    } else {
      return "There are substantial opportunities to implement immersive learning technologies that could transform your training programs.";
    }
  };

// Render meta tags and current screen
  return (
    <>
      <Helmet>
        <title>AI Proficiency Challenge - EduNest</title>
        <meta name="description" content="Assess your proficiency in immersive learning technology and get personalized recommendations for your training programs." />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="AI Proficiency Challenge - EduNest" />
        <meta property="og:description" content="Assess your proficiency in immersive learning technology and get personalized recommendations for your training programs." />
        <meta property="og:image" content="/assets/img/g/01-how-personalized-are-your-training-videos.png" />
        <meta property="og:url" content="https://edunest.co/ai-proficiency-challenge" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="EduNest" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Proficiency Challenge - EduNest" />
        <meta name="twitter:description" content="Assess your proficiency in immersive learning technology and get personalized recommendations for your training programs." />
        <meta name="twitter:image" content="/assets/img/g/01-how-personalized-are-your-training-videos.png" />
        <meta name="twitter:site" content="@edunest" />
      </Helmet>
      
      <MinimalistLayout title="AI Proficiency Challenge">
      <div className="container" style={{ paddingTop: '120px', paddingBottom: '60px' }}>
        {/* Back Navigation */}
        <div className="back-navigation">
          <div className="nav-buttons-left">
            <button
              className="back-arrow-btn"
              onClick={goBack}
              title="Go back to Resources"
            >
              <i className="bi bi-arrow-left"></i>
              <span>Back to Resources</span>
            </button>
            {/* <button
              className="back-arrow-btn home-btn"
              onClick={goHome}
              title="Go to Home"
            >
              <i className="bi bi-house"></i>
              <span>Home</span>
            </button> */}
            <button
              className="embed-btn"
              onClick={handleEmbed}
              title="Get embed code for this game"
            >
              <i className="bi bi-code-square"></i>
              <span>Embed</span>
            </button>
          </div>
          <div className="nav-buttons-right">
          <div className="navigation-logo" onClick={goHome} style={{ cursor: 'pointer' }}>
            <img src="/assets/img/edunest-dark.svg" alt="Edunest" width="120" />
          </div>
            
          </div>
        </div>

        {/* Intro Screen */}
        {screen === 'intro' && (
          <div className="game-card" style={{ display: 'flex', justifyContent: 'space-between', gap: '2rem' }}>
            <div style={{ flex: '1' }}>
              <img src="/assets/img/g/01-how-personalized-are-your-training-videos.png" alt="" width={"100%"} style={{ borderRadius: '16px' }}/>
            </div>
            <div style={{ flex: '1' }}>
              <h1>Learning & AI Proficiency Challenge</h1>
              <p>Discover how your company measures up in the 5 key areas of immersive learning technology. This 5-minute challenge will assess your proficiency and provide personalized recommendations.</p>

              <div style={{ margin: '2rem 0' }}>
                <div className="feature-badge">1️⃣ Personalized and adaptive video</div>
                <div className="feature-badge">2️⃣ Interactive videos: quizzes and branching</div>
                <div className="feature-badge">3️⃣ Full synthetic content generation</div>
                <div className="feature-badge">4️⃣ Ethics and transparency: deepfakes</div>
              </div>

              <p>Complete the challenge to receive your customized proficiency report and see how you compare to industry leaders.</p>

              <button className="btn btn-primary" onClick={startQuiz}>Start the Challenge</button>
            </div>
          </div>
        )}

        {/* Quiz Screen */}
        {screen === 'quiz' && (
          <div className="game-card">
            <div className="progress-container">
              <div
                className="progress-bar"
                style={{ width: `${((currentQuestion) / quizData.length) * 100}%` }}
              ></div>
            </div>

            <h2>{quizData[currentQuestion].category}</h2>

            <div className="question-content">
              <div className="question-image">
                <img
                  src={quizData[currentQuestion].image}
                  alt={quizData[currentQuestion].question}
                  className="question-img"
                />
              </div>
              <div className="question-text-options">
                <div className="question">{quizData[currentQuestion].question}</div>

                <div className="options">
                  {quizData[currentQuestion].options.map((option, index) => (
                    <div
                      key={index}
                      className={`option ${selectedOption === index ? 'selected' : ''}`}
                      onClick={() => selectOption(index)}
                    >
                      {option}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {selectedOption !== null && (
              <>
                <div className="feedback" style={{ marginTop: '1.5rem', padding: '1rem', backgroundColor: 'rgba(0,0,0,0.03)', borderRadius: '8px' }}>
                  {getFeedbackForOption(selectedOption)}
                </div>
                <button
                  className="btn btn-primary"
                  style={{ marginTop: '1.5rem' }}
                  onClick={nextQuestion}
                >
                  Next Question
                </button>
              </>
            )}
          </div>
        )}

        {/* Result Screen */}
        {screen === 'result' && (
          <div className="game-card">
            <div className="result-section">
              <h2>Your XR & AI Proficiency Score</h2>
              <div className="score">{totalScore}%</div>

              <div className="feedback">
                <p>{getOverallFeedback()}</p>
              </div>

              <div id="category-scores" style={{ marginBottom: '2rem' }}>
                <h3>Your Category Scores</h3>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem', marginTop: '1rem' }}>
                  <div>
                    <strong>1️⃣ 🎬 Hollywood-Level Training Videos</strong>
                    <div style={{ height: '10px', background: '#e9ecef', borderRadius: '5px', marginTop: '0.5rem' }}>
                      <div style={{ height: '100%', borderRadius: '5px', background: 'linear-gradient(90deg, var(--accent-color), var(--accent-color))', width: `${scores.category1 / 2}%` }}></div>
                    </div>
                    <div style={{ textAlign: 'right', marginTop: '0.25rem', fontSize: '0.9rem' }}>{scores.category1 / 2}%</div>
                  </div>
                  <div>
                    <strong>2️⃣ 🕹️ Choose-Your-Own-Adventure Training</strong>
                    <div style={{ height: '10px', background: '#e9ecef', borderRadius: '5px', marginTop: '0.5rem' }}>
                      <div style={{ height: '100%', borderRadius: '5px', background: 'linear-gradient(90deg, var(--accent-color), var(--accent-color))', width: `${scores.category2 / 2}%` }}></div>
                    </div>
                    <div style={{ textAlign: 'right', marginTop: '0.25rem', fontSize: '0.9rem' }}>{scores.category2 / 2}%</div>
                  </div>
                  <div>
                    <strong>3️⃣ 🤖 AI-Generated Content (No Humans Allowed)</strong>
                    <div style={{ height: '10px', background: '#e9ecef', borderRadius: '5px', marginTop: '0.5rem' }}>
                      <div style={{ height: '100%', borderRadius: '5px', background: 'linear-gradient(90deg, var(--accent-color), var(--accent-color))', width: `${scores.category3 / 2}%` }}></div>
                    </div>
                    <div style={{ textAlign: 'right', marginTop: '0.25rem', fontSize: '0.9rem' }}>{scores.category3 / 2}%</div>
                  </div>
                  <div>
                    <strong>4️⃣ 👁️ Ethics & Deepfakes (Don't Be Creepy)</strong>
                    <div style={{ height: '10px', background: '#e9ecef', borderRadius: '5px', marginTop: '0.5rem' }}>
                      <div style={{ height: '100%', borderRadius: '5px', background: 'linear-gradient(90deg, var(--accent-color), var(--accent-color))', width: `${scores.category4 / 2}%` }}></div>
                    </div>
                    <div style={{ textAlign: 'right', marginTop: '0.25rem', fontSize: '0.9rem' }}>{scores.category4 / 2}%</div>
                  </div>
                </div>
              </div>




              <div className="lead-form">
                <h3>Get Your <span className="highlight">Free</span> Detailed Report</h3>
                <p>We’ll send your personalized results + bonus case studies.</p>

                <div className="form-grid">
                  {/* Name & Email (always visible) */}
                  <div className="form-group">
                    <label>Full Name *</label>
                    <input
                      type="text"
                      name="fullName"
                      placeholder="Elon Musk"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label>Work Email *</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="elon@spacex.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  {/* Conditional fields (appear after email/name are filled) */}
                  {(formData.email && formData.fullName) && (
                    <>
                      <div className="form-group">
                        <label>Company</label>
                        <input
                          type="text"
                          name="company"
                          placeholder="SpaceX"
                          value={formData.company}
                          onChange={handleInputChange}
                        />
                      </div>

                      <div className="form-group">
                        <label>Job Title</label>
                        <input
                          type="text"
                          name="jobTitle"
                          placeholder="Chief Meme Officer"
                          value={formData.jobTitle}
                          onChange={handleInputChange}
                        />
                      </div>

                      {/* Meeting checkbox - triggers date/time fields */}
                      <div className="checkbox-group">
                        <input
                          type="checkbox"
                          id="schedule-meeting"
                          checked={formData.scheduleMeeting}
                          onChange={(e) => setFormData({ ...formData, scheduleMeeting: e.target.checked })}
                        />
                        <label htmlFor="schedule-meeting">
                          📅 Schedule a 15-min consultation (free)
                        </label>
                      </div>

                      {formData.scheduleMeeting && (
                        <div className="meeting-fields">
                          <div className="form-group">
                            <label>Preferred Date *</label>
                            <input
                              type="date"
                              name="meetingDate"
                              min={new Date().toISOString().split('T')[0]}
                              value={formData.meetingDate}
                              onChange={handleInputChange}
                              required
                            />
                          </div>
                          <div className="form-group">
                            <label>Time Slot *</label>
                            <select
                              name="meetingTime"
                              value={formData.meetingTime}
                              onChange={handleInputChange}
                              required
                            >
                              <option value="">Select...</option>
                              <option value="9-11">☕ Morning (9-11 AM)</option>
                              <option value="11-2">🍔 Lunch-ish (11 AM-2 PM)</option>
                              <option value="2-5">😪 Afternoon (2-5 PM)</option>
                            </select>
                          </div>
                        </div>
                      )}

                      {/* Newsletter opt-in (checked by default) */}
                      <div className="checkbox-group">
                        <input
                          type="checkbox"
                          id="subscribe"
                          checked={formData.subscribe}
                          onChange={(e) => setFormData({ ...formData, subscribe: e.target.checked })}
                        />
                        <label htmlFor="subscribe">
                          👍 Yes! Send me occasional eLearning tech tips (unsubscribe anytime)
                        </label>
                      </div>
                    </>
                  )}
                </div>

                <button className="btn btn-primary" onClick={submitForm}>
                  {formData.scheduleMeeting ? "Get Report & Schedule Meeting" : "Get My Free Report"}
                </button>

                <p className="privacy-note">
                  We respect your privacy. No spam, ever.
                  <a href="/privacy">Privacy Policy</a>
                </p>
              </div>


            </div>

          </div>
        )}

        {/* Confirmation Screen */}
        {screen === 'confirmation' && (
          <div className="game-card">
            <div className="confirmation">
              <div className="confirmation-icon">✓</div>
              <h2>Thank You!</h2>
              <p>Your proficiency report is on its way to your inbox. We've also included personalized recommendations based on your results.</p>

              {formData.scheduleMeeting && (
                <div id="meeting-confirmation" style={{ marginTop: '1.5rem', padding: '1rem', backgroundColor: 'rgba(40, 167, 69, 0.1)', borderRadius: '8px' }}>
                  <p>We'll be in touch shortly to confirm your 15-minute consultation. If you need to reschedule, just reply to our email.</p>
                </div>
              )}

              <p style={{ marginTop: '1.5rem' }}>Want to learn more now? <a href="#" style={{ color: 'var(--primary)', fontWeight: '600' }}>Explore our case studies</a></p>
            </div>

          </div>
        )}

        {/* CSS Styles */}
        <style jsx>{`
        /* Inherit edunest.co color scheme and design system */
        :root {
          --background-color: #031119;
          --default-color: rgba(255, 255, 255, 0.8);
          --heading-color: #e0e9f2;
          --accent-color: #e3a127;
          --surface-color: #1b262c;
          --contrast-color: #ffffff;
          --success: #059652;
          --warning: #ffc107;
          --danger: #df1529;
          --default-font: "Roboto", system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
          --heading-font: "Nunito Sans", sans-serif;
        }
        
        .back-navigation {
          margin-bottom: 2rem; 
          display: flex;  
          flex-direction: row;  
          align-items: center;  
          justify-content: space-between;
          width: 100%;
        }
        
        .nav-buttons-left, .nav-buttons-right {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        
        .navigation-logo {
          flex: 1;
          display: flex;
          justify-content: center;
        }
        
        .back-arrow-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.25rem;
          background: transparent;
          border: 2px solid rgba(255, 255, 255, 0.2);
          border-radius: 8px;
          color: var(--default-color);
          font-size: 0.9rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
        }
        
        .back-arrow-btn:hover {
          border-color: var(--accent-color);
          background-color: rgba(227, 161, 39, 0.1);
          color: var(--accent-color);
          transform: translateX(-2px);
        }
        
        .back-arrow-btn i {
          font-size: 1.1rem;
        }
        
        .embed-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.25rem;
          background: rgba(227, 161, 39, 0.1);
          border: 2px solid var(--accent-color);
          border-radius: 8px;
          color: var(--accent-color);
          font-size: 0.9rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
        }
        
        .embed-btn:hover {
          background-color: var(--accent-color);
          color: var(--contrast-color);
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(227, 161, 39, 0.3);
        }
        
        .embed-btn i {
          font-size: 1.1rem;
        }
        
 
        
        .game-card {
          background: var(--surface-color);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 15px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
          padding: 2rem;
          margin-bottom: 2rem;
          transform: translateY(0);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .game-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.4);
        }
        
     
        
        h2 {
          color: var(--heading-color);
          font-family: var(--heading-font);
          margin-top: 0;
          font-weight: 600;
        }
        
        h3 {
          color: var(--heading-color);
          font-family: var(--heading-font);
          font-weight: 600;
        }
        
        p {
          color: var(--default-color);
          line-height: 1.6;
        }
        
        .progress-container {
          width: 100%;
          height: 10px;
          background-color: rgba(255, 255, 255, 0.1);
          border-radius: 5px;
          margin-bottom: 2rem;
        }
        
        .progress-bar {
          height: 100%;
          border-radius: 5px;
          background: var(--accent-color);
          width: 0%;
          transition: width 0.5s ease;
        }
        
        .question-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          margin-bottom: 1.5rem;
          align-items: start;
        }
        
        .question-image {
          display: flex;
          justify-content: center;
          align-items: flex-start;
        }
        
        .question-img {
          width: 100%;
          // max-width: 400px;
          height: auto;
          border-radius: 12px;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .question-img:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 35px rgba(0, 0, 0, 0.4);
        }
        
        .question-text-options {
          display: flex;
          flex-direction: column;
        }
        
        .question {
          margin-bottom: 1.5rem;
          font-weight: 500;
          font-size: 1.1rem;
          color: var(--heading-color);
        }
        
        .options {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1rem;
        }
        
        .option {
          padding: 1rem;
          border: 2px solid rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.3s ease;
          background-color: rgba(255, 255, 255, 0.02);
          color: var(--default-color);
        }
        
        .option:hover {
          border-color: var(--accent-color);
          background-color: rgba(227, 161, 39, 0.1);
          transform: translateY(-2px);
        }
        
        .option.selected {
          border-color: var(--accent-color);
          background-color: rgba(227, 161, 39, 0.15);
          color: var(--contrast-color);
        }
        
        .option.correct {
          border-color: var(--success);
          background-color: rgba(5, 150, 82, 0.15);
        }
        
        .option.incorrect {
          border-color: var(--danger);
          background-color: rgba(223, 21, 41, 0.15);
        }
        
        .btn {
          display: inline-block;
          padding: 0.75rem 1.5rem;
          border: none;
          border-radius: 50px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 0.9rem;
          letter-spacing: 1px;
          text-transform: uppercase;
        }
        
        .btn-primary {
          background-color: var(--accent-color);
          color: var(--contrast-color);
          border: 1px solid var(--accent-color);
        }
        
        .btn-primary:hover {
          transform: translateY(-2px);
          background-color: color-mix(in srgb, var(--accent-color), black 10%);
          box-shadow: 0 5px 15px rgba(227, 161, 39, 0.4);
        }
        
        .btn-secondary {
          background-color: transparent;
          color: var(--accent-color);
          border: 2px solid var(--accent-color);
        }
        
        .btn-secondary:hover {
          background-color: var(--accent-color);
          color: var(--contrast-color);
        }
        
        .hidden {
          display: none;
        }
        
        .result-section {
          text-align: center;
        }
        
        .score {
          font-size: 3rem;
          font-weight: 700;
          color: var(--accent-color);
          margin: 1rem 0;
          font-family: var(--heading-font);
        }
        
        .feedback {
          margin-bottom: 2rem;
          font-size: 1.1rem;
          color: var(--default-color);
          padding: 1rem;
          background-color: rgba(255, 255, 255, 0.02);
          border-radius: 8px;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .lead-form {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1rem;
          margin-top: 2rem;
          text-align: left;
        }
        
        .form-group {
          margin-bottom: 1rem;
        }
        
        label {
          display: block;
          margin-bottom: 0.5rem;
          font-weight: 500;
          color: var(--heading-color);
        }
        
        input, select {
          width: 100%;
          padding: 0.8rem;
          border: 2px solid rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          font-size: 1rem;
          transition: border-color 0.3s ease;
          background-color: rgba(255, 255, 255, 0.02);
          color: var(--default-color);
          box-sizing: border-box;
        }
        
        input:focus, select:focus {
          outline: none;
          border-color: var(--accent-color);
          background-color: rgba(255, 255, 255, 0.05);
        }
        
        input::placeholder {
          color: rgba(255, 255, 255, 0.4);
        }
        
        .checkbox-group {
          display: flex;
          align-items: center;
          margin-top: 1rem;
        }
        
        .checkbox-group input {
          width: auto;
          margin-right: 0.5rem;
        }
        
        .checkbox-group label {
          margin-bottom: 0;
          color: var(--default-color);
        }
        
        .feature-badge {
          display: inline-block;
          padding: 0.5rem 1rem;
          background-color: rgba(227, 161, 39, 0.1);
          color: var(--accent-color);
          border: 1px solid rgba(227, 161, 39, 0.3);
          border-radius: 20px;
          margin: 0.5rem;
          font-size: 0.9rem;
          font-weight: 600;
        }
        
        .confirmation {
          text-align: center;
          padding: 2rem;
        }
        
        .confirmation-icon {
          font-size: 4rem;
          color: var(--success);
          margin-bottom: 1rem;
        }
        
        a {
          color: var(--accent-color);
          text-decoration: none;
          transition: 0.3s;
        }
        
        a:hover {
          color: color-mix(in srgb, var(--accent-color), transparent 25%);
        }
        
        @media (max-width: 768px) {
          .container {
            padding: 1rem;
          }
          
          .game-card {
            padding: 1.5rem;
          }
          
          h1 {
            font-size: 2rem;
          }
          
          .score {
            font-size: 2.5rem;
          }
          
          .question-content {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
          
          .question-image {
            order: 1;
          }
          
          .question-text-options {
            order: 2;
          }
          
          .question-img {
            max-width: 240px;
          }
      `}
        </style>
      </div>
    </MinimalistLayout>
    </>
  );
};

export default XRAIProficiencyChallenge;