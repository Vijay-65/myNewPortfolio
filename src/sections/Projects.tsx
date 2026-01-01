import { Box, Container, Typography, Paper, Button, Chip, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GitHub as GitHubIcon, Launch as LaunchIcon } from '@mui/icons-material';

const projects = [
    {
        title: 'E-Commerce Platform',
        description: 'A full-featured online store with real-time inventory management and secure payment integration.',
        image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80',
        tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
        github: '#',
        live: '#',
    },
    {
        title: 'AI Content Generator',
        description: 'An innovative tool that uses GPT-4 to generate high-quality marketing copy and blog posts.',
        image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
        tech: ['Next.js', 'OpenAI API', 'Tailwind CSS', 'Prisma'],
        github: '#',
        live: '#',
    },
    {
        title: 'Fitness Tracker App',
        description: 'A mobile-responsive web app for tracking workouts, nutrition, and personal health goals.',
        image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80',
        tech: ['React Native', 'Firebase', 'Redux', 'MUI'],
        github: '#',
        live: '#',
    },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0], index: number }) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <Box
            ref={ref}
            component={motion.div}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            sx={{ mb: 8 }}
        >
            <Paper
                elevation={0}
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    overflow: 'hidden',
                    bgcolor: 'background.paper',
                    borderRadius: 4,
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                        borderColor: 'primary.main',
                        transform: 'translateY(-5px)',
                        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
                        '& .project-image': {
                            transform: 'scale(1.05)',
                        },
                    },
                }}
            >
                {/* Image Section */}
                <Box
                    sx={{
                        flex: { xs: '1', md: '0 0 45%' },
                        overflow: 'hidden',
                        position: 'relative',
                        minHeight: { xs: '250px', md: 'auto' },
                    }}
                >
                    <Box
                        component="img"
                        className="project-image"
                        src={project.image}
                        alt={project.title}
                        sx={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            transition: 'transform 0.6s ease',
                        }}
                    />
                </Box>

                {/* Content Section */}
                <Box sx={{ p: { xs: 4, md: 6 }, flex: 1 }}>
                    <Typography variant="h4" sx={{ mb: 2, fontWeight: 700 }}>
                        {project.title}
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'text.secondary', mb: 4, fontSize: '1.1rem' }}>
                        {project.description}
                    </Typography>

                    <Stack direction="row" spacing={1} flexWrap="wrap" sx={{ mb: 4, gap: 1 }}>
                        {project.tech.map((t) => (
                            <Chip
                                key={t}
                                label={t}
                                size="small"
                                sx={{
                                    bgcolor: 'rgba(59, 130, 246, 0.1)',
                                    color: 'primary.main',
                                    fontWeight: 600,
                                    borderRadius: 1,
                                }}
                            />
                        ))}
                    </Stack>

                    <Box sx={{ display: 'flex', gap: 2 }}>
                        <Button
                            variant="contained"
                            startIcon={<LaunchIcon />}
                            href={project.live}
                            sx={{ px: 3 }}
                        >
                            Live Demo
                        </Button>
                        <Button
                            variant="outlined"
                            startIcon={<GitHubIcon />}
                            href={project.github}
                            sx={{ px: 3 }}
                        >
                            GitHub
                        </Button>
                    </Box>
                </Box>
            </Paper>
        </Box>
    );
};

const Projects = () => {
    return (
        <Box
            id="projects"
            component="section"
            sx={{ py: { xs: 10, md: 15 }, bgcolor: 'background.default' }}
        >
            <Container maxWidth="lg">
                <Typography
                    variant="h2"
                    sx={{
                        fontSize: { xs: '2.5rem', md: '3.5rem' },
                        mb: 10,
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
                    Featured Projects
                </Typography>

                <Box>
                    {projects.map((project, index) => (
                        <ProjectCard key={project.title} project={project} index={index} />
                    ))}
                </Box>
            </Container>
        </Box>
    );
};

export default Projects;
