/*
 * ChaosTech Defense LLC — Technical Specifications Page
 * Design: Stealth Tech Aesthetic (matching Home.tsx)
 * Deep space black (#060810) + electric cyan (#00D4FF) + amber (#F59E0B)
 * Typography: Space Grotesk (display) + DM Sans (body)
 */

import { useState } from "react";
import { ChevronDown, Menu, X, Cpu, Radio, Zap, Shield } from "lucide-react";

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
      className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20"
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
        <h1
          className="text-5xl md:text-6xl font-bold mb-6 tracking-tight"
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            color: "#ffffff",
            lineHeight: "1.1",
          }}
        >
          Technical<br />
          <span style={{ color: "#00D4FF" }}>Specifications</span>
        </h1>

        <p
          className="text-xl md:text-2xl max-w-3xl mx-auto"
          style={{
            fontFamily: "'DM Sans', sans-serif",
            color: "rgba(203,213,225,0.8)",
            lineHeight: "1.6",
          }}
        >
          Hardware, software, and RF coverage details for Neuro Swarm Disruptor
        </p>
      </div>
    </section>
  );
}

// ── Hardware Specs Section ────────────────────────────────────────────────────
function HardwareSpecs() {
  const specs = [
    {
      category: "Processing Unit",
      items: [
        { label: "Primary Processor", value: "NVIDIA Jetson Orin Nano" },
        { label: "AI Inference", value: "Up to 40 TOPS (FP8)" },
        { label: "Memory", value: "8GB LPDDR5" },
        { label: "Storage", value: "128GB NVMe SSD (expandable)" },
      ],
    },
    {
      category: "RF Front-End",
      items: [
        { label: "Frequency Range", value: "2.4 GHz – 6 GHz" },
        { label: "Antenna Array", value: "Multi-element phased array (8–16 elements)" },
        { label: "Gain", value: "12–18 dBi (frequency dependent)" },
        { label: "Dynamic Range", value: "90 dB" },
        { label: "Sensitivity", value: "-100 dBm @ 1 MHz bandwidth" },
      ],
    },
    {
      category: "Power & Environmental",
      items: [
        { label: "Power Consumption", value: "60–120W (operational)" },
        { label: "Power Supply", value: "AC 110–240V or DC 48V (field deployable)" },
        { label: "Operating Temperature", value: "-10°C to +50°C" },
        { label: "Humidity", value: "10% – 90% (non-condensing)" },
        { label: "Ruggedization", value: "IP65 rated enclosure (field deployable)" },
      ],
    },
    {
      category: "Physical",
      items: [
        { label: "Dimensions", value: "600mm × 400mm × 200mm (per node)" },
        { label: "Weight", value: "18–22 kg (per node, including antenna)" },
        { label: "Deployment Time", value: "< 2 hours (single operator)" },
        { label: "Portability", value: "Transportable by vehicle or helicopter" },
      ],
    },
  ];

  return (
    <section className="py-24" style={{ background: "#060810" }}>
      <div className="container">
        <div className="mb-16">
          <h2
            className="text-4xl font-bold mb-4"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              color: "#ffffff",
            }}
          >
            Hardware Architecture
          </h2>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              color: "rgba(203,213,225,0.7)",
            }}
          >
            Modular, edge-deployable RF + AI processing unit
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {specs.map((spec, idx) => (
            <div
              key={idx}
              className="p-8 rounded-lg"
              style={{
                background: "rgba(0,212,255,0.05)",
                border: "1px solid rgba(0,212,255,0.2)",
              }}
            >
              <h3
                className="text-2xl font-bold mb-6"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  color: "#00D4FF",
                }}
              >
                {spec.category}
              </h3>
              <div className="space-y-4">
                {spec.items.map((item, i) => (
                  <div key={i} className="flex justify-between items-start gap-4">
                    <span
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        color: "rgba(203,213,225,0.6)",
                        fontWeight: "600",
                      }}
                    >
                      {item.label}
                    </span>
                    <span
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        color: "#ffffff",
                        fontWeight: "bold",
                        textAlign: "right",
                      }}
                    >
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Software Stack Section ────────────────────────────────────────────────────
function SoftwareStack() {
  const stack = [
    {
      layer: "AI/ML Layer",
      components: [
        "TensorRT-optimized neural networks (detection, classification)",
        "Real-time model inference (< 50ms latency)",
        "Adaptive learning pipeline (online model updates)",
        "Threat prioritization engine",
      ],
    },
    {
      layer: "Signal Processing",
      components: [
        "Real-time FFT + spectrogram analysis",
        "Frequency hopping detection",
        "Signal classification (modulation, bandwidth, pattern)",
        "Neuromorphic event-based processing",
      ],
    },
    {
      layer: "RF Control & Disruption",
      components: [
        "Adaptive jamming algorithms",
        "Link takeover command generation",
        "Frequency agility control",
        "Power optimization for denial range",
      ],
    },
    {
      layer: "Mission Integration",
      components: [
        "RESTful API for system handoff",
        "Kinetic/non-kinetic effect coordination",
        "Cloud dashboard + real-time alerts",
        "CMMC Level 2 compliant logging",
      ],
    },
  ];

  return (
    <section className="py-24" style={{ background: "rgba(0,212,255,0.02)" }}>
      <div className="container">
        <div className="mb-16">
          <h2
            className="text-4xl font-bold mb-4"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              color: "#ffffff",
            }}
          >
            Software Stack
          </h2>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              color: "rgba(203,213,225,0.7)",
            }}
          >
            Four-layer architecture: AI/ML → Signal Processing → RF Control → Mission Integration
          </p>
        </div>

        <div className="space-y-6">
          {stack.map((layer, idx) => (
            <div
              key={idx}
              className="p-8 rounded-lg"
              style={{
                background: "rgba(0,212,255,0.08)",
                border: "1px solid rgba(0,212,255,0.3)",
              }}
            >
              <h3
                className="text-2xl font-bold mb-6"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  color: "#00D4FF",
                }}
              >
                {layer.layer}
              </h3>
              <ul className="space-y-3">
                {layer.components.map((comp, i) => (
                  <li
                    key={i}
                    className="flex gap-3"
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      color: "rgba(203,213,225,0.7)",
                    }}
                  >
                    <span style={{ color: "#00D4FF", fontWeight: "bold" }}>→</span>
                    {comp}
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

// ── RF Coverage Section ───────────────────────────────────────────────────────
function RFCoverage() {
  const bands = [
    { freq: "2.4 GHz", use: "WiFi, Bluetooth, ISM", coverage: "Up to 5 km (line-of-sight)" },
    { freq: "5.8 GHz", use: "Video link, FPV drones", coverage: "Up to 3 km (line-of-sight)" },
    { freq: "915 MHz", use: "Telemetry, control", coverage: "Up to 8 km (line-of-sight)" },
    { freq: "6 GHz", use: "Emerging drone standards", coverage: "Up to 4 km (line-of-sight)" },
  ];

  return (
    <section className="py-24" style={{ background: "#060810" }}>
      <div className="container">
        <div className="mb-16">
          <h2
            className="text-4xl font-bold mb-4"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              color: "#ffffff",
            }}
          >
            RF Coverage & Spectrum
          </h2>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              color: "rgba(203,213,225,0.7)",
            }}
          >
            Multi-band detection and disruption across commercial and military drone frequencies
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {bands.map((band, idx) => (
            <div
              key={idx}
              className="p-8 rounded-lg"
              style={{
                background: "rgba(0,212,255,0.05)",
                border: "1px solid rgba(0,212,255,0.2)",
              }}
            >
              <h3
                className="text-2xl font-bold mb-4"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  color: "#00D4FF",
                }}
              >
                {band.freq}
              </h3>
              <div className="space-y-3">
                <div>
                  <span
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      color: "rgba(203,213,225,0.6)",
                      fontWeight: "600",
                    }}
                  >
                    Use Cases:
                  </span>
                  <p
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      color: "#ffffff",
                      marginTop: "4px",
                    }}
                  >
                    {band.use}
                  </p>
                </div>
                <div>
                  <span
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      color: "rgba(203,213,225,0.6)",
                      fontWeight: "600",
                    }}
                  >
                    Coverage:
                  </span>
                  <p
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      color: "#ffffff",
                      marginTop: "4px",
                    }}
                  >
                    {band.coverage}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className="mt-12 p-8 rounded-lg"
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
            Spectrum Compliance
          </h3>
          <ul
            className="space-y-2"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              color: "rgba(203,213,225,0.7)",
            }}
          >
            <li>✓ FCC Part 15 compliant (unlicensed RF operation)</li>
            <li>✓ ITAR compliant (defense export control)</li>
            <li>✓ CMMC Level 2 certified infrastructure</li>
            <li>✓ Frequency coordination with DoD spectrum management</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

// ── Performance Metrics Section ───────────────────────────────────────────────
function PerformanceMetrics() {
  const metrics = [
    { metric: "Detection Latency", value: "< 100ms", description: "From RF signal to alert" },
    { metric: "Classification Accuracy", value: "90%+", description: "On known swarm signatures" },
    { metric: "False Positive Rate", value: "< 5%", description: "Per 24-hour operation" },
    { metric: "RF Denial Success", value: "87%", description: "Lab validation (Q4 2025)" },
    { metric: "Link Takeover Success", value: "75%", description: "Command injection success rate" },
    { metric: "System Uptime", value: "99.5%", description: "Operational availability" },
  ];

  return (
    <section className="py-24" style={{ background: "rgba(0,212,255,0.02)" }}>
      <div className="container">
        <div className="mb-16">
          <h2
            className="text-4xl font-bold mb-4"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              color: "#ffffff",
            }}
          >
            Performance Metrics
          </h2>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              color: "rgba(203,213,225,0.7)",
            }}
          >
            Real-world operational performance targets
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {metrics.map((m, idx) => (
            <div
              key={idx}
              className="p-8 rounded-lg text-center"
              style={{
                background: "rgba(0,212,255,0.08)",
                border: "1px solid rgba(0,212,255,0.3)",
              }}
            >
              <h3
                className="text-lg font-bold mb-2"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  color: "rgba(203,213,225,0.7)",
                }}
              >
                {m.metric}
              </h3>
              <div
                className="text-4xl font-bold mb-3"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  color: "#00D4FF",
                }}
              >
                {m.value}
              </div>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  color: "rgba(203,213,225,0.6)",
                  fontSize: "14px",
                }}
              >
                {m.description}
              </p>
            </div>
          ))}
        </div>
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
export default function Specs() {
  return (
    <div style={{ background: "#060810", color: "#ffffff" }}>
      <Nav />
      <Hero />
      <HardwareSpecs />
      <SoftwareStack />
      <RFCoverage />
      <PerformanceMetrics />
      <Footer />
    </div>
  );
}
