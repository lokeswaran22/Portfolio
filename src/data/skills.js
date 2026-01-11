// Skills & Technologies Data
// Customize this with your actual skills and proficiency levels

export const skillCategories = [
    {
        id: 1,
        name: "Frontend Development",
        icon: "FaReact",
        skills: [
            { name: "React", level: 95, color: "#61DAFB" },
            { name: "JavaScript", level: 90, color: "#F7DF1E" },
            { name: "TypeScript", level: 85, color: "#3178C6" },
            { name: "HTML5", level: 95, color: "#E34F26" },
            { name: "CSS3", level: 90, color: "#1572B6" },
            { name: "Tailwind CSS", level: 88, color: "#06B6D4" },
            { name: "Vue.js", level: 80, color: "#4FC08D" },
            { name: "Next.js", level: 85, color: "#000000" }
        ]
    },
    {
        id: 2,
        name: "Backend Development",
        icon: "FaServer",
        skills: [
            { name: "Node.js", level: 90, color: "#339933" },
            { name: "Express", level: 88, color: "#000000" },
            { name: "Python", level: 82, color: "#3776AB" },
            { name: "Django", level: 75, color: "#092E20" },
            { name: "RESTful APIs", level: 92, color: "#FF6C37" },
            { name: "GraphQL", level: 80, color: "#E10098" },
            { name: "PostgreSQL", level: 85, color: "#4169E1" },
            { name: "MongoDB", level: 88, color: "#47A248" }
        ]
    },
    {
        id: 3,
        name: "DevOps & Tools",
        icon: "FaTools",
        skills: [
            { name: "Git", level: 92, color: "#F05032" },
            { name: "Docker", level: 85, color: "#2496ED" },
            { name: "AWS", level: 80, color: "#FF9900" },
            { name: "CI/CD", level: 82, color: "#2088FF" },
            { name: "Linux", level: 78, color: "#FCC624" },
            { name: "Nginx", level: 75, color: "#009639" },
            { name: "Kubernetes", level: 70, color: "#326CE5" },
            { name: "Vercel", level: 88, color: "#000000" }
        ]
    },
    {
        id: 4,
        name: "Design & UX",
        icon: "FaPalette",
        skills: [
            { name: "Figma", level: 85, color: "#F24E1E" },
            { name: "UI/UX Design", level: 82, color: "#FF61F6" },
            { name: "Responsive Design", level: 95, color: "#00D9FF" },
            { name: "Adobe XD", level: 75, color: "#FF61F6" },
            { name: "Prototyping", level: 80, color: "#9D5CFF" },
            { name: "Accessibility", level: 85, color: "#00C853" }
        ]
    },
    {
        id: 5,
        name: "Other Technologies",
        icon: "FaCode",
        skills: [
            { name: "React Native", level: 82, color: "#61DAFB" },
            { name: "Redux", level: 85, color: "#764ABC" },
            { name: "Socket.io", level: 80, color: "#010101" },
            { name: "Jest", level: 78, color: "#C21325" },
            { name: "Webpack", level: 75, color: "#8DD6F9" },
            { name: "Firebase", level: 85, color: "#FFCA28" }
        ]
    }
];

// Get all skills flattened
export const getAllSkills = () => {
    return skillCategories.flatMap(category =>
        category.skills.map(skill => ({
            ...skill,
            category: category.name
        }))
    );
};

// Get skills by proficiency level
export const getSkillsByLevel = (minLevel = 80) => {
    return getAllSkills().filter(skill => skill.level >= minLevel);
};

// Get top skills
export const getTopSkills = (count = 10) => {
    return getAllSkills()
        .sort((a, b) => b.level - a.level)
        .slice(0, count);
};
