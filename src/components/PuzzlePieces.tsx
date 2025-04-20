
import React from 'react';

const PuzzlePieces: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Single centered logo */}
      <div 
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-10 mix-blend-soft-light"
      >
        <img 
          src="/lovable-uploads/80719e33-6862-4621-ab6b-e2cae9ad44d9.png"
          alt="VF Logo"
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
};

export default PuzzlePieces;

