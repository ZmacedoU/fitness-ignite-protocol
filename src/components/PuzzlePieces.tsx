
import React from 'react';

const PuzzlePieces: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Top right puzzle piece */}
      <div 
        className="absolute -top-10 -right-10 w-48 h-48 opacity-25 mix-blend-soft-light"
        style={{ transform: 'rotate(-15deg)' }}
      >
        <img 
          src="/lovable-uploads/682ce0d8-b00b-4a89-a96c-a4d1935ae69b.png"
          alt="Puzzle piece"
          className="w-full h-full object-contain filter brightness-125"
        />
      </div>

      {/* Center right puzzle piece */}
      <div 
        className="absolute top-1/2 -right-8 w-56 h-56 opacity-20 mix-blend-overlay"
        style={{ transform: 'rotate(10deg) translateY(-50%)' }}
      >
        <img 
          src="/lovable-uploads/682ce0d8-b00b-4a89-a96c-a4d1935ae69b.png"
          alt="Puzzle piece"
          className="w-full h-full object-contain filter brightness-110"
        />
      </div>

      {/* Bottom right puzzle pieces */}
      <div 
        className="absolute bottom-20 right-12 w-32 h-32 opacity-30 mix-blend-soft-light"
        style={{ transform: 'rotate(25deg)' }}
      >
        <img 
          src="/lovable-uploads/682ce0d8-b00b-4a89-a96c-a4d1935ae69b.png"
          alt="Puzzle piece"
          className="w-full h-full object-contain"
        />
      </div>
      <div 
        className="absolute bottom-10 right-24 w-32 h-32 opacity-25 mix-blend-overlay"
        style={{ transform: 'rotate(-10deg)' }}
      >
        <img 
          src="/lovable-uploads/682ce0d8-b00b-4a89-a96c-a4d1935ae69b.png"
          alt="Puzzle piece"
          className="w-full h-full object-contain flip-horizontal"
        />
      </div>
    </div>
  );
};

export default PuzzlePieces;
