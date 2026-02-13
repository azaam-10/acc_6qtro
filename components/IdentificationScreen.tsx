
import React, { useState } from 'react';
import { UserCircle2, AlertCircle } from 'lucide-react';

interface IdentificationScreenProps {
  onSuccess: () => void;
}

const IdentificationScreen: React.FC<IdentificationScreenProps> = ({ onSuccess }) => {
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === '5388767403') {
      onSuccess();
    } else {
      setError('لا يوجد حساب بهذا الاسم قسم الضريبه المنخفضة');
    }
  };

  return (
    <div className="fixed inset-0 z-[200] bg-[#F8F9FB] flex flex-col items-center justify-center px-8 animate-in fade-in duration-500">
      <div className="w-full max-w-[320px] text-center" dir="rtl">
        <div className="w-20 h-20 bg-[#9B4A4E]/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <UserCircle2 className="text-[#9B4A4E]" size={48} />
        </div>
        
        <h1 className="text-xl font-bold text-gray-800 mb-2">تسجيل الدخول</h1>
        <p className="text-sm text-gray-500 mb-8">يرجى إدخال اسم المستخدم الخاص بك للمتابعة</p>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <input
              type="text"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
                setError('');
              }}
              placeholder="اسم المستخدم"
              className={`w-full p-4 bg-white border ${error ? 'border-red-500' : 'border-gray-200'} rounded-2xl focus:outline-none focus:border-[#9B4A4E] transition-all text-center font-medium shadow-sm`}
            />
          </div>
          
          {error && (
            <div className="flex items-center gap-2 text-red-500 text-xs mt-2 justify-center animate-shake">
              <AlertCircle size={14} />
              <span>{error}</span>
            </div>
          )}
          
          <button
            type="submit"
            className="w-full py-4 bg-[#9B4A4E] text-white rounded-2xl font-bold shadow-lg shadow-[#9B4A4E]/20 active:scale-[0.98] transition-all mt-4"
          >
            دخول
          </button>
        </form>
      </div>

      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-5px); }
          75% { transform: translateX(5px); }
        }
        .animate-shake {
          animation: shake 0.2s ease-in-out 0s 2;
        }
      `}</style>
    </div>
  );
};

export default IdentificationScreen;
