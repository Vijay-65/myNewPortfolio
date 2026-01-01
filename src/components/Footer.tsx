import { Box, Container, Typography, Stack, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import {
    GitHub as GitHubIcon,
    LinkedIn as LinkedInIcon,
    Twitter as TwitterIcon,
    Email as EmailIcon,
} from '@mui/icons-material';

const Footer = () => {
    return (
        <Box
            component="footer"
            sx={{
                py: 6,
                bgcolor: 'background.default',
                borderTop: '1px solid rgba(255, 255, 255, 0.05)',
            }}
        >
            <Container maxWidth="lg">
                <Stack
                    direction={{ xs: 'column', md: 'row' }}
                    justifyContent="space-between"
                    alignItems="center"
                    spacing={4}
                >
                    <Box>
                        <Typography
                            variant="h6"
                            sx={{
                                fontWeight: 800,
                                background: 'linear-gradient(45deg, #3b82f6, #22d3ee)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                mb: 1,
                            }}
                        >
                            RAGAVAN
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            © {new Date().getFullYear()} All rights reserved.
                        </Typography>
                    </Box>

                    <Stack direction="row" spacing={2}>
                        {[
                            { icon: <GitHubIcon />, href: '#' },
                            { icon: <LinkedInIcon />, href: '#' },
                            { icon: <TwitterIcon />, href: '#' },
                            { icon: <EmailIcon />, href: 'mailto:example@email.com' },
                        ].map((social, index) => (
                            <IconButton
                                key={index}
                                href={social.href}
                                component={motion.a}
                                whileHover={{ y: -5, color: '#3b82f6' }}
                                sx={{
                                    bgcolor: 'rgba(255, 255, 255, 0.05)',
                                    color: 'text.primary',
                                    transition: 'all 0.3s ease',
                                }}
                            >
                                {social.icon}
                            </IconButton>
                        ))}
                    </Stack>
                </Stack>
            </Container>
        </Box>
    );
};

export default Footer;
