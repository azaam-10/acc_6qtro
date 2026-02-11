
import React from 'react';
import { ChevronLeft, User, FileText, ClipboardList, Settings, ShieldCheck, HelpCircle } from 'lucide-react';

const menuItems = [
  { id: 1, label: 'المعلومات الشخصية', icon: <User size={18} />, color: 'text-blue-500' },
  { id: 2, label: 'سجل الشحن', icon: <FileText size={18} />, color: 'text-green-500' },
  { id: 3, label: 'تفاصيل السحب', icon: <ClipboardList size={18} />, color: 'text-orange-500' },
  { id: 4, label: 'إعدادات الحساب', icon: <Settings size={18} />, color: 'text-gray-500' },
  { id: 5, label: 'مركز الأمان', icon: <ShieldCheck size={18} />, color: 'text-red-500' },
  { id: 6, label: 'المساعدة والدعم', icon: <HelpCircle size={18} />, color: 'text-indigo-500' },
];

const MenuList: React.FC = () => {
  return (
    <div className="bg-white rounded-3xl shadow-sm overflow-hidden border border-gray-100 mx-5 mt-6">
      {menuItems.map((item, index) => (
        <div 
          key={item.id} 
          className={`flex items-center justify-between p-4 active:bg-gray-50 transition-colors cursor-pointer ${index !== menuItems.length - 1 ? 'border-b border-gray-50' : ''}`}
        >
          <div className="flex items-center gap-4">
            <div className={`p-2 rounded-xl bg-gray-50 ${item.color}`}>
              {item.icon}
            </div>
            <span className="text-[14px] font-semibold text-gray-700">{item.label}</span>
          </div>
          <ChevronLeft size={18} className="text-gray-300" />
        </div>
      ))}
    </div>
  );
};

export default MenuList;
