import Link from "next/link";
import SupplyTechLogo from "../components/SupplyTechLogo";

export default function VisionPage() {
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
          top: 108px;
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
          margin-bottom: 24px;
          font-weight: 400;
        }

        .cards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
          margin-bottom: 24px;
        }

        .card {
          background: white;
          border-radius: 20px;
          padding: 24px 28px;
          box-shadow:
            0 10px 15px -3px rgba(0, 0, 0, 0.05),
            0 4px 6px -2px rgba(0, 0, 0, 0.05);
          border: 1px solid #e2e8f0;
          position: relative;
          overflow: hidden;
          height: 280px;
          display: flex;
          flex-direction: column;
        }

        .card::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 5px;
          background: linear-gradient(90deg, #3b82f6, #8b5cf6);
        }

        .card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 18px;
        }

        .card-icon {
          width: 48px;
          height: 48px;
          background: rgba(59, 130, 246, 0.08);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #3b82f6;
          font-size: 22px;
        }

        .card-badge {
          background: rgba(16, 185, 129, 0.1);
          color: #10b981;
          padding: 6px 14px;
          border-radius: 20px;
          font-size: 13px;
          font-weight: 600;
        }

        .card-title {
          font-size: 24px;
          font-weight: 700;
          color: #1e293b;
          margin-bottom: 10px;
          letter-spacing: -0.5px;
        }

        .card-description {
          font-size: 15.5px;
          color: #64748b;
          line-height: 1.45;
          margin-bottom: auto;
        }

        .card-stats {
          display: flex;
          align-items: baseline;
          gap: 8px;
          margin-top: 12px;
        }

        .stat-number {
          font-size: 30px;
          font-weight: 800;
          color: #1e293b;
        }

        .stat-label {
          font-size: 14px;
          color: #64748b;
        }

        .bottom-section {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 28px;
        }

        .bottom-card {
          background: white;
          border-radius: 20px;
          padding: 20px 28px;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
          border: 1px solid #e2e8f0;
          height: 180px;
        }

        .bottom-card-title {
          font-size: 20px;
          font-weight: 700;
          color: #1e293b;
          margin-bottom: 14px;
        }

        .highlight-list {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .highlight-item {
          display: flex;
          align-items: center;
          gap: 8px;
          background: rgba(59, 130, 246, 0.08);
          padding: 9px 16px;
          border-radius: 10px;
          font-size: 14px;
          font-weight: 500;
          color: #1e293b;
        }

        .highlight-item i {
          color: #3b82f6;
          font-size: 12px;
        }

        .progress-bar {
          height: 8px;
          background: #f1f5f9;
          border-radius: 4px;
          overflow: hidden;
          margin-top: 8px;
        }

        .progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #3b82f6, #8b5cf6);
          border-radius: 4px;
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
          font-size: 14px;
          font-weight: 600;
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
          <div className="section-title">Vision &amp; Why Now</div>
          <div className="section-subtitle">
            Positioning Saudi Arabia as the region&apos;s premier logistics hub
            through AI-powered warehouse infrastructure
          </div>
          <div className="cards-grid">
            <div className="card">
              <div className="card-header">
                <div className="card-icon">
                  <i className="fas fa-eye"></i>
                </div>
                <div className="card-badge">2024-2030</div>
              </div>
              <div className="card-title">Vision 2030 Alignment</div>
              <div className="card-description">
                Digitizing underutilized warehouse capacity across Saudi Arabia
                to support the Kingdom&apos;s transformation into a global logistics
                hub.
              </div>
              <div className="card-stats">
                <div className="stat-number">$37.8B</div>
                <div className="stat-label">Logistics market size</div>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <div className="card-icon">
                  <i className="fas fa-chart-line"></i>
                </div>
                <div className="card-badge">+10% CAGR</div>
              </div>
              <div className="card-title">Market Timing</div>
              <div className="card-description">
                E-commerce logistics growing at 10.94% annually, with demand
                for Grade A warehouse space exceeding supply.
              </div>
              <div className="card-stats">
                <div className="stat-number">$3.77B</div>
                <div className="stat-label">E-commerce by 2030</div>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <div className="card-icon">
                  <i className="fas fa-rocket"></i>
                </div>
                <div className="card-badge">AI-Native</div>
              </div>
              <div className="card-title">Our Thesis</div>
              <div className="card-description">
                Infrastructure layer for flexible, compliant, AI-operated
                warehousing with full transaction support.
              </div>
              <div className="card-stats">
                <div className="stat-number">100%</div>
                <div className="stat-label">AI-operated from day one</div>
              </div>
            </div>
          </div>
          <div className="bottom-section">
            <div className="bottom-card">
              <div className="bottom-card-title">Key Success Factors</div>
              <div className="highlight-list">
                <div className="highlight-item">
                  <i className="fas fa-check"></i>
                  <span>Vision 2030 alignment</span>
                </div>
                <div className="highlight-item">
                  <i className="fas fa-check"></i>
                  <span>Grade A space demand</span>
                </div>
                <div className="highlight-item">
                  <i className="fas fa-check"></i>
                  <span>AI-native infrastructure</span>
                </div>
                <div className="highlight-item">
                  <i className="fas fa-check"></i>
                  <span>Full transaction support</span>
                </div>
                <div className="highlight-item">
                  <i className="fas fa-check"></i>
                  <span>KSA compliance</span>
                </div>
              </div>
            </div>
            <div className="bottom-card">
              <div className="bottom-card-title">Market Readiness</div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span style={{ fontSize: "14px", color: "#64748b" }}>
                  Infrastructure
                </span>
                <span
                  style={{
                    fontSize: "14px",
                    fontWeight: 700,
                    color: "#1e293b",
                  }}
                >
                  85%
                </span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: "85%" }}></div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: "14px",
                }}
              >
                <span style={{ fontSize: "14px", color: "#64748b" }}>
                  Demand
                </span>
                <span
                  style={{
                    fontSize: "14px",
                    fontWeight: 700,
                    color: "#1e293b",
                  }}
                >
                  92%
                </span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: "92%" }}></div>
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
            <span>Page 2 of 13</span>
          </div>
        </div>
        <Link className="slide-nav-button slide-nav-left" href="/" aria-label="Go to previous slide">
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
          href="/problem-solve"
          aria-label="Go to problem solve slide"
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
