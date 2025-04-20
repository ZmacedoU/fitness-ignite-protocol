
import React from 'react';

const PuzzlePieces: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      {/* Puzzle pieces decorative elements - these are very subtle background elements */}
      <div className="absolute top-[15%] right-[5%] w-24 h-24 border border-vf-orange/10 rounded-lg rotate-12 opacity-20"></div>
      <div className="absolute top-[35%] right-[10%] w-16 h-16 border border-vf-orange/10 rounded-lg -rotate-6 opacity-15"></div>
      <div className="absolute bottom-[20%] left-[8%] w-20 h-20 border border-vf-orange/10 rounded-lg rotate-45 opacity-20"></div>
      <div className="absolute top-[60%] right-[15%] w-32 h-32 border border-vf-orange/10 rounded-lg rotate-12 opacity-10"></div>
      <div className="absolute bottom-[30%] right-[20%] w-24 h-24 border border-vf-orange/5 rounded-lg -rotate-12 opacity-20"></div>
    </div>
  );
};

export default PuzzlePieces;
