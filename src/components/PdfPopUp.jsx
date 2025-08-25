import React from "react";
import { IoClose } from "react-icons/io5";

const PdfPopUp = ({ open, onClose, src, title = "Resume" }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <button
        onClick={onClose}
        className="absolute top-20 right-48 z-[60] p-2 rounded-full bg-white text-black shadow"
        aria-label="Close resume"
      >
        <IoClose className="w-6 h-auto"/>
      </button>
      <div className="relative w-11/12 md:w-3/4 lg:w-2/3 h-[80vh] bg-white rounded-lg shadow-xl">
        <iframe src={src} title={title} className="w-full h-full rounded-lg" />
      </div>
    </div>
  );
};

export default PdfPopUp;
