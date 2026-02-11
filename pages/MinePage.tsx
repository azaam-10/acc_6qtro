
import React, { useState, useEffect } from 'react';
import Header from '../components/Header.tsx';
import FeatureGrid from '../components/FeatureGrid.tsx';
import MenuList from '../components/MenuList.tsx';
import ActionModal from '../components/ActionModal.tsx';

const MinePage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsModalOpen(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col bg-[#F8F9FB] min-h-full">
      {/* Container that gets blurred when modal is open */}
      <div className={`flex flex-col min-h-full ${isModalOpen ? 'modal-open-blur' : ''}`}>
        <Header />
        
        <div className="mb-4">
          <FeatureGrid />
        </div>

        <div className="px-4 pb-20">
          <MenuList />
        </div>
      </div>

      <ActionModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
};

export default MinePage;
