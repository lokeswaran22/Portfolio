import { motion } from 'framer-motion';
import { FaGraduationCap, FaCode, FaLightbulb, FaRocket } from 'react-icons/fa';
import './About.css';

const About = () => {
    return (
        <section className="about-loopdock" id="about">
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
                        <span className="gradient-text-1">About</span>{' '}
                        <span className="gradient-text-2">Me</span>
                    </h2>
                </motion.div>

                {/* About Content */}
                <div className="about-content-loopdock">
                    {/* Left Side - Image/Visual */}
                    <motion.div
                        className="about-visual"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="about-image-container">
                            {/* <div className="about-image-placeholder">
                                <div className="profile-ring"></div>
                                <div className="profile-content">
                                    <FaCode className="profile-icon" />
                                </div>
                            </div> */}

                            {/* Info Cards */}

                        </div>
                    </motion.div>

                    {/* Right Side - Content */}
                    <motion.div
                        className="about-text"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h3 className="about-greeting">Hi There, I'm Lokeswaran</h3>

                        <p className="about-description">
                            A dedicated Computer Science graduate with expertise in full-stack web development from SRM TRP Engineering College (CGPA 7.97).
                            Focused on solving real-world problems through technology and innovation for sustainable outcomes.
                            Currently working as Software Developer (Associate Lead) at Pristonix Technologies, specializing in Workflow Automation.
                        </p>

                        {/* Key Points */}
                        <div className="about-highlights">
                            <div className="highlight-item">
                                <FaLightbulb className="highlight-icon" />
                                <div className="highlight-content">
                                    <div className="highlight-title">Passion for Innovation</div>
                                    <div className="highlight-desc">
                                        Constantly exploring new technologies and building innovative solutions
                                    </div>
                                </div>
                            </div>

                            <div className="highlight-item">
                                <FaCode className="highlight-icon" />
                                <div className="highlight-content">
                                    <div className="highlight-title">Full-Stack Development</div>
                                    <div className="highlight-desc">
                                        Proficient in HTML, CSS, JavaScript, React, Node.js, and modern web technologies
                                    </div>
                                </div>
                            </div>

                            <div className="highlight-item">
                                <FaGraduationCap className="highlight-icon" />
                                <div className="highlight-content">
                                    <div className="highlight-title">Continuous Learner</div>
                                    <div className="highlight-desc">
                                        Always eager to learn and adapt to new challenges in the tech industry
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Info */}


                        {/* CTA Button */}
                        <div className="about-cta">
                            <a
                                href="/resume.html"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-primary-loopdock"
                            >
                                <span>View Resume</span>
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section >
    );
};

export default About;
