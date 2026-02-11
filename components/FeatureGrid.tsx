
import React from 'react';
import { Users, FileText, Activity, UserPlus } from 'lucide-react';

const features = [
  { id: 1, label: 'الفريق', icon: <Users />, color: '#FFA92B', bg: '#FFF6E8' },
  { id: 2, label: 'السجلات', icon: <FileText />, color: '#33D295', bg: '#EBFCF5' },
  { id: 3, label: 'إدارة البطاقة', icon: <Activity />, color: '#FF5F5F', bg: '#FFF0F0' },
  { id: 4, label: 'دعوة أصدقاء', icon: <UserPlus />, color: '#3BA2FF', bg: '#EBF6FF' },
];

const FeatureGrid: React.FC = () => {
  return (
    <div className="bg-white mx-5 rounded-[24px] shadow-sm py-6 px-2 flex justify-between items-center relative -mt-6 border border-gray-50">
      {features.map((item) => (
        <button key={item.id} className="flex flex-col items-center gap-2 flex-1 active:scale-95 transition-transform group">
          <div 
            className="w-13 h-13 rounded-[18px] flex items-center justify-center transition-all group-hover:shadow-md" 
            style={{ backgroundColor: item.bg }}
          >
            {React.cloneElement(item.icon as React.ReactElement, { 
              size: 26, 
              strokeWidth: 2,
              style: { color: item.color }
            })}
          </div>
          <span className="text-[11px] font-bold text-gray-600 text-center whitespace-nowrap">{item.label}</span>
        </button>
      ))}
    </div>
  );
};

export default FeatureGrid;
