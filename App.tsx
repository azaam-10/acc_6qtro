
import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MinePage from './pages/MinePage';
import BottomNav from './components/BottomNav';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('mine');

  return (
    <Router>
      <div className="flex justify-center w-full min-h-screen bg-gray-100">
        <div className="w-full max-w-[430px] min-w-[360px] bg-white flex flex-col relative shadow-xl min-h-screen">
          <main className="flex-grow overflow-y-auto pb-20">
            <Routes>
              <Route path="/mine" element={<MinePage />} />
              <Route path="/" element={<Navigate to="/mine" replace />} />
              <Route path="*" element={<div className="p-10 text-center">Page Placeholder</div>} />
            </Routes>
          </main>
          <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>
      </div>
    </Router>
  );
};

export default App;
