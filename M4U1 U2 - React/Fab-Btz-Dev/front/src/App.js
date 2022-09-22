import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
/*STYLES*/
import './styles/css/WITHEbootstrap.min.css';

/*COMPONETS*/
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

import HomeSection from './components/pages/HomeSection';
import AboutSection from './components/pages/AboutSection';
import ResumeSection from './components/pages/ResumeSection';
import SkillsSection from './components/pages/SkillsSection';
import ProjectsSection from './components/pages/ProjectsSection';
import ContactSection from './components/pages/ContactSection';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
      
        <Routes>
           <Route path='/' element={ <HomeSection /> } />
           <Route path='/about' element={ <AboutSection /> } />
           <Route path='/resume' element={ <ResumeSection /> } />
           <Route path='/skills' element={ <SkillsSection /> } />
           <Route path='/pojects' element={ <ProjectsSection /> } />
           <Route path='/contact' element={ <ContactSection /> } />
        </Routes>
        
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;
