import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
    Code as CodeIcon,
    Storage as StorageIcon,
    Build as BuildIcon,
    Brush as BrushIcon,
} from '@mui/icons-material';

const skillCategories = [
    {
        title: 'Frontend',
        icon: <CodeIcon sx={{ fontSize: 40, color: '#3b82f6' }} />,
        skills: ['React', 'TypeScript', 'Next.js', 'MUI', 'Tailwind CSS'],
    },
    {
        title: 'Backend',
        icon: <StorageIcon sx={{ fontSize: 40, color: '#10b981' }} />,
        skills: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'Firebase'],
    },
    {
        title: 'Tools',
        icon: <BuildIcon sx={{ fontSize: 40, color: '#f59e0b' }} />,
        skills: ['Git', 'Docker', 'Vite', 'Webpack', 'Jest'],
    },
    {
        title: 'UI/UX',
        icon: <BrushIcon sx={{ fontSize: 40, color: '#8b5cf6' }} />,
        skills: ['Figma', 'Framer Motion', 'Responsive Design', 'Accessibility'],
    },
];

const SkillCard = ({ category, index }: { category: typeof skillCategories[0], index: number }) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Box
                ref={ref}
                component={motion.div}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
            >
                <Paper
                    elevation={0}
                    component={motion.div}
                    whileHover={{ y: -10, boxShadow: '0 10px 30px rgba(59, 130, 246, 0.1)' }}
                    sx={{
                        p: 4,
                        height: '100%',
                        bgcolor: 'background.paper',
                        borderRadius: 4,
                        border: '1px solid rgba(255, 255, 255, 0.05)',
                        textAlign: 'center',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                            borderColor: 'primary.main',
                            '& .skill-icon': {
                                transform: 'scale(1.1) rotate(5deg)',
                            },
                        },
                    }}
                >
                    <Box className="skill-icon" sx={{ mb: 2, transition: 'transform 0.3s ease' }}>
                        {category.icon}
                    </Box>
                    <Typography variant="h5" sx={{ mb: 3, fontWeight: 700 }}>
                        {category.title}
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 1 }}>
                        {category.skills.map((skill) => (
                            <Typography
                                key={skill}
                                variant="body2"
                                sx={{
                                    px: 1.5,
                                    py: 0.5,
                                    bgcolor: 'rgba(255, 255, 255, 0.05)',
                                    borderRadius: 2,
                                    color: 'text.secondary',
                                    fontSize: '0.85rem',
                                }}
                            >
                                {skill}
                            </Typography>
                        ))}
                    </Box>
                </Paper>
            </Box>
        </Grid>
    );
};

const Skills = () => {
    return (
        <Box
            id="portfolio" // Using portfolio ID as per spec for Skills section
            component="section"
            sx={{ py: { xs: 10, md: 15 }, bgcolor: 'background.default' }}
        >
            <Container maxWidth="lg">
                <Typography
                    variant="h2"
                    sx={{
                        fontSize: { xs: '2.5rem', md: '3.5rem' },
                        mb: 8,
                        textAlign: 'center',
                        position: 'relative',
                        '&::after': {
                            content: '""',
                            position: 'absolute',
                            bottom: -16,
                            left: '50%',
                            transform: 'translateX(-50%)',
                            width: 80,
                            height: 4,
                            bgcolor: 'primary.main',
                            borderRadius: 2,
                        },
                    }}
                >
                    Skills & Expertise
                </Typography>

                <Grid container spacing={4}>
                    {skillCategories.map((category, index) => (
                        <SkillCard key={category.title} category={category} index={index} />
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default Skills;
