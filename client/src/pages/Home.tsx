/**
 * ChaosTech Defense LLC — Home Page
 * Design: Stealth Tech Aesthetic
 * Deep space black (#060810) + electric cyan (#00D4FF) + amber (#F59E0B)
 * Typography: Space Grotesk (display) + DM Sans (body)
 * Layout: Full-bleed dark hero, glass-panel cards, asymmetric sections
 */

import { useState, useEffect, useRef } from "react";
import { Shield, Radio, Cpu, Lock, ChevronDown, ExternalLink, Send, Menu, X, Building2, FileCheck, Phone } from "lucide-react";

const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663422062124/RpUN6jWxrH52tDrkQ9hGXs/chaostech-logo-pro_2ed9c335.png";
const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663422062124/RpUN6jWxrH52tDrkQ9hGXs/hero-bg-k5E4kdhukR7of9SyGQpTvt.png";
const TECH_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663422062124/RpUN6jWxrH52tDrkQ9hGXs/tech-section-bg-cyNXxVBTcwbdf5E29dAweD.png";

// ── Nav ──────────────────────────────────────────────────────────────────────
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Mission", href: "#mission" },
    { label: "Technology", href: "#technology" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav
      id="top"
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? "rgba(6,8,16,0.92)"
          : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(0,212,255,0.1)" : "none",
      }}
    >
      <div className="container flex items-center justify-between py-4">
        {/* Logo */}
        <a href="#top" className="flex items-center gap-3 group">
          <img
            src={LOGO_URL}
            alt="ChaosTech Defense"
            className="h-10 w-10 object-contain"
          />
          <div>
            <div
              className="font-bold text-sm tracking-widest uppercase"
              style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#00D4FF" }}
            >
              ChaosTech
            </div>
            <div
              className="text-xs tracking-[0.2em] uppercase"
              style={{ color: "rgba(203,213,225,0.6)" }}
            >
              Defense LLC
            </div>
          </div>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm font-medium tracking-wide transition-colors duration-200"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                color: "rgba(203,213,225,0.7)",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#00D4FF")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(203,213,225,0.7)")}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="px-5 py-2 text-sm font-semibold tracking-wide transition-all duration-200"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              background: "rgba(0,212,255,0.1)",
              border: "1px solid rgba(0,212,255,0.4)",
              color: "#00D4FF",
              borderRadius: "2px",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(0,212,255,0.2)";
              e.currentTarget.style.boxShadow = "0 0 16px rgba(0,212,255,0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(0,212,255,0.1)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            Request Briefing
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2"
          style={{ color: "#00D4FF" }}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden px-4 pb-6 pt-2 flex flex-col gap-4"
          style={{ background: "rgba(6,8,16,0.97)", borderBottom: "1px solid rgba(0,212,255,0.1)" }}
        >
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm font-medium py-2"
              style={{ color: "rgba(203,213,225,0.8)" }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="px-5 py-2 text-sm font-semibold text-center"
            style={{
              background: "rgba(0,212,255,0.1)",
              border: "1px solid rgba(0,212,255,0.4)",
              color: "#00D4FF",
              borderRadius: "2px",
            }}
          >
            Request Briefing
          </a>
        </div>
      )}
    </nav>
  );
}

// ── Hero ─────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "#060810" }}
    >
      {/* Hero background image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${HERO_BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.55,
        }}
      />
      {/* Dark gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, rgba(6,8,16,0.85) 0%, rgba(6,8,16,0.4) 50%, rgba(6,8,16,0.75) 100%)",
        }}
      />
      {/* Scan line overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,212,255,0.015) 2px, rgba(0,212,255,0.015) 4px)",
        }}
      />

      <div className="container relative z-10 pt-28 pb-20">
        <div className="max-w-3xl">
          {/* System label */}
          <div
            className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 text-xs tracking-[0.2em] uppercase font-semibold"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              color: "#00D4FF",
              background: "rgba(0,212,255,0.08)",
              border: "1px solid rgba(0,212,255,0.25)",
              borderRadius: "2px",
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full animate-pulse"
              style={{ background: "#00D4FF", boxShadow: "0 0 6px #00D4FF" }}
            />
            SYS://ACTIVE · Counter-UAS Platform
          </div>

          {/* Headline */}
          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6"
            style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#F1F5F9" }}
          >
            Defeating the{" "}
            <span
              style={{
                color: "#00D4FF",
                textShadow: "0 0 30px rgba(0,212,255,0.4)",
              }}
            >
              Swarm
            </span>
            <br />
            Before It Reaches
            <br />
            the Target
          </h1>

          {/* Subheadline */}
          <p
            className="text-lg md:text-xl leading-relaxed mb-10 max-w-2xl"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              color: "rgba(203,213,225,0.75)",
            }}
          >
            ChaosTech Defense LLC develops software-defined, AI-driven counter-swarm systems
            for the U.S. Department of Defense and allied partners — adaptive, non-kinetic,
            and prime-ready.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 font-semibold text-sm tracking-wide transition-all duration-200"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                background: "#00D4FF",
                color: "#060810",
                borderRadius: "2px",
                boxShadow: "0 0 24px rgba(0,212,255,0.35)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "0 0 40px rgba(0,212,255,0.55)";
                e.currentTarget.style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "0 0 24px rgba(0,212,255,0.35)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <Send size={15} />
              Request Secure Briefing
            </a>
            <a
              href="#technology"
              className="inline-flex items-center gap-2 px-7 py-3.5 font-semibold text-sm tracking-wide transition-all duration-200"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                background: "transparent",
                color: "rgba(203,213,225,0.85)",
                border: "1px solid rgba(203,213,225,0.2)",
                borderRadius: "2px",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(0,212,255,0.4)";
                e.currentTarget.style.color = "#00D4FF";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(203,213,225,0.2)";
                e.currentTarget.style.color = "rgba(203,213,225,0.85)";
              }}
            >
              View Technology
              <ChevronDown size={15} />
            </a>
          </div>

          {/* Stats row */}
          <div className="mt-16 flex flex-wrap gap-8">
            {[
              { value: "$36.4B", label: "Global C-UAS Market by 2035" },
              { value: "TRL 4", label: "Current Readiness Level" },
              { value: "$531M", label: "SOM — FY25-26 Budget Lines" },
            ].map((s) => (
              <div key={s.label}>
                <div
                  className="text-2xl font-bold"
                  style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#00D4FF" }}
                >
                  {s.value}
                </div>
                <div
                  className="text-xs tracking-wide mt-0.5"
                  style={{ color: "rgba(203,213,225,0.5)" }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <ChevronDown size={18} style={{ color: "rgba(0,212,255,0.5)" }} />
      </div>
    </section>
  );
}

// ── Mission ───────────────────────────────────────────────────────────────────
function Mission() {
  const capabilities = [
    {
      icon: <Radio size={22} />,
      title: "Neuromorphic RF Detection",
      desc: "Multi-band scanning (400MHz–6GHz) with 78% classification accuracy against commercial and DIY drone types in lab conditions.",
    },
    {
      icon: <Cpu size={22} />,
      title: "Edge AI Processing",
      desc: "Real-time inference on NVIDIA Jetson Orin — sub-500ms latency from detection to effect recommendation.",
    },
    {
      icon: <Shield size={22} />,
      title: "Adaptive EW Effects",
      desc: "Software-defined effects library with over-the-air waveform updates. No hardware refresh required to counter new threats.",
    },
    {
      icon: <Lock size={22} />,
      title: "Prime-Ready Integration",
      desc: "Open APIs compatible with ATAK, IBCS, and Link 16. Subsystem role enables teaming rather than competing with primes.",
    },
  ];

  return (
    <section id="mission" className="py-24" style={{ background: "#060810" }}>
      <div className="container">
        {/* Section header */}
        <div className="mb-16">
          <div
            className="text-xs tracking-[0.25em] uppercase font-semibold mb-3"
            style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#00D4FF" }}
          >
            SYS://MISSION
          </div>
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#F1F5F9" }}
          >
            Software-Defined Counter-Swarm Dominance
          </h2>
          <p
            className="text-base max-w-2xl leading-relaxed"
            style={{ color: "rgba(203,213,225,0.65)" }}
          >
            Legacy kinetic interceptors cost $150K per shot with no learning loop.
            The Neuro Swarm Disruptor is the adaptive middleware between sensing and kinetics —
            making counter-swarm economics sustainable for DoD.
          </p>
        </div>

        {/* Capabilities grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {capabilities.map((c) => (
            <div
              key={c.title}
              className="p-6 transition-all duration-300 group"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(0,212,255,0.1)",
                borderLeft: "3px solid rgba(0,212,255,0.6)",
                borderRadius: "2px",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(0,212,255,0.05)";
                (e.currentTarget as HTMLElement).style.borderLeftColor = "#00D4FF";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.03)";
                (e.currentTarget as HTMLElement).style.borderLeftColor = "rgba(0,212,255,0.6)";
              }}
            >
              <div
                className="mb-3"
                style={{ color: "#00D4FF" }}
              >
                {c.icon}
              </div>
              <h3
                className="text-base font-semibold mb-2"
                style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#F1F5F9" }}
              >
                {c.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "rgba(203,213,225,0.6)" }}
              >
                {c.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Technology ────────────────────────────────────────────────────────────────
function Technology() {
  const pipeline = [
    { step: "01", label: "Detect", desc: "Multi-band RF scanning identifies swarm signatures at 3–8km range" },
    { step: "02", label: "Classify", desc: "Edge AI classifies drone type, behavior pattern, and threat priority" },
    { step: "03", label: "Disrupt", desc: "Adaptive EW effects deployed — waveforms selected per threat profile" },
    { step: "04", label: "Hand Off", desc: "Targeting data passed to kinetic or command systems via open APIs" },
  ];

  return (
    <section
      id="technology"
      className="py-24 relative overflow-hidden"
      style={{ background: "#07090F" }}
    >
      {/* Tech background */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url(${TECH_BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(180deg, rgba(7,9,15,0.6) 0%, rgba(7,9,15,0.4) 50%, rgba(7,9,15,0.6) 100%)" }}
      />

      <div className="container relative z-10">
        <div className="mb-16">
          <div
            className="text-xs tracking-[0.25em] uppercase font-semibold mb-3"
            style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#00D4FF" }}
          >
            SYS://TECHNOLOGY
          </div>
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#F1F5F9" }}
          >
            The Four-Stage Kill Chain
          </h2>
          <p
            className="text-base max-w-2xl leading-relaxed"
            style={{ color: "rgba(203,213,225,0.65)" }}
          >
            A closed-loop system that improves with every engagement. Each detection event
            feeds the AI model, expanding the threat library and sharpening response precision.
          </p>
        </div>

        {/* Pipeline steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {pipeline.map((p, i) => (
            <div
              key={p.step}
              className="relative p-6 transition-all duration-300"
              style={{
                background: "rgba(0,212,255,0.04)",
                border: "1px solid rgba(0,212,255,0.12)",
                borderRadius: "2px",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(0,212,255,0.08)";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,212,255,0.3)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(0,212,255,0.04)";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,212,255,0.12)";
              }}
            >
              {/* Step number */}
              <div
                className="text-4xl font-bold mb-4 leading-none"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  color: "rgba(0,212,255,0.2)",
                }}
              >
                {p.step}
              </div>
              <h3
                className="text-lg font-bold mb-2"
                style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#00D4FF" }}
              >
                {p.label}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "rgba(203,213,225,0.6)" }}
              >
                {p.desc}
              </p>
              {/* Connector arrow (not on last) */}
              {i < pipeline.length - 1 && (
                <div
                  className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-xs font-bold"
                  style={{ color: "rgba(0,212,255,0.4)" }}
                >
                  →
                </div>
              )}
            </div>
          ))}
        </div>

        {/* TRL badge */}
        <div className="mt-12 flex flex-wrap gap-6 items-center">
          {[
            { label: "Current TRL", value: "4 — Lab Validated" },
            { label: "Classification Accuracy", value: "78%" },
            { label: "Response Latency", value: "<500ms" },
            { label: "Detection Range", value: "3–8km" },
          ].map((m) => (
            <div
              key={m.label}
              className="px-5 py-3"
              style={{
                background: "rgba(0,212,255,0.06)",
                border: "1px solid rgba(0,212,255,0.15)",
                borderRadius: "2px",
              }}
            >
              <div
                className="text-xs tracking-widest uppercase mb-1"
                style={{ color: "rgba(203,213,225,0.45)" }}
              >
                {m.label}
              </div>
              <div
                className="text-base font-bold"
                style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#00D4FF" }}
              >
                {m.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── About / Company Profile ───────────────────────────────────────────────────
function About() {
  const cards = [
    {
      icon: <Building2 size={20} />,
      title: "Company Profile",
      body: "ChaosTech Defense LLC · Washington, DC metro area · U.S. defense technology small business.",
    },
    {
      icon: <FileCheck size={20} />,
      title: "Government Readiness",
      body: "Registered vendor; tracking SAM.gov, SBIR / STTR, and other counter-UAS related opportunities.",
    },
    {
      icon: <Lock size={20} />,
      title: "Contact & Security",
      body: "For sensitive inquiries, request a secure briefing via the form below; additional details can be shared under NDA as appropriate.",
    },
  ];

  return (
    <section id="about" className="py-24" style={{ background: "#060810" }}>
      <div className="container">
        <div className="mb-16">
          <div
            className="text-xs tracking-[0.25em] uppercase font-semibold mb-3"
            style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#00D4FF" }}
          >
            SYS://ABOUT
          </div>
          <h2
            className="text-3xl md:text-4xl font-bold"
            style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#F1F5F9" }}
          >
            Built for the Defense Community
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((c) => (
            <div
              key={c.title}
              className="p-6 transition-all duration-300"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(0,212,255,0.1)",
                borderRadius: "2px",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(0,212,255,0.05)";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,212,255,0.25)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.03)";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,212,255,0.1)";
              }}
            >
              <div
                className="mb-4 w-10 h-10 flex items-center justify-center"
                style={{
                  background: "rgba(0,212,255,0.1)",
                  border: "1px solid rgba(0,212,255,0.2)",
                  borderRadius: "2px",
                  color: "#00D4FF",
                }}
              >
                {c.icon}
              </div>
              <h3
                className="text-base font-semibold mb-2"
                style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#F1F5F9" }}
              >
                {c.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "rgba(203,213,225,0.6)" }}
              >
                {c.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Contact Form ──────────────────────────────────────────────────────────────
function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

    const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",             "Accept": "application/json"
        },
        body: JSON.stringify({ ...formData, access_key: "f0b4c15e-26ad-4cb5-8417-158d28a299c6" }),
      });
      
      const data = await response.json();       if (data.success) {
        setSubmitting(false);
        setSubmitted(true);
        // Reset form after 5 seconds
        setTimeout(() => {
          setFormData({ name: "", email: "", role: "", message: "" });
          setSubmitted(false);
        }, 5000);
      } else {
        setSubmitting(false);
        alert("Failed to send request. Please try again or email us directly.");
      }
    } catch (error) {
      setSubmitting(false);
      alert("Error sending request. Please try again or email us directly.");
      console.error("Form submission error:", error);
    }
  };


  const inputStyle: React.CSSProperties = {
    width: "100%",
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(0,212,255,0.15)",
    borderRadius: "2px",
    padding: "12px 14px",
    color: "#CBD5E1",
    fontSize: "14px",
    fontFamily: "'DM Sans', sans-serif",
    outline: "none",
    transition: "border-color 0.2s, box-shadow 0.2s",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: "11px",
    fontFamily: "'Space Grotesk', sans-serif",
    fontWeight: 600,
    letterSpacing: "0.15em",
    textTransform: "uppercase",
    color: "rgba(203,213,225,0.5)",
    marginBottom: "6px",
  };

  return (
    <section
      id="contact"
      className="py-24 relative"
      style={{ background: "#07090F" }}
    >
      {/* Subtle background */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url(${TECH_BG})`,
          backgroundSize: "cover",
        }}
      />

      <div className="container relative z-10">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="mb-10 text-center">
            <div
              className="text-xs tracking-[0.25em] uppercase font-semibold mb-3"
              style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#00D4FF" }}
            >
              SYS://CONTACT
            </div>
            <h2
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#F1F5F9" }}
            >
              Request a Secure Briefing
            </h2>
            <p
              className="text-base leading-relaxed"
              style={{ color: "rgba(203,213,225,0.6)" }}
            >
              Whether you are a DoD program office, prime contractor, investor, or engineer —
              we want to hear from you.
            </p>
          </div>

          {/* Form card */}
          <div
            className="p-8"
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(0,212,255,0.15)",
              borderRadius: "2px",
            }}
          >
            {submitted ? (
              <div className="text-center py-10">
                <div
                  className="w-14 h-14 mx-auto mb-5 flex items-center justify-center"
                  style={{
                    background: "rgba(0,212,255,0.1)",
                    border: "1px solid rgba(0,212,255,0.3)",
                    borderRadius: "50%",
                    color: "#00D4FF",
                    boxShadow: "0 0 24px rgba(0,212,255,0.2)",
                  }}
                >
                  <Send size={22} />
                </div>
                <h3
                  className="text-xl font-bold mb-2"
                  style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#F1F5F9" }}
                >
                  Request Received
                </h3>
                <p
                  className="text-sm"
                  style={{ color: "rgba(203,213,225,0.6)" }}
                >
                  We will follow up via secure channel within 48 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                {/* Name + Email row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label style={labelStyle}>Full Name</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your full name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Email Address</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="your@email.gov"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      style={inputStyle}
                    />
                  </div>
                </div>

                {/* Role */}
                <div>
                  <label style={labelStyle}>I am a:</label>
                  <select
                    id="role"
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    style={{
                      ...inputStyle,
                      appearance: "none",
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%2300D4FF' stroke-width='1.5' fill='none'/%3E%3C/svg%3E")`,
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "right 14px center",
                      paddingRight: "36px",
                    }}
                  >
                    <option value="" style={{ background: "#07090F" }}>Select one</option>
                    <option value="military" style={{ background: "#07090F" }}>Military / government user</option>
                    <option value="integrator" style={{ background: "#07090F" }}>Systems integrator / prime</option>
                    <option value="infrastructure" style={{ background: "#07090F" }}>Critical infrastructure operator</option>
                    <option value="investor" style={{ background: "#07090F" }}>Investor</option>
                    <option value="talent" style={{ background: "#07090F" }}>Engineer / talent</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label style={labelStyle}>Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Unit, organization, or focus area (e.g., base defense, border, critical infrastructure)..."
                    required
                    value={formData.message}
                    onChange={handleChange}
                    style={{ ...inputStyle, resize: "vertical" }}
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={submitting}
                  className="flex items-center justify-center gap-2 py-3.5 font-semibold text-sm tracking-wide transition-all duration-200"
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    background: submitting ? "rgba(0,212,255,0.5)" : "#00D4FF",
                    color: "#060810",
                    borderRadius: "2px",
                    border: "none",
                    boxShadow: submitting ? "none" : "0 0 20px rgba(0,212,255,0.3)",
                    cursor: submitting ? "not-allowed" : "pointer",
                  }}
                >
                  {submitting ? (
                    <>
                      <span
                        className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={14} />
                      Send Secure Request
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Email fallback */}
          <p
            className="mt-5 text-center text-sm"
            style={{ color: "rgba(203,213,225,0.45)" }}
          >
            Prefer email? Reach us at{" "}
            <a
              href="mailto:DaivonBrown@chaostechdefensellc.com"
              className="transition-colors duration-200"
              style={{ color: "#00D4FF" }}
              onMouseEnter={(e) => (e.currentTarget.style.textDecoration = "underline")}
              onMouseLeave={(e) => (e.currentTarget.style.textDecoration = "none")}
            >
              DaivonBrown@chaostechdefensellc.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

// ── Footer ────────────────────────────────────────────────────────────────────
function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="py-10"
      style={{
        background: "#040508",
        borderTop: "1px solid rgba(0,212,255,0.08)",
      }}
    >
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo + copyright */}
          <div className="flex items-center gap-3">
            <img
              src={LOGO_URL}
              alt="ChaosTech Defense"
              className="h-8 w-8 object-contain opacity-70"
            />
            <p
              className="text-sm"
              style={{ color: "rgba(203,213,225,0.4)" }}
            >
              © {year} ChaosTech Defense LLC · All rights reserved
            </p>
          </div>

          {/* Nav links */}
          <div className="flex items-center gap-6 flex-wrap justify-center">
            {[
              { label: "Home", href: "#top" },
              {
                label: "LinkedIn",
                href: "https://www.linkedin.com/company/chaostech-defense",
                external: true,
              },
              {
                label: "TikTok",
                href: "https://www.tiktok.com/@chaostechdefense",
                external: true,
              },
              { label: "Press", href: "press/" },
            ].map((l) => (
              <a
                key={l.label}
                href={l.href}
                target={l.external ? "_blank" : undefined}
                rel={l.external ? "noopener noreferrer" : undefined}
                className="flex items-center gap-1 text-sm transition-colors duration-200"
                style={{ color: "rgba(203,213,225,0.4)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#00D4FF")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(203,213,225,0.4)")}
              >
                {l.label}
                {l.external && <ExternalLink size={11} />}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom disclaimer */}
        <div
          className="mt-6 pt-6 text-center text-xs"
          style={{
            borderTop: "1px solid rgba(0,212,255,0.06)",
            color: "rgba(203,213,225,0.25)",
          }}
        >
          ChaosTech Defense LLC is a U.S. defense technology small business.
          All information on this site is unclassified and for general informational purposes only.
        </div>
      </div>
    </footer>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <div className="min-h-screen" style={{ background: "#060810" }}>
      <Nav />
      <Hero />
      <Mission />
      <Technology />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
