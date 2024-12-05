import React from 'react';

interface ProfileProps {
  bio: string;
}

export function Profile({ bio }: ProfileProps) {
  return (
    <div className="text-center w-full">
      <div className="flex flex-col justify-center items-center min-h-[120px] px-4">
        <p 
          className="japanese-heading text-[clamp(1.5rem,3.5vw,2.25rem)] leading-relaxed font-black 
            bg-clip-text text-transparent
            bg-gradient-to-r from-violet-500 via-fuchsia-500 to-orange-500 
            animate-gradient-x tracking-tight
            break-keep whitespace-pre-line md:whitespace-normal transform-gpu"
          style={{
            textShadow: '0 0 30px rgba(255,255,255,0.15)',
            letterSpacing: '0.025em'
          }}
        >
          {bio}
        </p>
      </div>
    </div>
  );
}