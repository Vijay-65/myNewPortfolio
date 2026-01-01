import { Box, Container, Typography, Button, Grid, Avatar } from '@mui/material';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import myimage56 from '../assets/myimage56.png';
import myResume from '../../public/Full_Stack_Developer_Resume.pdf'

const Hero = () => {
    return (
        <Box
            id="home"
            sx={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                pt: { xs: 12, md: 0 },
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            {/* Background Glow */}
            <Box
                sx={{
                    position: 'absolute',
                    top: '20%',
                    right: '10%',
                    width: '400px',
                    height: '400px',
                    background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%)',
                    filter: 'blur(60px)',
                    zIndex: 0,
                }}
            />

            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
                <Grid container spacing={4} alignItems="center">
                    <Grid size={{ xs: 12, md: 7 }}>
                        <Box
                            component={motion.div}
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <Typography
                                variant="subtitle1"
                                sx={{ color: 'secondary.main', fontWeight: 600, mb: 1, letterSpacing: 2 }}
                            >
                                HI, I'M
                            </Typography>
                            <Typography
                                variant="h1"
                                sx={{
                                    fontSize: { xs: '3rem', md: '4.5rem' },
                                    mb: 2,
                                    lineHeight: 1.1,
                                }}
                            >
                                Vijayaragavan D
                            </Typography>

                            <Box sx={{ height: '3rem', mb: 3 }}>
                                <Typography
                                    variant="h4"
                                    sx={{ color: 'text.secondary', fontWeight: 500 }}
                                >
                                    <TypeAnimation
                                        sequence={[
                                            'React Developer',
                                            2000,
                                            'Frontend Engineer',
                                            2000,
                                            'UI Enthusiast',
                                            2000,
                                        ]}
                                        wrapper="span"
                                        speed={50}
                                        repeat={Infinity}
                                    />
                                </Typography>
                            </Box>

                            <Typography
                                variant="body1"
                                sx={{ color: 'text.secondary', mb: 4, maxWidth: '500px', fontSize: '1.1rem' }}
                            >
                                Crafting high-performance web experiences with a focus on clean code and cinematic animations.
                            </Typography>

                            <Box sx={{ display: 'flex', gap: 2 }}>
                                <Button
                                    variant="contained"
                                    size="large"
                                    component={motion.a}
                                    href={myResume}
                                    download
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    sx={{ px: 4, py: 1.5 }}
                                >
                                    View Resume
                                </Button>
                                <Button
                                    variant="outlined"
                                    size="large"
                                    component={motion.button}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    sx={{ px: 4, py: 1.5 }}
                                >
                                    Contact Me
                                </Button>
                            </Box>
                        </Box>
                    </Grid>

                    <Grid size={{ xs: 12, md: 5 }} sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Box
                            component={motion.div}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1 }}
                            sx={{ position: 'relative' }}
                        >
                            <Box
                                component={motion.div}
                                animate={{
                                    y: [0, -20, 0],
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                sx={{
                                    position: 'relative',
                                    zIndex: 1,
                                }}
                            >
                                <Avatar
                                    sx={{
                                        width: { xs: 280, md: 400 },
                                        height: { xs: 280, md: 400 },
                                        border: '8px solid rgba(255, 255, 255, 0.05)',
                                        boxShadow: '0 0 50px rgba(59, 130, 246, 0.4)',
                                        '& img': {
                                            objectFit: 'cover',
                                            objectPosition: 'center',
                                        }
                                    }}
                                    src={myimage56}
                                />
                            </Box>

                            {/* Decorative Ring */}
                            <Box
                                component={motion.div}
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                sx={{
                                    position: 'absolute',
                                    top: -15,
                                    left: -15,
                                    right: -15,
                                    bottom: -15,
                                    border: '2px dashed rgba(34, 211, 238, 0.4)',
                                    borderRadius: '50%',
                                    zIndex: 0,
                                }}
                            />
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Hero;
