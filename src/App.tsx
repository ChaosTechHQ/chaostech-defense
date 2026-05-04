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
                  Schedule a 
