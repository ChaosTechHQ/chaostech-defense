import React, { useState } from 'react';
import { Shield, Radio, Cpu, Zap, ChevronDown, Menu, X, Send, Target, Eye, AlertTriangle } from 'lucide-react';

const NAV_LINKS = ['System', 'Technology', 'Mission', 'About', 'Contact'];

const NSD_SPECS = [
  { label: 'Detection Range', value: '100m – 2km', sub: 'Single target; scalable multi-node swarm coverage' },
  { label: 'Classification Speed', value: '<200ms', sub: 'Per RF snapshot on embedded hardware' },
  { label: 'Frequency Coverage', value: '2.4 / 5.8 GHz', sub: 'ISM bands + drone control & video links' },
  { label: 'Deployment Form', value: 'Low-SWaP', sub: 'Man-portable, vehicle-mount, command-post' },
];

const FEATURES = [
  {
    icon: <Radio className="w-6 h-6" />,
    title: 'Passive RF-First Sensing',
    desc: 'No active radar emissions. The NSD listens — detecting drone control links, telemetry, and video feeds without revealing its own position in the electromagnetic spectrum.',
  },
  {
    icon: <Cpu className="w-6 h-6" />,
    title: 'AI Edge Classification',
    desc: 'On-device ML models trained on real SDR captures perform fingerprint-style classification of drone RF signatures in under 200ms, without any cloud dependency.',
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: 'Chaos-Based Disruption',
    desc: "Rather than isolating each drone as a single target, the NSD targets the swarm's coordination layer — breaking command-and-control links holistically across multiple emitters simultaneously.",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: 'Multi-Node Scalability',
    desc: 'Deploy as a single unit or scale into a distributed sensor mesh. Multi-node configurations push effective swarm detection into the low-km range with coordinated threat data fusion.',
  },
];

const THREATS = [
  { icon: <AlertTriangle className="w-5 h-5" />, text: 'Commercial drone swarms weaponized for asymmetric attacks' },
  { icon: <Eye className="w-5 h-5" />, text: 'AI-coordinated UAS reconnaissance over restricted airspace' },
  { icon: <Zap className="w-5 h-5" />, text: 'Decentralized drone command structures evading radar detection' },
  { icon: <Target className="w-5 h-5" />, text: 'Rapid proliferation outpacing traditional C-UAS procurement' },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', org: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:DaivonBrown@ChaosTechDefenseLLC.com?subject=Inquiry from ${formData.name} - ${formData.org}&body=${encodeURIComponent(formData.message + '\n\nReply to: ' + formData.email)}`;
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#080808] text-neutral-100">

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#080808]/90 backdrop-blur-sm border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img src="/logo.jpg" alt="ChaosTech Defense" className="h-9 w-auto" />
            <div className="hidden sm:block">
              <div className="text-sm font-bold tracking-widest text-neutral-100">CHAOSTECH</div>
              <div className="text-xs tracking-[0.3em] text-neutral-500">DEFENSE</div>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(link => (
              <a key={link} href={`#${link.toLowerCase()}`} className="text-sm text-neutral-400 hover:text-neutral-100 tracking-wider transition-colors">{link.toUpperCase()}</a>
            ))}
            <a href="#contact" className="px-4 py-2 bg-green-500/10 border border-green-500/30 text-green-400 text-sm tracking-wider hover:bg-green-500/20 transition-all">REQUEST BRIEFING</a>
          </div>
          <button className="md:hidden text-neutral-400" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-[#0f0f0f] border-t border-neutral-800 px-6 py-4 flex flex-col gap-4">
            {NAV_LINKS.map(link => (
              <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setMenuOpen(false)} className="text-sm text-neutral-400 hover:text-neutral-100 tracking-wider transition-colors">{link.toUpperCase()}</a>
            ))}
          </div>
        )}
      </nav>

      {/* HERO */}
      <section className="tactical-grid min-h-screen flex flex-col justify-center items-center text-center px-6 pt-20 relative overflow-hidden">
  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#080808] pointer-events-none" />
  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-500/3 rounded-full blur-3xl pointer-events-none" />
  <div className="relative z-10 max-w-5xl mx-auto">
    <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-green-500/30 bg-green-500/5 text-green-400 text-xs tracking-widest mb-8">
      <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
      SYSTEM ACTIVE — NSD PROTOTYPE v1.0 | TRL 4–5 PATH TO TRL 6
    </div>

    <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6 leading-none">
      AI-POWERED PASSIVE RF
      <br />
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">
        COUNTER-UAS FOR DRONE SWARMS
      </span>
    </h1>

    <p className="text-xl md:text-2xl text-neutral-400 font-light mb-4 max-w-3xl mx-auto">
      Closing the gap between low-cost drone swarms and today&apos;s legacy C-UAS inventory.
    </p>

    <p className="text-neutral-500 max-w-2xl mx-auto mb-10 leading-relaxed">
      The Neuro Swarm Disruptor (NSD) is a passive RF-first, AI-enabled counter-UAS system designed to detect,
      classify, and disrupt coordinated drone swarms at the tactical edge. It runs on low-SWaP COTS hardware,
      requires no radar emissions or cloud connectivity, and is built to plug into the rapid prototyping and
      experimentation pipelines used by SBIR, DIU, and JCO stakeholders.
    </p>

    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <a
        href="#system"
        className="px-8 py-3 bg-green-500 text-black font-bold tracking-widest text-sm hover:bg-green-400 transition-colors"
      >
        VIEW THE SYSTEM
      </a>
      <a
        href="mailto:DaivonBrown@ChaosTechDefenseLLC.com?subject=Request%20NSD%20One-Pager"
        className="px-8 py-3 border border-neutral-700 text-neutral-300 font-bold tracking-widest text-sm hover:border-neutral-500 transition-colors"
      >
        DOWNLOAD ONE-PAGER
      </a>
    </div>
  </div>

  <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
    <ChevronDown className="w-6 h-6 text-neutral-600" />
  </div>
</section>

      {/* THREAT LANDSCAPE */}
      <section className="py-16 bg-[#0a0a0a] border-y border-neutral-800/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <div className="text-xs tracking-widest text-green-400 mb-2">THREAT LANDSCAPE</div>
            <h2 className="text-2xl font-bold text-neutral-200">Traditional Defense Is Failing to Scale</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {THREATS.map((t, i) => (
              <div key={i} className="flex items-start gap-3 p-4 bg-red-500/5 border border-red-500/20 rounded">
                <span className="text-red-400 mt-0.5 shrink-0">{t.icon}</span>
                <p className="text-sm text-neutral-400 leading-relaxed">{t.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SYSTEM SPECS */}
      <section id="mission" className="py-24 px-6 tactical-grid">
  <div className="max-w-4xl mx-auto text-center">
    <div className="text-xs tracking-widest text-green-400 mb-3">OUR MISSION</div>
    <h2 className="text-4xl font-black tracking-tight mb-8">
      Built for the Realities
      <br />
      of Modern Swarm Warfare
    </h2>

    <p className="text-neutral-300 text-lg leading-relaxed mb-6">
      Autonomous and semi-autonomous drone swarms are evolving faster than traditional acquisition cycles,
      stressing base defense, forward operating sites, and critical infrastructure protection. Program
      offices are being asked to counter low-cost, AI-coordinated UAS with systems that were never designed
      for dense, distributed RF environments.
    </p>

    <p className="text-neutral-400 leading-relaxed">
      ChaosTech Defense built the Neuro Swarm Disruptor to be evaluated, instrumented, and iterated in those
      environments. NSD is a ground-up passive RF counter-UAS system optimized for swarm signatures,
      command-and-control links, and coordination protocols—not a repackaged commercial sensor. It is scoped
      for rapid prototyping, limited objective experiments, and early-stage operational assessments under
      SBIR, DIU, and JCO-aligned efforts, with a clear path toward transition into enduring C-UAS architectures.
    </p>
  </div>
</section>

      {/* TECHNOLOGY */}
      <section id="technology" className="py-24 px-6 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-xs tracking-widest text-green-400 mb-3">CAPABILITIES</div>
            <h2 className="text-4xl font-black tracking-tight">Technology Stack</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {FEATURES.map((f, i) => (
              <div key={i} className="glow-border p-8 bg-neutral-900/50 rounded border border-neutral-800 group">
                <div className="w-12 h-12 bg-green-500/10 border border-green-500/20 rounded flex items-center justify-center text-green-400 mb-6 group-hover:bg-green-500/20 transition-colors">
                  {f.icon}
                </div>
                <h3 className="text-lg font-bold mb-3 tracking-tight">{f.title}</h3>
                <p className="text-neutral-400 leading-relaxed text-sm">{f.desc}</p>
              </div>
            ))}
          </div>

          {/* Tech stack pills */}
          <div className="mt-12 p-6 bg-neutral-900/30 border border-neutral-800 rounded">
            <div className="text-xs tracking-widest text-neutral-500 mb-4">HARDWARE & SOFTWARE STACK</div>
            <div className="flex flex-wrap gap-2">
              {['RTL-SDR / NESDR Nano2', 'Raspberry Pi 4', 'Python', 'FastAPI', 'TensorFlow Lite', 'GNU Radio', 'Linux (ARM)', 'ISM 2.4GHz', 'ISM 5.8GHz', 'Passive RF Only'].map(tag => (
                <span key={tag} className="px-3 py-1 bg-neutral-800 border border-neutral-700 text-xs text-neutral-400 font-mono">{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section id="mission" className="py-24 px-6 tactical-grid">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-xs tracking-widest text-green-400 mb-3">OUR MISSION</div>
          <h2 className="text-4xl font-black tracking-tight mb-8">Built for the Realities<br />of Modern Swarm Warfare</h2>
          <p className="text-neutral-300 text-lg leading-relaxed mb-6">
            Autonomous drone swarms represent one of the fastest-evolving threats facing U.S. and allied forces. Decentralized, cheap, and increasingly AI-driven — they are outpacing every traditional countermeasure in the DoD inventory.
          </p>
          <p className="text-neutral-400 leading-relaxed">
            ChaosTech Defense was built to close that gap. The NSD is not a modified commercial product. It is a ground-up, purpose-built RF warfare system designed around the specific signatures, coordination protocols, and electromagnetic footprint of modern drone swarms.
          </p>
        </div>
      </section>

      {/* ABOUT */}
     <section id="about" className="py-24 px-6 bg-[#0a0a0a]">
  <div className="max-w-5xl mx-auto">
    <div className="text-xs tracking-widest text-green-400 mb-3 text-center">LEADERSHIP</div>
    <h2 className="text-4xl font-black tracking-tight mb-12 text-center">About the Founder</h2>
    <div className="flex flex-col md:flex-row gap-12 items-center">
      <div className="w-32 h-32 rounded-full bg-neutral-800 border-2 border-green-500/30 flex items-center justify-center shrink-0 text-4xl font-black text-green-400">
        DB
      </div>
      <div>
        <h3 className="text-2xl font-bold mb-1">Daivon M. Brown</h3>
        <div className="text-green-400 text-sm tracking-widest mb-6">
          CEO &amp; FOUNDER — CHAOSTECH DEFENSE LLC
        </div>

        <p className="text-neutral-300 leading-relaxed mb-4">
          Daivon M. Brown is the founder of ChaosTech Defense LLC, a small, fast-moving defense technology
          company focused on RF-centric counter-UAS systems for swarm threats. He operates at the intersection
          of software-defined radio, embedded AI, and operationally realistic test and evaluation.
        </p>

        <p className="text-neutral-400 leading-relaxed mb-4">
          He launched ChaosTech Defense in response to what program managers, test ranges, and operators are
          already seeing: low-cost drones, rapid iteration cycles by adversaries, and a growing gap between
          experimentation-grade solutions and fieldable capabilities. NSD is his answer to that gap—a system
          deliberately shaped for SBIR, DIU, and JCO-style evaluation environments, not just lab demos.
        </p>

        <p className="text-neutral-400 leading-relaxed">
          His work centers on building and fielding actual prototypes with measurable performance, not slideware:
          instrumented RF sensing, on-device classification, and swarm-focused disruption concepts that can be
          evaluated against real threat profiles, integrated with existing C-UAS architectures, and iterated
          quickly inside government experimentation pipelines.
        </p>
      </div>
    </div>
  </div>
</section>

      {/* CONTACT */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-xs tracking-widest text-green-400 mb-3">GET IN TOUCH</div>
            <h2 className="text-4xl font-black tracking-tight mb-4">Request a Briefing</h2>
            <p className="text-neutral-400">For defense procurement inquiries, investor meetings, or partnership discussions.</p>
          </div>
          {submitted ? (
            <div className="text-center p-12 border border-green-500/30 bg-green-500/5">
              <div className="text-green-400 text-lg font-bold mb-2">MESSAGE SENT</div>
              <p className="text-neutral-400">Your email client should have opened. We will respond promptly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs tracking-widest text-neutral-500 block mb-2">FULL NAME *</label>
                  <input required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full bg-neutral-900 border border-neutral-700 text-neutral-100 px-4 py-3 text-sm focus:border-green-500/50 focus:outline-none focus:bg-neutral-800 transition-colors" placeholder="John Smith" />
                </div>
                <div>
                  <label className="text-xs tracking-widest text-neutral-500 block mb-2">ORGANIZATION *</label>
                  <input required value={formData.org} onChange={e => setFormData({...formData, org: e.target.value})} className="w-full bg-neutral-900 border border-neutral-700 text-neutral-100 px-4 py-3 text-sm focus:border-green-500/50 focus:outline-none focus:bg-neutral-800 transition-colors" placeholder="DoD / DIU / Investor" />
                </div>
              </div>
              <div>
                <label className="text-xs tracking-widest text-neutral-500 block mb-2">EMAIL ADDRESS *</label>
                <input required type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="w-full bg-neutral-900 border border-neutral-700 text-neutral-100 px-4 py-3 text-sm focus:border-green-500/50 focus:outline-none focus:bg-neutral-800 transition-colors" placeholder="john@organization.gov" />
              </div>
              <div>
                <label className="text-xs tracking-widest text-neutral-500 block mb-2">MESSAGE *</label>
                <textarea required rows={5} value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} className="w-full bg-neutral-900 border border-neutral-700 text-neutral-100 px-4 py-3 text-sm focus:border-green-500/50 focus:outline-none focus:bg-neutral-800 transition-colors resize-none" placeholder="Describe your inquiry, organization, and interest in the NSD system..." />
              </div>
              <button type="submit" className="w-full py-4 bg-green-500 text-black font-bold tracking-widest text-sm hover:bg-green-400 transition-colors flex items-center justify-center gap-2">
                <Send className="w-4 h-4" /> SEND BRIEFING REQUEST
              </button>
            </form>
          )}
          <div className="mt-8 text-center">
            <p className="text-neutral-600 text-xs tracking-widest mb-2">DIRECT CONTACT</p>
            <a href="mailto:DaivonBrown@ChaosTechDefenseLLC.com" className="text-green-400 hover:text-green-300 transition-colors text-sm">DaivonBrown@ChaosTechDefenseLLC.com</a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 border-t border-neutral-800 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <img src="/logo.jpg" alt="ChaosTech Defense" className="h-8 w-auto" />
            <span className="text-sm text-neutral-500 tracking-wider">CHAOSTECH DEFENSE LLC</span>
          </div>
          <div className="text-xs text-neutral-600 tracking-widest">© 2026 CHAOSTECH DEFENSE LLC — SUITLAND, MD</div>
          <div className="text-xs text-neutral-600">CUI HANDLING NOT APPLICABLE — PUBLIC MARKETING SITE</div>
        </div>
      </footer>

    </div>
  );
}
