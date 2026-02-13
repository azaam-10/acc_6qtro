
import React from 'react';
import { MessageCircle } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <div className="header-gradient pt-12 pb-8 px-6 text-white relative">
      {/* Support Icon - Top Right */}
      <div className="absolute top-8 right-6">
        <div className="w-10 h-10 flex items-center justify-center">
          <MessageCircle size={26} fill="white" className="text-transparent opacity-90" />
        </div>
      </div>

      {/* Profile Section - Avatar Left, Text Right */}
      <div className="flex items-center gap-4 mb-10 mt-2">
        <div className="w-[72px] h-[72px] bg-white rounded-full flex-shrink-0"></div>
        <div className="flex flex-col items-start" dir="rtl">
          <div className="flex items-center gap-2">
            <span className="bg-[#F5B400] text-white text-[10px] px-2 py-0.5 rounded-md font-bold">VIP 3</span>
            <span className="text-xl font-bold tracking-wide">5388767403</span>
          </div>
          <span className="text-sm opacity-90 mt-1">شفرة الدعوة: 578050</span>
        </div>
      </div>

      {/* Account & Actions Section - Balance Left, Actions Right */}
      <div className="flex justify-between items-end">
        <div className="flex flex-col items-start" dir="rtl">
          <p className="text-sm opacity-90 mb-2">حساب شخصي</p>
          <div className="flex items-baseline gap-2">
            <span className="text-sm font-bold">USDT</span>
            <span className="text-2xl font-bold">58555.5185</span>
          </div>
        </div>

        <div className="flex gap-4">
          {/* Deposit Action */}
          <div className="flex flex-col items-center gap-1.5">
            <div className="w-[54px] h-[54px] bg-[#F5F5F5] rounded-[20px] flex items-center justify-center shadow-sm">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center icon-blue-gradient">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              </div>
            </div>
            <span className="text-[11px] font-medium opacity-90">تعبئة رصيد</span>
          </div>
          
          {/* Withdraw Action */}
          <div className="flex flex-col items-center gap-1.5">
            <div className="w-[54px] h-[54px] bg-[#F5F5F5] rounded-[20px] flex items-center justify-center shadow-sm">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center icon-blue-gradient">
                 <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg>
              </div>
            </div>
            <span className="text-[11px] font-medium opacity-90">سحب المال</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
