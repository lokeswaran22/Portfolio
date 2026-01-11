import { motion } from 'framer-motion';
import { FaGraduationCap, FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import './Experience.css';

const Experience = () => {
    const education = [
        {
            id: 1,
            degree: 'Bachelor of Engineering in Computer Science',
            institution: 'SRM TRP Engineering College',
            university: 'Anna University',
            duration: '2020 - 2024',
            status: 'Completed',
            location: 'Tamil Nadu, India',
            description: 'Graduated with a strong foundation in computer science fundamentals, software development, and emerging technologies.',
            image: '/images/srm-college.jpg'
        },
        {
            id: 2,
            degree: 'HSC | Computer Science',
            institution: 'Sri Shanmuka Matric Hr.Sec.School',
            university: 'State Board',
            duration: '2018 - 2020',
            status: 'Completed',
            location: 'Tamil Nadu, India',
            description: 'Completed higher secondary education with a focus on computer science and mathematics.',
            image: '/images/shanmuka-school.png'
        }
    ];

    const workExperience = [
        {
            id: 1,
            title: 'Software Developer (Associate Lead)',
            company: 'Pristonix Technologies',
            duration: 'March 2025 - Present',
            description: 'Leading initiatives in Workflow Automation. Developing tools using Python to streamline development operations and automate publishing workflows.',
            technologies: ['Python', 'Workflow Automation', 'CI/CD'],
            type: 'Full-time'
        },
        {
            id: 2,
            title: 'Chief Operating Officer',
            company: 'TrojanX Solutions',
            duration: 'May 2023 - Present',
            description: 'Driving operational excellence, strategic growth, and efficient execution across business functions. Leading cross-functional teams to deliver innovative technology solutions.',
            technologies: ['Leadership', 'Operations', 'Strategy', 'Management'],
            type: 'Leadership Role'
        },
        {
            id: 3,
            title: 'Figma Intern',
            company: 'T4TEQ Software Solutions',
            duration: 'February 2024 - March 2024',
            description: 'Gained hands-on experience in UI/UX design using Figma. Contributed to design projects and learned industry-standard design practices.',
            technologies: ['Figma', 'UI/UX Design', 'Prototyping'],
            type: 'Internship'
        }
    ];

    const projects = [
        {
            id: 1,
            title: 'Intelligent Agriculture Prediction',
            subtitle: 'Using Machine Learning',
            duration: 'January 2023 - January 2024',
            description: 'Developed a web-based application using Decision Tree Classifier algorithm to predict crop yields based on climate data (temperature, humidity, rainfall, soil moisture) to help farmers optimize agricultural practices.',
            technologies: ['Machine Learning', 'Python', 'Decision Tree', 'Web Development'],
            type: 'Academic Project'
        },
        {
            id: 2,
            title: 'IoT Based Track Crack Detection',
            subtitle: 'Railway Safety System',
            duration: 'January 2022 - January 2023',
            description: 'Created an automatic railway track crack detection system using IR receiver sensor assembly, aiming to prevent train accidents through early fault identification and real-time monitoring.',
            technologies: ['IoT', 'Arduino', 'Sensors', 'Embedded Systems'],
            type: 'Academic Project'
        },
        {
            id: 3,
            title: 'Pristonix Timesheet',
            subtitle: 'Employee Management System',
            duration: '2025',
            description: 'Built a comprehensive timesheet management system for tracking employee work hours, projects, and productivity metrics with modern web technologies.',
            technologies: ['JavaScript', 'Node.js', 'React', 'MongoDB'],
            type: 'Professional Project',
            link: 'https://github.com/lokeswaran22/pristonix-timesheet'
        }
    ];

    return (
        <section className="experience-loopdock" id="experience">
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
                        <span className="gradient-text-1">Education &</span>{' '}
                        <span className="gradient-text-2">Experience</span>
                    </h2>
                    <p className="section-subtitle-loopdock">
                        My academic journey and project experience
                    </p>
                </motion.div>

                {/* Timeline Container */}
                <div className="timeline-container">
                    {/* Education Section */}
                    <div className="timeline-section">
                        <motion.div
                            className="timeline-header"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <FaGraduationCap className="timeline-icon" />
                            <h3 className="timeline-title">Education</h3>
                        </motion.div>

                        <div className="timeline-items">
                            {education.map((edu, index) => (
                                <motion.div
                                    key={edu.id}
                                    className="timeline-item"
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                >
                                    <div className="timeline-marker"></div>
                                    <div className="timeline-content">
                                        <div className="timeline-text">
                                            <div className="timeline-badge">{edu.status}</div>
                                            <h4 className="timeline-item-title">{edu.degree}</h4>
                                            <div className="timeline-institution">{edu.institution}</div>
                                            <div className="timeline-university">{edu.university}</div>
                                            <div className="timeline-meta">
                                                <span className="meta-item">
                                                    <FaCalendarAlt /> {edu.duration}
                                                </span>
                                                <span className="meta-item">
                                                    <FaMapMarkerAlt /> {edu.location}
                                                </span>
                                            </div>
                                            <p className="timeline-description">{edu.description}</p>
                                        </div>
                                        {edu.image && (
                                            <div className="timeline-edu-image">
                                                <img src={edu.image} alt={edu.institution} />
                                            </div>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Work Experience Section */}
                    <div className="timeline-section">
                        <motion.div
                            className="timeline-header"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <FaBriefcase className="timeline-icon" />
                            <h3 className="timeline-title">Work Experience</h3>
                        </motion.div>

                        <div className="timeline-items">
                            {workExperience.map((work, index) => (
                                <motion.div
                                    key={work.id}
                                    className="timeline-item"
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                                >
                                    <div className="timeline-marker"></div>
                                    <div className="timeline-content">
                                        <div className="timeline-text">
                                            <div className="timeline-badge project-badge">{work.type}</div>
                                            <h4 className="timeline-item-title">{work.title}</h4>
                                            <div className="timeline-institution">{work.company}</div>
                                            <div className="timeline-meta">
                                                <span className="meta-item">
                                                    <FaCalendarAlt /> {work.duration}
                                                </span>
                                            </div>
                                            <p className="timeline-description">{work.description}</p>
                                            <div className="timeline-technologies">
                                                {work.technologies.map((tech, i) => (
                                                    <span key={i} className="tech-tag-small">{tech}</span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Projects Section */}
                    <div className="timeline-section">
                        <motion.div
                            className="timeline-header"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <FaBriefcase className="timeline-icon" />
                            <h3 className="timeline-title">Key Projects</h3>
                        </motion.div>

                        <div className="timeline-items">
                            {projects.map((project, index) => (
                                <motion.div
                                    key={project.id}
                                    className="timeline-item"
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                                >
                                    <div className="timeline-marker"></div>
                                    <div className="timeline-content">
                                        <div className="timeline-text">
                                            <div className="timeline-badge project-badge">{project.type}</div>
                                            <h4 className="timeline-item-title">{project.title}</h4>
                                            <div className="timeline-subtitle">{project.subtitle}</div>
                                            <div className="timeline-meta">
                                                <span className="meta-item">
                                                    <FaCalendarAlt /> {project.duration}
                                                </span>
                                            </div>
                                            <p className="timeline-description">{project.description}</p>
                                            <div className="timeline-technologies">
                                                {project.technologies.map((tech, i) => (
                                                    <span key={i} className="tech-tag-small">{tech}</span>
                                                ))}
                                            </div>
                                            {project.link && (
                                                <a
                                                    href={project.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="project-link-small"
                                                >
                                                    View on GitHub →
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
