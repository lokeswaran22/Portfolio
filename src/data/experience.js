// Work Experience Data
// Replace with your actual work experience

export const experiences = [
    {
        id: 1,
        company: "Tech Innovations Inc.",
        logo: "/images/companies/tech-innovations.png", // Add company logos to public/images/companies/
        position: "Senior Full-Stack Developer",
        location: "San Francisco, CA",
        type: "Full-time",
        startDate: "2023-01",
        endDate: null, // null means current position
        current: true,
        description: "Leading development of enterprise-level web applications and mentoring junior developers.",
        responsibilities: [
            "Architected and developed scalable microservices using Node.js and React",
            "Led a team of 5 developers in agile development cycles",
            "Improved application performance by 60% through code optimization",
            "Implemented CI/CD pipelines reducing deployment time by 75%",
            "Mentored junior developers and conducted code reviews"
        ],
        technologies: ["React", "Node.js", "TypeScript", "AWS", "Docker", "PostgreSQL"],
        achievements: [
            "Promoted to Senior Developer within 18 months",
            "Received 'Developer of the Year' award in 2024",
            "Successfully delivered 12+ major projects on time"
        ]
    },
    {
        id: 2,
        company: "Digital Solutions Co.",
        logo: "/images/companies/digital-solutions.png",
        position: "Full-Stack Developer",
        location: "New York, NY",
        type: "Full-time",
        startDate: "2021-06",
        endDate: "2022-12",
        current: false,
        description: "Developed and maintained multiple client-facing web applications and internal tools.",
        responsibilities: [
            "Built responsive web applications using React and Vue.js",
            "Developed RESTful APIs with Node.js and Express",
            "Collaborated with designers to implement pixel-perfect UIs",
            "Integrated third-party services and payment gateways",
            "Participated in agile ceremonies and sprint planning"
        ],
        technologies: ["React", "Vue.js", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
        achievements: [
            "Delivered 8 major projects with 100% client satisfaction",
            "Reduced bug reports by 40% through comprehensive testing",
            "Improved team productivity by creating reusable component library"
        ]
    },
    {
        id: 3,
        company: "StartUp Ventures",
        logo: "/images/companies/startup-ventures.png",
        position: "Frontend Developer",
        location: "Austin, TX",
        type: "Full-time",
        startDate: "2020-03",
        endDate: "2021-05",
        current: false,
        description: "Focused on building modern, responsive user interfaces for SaaS products.",
        responsibilities: [
            "Developed responsive web interfaces using React and modern CSS",
            "Collaborated with UX designers to implement design systems",
            "Optimized application performance and accessibility",
            "Wrote unit and integration tests using Jest and React Testing Library",
            "Participated in code reviews and knowledge sharing sessions"
        ],
        technologies: ["React", "JavaScript", "CSS3", "Redux", "Jest", "Figma"],
        achievements: [
            "Improved page load speed by 50%",
            "Achieved 98% accessibility score on all pages",
            "Created comprehensive component documentation"
        ]
    },
    {
        id: 4,
        company: "Freelance",
        logo: "/images/companies/freelance.png",
        position: "Web Developer",
        location: "Remote",
        type: "Freelance",
        startDate: "2019-01",
        endDate: "2020-02",
        current: false,
        description: "Provided web development services to small businesses and startups.",
        responsibilities: [
            "Built custom websites and web applications for clients",
            "Managed full project lifecycle from requirements to deployment",
            "Provided ongoing maintenance and support",
            "Consulted on technical architecture and best practices",
            "Handled client communications and project management"
        ],
        technologies: ["HTML", "CSS", "JavaScript", "WordPress", "PHP", "MySQL"],
        achievements: [
            "Completed 15+ projects with 5-star ratings",
            "Built long-term relationships with repeat clients",
            "Grew client base through referrals and positive reviews"
        ]
    }
];

// Get current position
export const getCurrentPosition = () => {
    return experiences.find(exp => exp.current);
};

// Get experience by company
export const getExperienceByCompany = (company) => {
    return experiences.find(exp => exp.company === company);
};

// Calculate total years of experience
export const getTotalYearsOfExperience = () => {
    const earliestStart = experiences.reduce((earliest, exp) => {
        const startDate = new Date(exp.startDate);
        return startDate < earliest ? startDate : earliest;
    }, new Date());

    const years = (new Date() - earliestStart) / (1000 * 60 * 60 * 24 * 365);
    return Math.floor(years);
};

// Format date range
export const formatDateRange = (startDate, endDate, current) => {
    const start = new Date(startDate).toLocaleDateString('en-US', {
        month: 'short',
        year: 'numeric'
    });

    if (current || !endDate) {
        return `${start} - Present`;
    }

    const end = new Date(endDate).toLocaleDateString('en-US', {
        month: 'short',
        year: 'numeric'
    });

    return `${start} - ${end}`;
};

// Calculate duration
export const calculateDuration = (startDate, endDate, current) => {
    const start = new Date(startDate);
    const end = current || !endDate ? new Date() : new Date(endDate);

    const months = (end.getFullYear() - start.getFullYear()) * 12 +
        (end.getMonth() - start.getMonth());

    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;

    if (years === 0) {
        return `${remainingMonths} ${remainingMonths === 1 ? 'month' : 'months'}`;
    }

    if (remainingMonths === 0) {
        return `${years} ${years === 1 ? 'year' : 'years'}`;
    }

    return `${years} ${years === 1 ? 'year' : 'years'}, ${remainingMonths} ${remainingMonths === 1 ? 'month' : 'months'}`;
};
