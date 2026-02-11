
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import FeatureGrid from '../components/FeatureGrid';
import MenuList from '../components/MenuList';
import ActionModal from '../components/ActionModal';

const MinePage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // إظهار المربع الحواري بعد تحميل الصفحة بفترة قصيرة
    const timer = setTimeout(() => {
      setIsModalOpen(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col bg-[#F8F9FB] min-h-full relative">
      {/* محتوى الصفحة مع ضبابية خفيفة جداً (0.8px) */}
      <div className={`flex flex-col min-h-full transition-all duration-300 ${isModalOpen ? 'blur-[0.8px] brightness-95' : ''}`}>
        <Header />
        
        {/* Feature Row Section */}
        <div className="mt-[-10px] z-10 px-0">
          <FeatureGrid />
        </div>

        {/* Settings List Section */}
        <div className="mt-4 px-4 pb-10">
          <MenuList />
        </div>
      </div>

      {/* المربع الحواري المتسلسل */}
      <ActionModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default MinePage;
