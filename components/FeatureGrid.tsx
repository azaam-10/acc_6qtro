
import React from 'react';
import { Users, FileText, Activity, UserPlus } from 'lucide-react';

const features = [
  { id: 1, label: 'فريق', icon: <Users className="text-[#FFA92B]" />, bg: '#FFF6E8' },
  { id: 2, label: 'سجل', icon: <FileText className="text-[#33D295]" />, bg: '#EBFCF5' },
  { id: 3, label: 'إدارة حزمة البطاقة', icon: <Activity className="text-[#FF5F5F]" />, bg: '#FFF0F0' },
  { id: 4, label: 'ادعو أصدقاء', icon: <UserPlus className="text-[#3BA2FF]" />, bg: '#EBF6FF' },
];

const FeatureGrid: React.FC = () => {
  return (
    <div className="bg-white mx-4 rounded-xl shadow-sm py-5 px-1 flex justify-between items-center">
      {features.map((item) => (
        <div key={item.id} className="flex flex-col items-center gap-2 flex-1">
          <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: item.bg }}>
            {React.cloneElement(item.icon as React.ReactElement, { size: 24, strokeWidth: 2.5 })}
          </div>
          <span className="text-[11px] font-medium text-gray-700 text-center whitespace-nowrap">{item.label}</span>
        </div>
      ))}
    </div>
  );
};

export default FeatureGrid;
