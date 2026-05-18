import Link from "next/link";
import SupplyTechLogo from "../components/SupplyTechLogo";

export default function AiIntelligencePage() {
  return (
    <>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          margin: 0;
          padding: 0;
          overflow: hidden;
          font-family: "Inter", -apple-system, BlinkMacSystemFont, sans-serif;
          background: #f8fafc;
        }

        .slide-container {
          width: 100%;
          height: 100vh;
          position: relative;
          overflow: hidden;
          background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
        }

        .header {
          position: absolute;
          top: 28px;
          left: 48px;
          width: calc(100% - 96px);
          display: flex;
          justify-content: space-between;
          align-items: center;
          z-index: 100;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .logo-icon {
          width: 48px;
          height: 48px;
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 24px;
          font-weight: 700;
        }

        .logo-text {
          color: #1e293b;
          font-size: 32px;
          font-weight: 800;
          letter-spacing: -0.5px;
          line-height: 1;
        }

        .logo-sub {
          color: #64748b;
          font-size: 14px;
          font-weight: 500;
          margin-top: 2px;
        }

        .header-right {
          display: flex;
          align-items: center;
          gap: 32px;
        }

        .header-item {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #64748b;
          font-size: 16px;
          font-weight: 500;
        }

        .header-item i {
          color: #3b82f6;
        }

        .main-content {
          position: absolute;
          top: 96px;
          left: 48px;
          width: calc(100% - 96px);
          z-index: 10;
        }

        .section-title {
          font-size: 46px;
          font-weight: 800;
          color: #1e293b;
          margin-bottom: 6px;
          letter-spacing: -1.5px;
        }

        .section-subtitle {
          font-size: 20px;
          color: #64748b;
          margin-bottom: 22px;
          font-weight: 400;
        }

        .ai-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
          margin-bottom: 20px;
        }

        .ai-card {
          background: white;
          border-radius: 16px;
          padding: 18px 24px;
          box-shadow:
            0 10px 15px -3px rgba(0, 0, 0, 0.05),
            0 4px 6px -2px rgba(0, 0, 0, 0.05);
          border: 1px solid #e2e8f0;
          position: relative;
          overflow: hidden;
          height: 186px;
          display: flex;
          flex-direction: column;
        }

        .ai-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 4px;
          background: linear-gradient(90deg, #3b82f6, #8b5cf6);
        }

        .card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 10px;
        }

        .card-icon {
          width: 40px;
          height: 40px;
          background: rgba(59, 130, 246, 0.1);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #3b82f6;
          font-size: 18px;
        }

        .card-badge {
          background: rgba(16, 185, 129, 0.1);
          color: #10b981;
          padding: 4px 10px;
          border-radius: 20px;
          font-size: 11px;
          font-weight: 600;
        }

        .card-title {
          font-size: 20px;
          font-weight: 700;
          color: #1e293b;
          margin-bottom: 6px;
          letter-spacing: -0.3px;
        }

        .card-description {
          font-size: 13px;
          color: #64748b;
          line-height: 1.36;
          margin-bottom: 8px;
        }

        .feature-list {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .feature-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 12px;
          color: #64748b;
        }

        .feature-item i {
          color: #10b981;
          font-size: 10px;
        }

        .feature-text {
          flex: 1;
        }

        .bottom-section {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 20px;
        }

        .bottom-card {
          background: white;
          border-radius: 16px;
          padding: 22px 24px;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
          border: 1px solid #e2e8f0;
          height: 168px;
        }

        .bottom-card-title {
          font-size: 18px;
          font-weight: 700;
          color: #1e293b;
          margin-bottom: 14px;
        }

        .agent-grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 12px;
        }

        .agent-card {
          background: rgba(59, 130, 246, 0.05);
          border: 1px solid rgba(59, 130, 246, 0.1);
          border-radius: 10px;
          padding: 10px 4px;
          text-align: center;
        }

        .agent-icon {
          width: 32px;
          height: 32px;
          background: rgba(59, 130, 246, 0.1);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 6px;
          color: #3b82f6;
          font-size: 14px;
        }

        .agent-name {
          font-size: 11px;
          font-weight: 600;
          color: #1e293b;
          margin-bottom: 2px;
        }

        .agent-status {
          font-size: 9px;
          color: #64748b;
        }

        .footer {
          position: absolute;
          bottom: 24px;
          left: 48px;
          width: calc(100% - 96px);
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .footer-left {
          display: flex;
          align-items: center;
          gap: 32px;
        }

        .footer-item {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #94a3b8;
          font-size: 13px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .footer-item i {
          color: #3b82f6;
          font-size: 14px;
        }

        .footer-right {
          background: white;
          padding: 6px 16px;
          border-radius: 20px;
          border: 1px solid #e2e8f0;
          font-size: 13px;
          font-weight: 600;
          color: #64748b;
        }

        .slide-nav-button {
          position: absolute;
          top: 50%;
          z-index: 200;
          width: 48px;
          height: 48px;
          transform: translateY(-50%);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #1e293b;
          background: rgba(255, 255, 255, 0.82);
          border: 1px solid #dbe4f0;
          border-radius: 999px;
          box-shadow: 0 10px 20px rgba(15, 23, 42, 0.08);
          backdrop-filter: blur(12px);
          transition:
            background 160ms ease,
            transform 160ms ease;
        }

        .slide-nav-button:hover {
          background: white;
        }

        .slide-nav-left {
          left: 24px;
        }

        .slide-nav-left:hover {
          transform: translateY(-50%) translateX(-2px);
        }

        .slide-nav-right {
          right: 24px;
        }

        .slide-nav-right:hover {
          transform: translateY(-50%) translateX(2px);
        }
      `}</style>
      <div className="slide-container">
        <div className="header">
          <SupplyTechLogo className="logo" />
          <div className="header-right">
            <div className="header-item">
              <i className="fas fa-globe"></i>
              <span>KSA · 2026</span>
            </div>
            <div className="header-item">
              <i className="fas fa-calendar"></i>
              <span>May 2026</span>
            </div>
          </div>
        </div>
        <div className="main-content">
          <div className="section-title">AI Operational Intelligence</div>
          <div className="section-subtitle">
            Best-in-class models on logistics data — not training foundation
            models
          </div>
          <div className="ai-grid">
            <div className="ai-card">
              <div className="card-header">
                <div className="card-icon">
                  <i className="fas fa-database"></i>
                </div>
                <div className="card-badge">Live Data</div>
              </div>
              <div className="card-title">Data Foundation</div>
              <div className="card-description">
                Every booking, warehouse, and transaction feeds the AI layer
                with real-time logistics data.
              </div>
              <div className="feature-list">
                <div className="feature-item">
                  <i className="fas fa-check"></i>
                  <span className="feature-text">Bookings &amp; pricing signals</span>
                </div>
                <div className="feature-item">
                  <i className="fas fa-check"></i>
                  <span className="feature-text">Utilization &amp; availability</span>
                </div>
              </div>
            </div>
            <div className="ai-card">
              <div className="card-header">
                <div className="card-icon">
                  <i className="fas fa-bullseye"></i>
                </div>
                <div className="card-badge">Matching</div>
              </div>
              <div className="card-title">Smart Matching</div>
              <div className="card-description">
                Recommends best-fit options based on location, type, ops
                requirements, and pricing.
              </div>
              <div className="feature-list">
                <div className="feature-item">
                  <i className="fas fa-check"></i>
                  <span className="feature-text">Location &amp; storage type</span>
                </div>
                <div className="feature-item">
                  <i className="fas fa-check"></i>
                  <span className="feature-text">
                    Operational requirements
                  </span>
                </div>
              </div>
            </div>
            <div className="ai-card">
              <div className="card-header">
                <div className="card-icon">
                  <i className="fas fa-user-check"></i>
                </div>
                <div className="card-badge">Onboarding</div>
              </div>
              <div className="card-title">AI-Enhanced Onboarding</div>
              <div className="card-description">
                Intelligent document handling, validation, and smart lead
                routing for seamless experience.
              </div>
              <div className="feature-list">
                <div className="feature-item">
                  <i className="fas fa-check"></i>
                  <span className="feature-text">Document classification</span>
                </div>
                <div className="feature-item">
                  <i className="fas fa-check"></i>
                  <span className="feature-text">Smart lead routing</span>
                </div>
              </div>
            </div>
            <div className="ai-card">
              <div className="card-header">
                <div className="card-icon">
                  <i className="fas fa-robot"></i>
                </div>
                <div className="card-badge">Shipped</div>
              </div>
              <div className="card-title">Multi-Agent Operations</div>
              <div className="card-description">
                Specialized AI agents for product, operations, marketing,
                sales, and strategy.
              </div>
              <div className="feature-list">
                <div className="feature-item">
                  <i className="fas fa-check"></i>
                  <span className="feature-text">Governed budgets</span>
                </div>
                <div className="feature-item">
                  <i className="fas fa-check"></i>
                  <span className="feature-text">Human-in-the-loop</span>
                </div>
              </div>
            </div>
          </div>
          <div className="bottom-section">
            <div className="bottom-card">
              <div className="bottom-card-title">Multi-Agent Architecture</div>
              <div className="agent-grid">
                <div className="agent-card">
                  <div className="agent-icon">
                    <i className="fas fa-box"></i>
                  </div>
                  <div className="agent-name">Product</div>
                  <div className="agent-status">Active</div>
                </div>
                <div className="agent-card">
                  <div className="agent-icon">
                    <i className="fas fa-cogs"></i>
                  </div>
                  <div className="agent-name">Operations</div>
                  <div className="agent-status">Active</div>
                </div>
                <div className="agent-card">
                  <div className="agent-icon">
                    <i className="fas fa-bullhorn"></i>
                  </div>
                  <div className="agent-name">Marketing</div>
                  <div className="agent-status">Active</div>
                </div>
                <div className="agent-card">
                  <div className="agent-icon">
                    <i className="fas fa-handshake"></i>
                  </div>
                  <div className="agent-name">Sales</div>
                  <div className="agent-status">Active</div>
                </div>
                <div className="agent-card">
                  <div className="agent-icon">
                    <i className="fas fa-chart-line"></i>
                  </div>
                  <div className="agent-name">Data</div>
                  <div className="agent-status">Active</div>
                </div>
                <div className="agent-card">
                  <div className="agent-icon">
                    <i className="fas fa-lightbulb"></i>
                  </div>
                  <div className="agent-name">Strategy</div>
                  <div className="agent-status">Active</div>
                </div>
              </div>
            </div>
            <div className="bottom-card">
              <div className="bottom-card-title">AI Performance</div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: "8px",
                }}
              >
                <span style={{ fontSize: "14px", color: "#64748b" }}>
                  Match Accuracy
                </span>
                <span
                  style={{
                    fontSize: "14px",
                    fontWeight: 700,
                    color: "#1e293b",
                  }}
                >
                  94%
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: "8px",
                }}
              >
                <span style={{ fontSize: "14px", color: "#64748b" }}>
                  Processing Speed
                </span>
                <span
                  style={{
                    fontSize: "14px",
                    fontWeight: 700,
                    color: "#1e293b",
                  }}
                >
                  &lt;2s
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: "8px",
                }}
              >
                <span style={{ fontSize: "14px", color: "#64748b" }}>
                  Uptime
                </span>
                <span
                  style={{
                    fontSize: "14px",
                    fontWeight: 700,
                    color: "#1e293b",
                  }}
                >
                  99.9%
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="footer">
          <div className="footer-left">
            <div className="footer-item">
              <i className="fas fa-check-circle"></i>
              <span>Production Ready</span>
            </div>
            <div className="footer-item">
              <i className="fas fa-shield-alt"></i>
              <span>KSA Compliant</span>
            </div>
            <div className="footer-item">
              <i className="fas fa-robot"></i>
              <span>AI-Powered</span>
            </div>
          </div>
          <div className="footer-right">
            <span>Page 8 of 13</span>
          </div>
        </div>
        <Link
          className="slide-nav-button slide-nav-left"
          href="/built-for-saudi"
          aria-label="Go to previous slide"
        >
          <svg
            aria-hidden="true"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.25"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
        </Link>
        <Link
          className="slide-nav-button slide-nav-right"
          href="/readiness"
          aria-label="Go to readiness slide"
        >
          <svg
            aria-hidden="true"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.25"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </Link>
      </div>
    </>
  );
}
