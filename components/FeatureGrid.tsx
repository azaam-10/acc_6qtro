
import React from 'react';
import { Users, FileText, Layout, UserPlus } from 'lucide-react';

const FeatureGrid: React.FC = () => {
  const items = [
    { label: 'فريق', icon: <Users size={28} />, color: '#FF9500' },
    { label: 'سجل', icon: <FileText size={28} />, color: '#34C759' },
    { label: 'إدارة حزمة البطاقة', icon: <Layout size={28} />, color: '#FF3B30' },
    { label: 'ادعو أصدقاء', icon: <UserPlus size={28} />, color: '#007AFF' },
  ];

  return (
    <div className="bg-white flex justify-between px-2 py-6">
      {items.map((item, idx) => (
        <div key={idx} className="flex flex-col items-center gap-2 flex-1">
          <div style={{ color: item.color }}>
            {item.icon}
          </div>
          <span className="text-[11px] text-gray-700 font-medium whitespace-nowrap" dir="rtl">{item.label}</span>
        </div>
      ))}
    </div>
  );
};

export default FeatureGrid;
