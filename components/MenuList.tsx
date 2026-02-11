
import React from 'react';
import { ChevronRight, User, FileText, ClipboardList, Settings } from 'lucide-react';

const menuItems = [
  { id: 1, label: 'معلومات شخصية', icon: <User size={18} className="text-gray-400" /> },
  { id: 2, label: 'سجل الإيداع', icon: <FileText size={18} className="text-gray-400" /> },
  { id: 3, label: 'تفاصيل الانسحاب', icon: <ClipboardList size={18} className="text-gray-400" /> },
  { id: 4, label: 'إعدادات العملية', icon: <Settings size={18} className="text-gray-400" /> },
];

const MenuList: React.FC = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      {menuItems.map((item, index) => (
        <div 
          key={item.id} 
          className={`flex items-center justify-between p-4 active:bg-gray-50 transition-colors ${index !== menuItems.length - 1 ? 'border-b border-gray-50' : ''}`}
        >
          <div className="flex items-center gap-3">
            <div className="bg-gray-100 p-2 rounded-lg">
              {item.icon}
            </div>
            <span className="text-sm font-medium text-gray-700">{item.label}</span>
          </div>
          <ChevronRight size={20} className="text-gray-300" />
        </div>
      ))}
    </div>
  );
};

export default MenuList;
