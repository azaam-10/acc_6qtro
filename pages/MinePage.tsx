
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import FeatureGrid from '../components/FeatureGrid';
import MenuList from '../components/MenuList';
import ActionModal from '../components/ActionModal';

const MinePage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // تفعيل النافذة بسرعة عند التحميل
    const timer = setTimeout(() => {
      setIsModalOpen(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col bg-[#F8F9FB] min-h-full">
      <Header />
      
      {/* Middle Feature Section */}
      <div className="mb-4">
        <FeatureGrid />
      </div>

      {/* Lower Menu Section */}
      <div className="px-4 pb-20">
        <MenuList />
      </div>

      {/* Logic Modal */}
      <ActionModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
};

export default MinePage;
