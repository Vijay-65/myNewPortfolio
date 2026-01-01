import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#3b82f6', // Deep Blue
        },
        secondary: {
            main: '#22d3ee', // Neon Cyan
        },
        background: {
            default: '#0f172a', // Deep Slate
            paper: '#1e293b',
        },
        text: {
            primary: '#ffffff',
            secondary: '#94a3b8',
        },
    },
    typography: {
        fontFamily: '"Inter", "Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
        h1: {
            fontWeight: 800,
            letterSpacing: '-0.02em',
        },
        h2: {
            fontWeight: 700,
            letterSpacing: '-0.01em',
        },
        h3: {
            fontWeight: 700,
        },
        h4: {
            fontWeight: 600,
        },
        body1: {
            lineHeight: 1.7,
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 8,
                    textTransform: 'none',
                    fontWeight: 600,
                },
            },
        },
    },
});
