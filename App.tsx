
import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MinePage from './pages/MinePage';
import BottomNav from './components/BottomNav';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('mine');

  return (
    <Router>
      <div className="flex justify-center w-full min-h-screen bg-gray-100 items-center">
        <div className="w-full max-w-[430px] min-h-screen sm:min-h-[844px] sm:max-h-[932px] bg-white flex flex-col relative shadow-2xl overflow-hidden sm:rounded-[40px] border-[8px] border-white">
          <main className="flex-grow overflow-y-auto no-scrollbar pb-24 bg-[#F8F9FB]">
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
