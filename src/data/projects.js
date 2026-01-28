// Lokeswaran's Portfolio Projects Data

export const projects = [
  {
    id: 1,
    title: "HeadCount AI – Smart Occupancy Monitoring",
    description: "An intelligent real-time people-counting and occupancy monitoring system built using Computer Vision. It leverages the YOLOv8m deep learning model to accurately detect humans while filtering out false positives.",
    longDescription: "HeadCount AI is an intelligent real-time people-counting and occupancy monitoring system built using Computer Vision. It leverages the YOLOv8m deep learning model to accurately detect humans while filtering out false positives like objects, shadows, and photos. The system includes an adaptive Auto-Capacity Engine that dynamically estimates safe room limits and triggers instant alerts when capacity is exceeded.",
    image: "/images/headcount-ai.png",
    tags: ["Computer Vision", "YOLOv8", "Python", "AI/ML"],
    category: "AI / ML",
    featured: true,
    metrics: [
      { label: "Detection Accuracy", value: "98%" },
      { label: "Processing", value: "Real-time" },
      { label: "False Positives", value: "<1%" }
    ],
    links: {
      live: null,
      github: "https://github.com/lokeswaran22/HeadCount-AI"
    },
    year: "2024"
  },
  {
    id: 2,
    title: "Pristonix Timesheet",
    description: "A comprehensive timesheet management system for tracking employee work hours, projects, and productivity metrics. Built with modern web technologies for efficient workforce management.",
    longDescription: "Developed a full-featured timesheet application that helps organizations track employee work hours, manage projects, and analyze productivity. Features include time entry, project assignment, reporting, and analytics dashboard.",
    image: "/images/pristonix-timesheet.png",
    tags: ["JavaScript", "Node.js", "React", "MongoDB"],
    category: "WEB APPLICATION",
    featured: true,
    metrics: [
      { label: "Efficiency Improvement", value: "80%" },
      { label: "User Satisfaction", value: "95%" },
      { label: "Time Saved", value: "10 hrs/week" }
    ],
    links: {
      live: null,
      github: "https://github.com/lokeswaran22/pristonix-timesheet"
    },
    year: "2024"
  },
  {
    id: 3,
    title: "1zmore Music Player",
    description: "1zmore is a sleek and user-friendly music player built using HTML, CSS, and JavaScript. Designed for music enthusiasts, it offers a smooth listening experience with an intuitive interface.",
    longDescription: "Developed a modern music player with features including playlist management, audio controls, shuffle and repeat modes, and a beautiful user interface. Optimized for performance and user experience.",
    image: "/images/1zmore-music-player.png",
    tags: ["JavaScript", "HTML", "CSS", "Audio API"],
    category: "WEB APPLICATION",
    featured: true,
    metrics: [
      { label: "User Engagement", value: "85%" },
      { label: "Performance Score", value: "92/100" },
      { label: "Load Time", value: "<1s" }
    ],
    links: {
      live: null,
      github: "https://github.com/lokeswaran22/1zmore"
    },
    year: "2024"
  },
  {
    id: 4,
    title: "Weather App",
    description: "A dynamic and responsive Weather App built using HTML, CSS, and JavaScript. The app provides real-time weather updates for any location using a weather API. Features a clean and user-friendly interface.",
    longDescription: "Created a weather application that fetches real-time weather data from APIs and displays it in an intuitive interface. Includes current weather, forecasts, and location-based search functionality.",
    image: "/images/weather-app.png",
    tags: ["JavaScript", "HTML", "CSS", "API Integration"],
    category: "WEB APPLICATION",
    featured: true,
    metrics: [
      { label: "API Response Time", value: "<2s" },
      { label: "Accuracy", value: "99%" },
      { label: "User Rating", value: "4.7/5" }
    ],
    links: {
      live: null,
      github: "https://github.com/lokeswaran22/weather-app"
    },
    year: "2024"
  },
  {
    id: 5,
    title: "Loki Quiz",
    description: "A fun and interactive math quiz app where users can generate random Addition, Subtraction, Multiplication, and Division problems. Enter your answer, submit, and test your skills instantly!",
    longDescription: "Built an engaging math quiz application that generates random mathematical problems across different operations. Features instant feedback, score tracking, and difficulty levels.",
    image: "/images/projects/quiz.jpg",
    tags: ["JavaScript", "HTML", "CSS", "Interactive"],
    category: "WEB APPLICATION",
    featured: false,
    metrics: [
      { label: "User Retention", value: "78%" },
      { label: "Quiz Completion", value: "82%" },
      { label: "Daily Active Users", value: "500+" }
    ],
    links: {
      live: null,
      github: "https://github.com/lokeswaran22/lokiquiz"
    },
    year: "2024"
  },
  {
    id: 6,
    title: "Profile Card",
    description: "A sleek and responsive profile card built using HTML and CSS, showcasing a minimalistic design. This project demonstrates skills in front-end development and styling, focusing on user-centric design.",
    longDescription: "Created a modern, responsive profile card component with clean design and smooth animations. Demonstrates proficiency in HTML/CSS and responsive design principles.",
    image: "/images/projects/profile.jpg",
    tags: ["HTML", "CSS", "Responsive Design"],
    category: "UI COMPONENT",
    featured: false,
    metrics: [
      { label: "Load Time", value: "<1s" },
      { label: "Mobile Optimized", value: "100%" },
      { label: "Browser Support", value: "All Modern" }
    ],
    links: {
      live: null,
      github: "https://github.com/lokeswaran22/profilecard"
    },
    year: "2024"
  }
];

// Get featured projects
export const getFeaturedProjects = () => {
  return projects.filter(project => project.featured);
};

// Get projects by category
export const getProjectsByCategory = (category) => {
  return projects.filter(project => project.category === category);
};

// Get project by ID
export const getProjectById = (id) => {
  return projects.find(project => project.id === id);
};

// Get all categories
export const getCategories = () => {
  return [...new Set(projects.map(project => project.category))];
};
