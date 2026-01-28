import { useState } from 'react';
import { motion } from 'framer-motion';
import {
    FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub,
    FaLinkedin, FaTelegram, FaInstagram, FaPaperPlane
} from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [formStatus, setFormStatus] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate form submission
        setFormStatus('sending');
        setTimeout(() => {
            setFormStatus('success');
            setFormData({ name: '', email: '', subject: '', message: '' });
            setTimeout(() => setFormStatus(''), 3000);
        }, 1500);
    };

    const contactInfo = [
        {
            icon: FaEnvelope,
            label: 'Email',
            value: 'imlokeswaran@gmail.com',
            link: 'mailto:imlokeswaran@gmail.com'
        },
        {
            icon: FaPhone,
            label: 'Phone',
            value: '+91 8248372885',
            link: 'tel:+918248372885'
        },
        {
            icon: FaMapMarkerAlt,
            label: 'Location',
            value: 'Tamil Nadu, India - 614001',
            link: null
        }
    ];

    const socialLinks = [
        {
            icon: FaGithub,
            label: 'GitHub',
            link: 'https://github.com/lokeswaran22',
            color: '#181717'
        },
        {
            icon: FaLinkedin,
            label: 'LinkedIn',
            link: 'https://www.linkedin.com/in/lokeswaran22',
            color: '#0A66C2'
        },
        {
            icon: FaTelegram,
            label: 'Telegram',
            link: 'https://t.me/Mr_lokeswaran',
            color: '#26A5E4'
        },
        {
            icon: FaInstagram,
            label: 'Instagram',
            link: 'https://www.instagram.com/lokeswaran._/',
            color: '#E4405F'
        }
    ];

    return (
        <section className="contact-loopdock" id="contact">
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
                        <span className="gradient-text-1">Get In</span>{' '}
                        <span className="gradient-text-2">Touch</span>
                    </h2>
                    <p className="section-subtitle-loopdock">
                        Let's connect and discuss how we can work together
                    </p>
                </motion.div>

                {/* Contact Content */}
                <div className="contact-content-loopdock">
                    {/* Left Side - Contact Info */}
                    <motion.div
                        className="contact-info-section"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3 className="contact-info-title">Contact Information</h3>
                        <p className="contact-info-desc">
                            Feel free to reach out through any of these channels. I'm always open to discussing new projects, creative ideas, or opportunities.
                        </p>

                        {/* Contact Details */}
                        <div className="contact-details">
                            {contactInfo.map((item, index) => (
                                <motion.div
                                    key={item.label}
                                    className="contact-detail-item"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                >
                                    <div className="contact-detail-icon">
                                        <item.icon />
                                    </div>
                                    <div className="contact-detail-content">
                                        <div className="contact-detail-label">{item.label}</div>
                                        {item.link ? (
                                            <a href={item.link} className="contact-detail-value">
                                                {item.value}
                                            </a>
                                        ) : (
                                            <div className="contact-detail-value">{item.value}</div>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Social Links */}
                        <div className="contact-social">
                            <h4 className="contact-social-title">Connect with me</h4>
                            <div className="contact-social-links">
                                {socialLinks.map((social, index) => (
                                    <motion.a
                                        key={social.label}
                                        href={social.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="contact-social-link"
                                        aria-label={social.label}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                                        whileHover={{ scale: 1.1, y: -4 }}
                                    >
                                        <social.icon style={{ color: social.color }} />
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Side - Contact Form */}
                    <motion.div
                        className="contact-form-section"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="form-input"
                                    placeholder="Your name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="form-input"
                                    placeholder="your.email@example.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="subject" className="form-label">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    className="form-input"
                                    placeholder="What's this about?"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="message" className="form-label">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    className="form-textarea"
                                    placeholder="Your message here..."
                                    rows="6"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="btn-submit"
                                disabled={formStatus === 'sending'}
                            >
                                {formStatus === 'sending' ? (
                                    <>
                                        <span>Sending...</span>
                                        <div className="spinner"></div>
                                    </>
                                ) : (
                                    <>
                                        <span>Send Message</span>
                                        <FaPaperPlane />
                                    </>
                                )}
                            </button>

                            {formStatus === 'success' && (
                                <motion.div
                                    className="form-success"
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                >
                                    ✓ Message sent successfully! I'll get back to you soon.
                                </motion.div>
                            )}
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
