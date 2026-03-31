'use client';

import React, { useEffect, useState, useRef } from 'react';
import { Terminal } from 'lucide-react';
import StepItem from './components/provisioning/StepItem';
import LogFeed from './components/provisioning/LogFeed';
import ProgressBar from './components/provisioning/ProgressBar';

interface ProvisioningConsoleProps {
  status: 'provisioning' | 'complete' | 'failed' | 'none';
  error?: string;
}

const STEPS = [
  {
    id: 'aws-account',
    label: 'AWS Account Vending',
    description: 'Leasing managed node from warm pool...',
  },
  {
    id: 'gov-policy',
    label: 'Governance Setup',
    description: 'Applying Zero-Idle SCP & Security Hub...',
  },
  {
    id: 'iam-bootstrap',
    label: 'IAM Bootstrapping',
    description: 'Creating management roles and trust relations...',
  },
  {
    id: 'github-clone',
    label: 'Spoke Provisioning',
    description: 'Triggering autonomous deploy via AWS CodeBuild...',
  },
  {
    id: 'incident-bus',
    label: 'Shadow Bus Link',
    description: 'Connecting cross-account EventBridge for mutation tax...',
  },
  {
    id: 'secrets-inject',
    label: 'Secrets Injection',
    description: 'Securing AWS and AI provider credentials...',
  },
];

export default function ProvisioningConsole({
  status,
  error,
}: ProvisioningConsoleProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [logs, setLogs] = useState<string[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  const appendLog = React.useCallback((msg: string) => {
    setLogs((prev) => [...prev, `[${new Date().toLocaleTimeString()}] ${msg}`]);
  }, []);

  useEffect(() => {
    if (status !== 'provisioning') return;
    const interval = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev < STEPS.length - 1) {
          const next = prev + 1;
          appendLog(`> Initiating: ${STEPS[next].label}...`);
          return next;
        }
        return prev;
      });
    }, 15000);

    setTimeout(() => {
      appendLog('> Bootstrapping Orchestrator v0.3.17...');
      appendLog(`> Target: Managed Node Generation...`);
      appendLog(`> Step 1: ${STEPS[0].label} - ${STEPS[0].description}`);
    }, 0);

    return () => clearInterval(interval);
  }, [status, appendLog]);

  useEffect(() => {
    if (status === 'complete') {
      setTimeout(() => {
        appendLog('✔️ ALL SYSTEMS OPERATIONAL. REDIRECTING TO HUB...');
      }, 0);
    }
  }, [status, appendLog]);

  useEffect(() => {
    if (scrollRef.current)
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [logs]);

  if (status === 'none') return null;

  return (
    <div className="w-full bg-black border border-white/10 rounded-2xl overflow-hidden shadow-2xl font-mono animate-in fade-in zoom-in duration-500">
      <div className="bg-zinc-900 px-4 py-2 border-b border-white/5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Terminal className="w-4 h-4 text-cyber-blue" />
          <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">
            provisioning_console.sys
          </span>
        </div>
        <div className="flex gap-1.5">
          <div className="w-2 h-2 rounded-full bg-zinc-700" />
          <div className="w-2 h-2 rounded-full bg-zinc-700" />
          <div className="w-2 h-2 rounded-full bg-cyber-blue animate-pulse" />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 min-h-[400px]">
        <div className="p-6 border-r border-white/5 space-y-6 bg-zinc-950/50">
          <h3 className="text-[10px] text-zinc-600 uppercase tracking-[0.2em] mb-4">
            Deployment Pipeline
          </h3>
          {STEPS.map((step, i) => (
            <StepItem
              key={step.id}
              step={step}
              index={i}
              totalSteps={STEPS.length}
              currentStep={currentStep}
              status={status}
            />
          ))}
        </div>

        <div className="lg:col-span-2 p-6 flex flex-col bg-black">
          <LogFeed
            logs={logs}
            status={status}
            error={error}
            scrollRef={scrollRef}
          />
          <ProgressBar
            status={status}
            currentStep={currentStep}
            totalSteps={STEPS.length}
          />
        </div>
      </div>
    </div>
  );
}
