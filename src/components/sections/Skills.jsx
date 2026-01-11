import { motion } from 'framer-motion';
import {
    FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython,
    FaGitAlt, FaGithub, FaDatabase, FaServer, FaJava,
    FaDocker, FaJenkins, FaAws
} from 'react-icons/fa';
import {
    SiJavascript, SiMongodb, SiExpress, SiTailwindcss,
    SiBootstrap, SiMysql, SiPostman, SiKubernetes, SiOracle
} from 'react-icons/si';
import './Skills.css';

// Custom Java Logo Component to display the official multi-colored logo
const JavaLogo = (props) => (
    <img
        src="/images/java-logo.png"
        alt="Java"
        className={props.className}
        style={{ width: '1em', height: '1em', objectFit: 'contain' }}
    />
);

const Skills = () => {
    const skillCategories = [
        {
            id: 1,
            name: 'Frontend Development',
            skills: [
                { name: 'HTML5', icon: FaHtml5, color: '#E34F26', level: 95 },
                { name: 'CSS3', icon: FaCss3Alt, color: '#1572B6', level: 90 },
                { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E', level: 88 },
                { name: 'React', icon: FaReact, color: '#61DAFB', level: 85 },
                { name: 'Bootstrap', icon: SiBootstrap, color: '#7952B3', level: 85 },
                { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4', level: 82 }
            ]
        },
        {
            id: 2,
            name: 'Backend Development',
            skills: [
                { name: 'Python', icon: FaPython, color: '#3776AB', level: 80 },
                { name: 'Java', icon: JavaLogo, color: '#f89917', level: 75 },
                { name: 'Node.js', icon: FaNodeJs, color: '#339933', level: 85 },
                { name: 'MySQL', icon: SiMysql, color: '#4479A1', level: 78 },
                { name: 'Oracle', icon: SiOracle, color: '#F80000', level: 75 }
            ]
        },
        {
            id: 3,
            name: 'Tools & Platforms',
            skills: [
                { name: 'Git', icon: FaGitAlt, color: '#F05032', level: 88 },
                { name: 'Docker', icon: FaDocker, color: '#2496ED', level: 80 },
                { name: 'Jenkins', icon: FaJenkins, color: '#e7dcdc', level: 78 },
                { name: 'Kubernetes', icon: SiKubernetes, color: '#326CE5', level: 75 },
                { name: 'AWS', icon: FaAws, color: '#232F3E', level: 75 },
                { name: 'Postman', icon: SiPostman, color: '#FF6C37', level: 80 }
            ]
        }
    ];

    return (
        <section className="skills-loopdock" id="skills">
            <div className="container-loopdock">
                {/* Section Header */}
                <motion.div
                    className="section-header-loopdock"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title-loopdock">
                        <span className="gradient-text-1">Skills &</span>{' '}
                        <span className="gradient-text-2">Technologies</span>
                    </h2>
                    <p className="section-subtitle-loopdock">
                        My technical expertise and proficiency in modern web technologies
                    </p>
                </motion.div>

                {/* Skills Grid */}
                <div className="skills-grid-loopdock">
                    {skillCategories.map((category, catIndex) => (
                        <motion.div
                            key={category.id}
                            className="skill-category-loopdock"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: catIndex * 0.1 }}
                        >
                            {/* Category Header */}
                            <div className="category-header">
                                <h3 className="category-title">{category.name}</h3>
                            </div>

                            {/* Skills List */}
                            <div className="skills-list">
                                {category.skills.map((skill, skillIndex) => (
                                    <motion.div
                                        key={skill.name}
                                        className="skill-item-loopdock"
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: catIndex * 0.1 + skillIndex * 0.05 }}
                                    >
                                        {/* Skill Header */}
                                        <div className="skill-header">
                                            <div className="skill-info">
                                                <skill.icon
                                                    className="skill-icon"
                                                    style={{ color: skill.color }}
                                                />
                                                <span className="skill-name">{skill.name}</span>
                                            </div>
                                            <span className="skill-percentage">{skill.level}%</span>
                                        </div>

                                        {/* Skill Progress Bar */}
                                        <div className="skill-progress-bar">
                                            <motion.div
                                                className="skill-progress-fill"
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1, delay: catIndex * 0.1 + skillIndex * 0.05 + 0.3 }}
                                                style={{
                                                    background: `linear-gradient(90deg, ${skill.color}, ${skill.color}dd)`
                                                }}
                                            />
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Additional Skills Tags */}
                <motion.div
                    className="additional-skills"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <h4 className="additional-title">Also Familiar With</h4>
                    <div className="skills-tags">
                        {['Blockchain', 'IoT', 'API Development', 'Responsive Design', 'RESTful Services', 'Version Control', 'Agile Methodology', 'Problem Solving'].map((tag, index) => (
                            <motion.span
                                key={tag}
                                className="skill-tag-loopdock"
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
                            >
                                {tag}
                            </motion.span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
