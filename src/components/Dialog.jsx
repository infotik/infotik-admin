import React from 'react';

const Dialog = ({ children, open, onClose }) => {
  return (
    <div
      className={`fixed inset-0 bg-black/50 grid place-content-center ${
        open ? '' : 'hidden'
      } z-50`}
    >
      <div className="w-[90%] sm:w-[27rem] bg-black p-4 sm:p-5 rounded-md relative">
        <div className="flex justify-end mb-2">
          <button className="bg-none border-none" onClick={onClose}>
            <img src="/X.png" className="object-contain w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Dialog;
