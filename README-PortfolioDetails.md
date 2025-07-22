# PortfolioDetails Component

A reusable React modal component for displaying detailed portfolio project information. This component was converted from the original HTML file `portfolio-details.html` to create a more dynamic and maintainable solution.

## Features

- **Modal Display**: Opens as an overlay modal with backdrop blur
- **Image Slider**: Swiper.js integration for main project images
- **Thumbnail Gallery**: GLightbox integration for image viewing
- **Tech Stack Badges**: Display technologies used in the project
- **Accordion Sections**: Collapsible sections for project details
- **Feature Lists**: Display key project features
- **Call-to-Action Buttons**: Links to live project and next project
- **Analytics Integration**: Tracks user interactions
- **Responsive Design**: Works on all device sizes
- **Smooth Animations**: AOS animations and CSS transitions

## Usage

### Basic Implementation

```jsx
import React, { useState } from 'react';
import PortfolioDetails from '../components/PortfolioDetails';

const MyPortfolioPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (projectData) => {
    setSelectedProject(projectData);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedProject(null);
  };

  return (
    <div>
      {/* Your portfolio grid */}
      <button onClick={() => handleProjectClick(projectData)}>
        View Project Details
      </button>

      {/* Modal */}
      {showModal && selectedProject && (
        <PortfolioDetails
          projectData={selectedProject}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};
```

### Project Data Structure

The component expects a `projectData` prop with the following structure:

```javascript
const projectData = {
  title: "Project Title",
  badge: "UI/UX Design",
  date: "September 2024",
  client: "Client Name",
  website: "project-website.com",
  websiteUrl: "https://project-website.com",
  description: "Project description...",
  mainImages: [
    "path/to/image1.jpg",
    "path/to/image2.jpg",
    "path/to/image3.jpg"
  ],
  thumbnailImages: [
    "path/to/thumb1.jpg",
    "path/to/thumb2.jpg",
    "path/to/thumb3.jpg",
    "path/to/thumb4.jpg"
  ],
  techStack: ["React", "Node.js", "PostgreSQL"],
  accordion: [
    {
      id: "overview",
      title: "Project Overview",
      icon: "bi-clipboard-data",
      content: "Detailed project description...",
      expanded: true
    },
    {
      id: "challenge",
      title: "The Challenge",
      icon: "bi-exclamation-diamond",
      content: "Challenge description...",
      expanded: false
    }
  ],
  features: [
    "Feature 1",
    "Feature 2",
    "Feature 3"
  ],
  liveProjectUrl: "https://live-project.com",
  nextProjectUrl: "#next-project"
};
```

## Data Management

For easier data management, use the provided `portfolioData.js` file:

```javascript
// src/data/portfolioData.js
import { portfolioData, getProjectById } from '../data/portfolioData';

// Get a specific project
const project = getProjectById(1);

// Use in your component
const handleProjectClick = (projectId) => {
  const project = getProjectById(projectId);
  if (project) {
    setSelectedProject(project);
    setShowModal(true);
  }
};
```

## Adding New Projects

1. **Add to portfolioData.js**:
   ```javascript
   export const portfolioData = {
     // ... existing projects
     4: {
       title: "New Project",
       badge: "Development",
       // ... rest of project data
     }
   };
   ```

2. **Update portfolio grid**:
   ```jsx
   <button onClick={() => handleProjectClick(4)}>
     View Project 4
   </button>
   ```

## Styling

The component uses Bootstrap classes and custom CSS. Modal styles are defined in `main.css` under the `.portfolio-details-modal` selector.

### Key CSS Classes:
- `.portfolio-details-modal` - Main modal container
- `.modal-backdrop` - Clickable backdrop
- `.modal-content` - Modal content container
- `.modal-close` - Close button
- `.tech-stack-badges` - Technology badges
- `.feature-list` - Feature list items

## Dependencies

The component relies on:
- **React** (v19+)
- **Bootstrap** (CSS classes)
- **Bootstrap Icons**
- **Swiper.js** (for image slider)
- **GLightbox** (for image gallery)
- **AOS** (for animations)

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Responsive design for all screen sizes

## Analytics

The component includes built-in analytics tracking for:
- Feature clicks
- Accordion interactions
- Button clicks (View Live Project, Next Project)
- Modal open/close events

Tracking is handled through the `trackButtonClick` function from `../utils/analytics`.

## Future Enhancements

- Add support for video content in the slider
- Implement lazy loading for images
- Add social sharing functionality
- Support for multiple project categories
- Integration with CMS for dynamic content

