import React, { useMemo, useState } from "react";

type FormData = {
  name: string;
  org: string;
  email: string;
  interest: string;
  message: string;
};

const App: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    org: "",
    email: "",
    interest: "",
    message: "",
  });

  const mailtoHref = useMemo(() => {
    const subject = encodeURIComponent(
      `Briefing Request - ${formData.org || "Organization"}`
    );

    const body = encodeURIComponent(
      [
        `Name: ${formData.name}`,
        `Organization: ${formData.org}`,
        `Email: ${formData.email}`,
        `Area of Interest: ${formData.interest}`,
        ``,
        `Message:`,
        `${formData.message}`,
      ].join("\n")
    );

    return `mailto:daivonbrown@chaostechdefensellc.com?subject=${subject}&body=${body}`;
  }, [formData]);

  const handleChange =
    (field: keyof FormData) =>
    (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
      setFormData((prev) => ({ ...prev, [field]: e.target.value }));
    };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    window.location.href = mailtoHref;
    setSubmitted(true);
  };

  const navLinks = [
    { label: "Mission", href: "#mission" },
    { label: "Capabilities", href: "#capabilities" },
    { label: "Concepts", href: "#concepts" },
    { label: "Contact", href: "#contact" },
  ];

  const capabilities = [
    {
      title: "RF Detection",
      text: "Wide-area spectrum awareness for identifying low-altitude drone activity, emitter signatures, and suspicious RF behavior in contested environments.",
    },
    {
      title: "Swarm Analysis",
      text: "Operator-focused tools for evaluating multi-drone patterns, threat clustering, and the operational implications of coordinated swarm behavior.",
    },
    {
      title: "Rapid Prototyping",
      text: "Fast iteration loops for concept validation, architecture refinement, and mission-driven experimentation aligned with defense procurement realities.",
    },
    {
      title: "System Integration",
      text: "Designed to complement broader C-UAS ecosystems, supporting layered detection, decision support, and modular deployment approaches.",
    },
  ];

  const concepts = [
    {
      title: "Threat-Informed Evaluation",
      text: "Swarm-focused disruption concepts that can be evaluated against real threat profiles rather than generic demo scenarios.",
    },
    {
      title: "Architecture Compatibility",
      text: "Approaches built to integrate with existing C-UAS architectures, operational workflows, and future modular upgrades.",
    },
    {
      title: "Experimentation Velocity",
      text: "Engineering choices that support rapid iteration inside government experimentation pipelines, live demonstrations, and field feedback cycles.",
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-neutral-950/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center border border-green-500/40 bg-green-500/10 text-sm font-black tracking-widest text-green-400">
              CT
            </div>
            <div>
              <div className="text-sm font-bold tracking-[0.2em] uppercase">
                ChaosTech Defense
              </div>
              <div className="text-[11px] uppercase tracking-[0.28em] text-neutral-500">
                Counter-UAS Systems
              </div>
            </div>
          </a>

          <nav className="hidden gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm uppercase tracking-[0.2em] text-neutral-400 transition hover:text-green-400"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="border border-green-500/40 bg-green-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-green-400 transition hover:border-green-400 hover:bg-green-500/20"
          >
            Request Briefing
          </a>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden border-b border-white/10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,197,94,0.12),transparent_35%)]" />
          <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-[1.2fr_0.8fr] lg:py-32">
            <div className="relative z-10">
              <div className="mb-6 inline-flex border border-green-500/30 bg-green-500/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.28em] text-green-400">
                Defense Technology Platform
              </div>

              <h1 className="max-w-4xl text-5xl font-black tracking-tight sm:text-6xl lg:text-7xl">
                Counter-UAS sensing and swarm disruption concepts built for real-world defense missions.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-400">
                ChaosTech Defense is developing mission-driven detection and disruption concepts for emerging drone threats, with a focus on RF awareness, swarm behavior, and rapid integration into modern defense workflows.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#contact"
                  className="border border-green-500 bg-green-500 px-6 py-4 text-center text-sm font-black uppercase tracking-[0.2em] text-black transition hover:bg-green-400"
                >
                  Schedule a Briefing
                </a>
                <a
                  href="#capabilities"
                  className="border border-white/15 px-6 py-4 text-center text-sm font-black uppercase tracking-[0.2em] text-neutral-100 transition hover:border-green-500/50 hover:text-green-400"
                >
                  Explore Capabilities
                </a>
              </div>
            </div>

            <div className="relative z-10">
              <div className="grid gap-4">
                <div className="border border-white/10 bg-white/[0.03] p-6">
                  <div className="mb-3 text-xs uppercase tracking-[0.25em] text-green-400">
                    Focus Areas
                  </div>
                  <ul className="space-y-3 text-sm leading-7 text-neutral-300">
                    <li>RF-based drone detection and signal awareness.</li>
                    <li>Swarm threat analysis and operational decision support.</li>
                    <li>Rapid prototyping for defense experimentation.</li>
                    <li>Integration pathways for layered C-UAS environments.</li>
                  </ul>
                </div>

                <div className="border border-white/10 bg-white/[0.03] p-6">
                  <div className="mb-3 text-xs uppercase tracking-[0.25em] text-green-400">
                    Mission Context
                  </div>
                  <p className="text-sm leading-7 text-neutral-400">
                    Built with defense procurement, field evaluation, and real mission constraints in mind rather than generic commercial drone workflows.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="mission" className="border-b border-white/10 px-6 py-24">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <div className="mb-4 text-xs tracking-[0.28em] text-green-400 uppercase">
                Mission
              </div>
              <h2 className="text-4xl font-black tracking-tight">
                Building practical counter-drone technology for evolving threat environments.
              </h2>
            </div>

            <div className="grid gap-6 text-neutral-400 md:grid-cols-2">
              <p className="leading-8">
                The operating environment is changing fast. Low-cost drones, adaptive tactics, and emerging swarm behaviors create pressure for faster sensing, faster evaluation, and more modular defensive responses.
              </p>
              <p className="leading-8">
                ChaosTech Defense is focused on concepts that can move from prototype to field-relevant evaluation quickly, while aligning with the realities of defense experimentation and layered C-UAS operations.
              </p>
            </div>
          </div>
        </section>

        <section id="capabilities" className="border-b border-white/10 px-6 py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 max-w-3xl">
              <div className="mb-4 text-xs tracking-[0.28em] text-green-400 uppercase">
                Capabilities
              </div>
              <h2 className="text-4xl font-black tracking-tight mb-4">
                A focused platform approach to detection, analysis, and response.
              </h2>
              <p className="text-neutral-400 leading-8">
                These areas reflect a practical roadmap for counter-UAS development: find the signal, understand the threat, and support operational action with systems that can evolve quickly.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {capabilities.map((item) => (
                <div
                  key={item.title}
                  className="border border-white/10 bg-white/[0.03] p-8 transition hover:border-green-500/30 hover:bg-green-500/[0.03]"
                >
                  <div className="mb-4 text-xs uppercase tracking-[0.25em] text-green-400">
                    Capability
                  </div>
                  <h3 className="mb-4 text-2xl font-bold tracking-tight">
                    {item.title}
                  </h3>
                  <p className="leading-8 text-neutral-400">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="concepts" className="border-b border-white/10 px-6 py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 max-w-3xl">
              <div className="mb-4 text-xs tracking-[0.28em] text-green-400 uppercase">
                Disruption Concepts
              </div>
              <h2 className="mb-4 text-4xl font-black tracking-tight">
                Swarm-focused concepts designed for iterative defense evaluation.
              </h2>
              <p className="leading-8 text-neutral-400">
                The objective is not abstract experimentation. It is to produce swarm-focused disruption concepts that can be evaluated against real threat profiles, integrated with existing C-UAS architectures, and iterated quickly inside government experimentation pipelines.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {concepts.map((item) => (
                <div key={item.title} className="border border-white/10 p-8">
                  <div className="mb-4 h-1 w-12 bg-green-400" />
                  <h3 className="mb-4 text-2xl font-bold tracking-tight">
                    {item.title}
                  </h3>
                  <p className="leading-8 text-neutral-400">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="px-6 py-24">
          <div className="mx-auto max-w-3xl">
            <div className="mb-12 text-center">
              <div className="mb-3 text-xs tracking-[0.28em] text-green-400 uppercase">
                Get In Touch
              </div>
              <h2 className="mb-4 text-4xl font-black tracking-tight">
                Request a Briefing
              </h2>
              <p className="text-neutral-400">
                For defense procurement inquiries, investor meetings, or partnership discussions.
              </p>
            </div>

            {submitted ? (
              <div className="border border-green-500/30 bg-green-500/5 p-12 text-center">
                <div className="mb-2 text-lg font-bold text-green-400">
                  Message Sent
                </div>
                <p className="text-neutral-400">
                  Your email client should have opened. We will respond promptly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-xs tracking-[0.2em] text-neutral-500">
                      FULL NAME *
                    </label>
                    <input
                      required
                      type="text"
                      value={formData.name}
                      onChange={handleChange("name")}
                      className="w-full border border-neutral-700 bg-neutral-900 px-4 py-3 text-sm text-neutral-100 outline-none transition-colors focus:border-green-500/50 focus:bg-neutral-800"
                      placeholder="John Smith"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-xs tracking-[0.2em] text-neutral-500">
                      ORGANIZATION *
                    </label>
                    <input
                      required
                      type="text"
                      value={formData.org}
                      onChange={handleChange("org")}
                      className="w-full border border-neutral-700 bg-neutral-900 px-4 py-3 text-sm text-neutral-100 outline-none transition-colors focus:border-green-500/50 focus:bg-neutral-800"
                      placeholder="DoD / DIU / Defense Contractor"
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-xs tracking-[0.2em] text-neutral-500">
                      EMAIL *
                    </label>
                    <input
                      required
                      type="email"
                      value={formData.email}
                      onChange={handleChange("email")}
                      className="w-full border border-neutral-700 bg-neutral-900 px-4 py-3 text-sm text-neutral-100 outline-none transition-colors focus:border-green-500/50 focus:bg-neutral-800"
                      placeholder="name@organization.com"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-xs tracking-[0.2em] text-neutral-500">
                      INTEREST AREA
                    </label>
                    <select
                      value={formData.interest}
                      onChange={handleChange("interest")}
                      className="w-full border border-neutral-700 bg-neutral-900 px-4 py-3 text-sm text-neutral-100 outline-none transition-colors focus:border-green-500/50 focus:bg-neutral-800"
                    >
                      <option value="">Select an area</option>
                      <option value="Defense Procurement">Defense Procurement</option>
                      <option value="Partnership">Partnership</option>
                      <option value="Investor Meeting">Investor Meeting</option>
                      <option value="Technical Evaluation">Technical Evaluation</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-xs tracking-[0.2em] text-neutral-500">
                    MESSAGE *
                  </label>
                  <textarea
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange("message")}
                    className="w-full border border-neutral-700 bg-neutral-900 px-4 py-3 text-sm text-neutral-100 outline-none transition-colors focus:border-green-500/50 focus:bg-neutral-800"
                    placeholder="Tell us about your mission need, partnership interest, or request for a briefing."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full border border-green-500 bg-green-500 px-6 py-4 text-sm font-black uppercase tracking-[0.2em] text-black transition hover:bg-green-400"
                >
                  Send Request
                </button>
              </form>
            )}
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 px-6 py-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm text-neutral-500 md:flex-row md:items-center md:justify-between">
          <div>© 2026 ChaosTech Defense LLC. All rights reserved.</div>
          <div className="uppercase tracking-[0.2em] text-neutral-600">
            Counter-UAS | RF Awareness | Swarm Defense
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
