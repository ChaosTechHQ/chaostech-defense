/*
 * ChaosTech Defense LLC — Neuro Swarm Disruptor Product Page
 * Design: Stealth Tech Aesthetic (matching Home.tsx)
 * Deep space black (#060810) + electric cyan (#00D4FF) + amber (#F59E0B)
 * Typography: Space Grotesk (display) + DM Sans (body)
 */

import { useState } from "react";
import { ChevronDown, Shield, Radio, Cpu, Lock, Zap, ArrowRight, Menu, X } from "lucide-react";

const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663422062124/RpUN6jWxrH52tDrkQ9hGXs/chaostech-logo-pro_2ed9c335.png";

// ── Nav ──────────────────────────────────────────────────────────────────────
function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { label: "Home", href: "/" },
    { label: "Product", href: "/product" },
    { label: "Tech Specs", href: "/specs" },
    { label: "Contact", href: "/#contact" },
  ];

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: "rgba(6,8,16,0.92)",
        backdropFilter: "blur(16px)",
        borderBottom: "1px solid rgba(0,212,255,0.1)",
      }}
    >
      <div className="container flex items-center justify-between py-4">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3 group">
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
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ color: "#00D4FF" }}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden border-t"
          style={{ borderColor: "rgba(0,212,255,0.1)", background: "rgba(6,8,16,0.95)" }}
        >
          <div className="container py-4 flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-sm font-medium tracking-wide"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  color: "rgba(203,213,225,0.7)",
                }}
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

// ── Hero Section ──────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      style={{ background: "#060810" }}
    >
      {/* Background gradient */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background: "radial-gradient(circle at 50% 50%, rgba(0,212,255,0.1) 0%, transparent 70%)",
        }}
      />

      <div className="container relative z-10 text-center">
        <div className="mb-8 inline-block px-4 py-2 rounded" style={{ background: "rgba(0,212,255,0.1)", border: "1px solid rgba(0,212,255,0.3)" }}>
          <span style={{ fontFamily: "'DM Sans', sans-serif", color: "#00D4FF", fontSize: "14px", fontWeight: "600" }}>
            NEURO SWARM DISRUPTOR
          </span>
        </div>

        <h1
          className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            color: "#ffffff",
            lineHeight: "1.1",
          }}
        >
          AI Decision Layer for<br />
          <span style={{ color: "#00D4FF" }}>Counter-Swarm Warfare</span>
        </h1>

        <p
          className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto"
          style={{
            fontFamily: "'DM Sans', sans-serif",
            color: "rgba(203,213,225,0.8)",
            lineHeight: "1.6",
          }}
        >
          Detect, classify, and disrupt drone swarms in real time using neuromorphic RF sensing and adaptive AI. Not a sensor. Not a jammer. The decision layer.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <a
            href="#capabilities"
            className="px-8 py-4 text-lg font-semibold tracking-wide transition-all duration-200 inline-flex items-center gap-2"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              background: "rgba(0,212,255,0.15)",
              border: "1px solid rgba(0,212,255,0.5)",
              color: "#00D4FF",
              borderRadius: "2px",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(0,212,255,0.25)";
              e.currentTarget.style.boxShadow = "0 0 24px rgba(0,212,255,0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(0,212,255,0.15)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            Explore Capabilities <ArrowRight size={20} />
          </a>
          <a
            href="/#contact"
            className="px-8 py-4 text-lg font-semibold tracking-wide transition-all duration-200"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              background: "rgba(245,158,15,0.1)",
              border: "1px solid rgba(245,158,15,0.4)",
              color: "#F59E0B",
              borderRadius: "2px",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(245,158,15,0.2)";
              e.currentTarget.style.boxShadow = "0 0 24px rgba(245,158,15,0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(245,158,15,0.1)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            Request Demo
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown size={32} style={{ color: "rgba(0,212,255,0.4)" }} />
      </div>
    </section>
  );
}

// ── Capabilities Section ──────────────────────────────────────────────────────
function Capabilities() {
  const capabilities = [
    {
      icon: <Radio size={32} />,
      title: "Multi-Band RF Detection",
      description: "Real-time detection across 2.4–6 GHz spectrum. Neuromorphic processing on edge hardware (Jetson Nano). 90%+ classification accuracy on known swarm signatures.",
    },
    {
      icon: <Zap size={32} />,
      title: "RF Denial & Disruption",
      description: "Adaptive jamming on detected frequencies. Link takeover capability. 87% disruption success rate in lab validation. Real-time frequency hopping detection.",
    },
    {
      icon: <Cpu size={32} />,
      title: "AI-Driven Threat Prioritization",
      description: "Machine learning models trained on real-world drone data. Adaptive threat classification. Swarm behavior analysis. Autonomous response recommendations.",
    },
    {
      icon: <Lock size={32} />,
      title: "Open Mission Integration",
      description: "RESTful API for kinetic/non-kinetic system handoff. Integration with existing air defense infrastructure. Modular hardware deployment (hours, not weeks).",
    },
  ];

  return (
    <section id="capabilities" className="py-24" style={{ background: "#060810" }}>
      <div className="container">
        <div className="text-center mb-16">
          <h2
            className="text-5xl md:text-6xl font-bold mb-6"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              color: "#ffffff",
            }}
          >
            Core Capabilities
          </h2>
          <p
            className="text-xl max-w-3xl mx-auto"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              color: "rgba(203,213,225,0.7)",
            }}
          >
            Four-stage pipeline: Detect → Classify → Disrupt → Handoff
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {capabilities.map((cap, idx) => (
            <div
              key={idx}
              className="p-8 rounded-lg transition-all duration-300 hover:shadow-lg"
              style={{
                background: "rgba(0,212,255,0.05)",
                border: "1px solid rgba(0,212,255,0.2)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(0,212,255,0.1)";
                e.currentTarget.style.borderColor = "rgba(0,212,255,0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(0,212,255,0.05)";
                e.currentTarget.style.borderColor = "rgba(0,212,255,0.2)";
              }}
            >
              <div style={{ color: "#00D4FF", marginBottom: "16px" }}>
                {cap.icon}
              </div>
              <h3
                className="text-2xl font-bold mb-4"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  color: "#ffffff",
                }}
              >
                {cap.title}
              </h3>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  color: "rgba(203,213,225,0.7)",
                  lineHeight: "1.6",
                }}
              >
                {cap.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Disruption Proof Section ──────────────────────────────────────────────────
function DisruptionProof() {
  const stats = [
    { label: "RF Denial Success Rate", value: "87%", detail: "Swarm link disruption in controlled RF environment" },
    { label: "Link Takeover Attempts", value: "6/8", detail: "Successful command injection in lab test" },
    { label: "Spectrum Coverage", value: "2.4–6 GHz", detail: "Multi-band RF denial across common drone comms" },
  ];

  return (
    <section className="py-24" style={{ background: "rgba(0,212,255,0.02)" }}>
      <div className="container">
        <div className="text-center mb-16">
          <h2
            className="text-5xl md:text-6xl font-bold mb-6"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              color: "#ffffff",
            }}
          >
            Disruption Proof
          </h2>
          <p
            className="text-xl max-w-3xl mx-auto"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              color: "rgba(203,213,225,0.7)",
            }}
          >
            Lab and field validation results (Q4 2025 — Q1 2026)
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-8 rounded-lg text-center"
              style={{
                background: "rgba(0,212,255,0.08)",
                border: "1px solid rgba(0,212,255,0.3)",
              }}
            >
              <div
                className="text-5xl font-bold mb-4"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  color: "#00D4FF",
                }}
              >
                {stat.value}
              </div>
              <h3
                className="text-lg font-bold mb-2"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  color: "#ffffff",
                }}
              >
                {stat.label}
              </h3>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  color: "rgba(203,213,225,0.6)",
                  fontSize: "14px",
                }}
              >
                {stat.detail}
              </p>
            </div>
          ))}
        </div>

        <div
          className="p-8 rounded-lg"
          style={{
            background: "rgba(245,158,15,0.05)",
            border: "1px solid rgba(245,158,15,0.2)",
          }}
        >
          <h3
            className="text-2xl font-bold mb-4"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              color: "#F59E0B",
            }}
          >
            Three Proven Disruption Tactics
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4
                className="font-bold mb-2"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  color: "#ffffff",
                }}
              >
                RF Denial
              </h4>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  color: "rgba(203,213,225,0.6)",
                  fontSize: "14px",
                  lineHeight: "1.6",
                }}
              >
                Adaptive jamming on detected frequencies. Real-time frequency hopping detection. Power optimization to maximize denial range.
              </p>
            </div>
            <div>
              <h4
                className="font-bold mb-2"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  color: "#ffffff",
                }}
              >
                Link Takeover
              </h4>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  color: "rgba(203,213,225,0.6)",
                  fontSize: "14px",
                  lineHeight: "1.6",
                }}
              >
                Command protocol analysis. Injection of spoofed control signals. Return-to-base forcing. Lab validated: 6/8 successful attempts.
              </p>
            </div>
            <div>
              <h4
                className="font-bold mb-2"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  color: "#ffffff",
                }}
              >
                Swarm Fragmentation
              </h4>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  color: "rgba(203,213,225,0.6)",
                  fontSize: "14px",
                  lineHeight: "1.6",
                }}
              >
                Selective link disruption. Isolate lead drone from followers. Prevent coordinated attack. Planned field validation: Q2 2026.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Roadmap Section ───────────────────────────────────────────────────────────
function Roadmap() {
  const phases = [
    {
      phase: "Phase 1: Detection Dominance",
      status: "COMPLETE",
      trl: "TRL 4",
      items: [
        "Multi-band RF sensing (2.4–6 GHz)",
        "AI classification model (90%+ accuracy)",
        "Real-time dashboard + alerting",
        "Lab validation complete (Q4 2025)",
      ],
    },
    {
      phase: "Phase 2: Disruption Capability",
      status: "IN PROGRESS",
      trl: "TRL 5–6",
      items: [
        "RF denial tactics integration (Q1 2026)",
        "DEERC validation range testing (Q2 2026, target 85%+)",
        "Link takeover field trials (Q2 2026)",
        "1–2 paid pilot contracts (Q3 2026)",
      ],
    },
    {
      phase: "Phase 3: Autonomous Response",
      status: "FUTURE",
      trl: "TRL 7–8",
      items: [
        "Autonomous threat prioritization",
        "Coordinated multi-node swarm defense",
        "Integration with kinetic systems",
        "Autonomous response authorization framework",
      ],
    },
  ];

  return (
    <section className="py-24" style={{ background: "#060810" }}>
      <div className="container">
        <div className="text-center mb-16">
          <h2
            className="text-5xl md:text-6xl font-bold mb-6"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              color: "#ffffff",
            }}
          >
            Product Roadmap
          </h2>
          <p
            className="text-xl max-w-3xl mx-auto"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              color: "rgba(203,213,225,0.7)",
            }}
          >
            18-month evolution from Detection to Autonomous Response
          </p>
        </div>

        <div className="space-y-8">
          {phases.map((p, idx) => (
            <div
              key={idx}
              className="p-8 rounded-lg"
              style={{
                background: "rgba(0,212,255,0.05)",
                border: "1px solid rgba(0,212,255,0.2)",
              }}
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3
                    className="text-2xl font-bold mb-2"
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      color: "#ffffff",
                    }}
                  >
                    {p.phase}
                  </h3>
                  <div className="flex gap-4">
                    <span
                      className="px-3 py-1 rounded text-sm font-bold"
                      style={{
                        background: p.status === "COMPLETE" ? "rgba(34,197,94,0.2)" : p.status === "IN PROGRESS" ? "rgba(245,158,15,0.2)" : "rgba(107,114,128,0.2)",
                        color: p.status === "COMPLETE" ? "#22c55e" : p.status === "IN PROGRESS" ? "#F59E0B" : "#9ca3af",
                        fontFamily: "'Space Grotesk', sans-serif",
                      }}
                    >
                      {p.status}
                    </span>
                    <span
                      style={{
                        color: "#00D4FF",
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontWeight: "bold",
                      }}
                    >
                      {p.trl}
                    </span>
                  </div>
                </div>
              </div>
              <ul className="space-y-2">
                {p.items.map((item, i) => (
                  <li
                    key={i}
                    className="flex gap-3"
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      color: "rgba(203,213,225,0.7)",
                    }}
                  >
                    <span style={{ color: "#00D4FF", fontWeight: "bold" }}>→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── CTA Section ───────────────────────────────────────────────────────────────
function CTA() {
  return (
    <section className="py-24" style={{ background: "rgba(0,212,255,0.02)" }}>
      <div className="container text-center">
        <h2
          className="text-5xl md:text-6xl font-bold mb-8"
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            color: "#ffffff",
          }}
        >
          Ready to Evaluate?
        </h2>
        <p
          className="text-xl max-w-3xl mx-auto mb-12"
          style={{
            fontFamily: "'DM Sans', sans-serif",
            color: "rgba(203,213,225,0.7)",
            lineHeight: "1.6",
          }}
        >
          Schedule a technical briefing with our team. We'll walk through disruption proof, integration pathways, and pilot opportunities.
        </p>
        <a
          href="/#contact"
          className="inline-block px-8 py-4 text-lg font-semibold tracking-wide transition-all duration-200"
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            background: "rgba(0,212,255,0.15)",
            border: "1px solid rgba(0,212,255,0.5)",
            color: "#00D4FF",
            borderRadius: "2px",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "rgba(0,212,255,0.25)";
            e.currentTarget.style.boxShadow = "0 0 24px rgba(0,212,255,0.3)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "rgba(0,212,255,0.15)";
            e.currentTarget.style.boxShadow = "none";
          }}
        >
          Request Technical Briefing
        </a>
      </div>
    </section>
  );
}

// ── Footer ────────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer
      className="py-12 border-t"
      style={{
        background: "#060810",
        borderColor: "rgba(0,212,255,0.1)",
      }}
    >
      <div className="container text-center">
        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            color: "rgba(203,213,225,0.5)",
            fontSize: "14px",
          }}
        >
          © 2026 ChaosTech Defense LLC. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

// ── Main Component ────────────────────────────────────────────────────────────
export default function Product() {
  return (
    <div style={{ background: "#060810", color: "#ffffff" }}>
      <Nav />
      <Hero />
      <Capabilities />
      <DisruptionProof />
      <Roadmap />
      <CTA />
      <Footer />
    </div>
  );
}
