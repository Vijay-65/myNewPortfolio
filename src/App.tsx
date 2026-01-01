import { Box } from '@mui/material';
import Header from './components/Header';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <Box sx={{ bgcolor: 'background.default', minHeight: '100vh' }}>
      <Header />
      <Box component="main">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </Box>
      <Footer />
    </Box>
  );
}

export default App;
