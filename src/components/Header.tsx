import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    Box,
    Container,
    useScrollTrigger,
    Slide,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
} from '@mui/material';
import { motion } from 'framer-motion';
import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';
import { useState } from 'react';

const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
];

const Header = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 50,
    });

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <Box sx={{ textAlign: 'center', p: 3, height: '100%', bgcolor: 'background.default' }}>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
                <IconButton onClick={handleDrawerToggle} sx={{ color: 'text.primary' }}>
                    <CloseIcon />
                </IconButton>
            </Box>
            <Typography
                variant="h6"
                sx={{
                    fontWeight: 800,
                    mb: 4,
                    background: 'linear-gradient(45deg, #3b82f6, #22d3ee)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                }}
            >
                RAGAVAN
            </Typography>
            <List>
                {navItems.map((item) => (
                    <ListItem key={item.label} disablePadding>
                        <ListItemButton
                            href={item.href}
                            onClick={handleDrawerToggle}
                            sx={{ textAlign: 'center', py: 2 }}
                        >
                            <ListItemText
                                primary={item.label}
                                primaryTypographyProps={{
                                    fontSize: '1.2rem',
                                    fontWeight: 600,
                                    color: 'text.primary'
                                }}
                            />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

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
                    zIndex: (theme) => theme.zIndex.drawer + 1,
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

                        {/* Desktop Menu */}
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

                        {/* Mobile Menu Toggle */}
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ display: { xs: 'flex', md: 'none' }, color: 'text.primary' }}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Toolbar>
                </Container>

                {/* Mobile Drawer */}
                <Drawer
                    variant="temporary"
                    anchor="right"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', md: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: { xs: '100%', sm: 300 } },
                    }}
                >
                    {drawer}
                </Drawer>
            </AppBar>
        </Slide>
    );
};

export default Header;
