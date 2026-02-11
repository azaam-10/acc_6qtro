
import React from 'react';
import { MessageCircle, Crown } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-[#9B4A4E] to-[#7C4A50] pt-12 pb-14 px-6 rounded-b-[40px] shadow-lg">
      {/* Top Profile Area */}
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-4">
          {/* Avatar */}
          <div className="w-16 h-16 bg-white/20 rounded-full flex-shrink-0 border-2 border-white/30 overflow-hidden shadow-inner flex items-center justify-center">
             <div className="w-full h-full bg-white flex items-center justify-center">
                <Crown className="text-[#9B4A4E]" size={32} />
             </div>
          </div>
          
          {/* User Info */}
          <div className="flex flex-col gap-1 text-white">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold tracking-tight">gHKA616</span>
              <span className="bg-[#F5B400] text-white text-[10px] px-2 py-0.5 rounded-full font-bold shadow-sm flex items-center gap-1">
                VIP 1
              </span>
            </div>
            <span className="text-[12px] opacity-80">شفرة الدعوة: <span className="font-mono">382705</span></span>
          </div>
        </div>
        
        {/* Support Icon */}
        <button className="text-white">
          <div className="bg-white/10 p-2.5 rounded-2xl active:bg-white/20 transition-all active:scale-95">
            <MessageCircle size={22} fill="currentColor" className="text-white" />
          </div>
        </button>
      </div>

      {/* Account Info & Actions */}
      <div className="mt-10 flex justify-between items-end">
        <div className="text-white">
          <p className="text-[13px] opacity-80 mb-1 font-medium">الرصيد الكلي</p>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold tracking-tighter">233.56</span>
            <span className="text-sm font-medium opacity-90">USDT</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4">
          <ActionButton label="شحن" icon={<WalletIcon />} />
          <ActionButton label="سحب" icon={<WithdrawIcon />} />
        </div>
      </div>
    </div>
  );
};

const ActionButton: React.FC<{ label: string; icon: React.ReactNode }> = ({ label, icon }) => (
  <div className="flex flex-col items-center gap-2">
    <button className="w-[54px] h-[54px] bg-white rounded-2xl flex items-center justify-center shadow-md active:scale-90 transition-all group">
      <div className="w-[65%] h-[65%] flex items-center justify-center transition-transform group-active:scale-110">
        {icon}
      </div>
    </button>
    <span className="text-white text-[11px] font-semibold">{label}</span>
  </div>
);

const WalletIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <path d="M19 7H5C3.89543 7 3 7.89543 3 9V18C3 19.1046 3.89543 20 5 20H19C20.1046 20 21 19.1046 21 18V9C21 7.89543 20.1046 7 19 7Z" fill="#1F6AE1"/>
    <path d="M19 11C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H17C16.4477 13 16 12.5523 16 12C16 11.4477 16.4477 11 17 11H19Z" fill="white"/>
    <path d="M18 7V5C18 3.89543 17.1046 3 16 3H5C4.44772 3 4 3.44772 4 4C4 4.55228 4.44772 5 5 5H16V7H18Z" fill="#1F6AE1" opacity="0.8"/>
  </svg>
);

const WithdrawIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <path d="M21 4H3C1.89543 4 1 4.89543 1 6V18C1 19.1046 1.89543 20 3 20H21C22.1046 20 23 19.1046 23 18V6C23 4.89543 22.1046 4 21 4Z" fill="#33D295"/>
    <path d="M1 8H23V10H1V8Z" fill="white" opacity="0.3"/>
    <rect x="4" y="14" width="6" height="2" rx="1" fill="white"/>
  </svg>
);

export default Header;
