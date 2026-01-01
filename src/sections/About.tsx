import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    return (
        <Box
            id="about"
            component="section"
            sx={{ py: { xs: 10, md: 15 }, bgcolor: 'background.default' }}
        >
            <Container maxWidth="lg">
                <Box
                    ref={ref}
                    component={motion.div}
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                >
                    <Typography
                        variant="h2"
                        sx={{
                            fontSize: { xs: '2.5rem', md: '3.5rem' },
                            mb: 6,
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
                        About Me
                    </Typography>

                    <Grid container spacing={6} justifyContent="center">
                        <Grid size={{ xs: 12, md: 8 }}>
                            <Paper
                                elevation={0}
                                sx={{
                                    p: { xs: 4, md: 6 },
                                    bgcolor: 'background.paper',
                                    borderRadius: 4,
                                    border: '1px solid rgba(255, 255, 255, 0.05)',
                                    position: 'relative',
                                    overflow: 'hidden',
                                }}
                            >
                                {/* Decorative Accent */}
                                <Box
                                    sx={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        width: '4px',
                                        height: '100%',
                                        bgcolor: 'primary.main',
                                    }}
                                />

                                <Typography variant="h5" sx={{ mb: 3, fontWeight: 600 }}>
                                    I'm a <Box component="span" sx={{ color: 'secondary.main' }}>React Developer</Box> passionate about building modern web applications.
                                </Typography>

                                <Typography variant="body1" sx={{ color: 'text.secondary', mb: 3, fontSize: '1.1rem' }}>
                                    With a strong foundation in frontend technologies, I specialize in creating
                                    <Box component="span" sx={{ color: 'primary.main', fontWeight: 600 }}> high-performance</Box>,
                                    <Box component="span" sx={{ color: 'primary.main', fontWeight: 600 }}> responsive</Box>, and
                                    <Box component="span" sx={{ color: 'primary.main', fontWeight: 600 }}> user-centric</Box> web experiences.
                                </Typography>

                                <Typography variant="body1" sx={{ color: 'text.secondary', fontSize: '1.1rem' }}>
                                    My focus is on writing clean, maintainable code and implementing
                                    cinematic animations that enhance user engagement without being distracting.
                                    I'm constantly exploring new tools and techniques to stay at the
                                    forefront of modern web development.
                                </Typography>
                            </Paper>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
};

export default About;
