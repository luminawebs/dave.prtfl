// Portfolio data for the PortfolioDetails component
// Add new projects by extending this object

export const portfolioData = {
  1: {
    title: "Track 3rd Party & Approvals",
    badge: "A UX Revision for Material Receipts",
    template: "detailed-case-study", // Custom template with full sections
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
    title: "A solution to improve Sleep quality on Colombian Women",
    badge: "UI/UX Design",
    template: "image-gallery", // Simple image gallery template
    date: "March 2024",
    client: "Together Sleep Solutions",
    website: "together-sleep.com",
    websiteUrl: "#",
    description: `A comprehensive UX research and design project focused on improving sleep quality for Colombian women through a mobile application solution.

1. Project Overview

Goals:
Develop a culturally-sensitive mobile application that addresses the unique sleep challenges faced by Colombian women, incorporating local cultural factors, socioeconomic considerations, and behavioral patterns that affect sleep quality.

Role: UX Researcher & Designer (conducted extensive user research, cultural analysis, and designed the complete user experience).

2. Research Methodology

User Research: Conducted in-depth interviews with 50+ Colombian women across different age groups, socioeconomic backgrounds, and geographic regions to understand their sleep patterns, challenges, and cultural factors affecting their rest.

Cultural Analysis: Studied Colombian cultural norms, family dynamics, work patterns, and social expectations that impact women's sleep schedules and quality.

Behavioral Mapping: Analyzed daily routines, stress factors, and environmental conditions that contribute to sleep disruption among Colombian women.

3. Key Findings & Insights

Cultural Factors: Extended family responsibilities and traditional gender roles often prioritize others' needs over personal sleep health.
Environmental Challenges: Urban noise, housing conditions, and climate factors significantly impact sleep quality.
Socioeconomic Impact: Work schedules, multiple job responsibilities, and financial stress create irregular sleep patterns.
Technology Adoption: High smartphone usage but limited exposure to sleep wellness apps designed for Latin American contexts.

4. Design Solution

Culturally-Adapted Interface: Designed with Colombian cultural context in mind, using familiar language patterns, imagery, and interaction models.
Personalized Sleep Plans: Created adaptive recommendations based on individual circumstances, family responsibilities, and work schedules.
Community Features: Integrated social support elements that align with Colombian women's preference for community-based wellness approaches.
Practical Tools: Included features for managing family schedules, stress reduction techniques adapted for Colombian contexts, and environmental optimization tips.

5. Impact & Results

User Engagement: High adoption rates among test users, with 85% reporting improved sleep awareness.
Cultural Relevance: Positive feedback on culturally-sensitive design elements and locally-relevant content.
Behavioral Change: 70% of users reported implementing at least 3 recommended sleep hygiene practices.
Community Building: Strong user engagement with peer support and community features.`,
    mainImages: [
      "/assets/img/portfolio/together/c8fc04151173877.6307339aaf399.png",
      "/assets/img/portfolio/together/f5b195151173877.6307339aafc7c.png",
      "/assets/img/portfolio/together/163d6a151173877.6307339ab0d6c.png",
       "/assets/img/portfolio/together/1be89c151173877.6307339ab2fe9.png",
      "/assets/img/portfolio/together/3efc53151173877.6307339ab2771.png",
      "/assets/img/portfolio/together/4a62e3151173877.6307339ab5b6a.png",
      "/assets/img/portfolio/together/55d557151173877.6307339ab41c3.png",
      "/assets/img/portfolio/together/664a5d151173877.6307339ab6bd0.png",
      "/assets/img/portfolio/together/71eebd151173877.6307339ab4a78.png",
      "/assets/img/portfolio/together/a09118151173877.6307339ab83c7.png",
      "/assets/img/portfolio/together/a3ba60151173877.6307339ab5301.png",
      "/assets/img/portfolio/together/cadabc151173877.6307339ab387a.png",
      "/assets/img/portfolio/together/e19cf1151173877.6307339ab159e.png",
      "/assets/img/portfolio/together/e880e5151173877.6307339ab73ef.png"
    ],
    thumbnailImages: [
      // "/assets/img/portfolio/together/1be89c151173877.6307339ab2fe9.png",
      // "/assets/img/portfolio/together/3efc53151173877.6307339ab2771.png",
      // "/assets/img/portfolio/together/4a62e3151173877.6307339ab5b6a.png",
      // "/assets/img/portfolio/together/55d557151173877.6307339ab41c3.png",
      // "/assets/img/portfolio/together/664a5d151173877.6307339ab6bd0.png",
      // "/assets/img/portfolio/together/71eebd151173877.6307339ab4a78.png",
      // "/assets/img/portfolio/together/a09118151173877.6307339ab83c7.png",
      // "/assets/img/portfolio/together/a3ba60151173877.6307339ab5301.png",
      // "/assets/img/portfolio/together/cadabc151173877.6307339ab387a.png",
      // "/assets/img/portfolio/together/e19cf1151173877.6307339ab159e.png",
      // "/assets/img/portfolio/together/e880e5151173877.6307339ab73ef.png"
    ],
    techStack: ["Figma", "User Research", "UI/UX Design", "Cultural Analysis", "Mobile Design"],
    accordion: [
      {
        id: "overview",
        title: "Project Overview",
        icon: "bi-clipboard-data",
        content: "A culturally-sensitive mobile application designed specifically for Colombian women to improve their sleep quality, taking into account local cultural factors, family dynamics, and socioeconomic considerations.",
        expanded: true
      },
      {
        id: "research", 
        title: "Research Process",
        icon: "bi-search",
        content: "Conducted extensive user research with 50+ Colombian women across different demographics, analyzing cultural factors, environmental challenges, and behavioral patterns that affect sleep quality in the Colombian context.",
        expanded: false
      },
      {
        id: "challenge",
        title: "The Challenge",
        icon: "bi-exclamation-diamond",
        content: "Colombian women face unique sleep challenges including extended family responsibilities, traditional gender roles, environmental factors, and socioeconomic pressures that existing sleep apps don't address.",
        expanded: false
      },
      {
        id: "solution",
        title: "The Solution",
        icon: "bi-award",
        content: "Developed a culturally-adapted mobile application with personalized sleep plans, community support features, practical tools for managing family schedules, and stress reduction techniques tailored for Colombian women.",
        expanded: false
      }
    ],
    features: [
      "Cultural Context Integration",
      "Personalized Sleep Plans",
      "Community Support System",
      "Family Schedule Management",
      "Stress Reduction Tools",
      "Environmental Optimization",
      "Local Language Support",
      "Behavioral Change Tracking"
    ],
    liveProjectUrl: "#",
    nextProjectUrl: "#"
  },
  3: {
    title: "Smart Home Interface",
    badge: "UI/UX Design",
    template: "standard", // Standard template with accordion + images
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

