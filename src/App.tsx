import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import Stats from './components/Stats';
import Cases from './components/Cases';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';
import CookieConsent from './components/CookieConsent';
import ScrollToTop from './components/ScrollToTop';
import LGPD from './pages/LGPD';
import Termos from './pages/Termos';

function Home() {
  useEffect(() => {
    document.title = 'Araujo & Alves Advogados | Redução de Dívidas Empresariais até 90%';
  }, []);

  return (
    <>
      <Header />
      <Hero />
      <Problem />
      <Solution />
      <Stats />
      <Cases />
      <Testimonials />
      <CTA />
      <FAQ />
      <Footer />
      <FloatingCTA />
      <CookieConsent />
      <ScrollToTop />
    </>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lgpd" element={<LGPD />} />
        <Route path="/termos" element={<Termos />} />
      </Routes>
    </div>
  );
}

export default App;
