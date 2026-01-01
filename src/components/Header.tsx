import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    Box,
    Container,
    useScrollTrigger,
    Slide,
} from '@mui/material';
import { motion } from 'framer-motion';

const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
];

const Header = () => {
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 50,
    });

    return (
        <Slide appear={false} direction="down" in={true}>
            <AppBar
                position="fixed"
                sx={{
                    bgcolor: trigger ? 'rgba(15, 23, 42, 0.8)' : 'transparent',
                    backdropFilter: trigger ? 'blur(12px)' : 'none',
                    boxShadow: trigger ? 1 : 0,
                    transition: 'all 0.3s ease-in-out',
                    borderBottom: trigger ? '1px solid rgba(255, 255, 255, 0.1)' : 'none',
                }}
            >
                <Container maxWidth="lg">
                    <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
                        <Typography
                            variant="h6"
                            component={motion.div}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            sx={{
                                fontWeight: 800,
                                background: 'linear-gradient(45deg, #3b82f6, #22d3ee)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                cursor: 'pointer',
                            }}
                        >
                            RAGAVAN
                        </Typography>

                        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
                            {navItems.map((item, index) => (
                                <Box
                                    key={item.label}
                                    component={motion.div}
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <Button
                                        href={item.href}
                                        sx={{
                                            color: 'text.primary',
                                            fontSize: '0.9rem',
                                            '&:hover': {
                                                color: 'primary.main',
                                                bgcolor: 'transparent',
                                            },
                                        }}
                                    >
                                        {item.label}
                                    </Button>
                                </Box>
                            ))}
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </Slide>
    );
};

export default Header;
