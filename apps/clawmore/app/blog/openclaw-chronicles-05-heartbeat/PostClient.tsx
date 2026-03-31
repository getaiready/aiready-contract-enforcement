'use client';

import { Bell, Search } from 'lucide-react';
import BlogLayout from '../_components/BlogLayout';
import SystemFlow from '../../../components/SystemFlow';

const HEARTBEAT_NODES = [
  {
    id: 'idle',
    data: { label: 'Agent Idle', type: 'event' },
    position: { x: 0, y: 0 },
  },
  {
    id: 'heartbeat',
    data: { label: 'Heartbeat Trigger (60s)', type: 'bus' },
    position: { x: 200, y: 0 },
  },
  {
    id: 'task_scan',
    data: { label: 'Task Scanner', type: 'agent' },
    position: { x: 400, y: -50 },
  },
  {
    id: 'exec',
    data: { label: 'Proactive Execution', type: 'agent' },
    position: { x: 400, y: 50 },
  },
];

const HEARTBEAT_EDGES = [
  {
    id: 'e1',
    source: 'idle',
    target: 'heartbeat',
    label: 'Wait',
    animated: false,
  },
  {
    id: 'e2',
    source: 'heartbeat',
    target: 'task_scan',
    label: 'Wake',
    animated: true,
  },
  {
    id: 'e3',
    source: 'task_scan',
    target: 'exec',
    label: 'Action',
    animated: true,
  },
];

export default function BlogPost() {
  return (
    <BlogLayout
      metadata={{
        title: 'The Heartbeat: Scheduling Proactive Intelligence',
        description:
          'Moving from reactive chat to proactive assistance. How OpenClaw uses a heartbeat scheduler.',
        date: '2026-04-12',
        image: '/blog-assets/openclaw-chronicles-05-heartbeat.png',
        slug: 'openclaw-chronicles-05-heartbeat',
      }}
      header={{
        category: 'OPENCLAW_CHRONICLES // PART_05',
        hash: 'heartbeat',
        readTime: '07 MIN READ',
        title: (
          <>
            The Heartbeat: <br />
            <span className="text-cyber-purple">Proactive Intelligence</span>
          </>
        ),
        subtitle: 'Beyond the Prompt',
        description:
          'Beyond the Prompt. How OpenClaw wakes itself up to anticipate your needs, automate your chores, and monitor your digital world 24/7.',
        image: '/blog-assets/openclaw-chronicles-05-heartbeat.png',
      }}
      breadcrumbItems={[
        { label: 'BLOG', href: '/blog' },
        {
          label: 'HEARTBEAT',
          href: '/blog/openclaw-chronicles-05-heartbeat',
        },
      ]}
    >
      <section>
        <h2 className="text-3xl font-black tracking-tight mb-6 flex items-center gap-4">
          <span className="text-cyber-purple font-mono text-sm">01</span>
          The Problem with Prompts
        </h2>
        <p className="text-zinc-200 leading-relaxed text-lg">
          Traditional AI is reactive. It sits there, waiting for you to type
          something. But a true assistant shouldn't wait for instructions for
          every single task. It should know that at 9:00 AM you need a summary
          of your GitHub notifications, or that when a production server goes
          down, it needs to investigate immediately.
        </p>
        <p className="text-zinc-200 leading-relaxed text-lg mt-6">
          **OpenClaw** introduces the "Heartbeat"—a background scheduler that
          allows the agent to exist as a persistent, proactive service.
        </p>
      </section>

      <section className="mt-16">
        <h2 className="text-3xl font-black tracking-tight mb-6 flex items-center gap-4">
          <span className="text-cyber-purple font-mono text-sm">02</span>
          How the Heartbeat Works
        </h2>
        <p className="text-zinc-200 leading-relaxed text-lg">
          The Heartbeat is a simple but powerful mechanism. Every few seconds or
          minutes (configurable), the OpenClaw runtime triggers a "pulse".
          During this pulse, the agent wakes up, checks its scheduled tasks,
          scans for external signals (like new emails or webhooks), and
          determines if any autonomous action is required.
        </p>
      </section>

      <SystemFlow
        nodes={HEARTBEAT_NODES}
        edges={HEARTBEAT_EDGES}
        height="350px"
      />

      <section className="mt-16">
        <h2 className="text-3xl font-black tracking-tight mb-6 flex items-center gap-4">
          <span className="text-cyber-purple font-mono text-sm">03</span>
          Proactive Use Cases
        </h2>
        <p className="text-zinc-200 leading-relaxed text-lg mb-8">
          By leveraging the Heartbeat, OpenClaw can perform complex, multi-step
          automations without human intervention:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
          <div className="p-6 border border-white/5 bg-white/[0.02] rounded-sm">
            <Bell className="w-6 h-6 text-cyber-purple mb-4" />
            <h4 className="font-bold mb-2 uppercase tracking-tight">
              Signal Monitoring
            </h4>
            <p className="text-sm text-zinc-400">
              Monitoring GitHub PRs, Slack mentions, or Gmail filters and
              surfacing only what's critical.
            </p>
          </div>
          <div className="p-6 border border-white/5 bg-white/[0.02] rounded-sm">
            <Search className="w-6 h-6 text-cyber-purple mb-4" />
            <h4 className="font-bold mb-2 uppercase tracking-tight">
              System Health
            </h4>
            <p className="text-sm text-zinc-400">
              Running periodic health checks on your infrastructure and
              auto-remediating common issues.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-16 mb-24">
        <h2 className="text-3xl font-black tracking-tight mb-6 flex items-center gap-4">
          <span className="text-cyber-purple font-mono text-sm">04</span>
          The Path to Self-Improvement
        </h2>
        <p className="text-zinc-200 leading-relaxed text-lg">
          Proactive intelligence is the first step toward true autonomy. But
          what happens when the agent realizes it lacks a skill to solve a
          recurring problem? In our next entry, **Self-Improvement**, we'll
          explore the "Molt" mechanism: how OpenClaw agents write their own code
          to expand their capabilities.
        </p>
      </section>
    </BlogLayout>
  );
}
