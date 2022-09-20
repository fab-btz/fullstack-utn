import './App.css';

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
      <Header />
      <HomeSection />
      <AboutSection />
      <ResumeSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
