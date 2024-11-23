// src/App.tsx

import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './components/Home';
import { Contact } from './components/Contact';
import { BookingModal } from './components/BookingModal';
import { ScrollToTop } from './components/ScrollToTop';

interface SelectedPackage {
  name: string;
  price: number;
}

function App() {
  const [showModal, setShowModal] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<SelectedPackage | null>(null);

  const handleOpenModal = (pkg: SelectedPackage) => {
    setSelectedPackage(pkg);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedPackage(null);
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-black text-white">
        <Header setShowModal={handleOpenModal} />
        <BookingModal 
          showModal={showModal} 
          setShowModal={handleCloseModal} 
          packageName={selectedPackage?.name || ''} 
          packagePrice={selectedPackage?.price || 0} 
        />
        <Routes>
          <Route path="/" element={<Home setShowModal={handleOpenModal} />} />
          <Route path="/contact" element={<Contact setShowModal={handleOpenModal} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;