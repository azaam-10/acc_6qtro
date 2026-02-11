
import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MinePage from './pages/MinePage.tsx';
import BottomNav from './components/BottomNav.tsx';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('mine');

  return (
    <Router>
      <div className="flex justify-center w-full min-h-screen bg-gray-100">
        <div className="w-full max-w-[430px] min-h-screen bg-[#F8F9FB] flex flex-col relative shadow-xl overflow-hidden border-x border-gray-200">
          <main className="flex-grow overflow-y-auto no-scrollbar">
            <Routes>
              <Route path="/mine" element={<MinePage />} />
              <Route path="/" element={<Navigate to="/mine" replace />} />
              <Route path="*" element={<div className="p-10 text-center text-gray-400">الصفحة غير موجودة</div>} />
            </Routes>
          </main>
          <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>
      </div>
    </Router>
  );
};

export default App;
