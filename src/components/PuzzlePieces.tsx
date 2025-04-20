
import React from 'react';

const PuzzlePieces: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Top right logos */}
      <div 
        className="absolute -top-10 -right-10 w-48 h-48 opacity-25 mix-blend-soft-light"
        style={{ transform: 'rotate(-15deg)' }}
      >
        <img 
          src="/lovable-uploads/80719e33-6862-4621-ab6b-e2cae9ad44d9.png"
          alt="VF Logo"
          className="w-full h-full object-contain filter brightness-125"
        />
      </div>
      <div 
        className="absolute top-16 right-32 w-40 h-40 opacity-20 mix-blend-soft-light"
        style={{ transform: 'rotate(25deg)' }}
      >
        <img 
          src="/lovable-uploads/80719e33-6862-4621-ab6b-e2cae9ad44d9.png"
          alt="VF Logo"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Upper-center right logos */}
      <div 
        className="absolute top-1/4 right-24 w-44 h-44 opacity-25 mix-blend-overlay"
        style={{ transform: 'rotate(-20deg)' }}
      >
        <img 
          src="/lovable-uploads/80719e33-6862-4621-ab6b-e2cae9ad44d9.png"
          alt="VF Logo"
          className="w-full h-full object-contain filter brightness-110"
        />
      </div>
      <div 
        className="absolute top-1/3 right-48 w-36 h-36 opacity-20 mix-blend-soft-light"
        style={{ transform: 'rotate(15deg)' }}
      >
        <img 
          src="/lovable-uploads/80719e33-6862-4621-ab6b-e2cae9ad44d9.png"
          alt="VF Logo"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Center right logos */}
      <div 
        className="absolute top-1/2 -right-8 w-56 h-56 opacity-20 mix-blend-overlay"
        style={{ transform: 'rotate(10deg) translateY(-50%)' }}
      >
        <img 
          src="/lovable-uploads/80719e33-6862-4621-ab6b-e2cae9ad44d9.png"
          alt="VF Logo"
          className="w-full h-full object-contain filter brightness-110"
        />
      </div>
      <div 
        className="absolute top-1/2 right-40 w-48 h-48 opacity-25 mix-blend-soft-light"
        style={{ transform: 'rotate(-5deg) translateY(-30%)' }}
      >
        <img 
          src="/lovable-uploads/80719e33-6862-4621-ab6b-e2cae9ad44d9.png"
          alt="VF Logo"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Lower-center right logos */}
      <div 
        className="absolute bottom-1/3 right-16 w-40 h-40 opacity-30 mix-blend-overlay"
        style={{ transform: 'rotate(30deg)' }}
      >
        <img 
          src="/lovable-uploads/80719e33-6862-4621-ab6b-e2cae9ad44d9.png"
          alt="VF Logo"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Bottom right logos */}
      <div 
        className="absolute bottom-20 right-12 w-32 h-32 opacity-30 mix-blend-soft-light"
        style={{ transform: 'rotate(25deg)' }}
      >
        <img 
          src="/lovable-uploads/80719e33-6862-4621-ab6b-e2cae9ad44d9.png"
          alt="VF Logo"
          className="w-full h-full object-contain"
        />
      </div>
      <div 
        className="absolute bottom-10 right-24 w-32 h-32 opacity-25 mix-blend-overlay"
        style={{ transform: 'rotate(-10deg)' }}
      >
        <img 
          src="/lovable-uploads/80719e33-6862-4621-ab6b-e2cae9ad44d9.png"
          alt="VF Logo"
          className="w-full h-full object-contain"
        />
      </div>
      <div 
        className="absolute bottom-28 right-48 w-36 h-36 opacity-20 mix-blend-soft-light"
        style={{ transform: 'rotate(-15deg)' }}
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
