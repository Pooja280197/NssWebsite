import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Services from './components/Services';
import Products from './components/Products';
import Industries from './components/Industries';
import Clients from './components/Clients';
import Blogs from './components/Blogs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AboutPage from './components/AboutPage';
import CustomSoftwarePage from './components/CustomSoftwarePage';
import WebDevPage from './components/WebDevPage';
import EnterpriseMobilityPage from './components/EnterpriseMobilityPage';
import DataSciencePage from './components/DataSciencePage';
import AIMLPage from './components/AIMLPage';
import CloudSolutionsPage from './components/CloudSolutionsPage';
import DevOpsPage from './components/DevOpsPage';
import StaffAugmentationPage from './components/StaffAugmentationPage';
import SalesforcePage from './components/SalesforcePage';
import ServiceNowPage from './components/ServiceNowPage';

type PageType =
  | 'home'
  | 'about'
  | 'custom-software'
  | 'web-dev'
  | 'enterprise-mobility'
  | 'data-science'
  | 'ai-ml'
  | 'cloud-solutions'
  | 'devops'
  | 'staff-augmentation'
  | 'salesforce'
  | 'servicenow';

export default function App() {
  const [page, setPage] = useState<PageType>('home');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.1 }
    );
    const elements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [page]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [page]);

  const goHome = () => setPage('home');

  const renderPage = () => {
    switch (page) {
      case 'about': return <AboutPage onClose={goHome} />;
      case 'custom-software': return <CustomSoftwarePage onClose={goHome} />;
      case 'web-dev': return <WebDevPage onClose={goHome} />;
      case 'enterprise-mobility': return <EnterpriseMobilityPage onClose={goHome} />;
      case 'data-science': return <DataSciencePage onClose={goHome} />;
      case 'ai-ml': return <AIMLPage onClose={goHome} />;
      case 'cloud-solutions': return <CloudSolutionsPage onClose={goHome} />;
      case 'devops': return <DevOpsPage onClose={goHome} />;
      case 'staff-augmentation': return <StaffAugmentationPage onClose={goHome} />;
      case 'salesforce': return <SalesforcePage onClose={goHome} />;
      case 'servicenow': return <ServiceNowPage onClose={goHome} />;
      default: return (
        <>
          <Hero />
          <Stats />
          <About />
          <Services />
          <Products />
          <Industries />
          <Clients />
          <Blogs />
          <Contact />
        </>
      );
    }
  };

  return (
    <div className="font-sans">
      <Navbar
        onAboutOpen={() => setPage('about')}
        onHomeOpen={goHome}
        onServiceOpen={(slug) => setPage(slug as PageType)}
      />
      <main>{renderPage()}</main>
      {page === 'home' && <Footer />}
    </div>
  );
}
