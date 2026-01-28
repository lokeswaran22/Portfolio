// Testimonials & Recommendations Data
// Replace with actual testimonials from clients, colleagues, or managers

export const testimonials = [
    {
        id: 1,
        name: "Sarah Johnson",
        position: "Product Manager",
        company: "Tech Innovations Inc.",
        avatar: "/images/testimonials/sarah.jpg", // Add testimonial photos to public/images/testimonials/
        text: "Working with this developer has been an absolute pleasure. Their technical expertise and problem-solving abilities are exceptional. They consistently deliver high-quality code and are always willing to go the extra mile to ensure project success.",
        rating: 5,
        relationship: "Colleague",
        linkedIn: "https://linkedin.com/in/sarahjohnson",
        date: "2025-01"
    },
    {
        id: 2,
        name: "Michael Chen",
        position: "CTO",
        company: "Digital Solutions Co.",
        avatar: "/images/testimonials/michael.jpg",
        text: "One of the most talented developers I've had the privilege to work with. Their ability to understand complex requirements and translate them into elegant solutions is remarkable. A true asset to any development team.",
        rating: 5,
        relationship: "Manager",
        linkedIn: "https://linkedin.com/in/michaelchen",
        date: "2024-11"
    },
    {
        id: 3,
        name: "Emily Rodriguez",
        position: "Founder & CEO",
        company: "StartUp Ventures",
        avatar: "/images/testimonials/emily.jpg",
        text: "They transformed our vision into reality with incredible attention to detail. The final product exceeded our expectations in every way. Their communication throughout the project was clear and professional.",
        rating: 5,
        relationship: "Client",
        linkedIn: "https://linkedin.com/in/emilyrodriguez",
        date: "2024-08"
    },
    {
        id: 4,
        name: "David Park",
        position: "Senior Developer",
        company: "Tech Innovations Inc.",
        avatar: "/images/testimonials/david.jpg",
        text: "An excellent mentor and collaborator. Their code reviews are thorough and educational, and they're always willing to share knowledge with the team. Their expertise in modern web technologies is impressive.",
        rating: 5,
        relationship: "Colleague",
        linkedIn: "https://linkedin.com/in/davidpark",
        date: "2024-06"
    },
    {
        id: 5,
        name: "Lisa Thompson",
        position: "Marketing Director",
        company: "E-Commerce Plus",
        avatar: "/images/testimonials/lisa.jpg",
        text: "The website they built for us has significantly improved our online presence. Our conversion rate increased by 40% within the first month. They truly understand both the technical and business aspects of web development.",
        rating: 5,
        relationship: "Client",
        linkedIn: "https://linkedin.com/in/lisathompson",
        date: "2024-03"
    },
    {
        id: 6,
        name: "James Wilson",
        position: "UX Designer",
        company: "Digital Solutions Co.",
        avatar: "/images/testimonials/james.jpg",
        text: "A developer who truly cares about user experience. They work closely with designers to ensure pixel-perfect implementation and are always open to feedback. Their attention to detail is outstanding.",
        rating: 5,
        relationship: "Colleague",
        linkedIn: "https://linkedin.com/in/jameswilson",
        date: "2023-12"
    }
];

// Get testimonials by relationship type
export const getTestimonialsByRelationship = (relationship) => {
    return testimonials.filter(t => t.relationship === relationship);
};

// Get recent testimonials
export const getRecentTestimonials = (count = 3) => {
    return testimonials
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .slice(0, count);
};

// Get average rating
export const getAverageRating = () => {
    const sum = testimonials.reduce((acc, t) => acc + t.rating, 0);
    return (sum / testimonials.length).toFixed(1);
};
