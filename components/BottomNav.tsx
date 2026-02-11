
import React from 'react';
import { Home, Headphones, Layout, FileText, User } from 'lucide-react';

interface BottomNavProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const BottomNav: React.FC<BottomNavProps> = ({ activeTab, setActiveTab }) => {
  const navItems = [
    { id: 'home', label: 'الصفحة الأمامية', icon: <Home size={24} /> },
    { id: 'service', label: 'خدمة الزبائن', icon: <Headphones size={24} /> },
    { id: 'menu', label: 'قائمة الطعام', icon: <Layout size={24} /> },
    { id: 'record', label: 'سجل', icon: <FileText size={24} /> },
    { id: 'mine', label: 'أنا', icon: <User size={24} /> },
  ];

  return (
    <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] bg-white border-t border-gray-100 h-[75px] flex items-center justify-around px-2 z-50">
      {navItems.map((item) => {
        const isActive = item.id === 'mine';
        return (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`flex flex-col items-center gap-1 transition-colors ${isActive ? 'text-gray-800' : 'text-gray-400'}`}
          >
            <div className={isActive ? 'text-gray-800' : 'text-gray-400'}>
              {item.icon}
            </div>
            <span className={`text-[10px] ${isActive ? 'font-bold' : 'font-medium'}`}>{item.label}</span>
          </button>
        );
      })}
    </div>
  );
};

export default BottomNav;
