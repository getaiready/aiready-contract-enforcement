import React from 'react';

interface LogFeedProps {
  logs: string[];
  status: string;
  error?: string;
  scrollRef: React.RefObject<HTMLDivElement | null>;
}

export default function LogFeed({
  logs,
  status,
  error,
  scrollRef,
}: LogFeedProps) {
  return (
    <div className="lg:col-span-2 p-6 flex flex-col bg-black">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-[10px] text-zinc-600 uppercase tracking-[0.2em]">
          StdOut Feed
        </h3>
        <span className="text-[9px] text-cyber-blue/50 font-mono italic">
          KERNEL v4.22-SST
        </span>
      </div>

      <div
        ref={scrollRef}
        className="flex-grow overflow-y-auto space-y-1 mb-4 h-[300px] scrollbar-hide"
      >
        {logs.map((log, i) => (
          <p key={i} className="text-[11px] leading-relaxed break-all">
            <span className="text-zinc-800">{log.split(']')[0]}]</span>
            <span
              className={
                log.includes('✔️')
                  ? 'text-emerald-500'
                  : log.includes('>')
                    ? 'text-cyber-blue'
                    : 'text-zinc-400'
              }
            >
              {log.split(']')[1]}
            </span>
          </p>
        ))}
        {status === 'provisioning' && (
          <div className="flex items-center gap-2 text-[11px] text-cyber-blue">
            <span className="animate-pulse">_</span>
          </div>
        )}
        {status === 'failed' && (
          <p className="text-[11px] text-rose-500 mt-4 font-bold border-t border-rose-500/20 pt-4">
            [FATAL_ERROR]:{' '}
            {error || 'Provisioning sequence aborted. Check IAM permissions.'}
          </p>
        )}
      </div>
    </div>
  );
}
