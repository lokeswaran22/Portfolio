import { motion } from 'framer-motion';
import { FaArrowRight, FaGithub, FaLinkedin, FaTelegram, FaReact, FaNodeJs, FaPython } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
    const scrollToSection = (sectionId) => {
        const element = document.querySelector(sectionId);
        if (element) {
            const offset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;
            window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
    };

    return (
        <section className="hero-loopdock" id="home">
            {/* Background Glow Effects - Like Loopdock */}
            <div className="hero-bg-effects">
                <div className="glow-purple"></div>
                <div className="glow-gold"></div>
            </div>

            <div className="container-loopdock">
                <div className="hero-content-loopdock">
                    {/* Main Hero Content */}
                    <motion.div
                        className="hero-main"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                    >
                        {/* Hero Heading - Exact Loopdock Style */}
                        <motion.h1
                            className="hero-title-loopdock"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                        >
                            <span className="gradient-text-1">Hi, I'm</span>
                            <br />
                            <span className="gradient-text-2">Lokeswaran</span>
                        </motion.h1>

                        {/* Hero Subtitle */}
                        <motion.p
                            className="hero-subtitle-loopdock"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                        >
                                Building innovative solutions to solve real-world challenges and make everyday life easier.
                        </motion.p>

                        {/* CTA Buttons - Exact Loopdock Style */}
                        <motion.div
                            className="hero-cta-loopdock"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.8 }}
                        >
                            <button
                                className="btn-primary-loopdock"
                                onClick={() => scrollToSection('#projects')}
                            >
                                <span>Explore Solutions</span>
                                <FaArrowRight className="btn-icon" />
                            </button>
                            <button
                                className="btn-secondary-loopdock"
                                onClick={() => scrollToSection('#contact')}
                            >
                                <span>See It In Action</span>
                            </button>
                        </motion.div>

                        {/* Social Links */}
                        <motion.div
                            className="hero-social-loopdock"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8, duration: 0.8 }}
                        >
                            <a
                                href="https://github.com/lokeswaran22"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-link-loopdock"
                                aria-label="GitHub"
                            >
                                <FaGithub />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/lokeswaran22"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-link-loopdock"
                                aria-label="LinkedIn"
                            >
                                <FaLinkedin />
                            </a>
                            <a
                                href="https://t.me/Mr_lokeswaran"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-link-loopdock"
                                aria-label="Twitter"
                            >
                                <FaTelegram />
                            </a>
                        </motion.div>
                    </motion.div>

                    {/* Profile Section - Clean Floating Photo */}
                    <motion.div
                        className="hero-profile-section"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5, duration: 1 }}
                    >
                        <div className="profile-container">
                            {/* Floating Profile Photo with Continuous Effect */}
                            <motion.div
                                className="gravity-photo-wrapper"
                                animate={{
                                    y: [-10, 10, -10],
                                }}
                                transition={{
                                    duration: 6,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            >
                                {/* Continuous Particles - AntiGravity */}
                                <div className="hover-particles">
                                    {[...Array(30)].map((_, i) => {
                                        const angle = (i * 360) / 30;
                                        // Randomize distance for more natural effect (between 200px and 250px)
                                        const distance = 200 + Math.random() * 50;

                                        return (
                                            <motion.div
                                                key={i}
                                                className="gravity-particle"
                                                style={{
                                                    rotate: `${angle}deg`, // Rotate particle to point outward
                                                }}
                                                animate={{
                                                    opacity: [0, 1, 0],
                                                    scale: [0.5, 1.5, 0.5],
                                                    x: [0, Math.cos(angle * Math.PI / 180) * distance],
                                                    y: [0, Math.sin(angle * Math.PI / 180) * distance],
                                                }}
                                                transition={{
                                                    duration: 2,
                                                    repeat: Infinity,
                                                    delay: Math.random() * 2, // Varied delay for continuous flow
                                                    ease: "easeOut"
                                                }}
                                            />
                                        );
                                    })}
                                </div>

                                <div className="gravity-photo-ring"></div>
                                <div className="gravity-photo-inner">
                                    <img
                                        src="/images/profile.jpg"
                                        alt="Lokeswaran - Full-Stack Developer"
                                        className="gravity-image"
                                    />
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>

                {/* Stats Section - Like Loopdock */}
                {/* <motion.div
                    className="hero-stats-loopdock"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.8 }}
                >
                    <div className="stat-item">
                        <div className="stat-value">1+</div>
                        <div className="stat-label">Years Experience</div>
                    </div>
                    <div className="stat-divider"></div>
                    <div className="stat-item">
                        <div className="stat-value">10+</div>
                        <div className="stat-label">Projects Delivered</div>
                    </div>
                    <div className="stat-divider"></div>
                    <div className="stat-item">
                        <div className="stat-value">98%</div>
                        <div className="stat-label">Client Satisfaction</div>
                    </div>
                    <div className="stat-divider"></div>
                    <div className="stat-item">
                        <div className="stat-value">24/7</div>
                        <div className="stat-label">Support Available</div>
                    </div>
                </motion.div> */}
            </div>
        </section>
    );
};

export default Hero;
