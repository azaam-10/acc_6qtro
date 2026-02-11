
import React from 'react';
import { MessageCircle } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-[#9B4A4E] to-[#7C4A50] pt-10 pb-12 px-5 rounded-b-[0px]">
      {/* Top Profile Area: Avatar Left, Support Right */}
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-4">
          {/* Avatar (Left) */}
          <div className="w-16 h-16 bg-white rounded-full flex-shrink-0 border-2 border-white/10 overflow-hidden shadow-sm">
             <div className="w-full h-full bg-white"></div>
          </div>
          
          {/* User Info */}
          <div className="flex flex-col gap-1 text-white">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold tracking-tight">gHKA616</span>
              <span className="bg-[#F5B400] text-white text-[10px] px-1.5 py-0.5 rounded-[4px] font-bold">VIP 1</span>
            </div>
            <span className="text-xs opacity-90 text-left">شفرة الدعوة: 382705</span>
          </div>
        </div>
        
        {/* Support Icon (Right) */}
        <button className="text-white mt-1">
          <div className="bg-white/10 p-1.5 rounded-full active:bg-white/20 transition-colors">
            <MessageCircle size={22} fill="white" className="text-white" />
          </div>
        </button>
      </div>

      {/* Account Info & Actions */}
      <div className="mt-8 flex justify-between items-end">
        <div className="text-white">
          <p className="text-[13px] opacity-90 mb-1 font-medium">حساب شخصي</p>
          <div className="flex items-baseline gap-1">
            <span className="text-sm font-bold">USDT</span>
            <span className="text-2xl font-bold tracking-tight">233.5622</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4">
          <ActionButton label="تعبئة رصيد" icon={<WalletIcon />} />
          <ActionButton label="سحب المال" icon={<WithdrawIcon />} />
        </div>
      </div>
    </div>
  );
};

const ActionButton: React.FC<{ label: string; icon: React.ReactNode }> = ({ label, icon }) => (
  <div className="flex flex-col items-center gap-2">
    <div className="w-[50px] h-[50px] bg-white rounded-[14px] flex items-center justify-center shadow-sm active:scale-95 transition-transform">
      <div className="w-[60%] h-[60%] flex items-center justify-center">
        {icon}
      </div>
    </div>
    <span className="text-white text-[11px] font-medium">{label}</span>
  </div>
);

const WalletIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <defs>
      <linearGradient id="blueGradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#1F6AE1" />
        <stop offset="100%" stopColor="#0B4DB8" />
      </linearGradient>
    </defs>
    <path d="M19 7H5C3.89543 7 3 7.89543 3 9V18C3 19.1046 3.89543 20 5 20H19C20.1046 20 21 19.1046 21 18V9C21 7.89543 20.1046 7 19 7Z" fill="url(#blueGradient)"/>
    <path d="M19 11C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H17C16.4477 13 16 12.5523 16 12C16 11.4477 16.4477 11 17 11H19Z" fill="white"/>
    <path d="M18 7V5C18 3.89543 17.1046 3 16 3H5C4.44772 3 4 3.44772 4 4C4 4.55228 4.44772 5 5 5H16V7H18Z" fill="url(#blueGradient)"/>
  </svg>
);

const WithdrawIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <path d="M21 4H3C1.89543 4 1 4.89543 1 6V18C1 19.1046 1.89543 20 3 20H21C22.1046 20 23 19.1046 23 18V6C23 4.89543 22.1046 4 21 4Z" fill="url(#blueGradient)"/>
    <path d="M1 8H23V10H1V8Z" fill="white" opacity="0.3"/>
    <rect x="4" y="14" width="6" height="2" rx="1" fill="white"/>
  </svg>
);

export default Header;
