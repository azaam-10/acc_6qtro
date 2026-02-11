
import React from 'react';
import { User, FileText, Share2, Settings, ChevronRight, CreditCard, LayoutDashboard } from 'lucide-react';

const MenuList: React.FC = () => {
  const menuItems = [
    { label: 'معلومات شخصية', icon: <LayoutDashboard size={22} /> },
    { label: 'سجل الإيداع', icon: <CreditCard size={22} /> },
    { label: 'تفاصيل الانسحاب', icon: <FileText size={22} /> },
    { label: 'إعدادات العملية', icon: <Settings size={22} /> },
  ];

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm">
      {menuItems.map((item, idx) => (
        <div 
          key={idx} 
          className="flex items-center justify-between px-5 py-4 border-b border-gray-50 last:border-0 active:bg-gray-50 transition-colors"
        >
          <div className="flex items-center gap-4">
            <div className="bg-gray-100 p-1.5 rounded-lg text-gray-400">
              {item.icon}
            </div>
            <span className="text-[15px] text-gray-700 font-medium" dir="rtl">{item.label}</span>
          </div>
          <ChevronRight size={20} className="text-gray-300" />
        </div>
      ))}
    </div>
  );
};

export default MenuList;
