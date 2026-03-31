'use client';

import { HardDrive, Lock, FileText } from 'lucide-react';
import BlogLayout from '../_components/BlogLayout';
import SystemFlow from '../../../components/SystemFlow';

const LOCAL_NODES = [
  {
    id: 'user_input',
    data: { label: 'User Message', type: 'event' },
    position: { x: 0, y: 0 },
  },
  {
    id: 'router',
    data: { label: 'OpenClaw Router', type: 'bus' },
    position: { x: 200, y: 0 },
  },
  {
    id: 'local_storage',
    data: { label: 'Local Markdown/YAML', type: 'agent' },
    position: { x: 400, y: -50 },
  },
  {
    id: 'local_llm',
    data: { label: 'Ollama / LM Studio', type: 'agent' },
    position: { x: 400, y: 50 },
  },
];

const LOCAL_EDGES = [
  {
    id: 'e1',
    source: 'user_input',
    target: 'router',
    label: 'Inbound',
    animated: true,
  },
  {
    id: 'e2',
    source: 'router',
    target: 'local_storage',
    label: 'Context',
    animated: true,
  },
  {
    id: 'e3',
    source: 'router',
    target: 'local_llm',
    label: 'Inference',
    animated: true,
  },
];

export default function BlogPost() {
  return (
    <BlogLayout
      metadata={{
        title: 'OpenClaw 101: The Local-First Philosophy',
        description:
          'Why privacy and performance are the pillars of the next generation of AI agents.',
        date: '2026-04-02',
        image: '/blog-assets/openclaw-chronicles-02-local-first.png',
        slug: 'openclaw-chronicles-02-local-first',
      }}
      header={{
        category: 'OPENCLAW_CHRONICLES // PART_02',
        hash: 'localfirst',
        readTime: '07 MIN READ',
        title: (
          <>
            OpenClaw 101: <br />
            <span className="text-cyber-purple">Local-First Philosophy</span>
          </>
        ),
        subtitle: 'Privacy is the Foundation',
        description:
          "Privacy isn't just a feature—it's the foundation. Why the most powerful AI agents of the future will live on your hardware, not in the cloud.",
        image: '/blog-assets/openclaw-chronicles-02-local-first.png',
      }}
      breadcrumbItems={[
        { label: 'BLOG', href: '/blog' },
        {
          label: 'LOCAL-FIRST',
          href: '/blog/openclaw-chronicles-02-local-first',
        },
      ]}
    >
      <section>
        <h2 className="text-3xl font-black tracking-tight mb-6 flex items-center gap-4">
          <span className="text-cyber-purple font-mono text-sm">01</span>
          The Death of the Chatbox
        </h2>
        <p className="text-zinc-200 leading-relaxed text-lg">
          For the last two years, we've been trained to think of AI as a web
          tab. You go to a site, you type a prompt, you get an answer. But for
          an agent to be truly useful, it needs to be *integrated*. It needs to
          see your files, run your scripts, and understand your local
          environment.
        </p>
        <p className="text-zinc-200 leading-relaxed text-lg mt-6">
          **OpenClaw** breaks this paradigm by being "Local-First". It doesn't
          live on a server in Virginia; it lives on your MacBook, your Raspberry
          Pi, or your home lab.
        </p>
      </section>

      <section className="mt-16">
        <h2 className="text-3xl font-black tracking-tight mb-6 flex items-center gap-4">
          <span className="text-cyber-purple font-mono text-sm">02</span>
          The Privacy Imperative
        </h2>
        <p className="text-zinc-200 leading-relaxed text-lg">
          When you give an agent access to your codebase or your personal notes,
          you're handing over the keys to your digital kingdom. In a
          cloud-centric world, this is a security nightmare. In a local-first
          world, your data never leaves your network.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
          <div className="p-6 border border-white/5 bg-white/[0.02] rounded-sm">
            <Lock className="w-6 h-6 text-cyber-purple mb-4" />
            <h4 className="font-bold mb-2 uppercase tracking-tight">
              Zero-Knowledge Storage
            </h4>
            <p className="text-sm text-zinc-400">
              OpenClaw stores state in Markdown and YAML files on your local
              disk. No proprietary database, no cloud sync required.
            </p>
          </div>
          <div className="p-6 border border-white/5 bg-white/[0.02] rounded-sm">
            <HardDrive className="w-6 h-6 text-cyber-purple mb-4" />
            <h4 className="font-bold mb-2 uppercase tracking-tight">
              Local Inference
            </h4>
            <p className="text-sm text-zinc-400">
              Plug in Ollama or LM Studio to run models like Llama 3 or Mistral
              entirely offline. 100% privacy, 0ms latency to the cloud.
            </p>
          </div>
        </div>
      </section>

      <SystemFlow nodes={LOCAL_NODES} edges={LOCAL_EDGES} height="350px" />

      <section className="mt-16">
        <h2 className="text-3xl font-black tracking-tight mb-6 flex items-center gap-4">
          <span className="text-cyber-purple font-mono text-sm">03</span>
          State as Source Control
        </h2>
        <p className="text-zinc-200 leading-relaxed text-lg">
          One of OpenClaw's most radical ideas is treating agent state as text.
          Your agent's memory, its "skills", and its preferences are just files.
          This means you can `git init` your agent's brain. You can branch its
          personality, roll back its memory, and sync it across your own devices
          securely.
        </p>
        <div className="mt-8 p-6 bg-zinc-900/50 border border-white/10 rounded-sm font-mono text-[11px] text-zinc-200">
          <div className="flex items-center gap-2 text-cyber-purple mb-2">
            <FileText className="w-3 h-3" />
            <span>AGENT_BRAIN.yaml</span>
          </div>
          {`# OpenClaw Local State Example
identity:
  name: "ClawOne"
  persona: "Architect"
memory_path: "./memory/context.md"
skills_enabled:
  - shell_execution
  - filesystem_observer
  - git_sync
inference_engine: "ollama://llama3"`}
        </div>
      </section>

      <section className="mt-16 mb-24">
        <h2 className="text-3xl font-black tracking-tight mb-6 flex items-center gap-4">
          <span className="text-cyber-purple font-mono text-sm">04</span>
          Bridging to the Cloud
        </h2>
        <p className="text-zinc-200 leading-relaxed text-lg">
          If everything is local, how do we handle scale? This is where
          **ClawMore** comes in. In Part 07 of this series, we'll explain how we
          bridge these local-first agents into a managed AWS infrastructure
          without sacrificing the privacy and control that makes OpenClaw
          special.
        </p>
      </section>
    </BlogLayout>
  );
}
