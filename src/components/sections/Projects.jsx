import { motion } from 'framer-motion';
import { FaArrowRight, FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { projects } from '../../data/projects';
import './Projects.css';

const Projects = () => {
    const featuredProjects = projects.filter(p => p.featured);

    return (
        <section className="projects-loopdock" id="projects">
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
                        <span className="gradient-text-1">Featured</span>{' '}
                        <span className="gradient-text-2">Case Studies</span>
                    </h2>
                    <p className="section-subtitle-loopdock">
                        Real-world solutions delivering measurable results for businesses
                    </p>
                </motion.div>

                {/* Projects Grid */}
                <div className="projects-grid-loopdock">
                    {featuredProjects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            className="project-card-loopdock"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            {/* Project Image/Visual */}
                            <div className="project-visual">
                                {project.image ? (
                                    <img src={project.image} alt={project.title} className="project-image" />
                                ) : (
                                    <div className="project-image-placeholder"></div>
                                )}
                                <div className="project-category-badge">{project.category}</div>
                            </div>

                            {/* Project Content */}
                            <div className="project-content">
                                {/* Tech Stack Tags */}
                                <div className="project-tags">
                                    {project.tags.slice(0, 3).map((tag, i) => (
                                        <span key={i} className="tech-tag-loopdock">{tag}</span>
                                    ))}
                                    {project.tags.length > 3 && (
                                        <span className="tech-tag-loopdock">+{project.tags.length - 3}</span>
                                    )}
                                </div>

                                {/* Project Title */}
                                <h3 className="project-title-loopdock">{project.title}</h3>

                                {/* Project Description */}
                                <p className="project-description-loopdock">{project.description}</p>

                                {/* Primary Outcome */}
                                {project.metrics && project.metrics.length > 0 && (
                                    <div className="project-outcome">
                                        <div className="outcome-label">Primary Outcome</div>
                                        <div className="outcome-value">
                                            {project.metrics[0].value}
                                        </div>
                                        <div className="outcome-description">
                                            {project.metrics[0].label}
                                        </div>
                                    </div>
                                )}

                                {/* Project Links */}
                                <div className="project-links">
                                    {project.links.live && (
                                        <a
                                            href={project.links.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="project-link-btn"
                                        >
                                            <span>View Project</span>
                                            <FaExternalLinkAlt />
                                        </a>
                                    )}
                                    {project.links.github && (
                                        <a
                                            href={project.links.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="project-link-icon"
                                            aria-label="GitHub"
                                        >
                                            <FaGithub />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* View All Projects CTA */}
                <motion.div
                    className="projects-cta"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <a href="#contact" className="btn-view-all-loopdock">
                        <span>View All Projects</span>
                        <FaArrowRight />
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
