import Link from "next/link";
import SupplyTechLogo from "../components/SupplyTechLogo";

export default function OpportunityPage() {
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
          margin-bottom: 24px;
          font-weight: 400;
        }

        .problem-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          margin-bottom: 24px;
        }

        .problem-card {
          background: white;
          border-radius: 20px;
          padding: 22px 24px;
          box-shadow:
            0 10px 15px -3px rgba(0, 0, 0, 0.05),
            0 4px 6px -2px rgba(0, 0, 0, 0.05);
          border: 1px solid #e2e8f0;
          position: relative;
          overflow: hidden;
          height: 285px;
          display: flex;
          flex-direction: column;
        }

        .problem-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 5px;
        }

        .problem-card.fragmentation::before {
          background: linear-gradient(90deg, #ef4444, #f97316);
        }

        .problem-card.manual::before {
          background: linear-gradient(90deg, #f59e0b, #eab308);
        }

        .problem-card.trust::before {
          background: linear-gradient(90deg, #3b82f6, #8b5cf6);
        }

        .card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 14px;
        }

        .card-icon {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 22px;
        }

        .problem-card.fragmentation .card-icon {
          background: rgba(239, 68, 68, 0.1);
          color: #ef4444;
        }

        .problem-card.manual .card-icon {
          background: rgba(245, 158, 11, 0.1);
          color: #f59e0b;
        }

        .problem-card.trust .card-icon {
          background: rgba(59, 130, 246, 0.1);
          color: #3b82f6;
        }

        .card-badge {
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 13px;
          font-weight: 600;
        }

        .problem-card.fragmentation .card-badge {
          background: rgba(239, 68, 68, 0.1);
          color: #ef4444;
        }

        .problem-card.manual .card-badge {
          background: rgba(245, 158, 11, 0.1);
          color: #f59e0b;
        }

        .problem-card.trust .card-badge {
          background: rgba(59, 130, 246, 0.1);
          color: #3b82f6;
        }

        .card-title {
          font-size: 24px;
          font-weight: 700;
          color: #1e293b;
          margin-bottom: 10px;
          letter-spacing: -0.5px;
        }

        .card-description {
          font-size: 15px;
          color: #64748b;
          line-height: 1.42;
          margin-bottom: 12px;
        }

        .problem-stats {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-top: auto;
          padding-top: 12px;
          border-top: 1px solid #f1f5f9;
        }

        .stat-item {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 13px;
          color: #64748b;
        }

        .stat-value {
          font-weight: 700;
          color: #1e293b;
        }

        .bottom-section {
          display: grid;
          grid-template-columns: 2.2fr 1fr;
          gap: 24px;
        }

        .bottom-card {
          background: white;
          border-radius: 16px;
          padding: 20px 24px;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
          border: 1px solid #e2e8f0;
          height: 124px;
        }

        .bottom-card-title {
          font-size: 18px;
          font-weight: 700;
          color: #1e293b;
          margin-bottom: 14px;
        }

        .impact-list {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }

        .impact-item {
          display: flex;
          align-items: center;
          gap: 8px;
          background: rgba(59, 130, 246, 0.08);
          padding: 8px 16px;
          border-radius: 10px;
          font-size: 14px;
          font-weight: 600;
          color: #1e293b;
        }

        .impact-item i {
          color: #3b82f6;
          font-size: 12px;
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
          <div className="section-title">The Problem We Solve</div>
          <div className="section-subtitle">
            Three critical pain points preventing efficient warehouse
            utilization in Saudi Arabia
          </div>
          <div className="problem-grid">
            <div className="problem-card fragmentation">
              <div className="card-header">
                <div className="card-icon">
                  <i className="fas fa-puzzle-piece"></i>
                </div>
                <div className="card-badge">Critical</div>
              </div>
              <div className="card-title">Fragmented Supply</div>
              <div className="card-description">
                Warehouse capacity is scattered across multiple providers with
                no unified marketplace. Enterprise demand for flexible storage
                cannot find available space efficiently.
              </div>
              <div className="problem-stats">
                <div className="stat-item">
                  <span className="stat-value">65%</span>
                  <span>underutilized</span>
                </div>
                <div className="stat-item">
                  <span className="stat-value">3-5</span>
                  <span>days to find</span>
                </div>
              </div>
            </div>
            <div className="problem-card manual">
              <div className="card-header">
                <div className="card-icon">
                  <i className="fas fa-hand-paper"></i>
                </div>
                <div className="card-badge">Inefficient</div>
              </div>
              <div className="card-title">Manual Processes</div>
              <div className="card-description">
                Slow, costly deals with manual quoting, contracts, payments,
                and SLA tracking. Every transaction requires multiple
                touchpoints and paperwork.
              </div>
              <div className="problem-stats">
                <div className="stat-item">
                  <span className="stat-value">48hrs</span>
                  <span>avg. quote</span>
                </div>
                <div className="stat-item">
                  <span className="stat-value">15+</span>
                  <span>steps/deal</span>
                </div>
              </div>
            </div>
            <div className="problem-card trust">
              <div className="card-header">
                <div className="card-icon">
                  <i className="fas fa-shield-alt"></i>
                </div>
                <div className="card-badge">High Risk</div>
              </div>
              <div className="card-title">Trust Gap</div>
              <div className="card-description">
                Identity verification and business validation required before
                legal commitments. Owners lack tools to monetize idle capacity
                and verify renters.
              </div>
              <div className="problem-stats">
                <div className="stat-item">
                  <span className="stat-value">40%</span>
                  <span>fail verification</span>
                </div>
                <div className="stat-item">
                  <span className="stat-value">$2M</span>
                  <span>fraud loss</span>
                </div>
              </div>
            </div>
          </div>
          <div className="bottom-section">
            <div className="bottom-card">
              <div className="bottom-card-title">Business Impact</div>
              <div className="impact-list">
                <div className="impact-item">
                  <i className="fas fa-check"></i>
                  <span>Delayed fulfillment</span>
                </div>
                <div className="impact-item">
                  <i className="fas fa-check"></i>
                  <span>Increased costs</span>
                </div>
                <div className="impact-item">
                  <i className="fas fa-check"></i>
                  <span>Lost revenue</span>
                </div>
                <div className="impact-item">
                  <i className="fas fa-check"></i>
                  <span>Compliance risks</span>
                </div>
              </div>
            </div>
            <div className="bottom-card">
              <div className="bottom-card-title">Market Gap</div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "8px",
                }}
              >
                <span style={{ fontSize: "14px", color: "#64748b" }}>
                  Demand Utilization
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
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: "16px",
                }}
              >
                <span style={{ fontSize: "14px", color: "#64748b" }}>
                  Supply Visibility
                </span>
                <span
                  style={{
                    fontSize: "14px",
                    fontWeight: 700,
                    color: "#1e293b",
                  }}
                >
                  68%
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
            <span>Page 3 of 13</span>
          </div>
        </div>
        <Link
          className="slide-nav-button slide-nav-left"
          href="/vision"
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
          href="/opportunity"
          aria-label="Go to opportunity slide"
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
