'use client';

import { ShieldAlert, Cpu, FileCode } from 'lucide-react';
import BlogLayout from '../_components/BlogLayout';
import SystemFlow from '../../../components/SystemFlow';

const SKILL_NODES = [
  {
    id: 'router',
    data: { label: 'Signal Received', type: 'bus' },
    position: { x: 0, y: 0 },
  },
  {
    id: 'skill_manager',
    data: { label: 'Skill Dispatcher', type: 'bus' },
    position: { x: 200, y: 0 },
  },
  {
    id: 'shell_skill',
    data: { label: 'Shell Execution (SKILL.md)', type: 'agent' },
    position: { x: 400, y: -50 },
  },
  {
    id: 'browser_skill',
    data: { label: 'Browser Automation', type: 'agent' },
    position: { x: 400, y: 50 },
  },
];

const SKILL_EDGES = [
  {
    id: 'e1',
    source: 'router',
    target: 'skill_manager',
    label: 'Command',
    animated: true,
  },
  {
    id: 'e2',
    source: 'skill_manager',
    target: 'shell_skill',
    label: 'Execute',
    animated: true,
  },
  {
    id: 'e3',
    source: 'skill_manager',
    target: 'browser_skill',
    label: 'Browse',
    animated: true,
  },
];

export default function BlogPost() {
  return (
    <BlogLayout
      metadata={{
        title: 'AgentSkills: The Standard for Execution',
        description:
          'Moving beyond chat. Exploring the modular skill system that allows OpenClaw to perform real-world actions safely.',
        date: '2026-04-08',
        image: '/blog-assets/openclaw-chronicles-04-agentskills.png',
        slug: 'openclaw-chronicles-04-agentskills',
      }}
      header={{
        category: 'OPENCLAW_CHRONICLES // PART_04',
        hash: 'agentskills',
        readTime: '08 MIN READ',
        title: (
          <>
            AgentSkills: <br />
            <span className="text-cyber-purple">Standard for Execution</span>
          </>
        ),
        subtitle: 'Moving Beyond Chat',
        description:
          'How OpenClaw turns natural language into precise, multi-step actions across your file system and the web.',
        image: '/blog-assets/openclaw-chronicles-04-agentskills.png',
      }}
      breadcrumbItems={[
        { label: 'BLOG', href: '/blog' },
        {
          label: 'AGENTSKILLS',
          href: '/blog/openclaw-chronicles-04-agentskills',
        },
      ]}
    >
      <section>
        <h2 className="text-3xl font-black tracking-tight mb-6 flex items-center gap-4">
          <span className="text-cyber-purple font-mono text-sm">01</span>
          The Execution Paradox
        </h2>
        <p className="text-zinc-200 leading-relaxed text-lg">
          The biggest limitation of modern AI is the "box". Models can write
          code, but they can't run it. They can plan a trip, but they can't book
          the tickets. OpenClaw breaks this box using **AgentSkills**—a modular
          protocol that grants the agent precise, safe, and powerful
          capabilities.
        </p>
      </section>

      <section className="mt-16">
        <h2 className="text-3xl font-black tracking-tight mb-6 flex items-center gap-4">
          <span className="text-cyber-purple font-mono text-sm">02</span>
          The SKILL.md Standard
        </h2>
        <p className="text-zinc-200 leading-relaxed text-lg">
          Unlike other frameworks that use complex JSON schemas for tool
          definitions, OpenClaw uses **Markdown**. Every skill is defined in a
          `SKILL.md` file, combining human-readable documentation with
          machine-executable instructions. This makes building new skills as
          easy as writing a blog post.
        </p>
        <div className="mt-8 p-6 bg-zinc-900/50 border border-white/10 rounded-sm font-mono text-[11px] text-zinc-200">
          <div className="flex items-center gap-2 text-cyber-purple mb-2">
            <FileCode className="w-3 h-3" />
            <span>S3_UPLOADER_SKILL.md</span>
          </div>
          {`# S3 Uploader Skill
Description: Allows the agent to upload files to a specified AWS S3 bucket.

## Prerequisites
- AWS_ACCESS_KEY_ID
- AWS_SECRET_ACCESS_KEY

## Execution
\`\`\`bash
aws s3 cp {{local_path}} s3://{{bucket_name}}/{{remote_path}}
\`\`\``}
        </div>
      </section>

      <SystemFlow nodes={SKILL_NODES} edges={SKILL_EDGES} height="350px" />

      <section className="mt-16">
        <h2 className="text-3xl font-black tracking-tight mb-6 flex items-center gap-4">
          <span className="text-cyber-purple font-mono text-sm">03</span>
          Safety Guards & Autonomy
        </h2>
        <p className="text-zinc-200 leading-relaxed text-lg">
          With great power comes the risk of accidental `rm -rf /`. OpenClaw
          implements a multi-layered safety architecture. Every skill execution
          is passed through a **Safety Guard** that analyzes the command for
          malicious patterns, destructive actions, or prompt injection attempts
          before it ever touches your shell.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
          <div className="p-6 border border-white/5 bg-white/[0.02] rounded-sm">
            <ShieldAlert className="w-6 h-6 text-cyber-purple mb-4" />
            <h4 className="font-bold mb-2 uppercase tracking-tight">
              Recursive Guards
            </h4>
            <p className="text-sm text-zinc-400">
              Prevents agents from calling themselves in infinite loops or
              spawning unauthorized sub-processes.
            </p>
          </div>
          <div className="p-6 border border-white/5 bg-white/[0.02] rounded-sm">
            <Cpu className="w-6 h-6 text-cyber-purple mb-4" />
            <h4 className="font-bold mb-2 uppercase tracking-tight">
              Resource Isolation
            </h4>
            <p className="text-sm text-zinc-400">
              Restricts skill execution to specific directories and environment
              variables, keeping your core system safe.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-16 mb-24">
        <h2 className="text-3xl font-black tracking-tight mb-6 flex items-center gap-4">
          <span className="text-cyber-purple font-mono text-sm">04</span>
          Proactive Execution
        </h2>
        <p className="text-zinc-200 leading-relaxed text-lg">
          Execution is powerful, but it's even better when it's proactive. In
          our next entry, **The Heartbeat**, we'll explore how OpenClaw uses
          scheduled tasks to monitor your environment and perform actions
          without you even asking.
        </p>
      </section>
    </BlogLayout>
  );
}
