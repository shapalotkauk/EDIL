import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import WelcomeSection from './components/WelcomeSection';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Pricing from './components/Pricing';
import ContactSection from './components/ContactSection';
import ChatWidget from './components/ChatWidget';
import TeamSlider from './components/TeamSlider';
import BookingModal from './components/BookingModal';
import FullPriceList from './components/FullPriceList';
import ServiceDetailView from './components/ServiceDetailView';
import ConditionDetailView from './components/ConditionDetailView';
import EmergencyCriteria from './components/EmergencyCriteria';
import StickyMobileMenu from './components/StickyMobileMenu';
import Testimonials from './components/Testimonials';
import FAQSection from './components/FAQSection';
import WhatToExpect from './components/WhatToExpect';
import ContactPage from './components/ContactPage';
import BlogList from './components/BlogList';
import BlogPostView from './components/BlogPost';
import Footer from './components/Footer';
import { BookingProvider } from './context/BookingContext';
import { blogPosts } from './data/blogPosts';

function App() {
  const [isFullPriceListOpen, setIsFullPriceListOpen] = useState(false);
  const [isContactPageOpen, setIsContactPageOpen] = useState(false);
  const [isBlogListOpen, setIsBlogListOpen] = useState(false);
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);
  const [selectedConditionId, setSelectedConditionId] = useState<string | null>(null);
  const [selectedBlogPostId, setSelectedBlogPostId] = useState<string | null>(null);

  const resetAll = () => {
    setIsFullPriceListOpen(false);
    setIsContactPageOpen(false);
    setIsBlogListOpen(false);
    setSelectedServiceId(null);
    setSelectedConditionId(null);
    setSelectedBlogPostId(null);
  };

  const openFees = () => {
    resetAll();
    setIsFullPriceListOpen(true);
  };

  const openContact = () => {
    resetAll();
    setIsContactPageOpen(true);
  };

  const openBlog = () => {
    resetAll();
    setIsBlogListOpen(true);
  };

  const handleServiceSelect = (id: string) => {
    resetAll();
    if (!id) {
       // Home
       window.scrollTo(0, 0);
    } else {
       setSelectedServiceId(id);
    }
  };

  const handleConditionSelect = (id: string) => {
    resetAll();
    setSelectedConditionId(id);
  };

  const handleBlogPostSelect = (id: string) => {
    resetAll();
    setSelectedBlogPostId(id);
  };

  const closeDetail = () => {
    resetAll();
  };

  const backToBlogList = () => {
    resetAll();
    setIsBlogListOpen(true);
  };

  return (
    <BookingProvider>
      <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
        {/* Modals & Overlays */}
        <ChatWidget />
        <StickyMobileMenu />
        <BookingModal />

        {/* Page Routing Logic */}
        {isFullPriceListOpen ? (
          <FullPriceList 
             onBack={closeDetail} 
             onOpenFees={openFees}
             onSelectService={handleServiceSelect}
             onSelectCondition={handleConditionSelect}
             onContactClick={openContact}
          />
        ) : isContactPageOpen ? (
          <ContactPage 
             onBack={closeDetail}
             onOpenFees={openFees}
             onSelectService={handleServiceSelect}
             onSelectCondition={handleConditionSelect}
             onContactClick={openContact}
          />
        ) : isBlogListOpen ? (
          <BlogList 
             onSelectBlogPost={handleBlogPostSelect}
             onOpenFees={openFees}
             onSelectService={handleServiceSelect}
             onSelectCondition={handleConditionSelect}
             onContactClick={openContact}
          />
        ) : selectedBlogPostId ? (
          <BlogPostView 
             post={blogPosts.find(p => p.id === selectedBlogPostId)!}
             onBack={backToBlogList}
             onOpenFees={openFees}
             onSelectService={handleServiceSelect}
             onSelectCondition={handleConditionSelect}
             onContactClick={openContact}
          />
        ) : selectedServiceId ? (
          <ServiceDetailView 
            serviceId={selectedServiceId} 
            onBack={closeDetail}
            onOpenFees={openFees}
            onSelectService={handleServiceSelect}
            onSelectCondition={handleConditionSelect}
          />
        ) : selectedConditionId ? (
          <ConditionDetailView 
            conditionId={selectedConditionId}
            onBack={closeDetail}
            onOpenFees={openFees}
            onSelectService={handleServiceSelect}
            onSelectCondition={handleConditionSelect}
          />
        ) : (
          <>
            <Header 
              onOpenFees={openFees} 
              onSelectService={handleServiceSelect} 
              onSelectCondition={handleConditionSelect}
              onContactClick={openContact}
              onBlogClick={openBlog}
            />
            <main>
              <Hero />
              <WelcomeSection />
              <Services onServiceSelect={handleServiceSelect} />
              <EmergencyCriteria />
              <WhatToExpect />
              <WhyChooseUs />
              <Testimonials />
              <TeamSlider />
              <Pricing onViewFullPrices={openFees} />
              <FAQSection />
              <ContactSection />
            </main>
            <Footer />
          </>
        )}
      </div>
    </BookingProvider>
  );
}

export default App;