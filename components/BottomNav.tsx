
import React from 'react';
import { Home, Headphones, Utensils, ClipboardList, User } from 'lucide-react';

interface BottomNavProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const navItems = [
  { id: 'home', label: 'الصفحة الأمامية', icon: <Home /> },
  { id: 'service', label: 'خدمة الزبائن', icon: <Headphones /> },
  { id: 'menu', label: 'قائمة الطعام', icon: <Utensils /> },
  { id: 'record', label: 'سجل', icon: <ClipboardList /> },
  { id: 'mine', label: 'أنا', icon: <User /> },
];

const BottomNav: React.FC<BottomNavProps> = ({ activeTab, setActiveTab }) => {
  return (
    <div className="fixed bottom-0 w-full max-w-[430px] bg-white border-t border-gray-100 h-16 flex items-center justify-around px-2 z-50">
      {navItems.map((item) => {
        const isActive = activeTab === item.id;
        return (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`flex flex-col items-center gap-1 transition-colors ${isActive ? 'text-[#8B3D4A]' : 'text-gray-400'}`}
          >
            {React.cloneElement(item.icon as React.ReactElement, {
              size: 22,
              strokeWidth: isActive ? 2.5 : 1.8
            })}
            <span className={`text-[10px] ${isActive ? 'font-bold' : 'font-medium'}`}>{item.label}</span>
          </button>
        );
      })}
    </div>
  );
};

export default BottomNav;
