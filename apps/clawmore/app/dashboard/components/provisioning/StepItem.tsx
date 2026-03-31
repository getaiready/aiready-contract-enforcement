import React from 'react';
import { CheckCircle2, Loader2, AlertCircle } from 'lucide-react';

interface StepItemProps {
  step: { id: string; label: string; description: string };
  index: number;
  totalSteps: number;
  currentStep: number;
  status: string;
}

export default function StepItem({
  step,
  index,
  totalSteps,
  currentStep,
  status,
}: StepItemProps) {
  const isCompleted = index < currentStep || status === 'complete';
  const isActive = index === currentStep && status === 'provisioning';
  const isFailed = status === 'failed' && index === currentStep;

  return (
    <div className="flex gap-3 items-start group">
      <div className="mt-0.5 relative">
        {isCompleted ? (
          <CheckCircle2 className="w-4 h-4 text-emerald-500" />
        ) : isActive ? (
          <Loader2 className="w-4 h-4 text-cyber-blue animate-spin" />
        ) : isFailed ? (
          <AlertCircle className="w-4 h-4 text-rose-500" />
        ) : (
          <div className="w-4 h-4 rounded-full border border-white/10" />
        )}
        {index < totalSteps - 1 && (
          <div
            className={`absolute top-4 left-2 w-[1px] h-6 ${isCompleted ? 'bg-emerald-500/50' : 'bg-white/5'}`}
          />
        )}
      </div>
      <div className="flex flex-col">
        <span
          className={`text-xs font-bold uppercase tracking-tight ${isActive ? 'text-cyber-blue' : isCompleted ? 'text-zinc-400' : 'text-zinc-600'}`}
        >
          {step.label}
        </span>
        {isActive && (
          <span className="text-[9px] text-zinc-500 leading-tight mt-0.5 animate-pulse">
            {step.description}
          </span>
        )}
      </div>
    </div>
  );
}
