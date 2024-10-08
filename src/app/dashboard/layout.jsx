"use client"; // Mark this component as a Client Component

import React, { useState } from 'react';
import Sidebar from '../../components/Sidebar';
import ProtectedRoute from '@/components/ProtectedRoute';

const Layout = ({ children }) => {
  // State to manage sidebar visibility
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Function to toggle sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <ProtectedRoute>
      <div className='flex bg-primary h-screen'>
        {/* Toggle icon button */}
        <button
          onClick={toggleSidebar}
          className='p-2 text-white bg-black-500 rounded-md fixed top-4 left-4 z-50' // Positioned at the top-left
        >
          {isSidebarOpen ? (
            <img src="/toggle.png" alt="Close Sidebar" className="w-6 h-6" /> // Add your close icon path here
          ) : (
            <img src="/toggle.png" alt="Open Sidebar" className="w-6 h-6" /> // Add your menu icon path here
          )}
        </button>

        {/* Conditionally render the Sidebar based on isSidebarOpen state */}
        {isSidebarOpen && <Sidebar />}
        
        <div className='h-screen overflow-y-auto relative flex-1'>
          {children}
        </div>
      </div>
    </ProtectedRoute>
  );
}

export default Layout;
