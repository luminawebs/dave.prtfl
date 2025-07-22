// Portfolio data for the PortfolioDetails component
// Add new projects by extending this object

export const portfolioData = {
  1: {
    title: "Track 3rd Party & Approvals",
    badge: "A UX Revision for Material Receipts",
    date: "02/2025",
    client: "Energy (Oil & Gas) Company",
    website: "",
    websiteUrl: "#",
    description: `Track 3rd Party & Approvals
A UX Revision for Material Receipts
1. Project Overview

Goals: 
Streamline MR workflows across Field Engineers → Providers → Finance while ensuring audit trails from Finance Team and compliance for internal Company teams.
Finance needed better tools to validate MRs (approved/rejected) before payment.

Role: UX Validator/Analyst (identified gaps via stakeholder notes and heuristic evaluation).

2. Methodology

Benchmarking: 5 competitor analyses informed patterns (e.g., status tracking).

Stakeholder Notes: 
Parsed conversations with Stakeholders: Business (Finance) & Product Owner to flag ambiguities, validate all requirements, api usages, previous experience with current app.
Mapped actions per user type.
Highlighted friction in provider/finance handoffs
Collaboration: Bridged gaps between devs and Product Owner to fit time requirements, technology capabilities, best methodology, solve all questions that could have remained.
Heuristic Review: Highlighted navigation issues (breadcrumbs), consistency (language), feedback loops (notifications) new Material Receipts hierachy requirements. MR for each Proyect, Well & Stage.
Findings & Key Improvements Proposed

Language: Mixed Spanish/English terms caused confusion (e.g., "Proveedor" vs. "Provider").
Navigation: Missing "Go back" buttons disrupted multi-step workflows 
Unexistent breadcrumbs to Well selection screens.
Redesign status indicators (progress percentages avoided because of time dev constrains)
User Flow: Map MR lifecycle (creation → approval → closure) with notification touchpoints.
The solution
3. UI/UX Improvements
Dashboard required to be Role-Specific
Clearer role-based UI paths (e.g., hyperlinked breadcrumbs for Wells).
Field Engineers: Quick MR PDF generation with pre-filled forms.
Finance: MR validation panel with fast search options.
Reduced manual errors in MR handoffs (Finance could trace MRs to Providers).
Confirmation Alerts: Notify Providers upon MR acceptance by Finance.
(mail whole team)

Backend Logic

Auto-remove Providers post-payment (flagged as a requirement).
Dual-signature enforcement in PDF MRs (automated by active user).


Why This Matters

Holistic View: Ties UI improvements (e.g., breadcrumbs) to user roles (e.g., Finance needs quick access).
Business Impact: Shows how UX reduces workflow bottlenecks (e.g., payment delays).
Mantain UI Business related Brand and Lookn’Feel`,
    mainImages: [
      "/assets/img/portfolio/material-receipt/02-finished/Home-documentation.png",
      "/assets/img/portfolio/material-receipt/02-finished/mr-new-flow.png",
      "/assets/img/portfolio/material-receipt/02-finished/end-img.png"
    ],
    thumbnailImages: [
      "assets/img/portfolio/material-receipt/01-process/new-flow.png",
      "assets/img/portfolio/material-receipt/01-process/old-flow.png",
      "assets/img/portfolio/material-receipt/01-process/actions-by-user.png",
      "assets/img/portfolio/material-receipt/01-process/users-access.png"
    ],
    techStack: ["Figma", "Design Thinking", "UI/UX", "Scrum"],
    accordion: [],
    features: [
      "Role-Based Dashboard",
      "Enhanced Navigation",
      "MR PDF Generation",
      "Fast MR Validation",
      "Dual-signature PDF MRs"
    ],
    liveProjectUrl: "#",
    nextProjectUrl: "#"
  },
  2: {
    title: "E-Learning Platform",
    badge: "Development",
    date: "August 2024",
    client: "EduTech Global",
    website: "elearning-platform.example.com",
    websiteUrl: "#",
    description: "A comprehensive e-learning platform designed to deliver engaging educational content with interactive features and advanced analytics.",
    mainImages: [
      "assets/img/portfolio/portfolio-10.webp",
      "assets/img/portfolio/portfolio-11.webp",
      "assets/img/portfolio/portfolio-12.webp"
    ],
    thumbnailImages: [
      "assets/img/portfolio/portfolio-1.webp",
      "assets/img/portfolio/portfolio-2.webp",
      "assets/img/portfolio/portfolio-4.webp",
      "assets/img/portfolio/portfolio-5.webp"
    ],
    techStack: ["React", "Django", "PostgreSQL", "Redis", "AWS"],
    accordion: [
      {
        id: "overview",
        title: "Project Overview",
        icon: "bi-clipboard-data",
        content: "This e-learning platform was built to provide scalable online education solutions with interactive content delivery and comprehensive progress tracking.",
        expanded: true
      },
      {
        id: "challenge",
        title: "The Challenge",
        icon: "bi-exclamation-diamond",
        content: "Creating a platform that could handle thousands of concurrent users while delivering high-quality video content and maintaining engagement through interactive elements.",
        expanded: false
      },
      {
        id: "solution",
        title: "The Solution",
        icon: "bi-award",
        content: "We implemented a microservices architecture with CDN integration, adaptive streaming, and gamification elements to create an engaging learning environment.",
        expanded: false
      }
    ],
    features: [
      "Video Streaming",
      "Interactive Quizzes",
      "Progress Tracking",
      "Certificate Generation",
      "Discussion Forums",
      "Mobile App Support"
    ],
    liveProjectUrl: "#",
    nextProjectUrl: "#"
  },
  3: {
    title: "Smart Home Interface",
    badge: "UI/UX Design",
    date: "July 2024",
    client: "IoT Innovations Ltd.",
    website: "smarthome-interface.example.com",
    websiteUrl: "#",
    description: "An intuitive smart home control interface that seamlessly integrates multiple IoT devices into a unified, user-friendly dashboard.",
    mainImages: [
      "assets/img/portfolio/portfolio-2.webp",
      "assets/img/portfolio/portfolio-6.webp",
      "assets/img/portfolio/portfolio-8.webp"
    ],
    thumbnailImages: [
      "assets/img/portfolio/portfolio-10.webp",
      "assets/img/portfolio/portfolio-11.webp",
      "assets/img/portfolio/portfolio-12.webp",
      "assets/img/portfolio/portfolio-1.webp"
    ],
    techStack: ["React", "TypeScript", "Node.js", "MQTT", "MongoDB"],
    accordion: [
      {
        id: "overview",
        title: "Project Overview",
        icon: "bi-clipboard-data",
        content: "A revolutionary smart home interface that connects and controls various IoT devices through a single, elegant dashboard designed for maximum usability.",
        expanded: true
      },
      {
        id: "challenge",
        title: "The Challenge",
        icon: "bi-exclamation-diamond",
        content: "Integrating multiple device protocols and ensuring real-time responsiveness while maintaining an intuitive user experience across different device categories.",
        expanded: false
      },
      {
        id: "solution",
        title: "The Solution",
        icon: "bi-award",
        content: "We developed a unified API layer with real-time WebSocket connections and implemented an adaptive UI that responds to different device capabilities and states.",
        expanded: false
      }
    ],
    features: [
      "Device Integration",
      "Real-time Control",
      "Energy Monitoring",
      "Automation Scheduling",
      "Voice Commands",
      "Remote Access"
    ],
    liveProjectUrl: "#",
    nextProjectUrl: "#"
  }
  // Add more projects here...
};

// Helper function to get project by ID
export const getProjectById = (id) => {
  return portfolioData[id] || null;
};

// Helper function to get all projects
export const getAllProjects = () => {
  return Object.values(portfolioData);
};

// Helper function to get projects by category/badge
export const getProjectsByCategory = (category) => {
  return Object.values(portfolioData).filter(project => 
    project.badge.toLowerCase().includes(category.toLowerCase())
  );
};

// Helper function to convert title to URL-friendly slug
export const createSlug = (title) => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-') // Replace non-alphanumeric chars with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with a single hyphen
    .replace(/^-|-$/g, ''); // Remove leading/trailing hyphens
};

// Helper function to get project by slug
export const getProjectBySlug = (slug) => {
  return Object.values(portfolioData).find(project => 
    createSlug(project.title) === slug
  ) || null;
};

// Helper function to get project ID by slug (for backward compatibility)
export const getProjectIdBySlug = (slug) => {
  const projectEntry = Object.entries(portfolioData).find(([id, project]) => 
    createSlug(project.title) === slug
  );
  return projectEntry ? projectEntry[0] : null;
};

