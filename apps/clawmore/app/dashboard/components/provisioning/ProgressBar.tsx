import React from 'react';

interface ProgressBarProps {
  status: string;
  currentStep: number;
  totalSteps: number;
}

export default function ProgressBar({
  status,
  currentStep,
  totalSteps,
}: ProgressBarProps) {
  const percentage =
    status === 'complete' ? 100 : Math.round((currentStep / totalSteps) * 100);

  return (
    <div className="mt-auto bg-zinc-900/50 p-4 rounded-xl border border-white/5">
      <div className="flex justify-between items-center text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
        <span>Overall Progress</span>
        <span className="text-cyber-blue font-bold">{percentage}%</span>
      </div>
      <div className="mt-2 w-full bg-zinc-800 h-1.5 rounded-full overflow-hidden">
        <div
          className={`h-full transition-all duration-1000 ${
            status === 'failed'
              ? 'bg-rose-500'
              : 'bg-cyber-blue shadow-[0_0_10px_rgba(0,224,255,0.5)]'
          }`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
