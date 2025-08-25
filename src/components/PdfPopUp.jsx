import React from "react";

const PdfPopUp = ({ open, onClose, src, title = "Resume" }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <div className="relative w-11/12 md:w-3/4 lg:w-2/3 h-[80vh] bg-white rounded-lg shadow-xl">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 px-3 py-1 rounded-md bg-black text-white hover:bg-neutral-800"
          aria-label="Close resume"
        >
          Close
        </button>
        <iframe src={src} title={title} className="w-full h-full rounded-lg" />
      </div>
    </div>
  );
};

export default PdfPopUp;


