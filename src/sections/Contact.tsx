import { Box, Container, Typography, TextField, Button, Paper, Stack, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
    Email as EmailIcon,
    LinkedIn as LinkedInIcon,
    GitHub as GitHubIcon,
    Send as SendIcon,
} from '@mui/icons-material';

const Contact = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <Box
            id="contact"
            component="section"
            sx={{ py: { xs: 10, md: 15 }, bgcolor: 'background.default' }}
        >
            <Container maxWidth="md">
                <Box
                    ref={ref}
                    component={motion.div}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.8 }}
                >
                    <Paper
                        elevation={0}
                        sx={{
                            p: { xs: 4, md: 8 },
                            bgcolor: 'background.paper',
                            borderRadius: 6,
                            border: '1px solid rgba(255, 255, 255, 0.05)',
                            textAlign: 'center',
                            position: 'relative',
                            overflow: 'hidden',
                        }}
                    >
                        {/* Background Glow */}
                        <Box
                            sx={{
                                position: 'absolute',
                                top: '-20%',
                                left: '-20%',
                                width: '300px',
                                height: '300px',
                                background: 'radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)',
                                filter: 'blur(50px)',
                                zIndex: 0,
                            }}
                        />

                        <Box sx={{ position: 'relative', zIndex: 1 }}>
                            <Typography
                                variant="h2"
                                sx={{
                                    fontSize: { xs: '2.5rem', md: '3.5rem' },
                                    mb: 2,
                                    fontWeight: 800,
                                }}
                            >
                                Let's build something <Box component="span" sx={{ color: 'primary.main' }}>together</Box>
                            </Typography>
                            <Typography variant="body1" sx={{ color: 'text.secondary', mb: 6, fontSize: '1.2rem' }}>
                                Have a project in mind or just want to say hi? Feel free to reach out!
                            </Typography>

                            <Box component="form" sx={{ mb: 6 }}>
                                <Stack spacing={3}>
                                    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3}>
                                        <TextField
                                            fullWidth
                                            label="Name"
                                            variant="outlined"
                                            sx={{ '& .MuiOutlinedInput-root': { borderRadius: 3 } }}
                                        />
                                        <TextField
                                            fullWidth
                                            label="Email"
                                            variant="outlined"
                                            sx={{ '& .MuiOutlinedInput-root': { borderRadius: 3 } }}
                                        />
                                    </Stack>
                                    <TextField
                                        fullWidth
                                        label="Message"
                                        variant="outlined"
                                        multiline
                                        rows={4}
                                        sx={{ '& .MuiOutlinedInput-root': { borderRadius: 3 } }}
                                    />
                                    <Button
                                        variant="contained"
                                        size="large"
                                        endIcon={<SendIcon />}
                                        sx={{
                                            py: 2,
                                            borderRadius: 3,
                                            fontSize: '1.1rem',
                                            boxShadow: '0 10px 20px rgba(59, 130, 246, 0.2)',
                                        }}
                                    >
                                        Send Message
                                    </Button>
                                </Stack>
                            </Box>

                            <Typography variant="subtitle1" sx={{ mb: 3, color: 'text.secondary', fontWeight: 600 }}>
                                OR CONNECT WITH ME ON
                            </Typography>
                            <Stack direction="row" spacing={2} justifyContent="center">
                                {[
                                    { icon: <GitHubIcon />, href: '#' },
                                    { icon: <LinkedInIcon />, href: '#' },
                                    { icon: <EmailIcon />, href: 'mailto:example@email.com' },
                                ].map((social, index) => (
                                    <IconButton
                                        key={index}
                                        href={social.href}
                                        component={motion.a}
                                        whileHover={{ y: -5, color: '#3b82f6' }}
                                        sx={{
                                            width: 50,
                                            height: 50,
                                            bgcolor: 'rgba(255, 255, 255, 0.05)',
                                            color: 'text.primary',
                                            transition: 'all 0.3s ease',
                                        }}
                                    >
                                        {social.icon}
                                    </IconButton>
                                ))}
                            </Stack>
                        </Box>
                    </Paper>
                </Box>
            </Container>
        </Box>
    );
};

export default Contact;
