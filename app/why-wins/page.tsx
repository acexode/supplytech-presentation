import Link from "next/link";
import SupplyTechLogo from "../components/SupplyTechLogo";

export default function WhyWinsPage() {
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

        .content-grid {
          display: grid;
          grid-template-columns: 1.4fr 1fr;
          gap: 24px;
          height: 438px;
        }

        .left-panel {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .moat-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }

        .moat-card {
          background: white;
          border-radius: 16px;
          padding: 18px;
          box-shadow:
            0 10px 15px -3px rgba(0, 0, 0, 0.05),
            0 4px 6px -2px rgba(0, 0, 0, 0.05);
          border: 1px solid #e2e8f0;
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
          height: 204px;
        }

        .moat-card::before {
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
          margin-bottom: 8px;
        }

        .card-icon {
          width: 32px;
          height: 32px;
          background: rgba(59, 130, 246, 0.1);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #3b82f6;
          font-size: 14px;
        }

        .card-badge {
          background: rgba(16, 185, 129, 0.1);
          color: #10b981;
          padding: 3px 8px;
          border-radius: 20px;
          font-size: 10px;
          font-weight: 700;
        }

        .card-title {
          font-size: 15px;
          font-weight: 700;
          color: #1e293b;
          margin-bottom: 4px;
        }

        .card-description {
          font-size: 11px;
          color: #64748b;
          line-height: 1.3;
          margin-bottom: 8px;
          min-height: 28px;
        }

        .feature-list {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .feature-item {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 11px;
          color: #475569;
        }

        .feature-item i {
          color: #10b981;
          font-size: 9px;
        }

        .right-panel {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .flywheel-card {
          background: white;
          border-radius: 16px;
          padding: 22px 24px;
          box-shadow:
            0 10px 15px -3px rgba(0, 0, 0, 0.05),
            0 4px 6px -2px rgba(0, 0, 0, 0.05);
          border: 1px solid #e2e8f0;
          height: 424px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .flywheel-title {
          font-size: 18px;
          font-weight: 700;
          color: #1e293b;
          margin-bottom: 10px;
        }

        .flywheel-container {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .flywheel {
          width: 220px;
          height: 220px;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .flywheel-center {
          width: 64px;
          height: 64px;
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: 700;
          font-size: 14px;
          z-index: 10;
          box-shadow: 0 4px 10px rgba(59, 130, 246, 0.3);
        }

        .flywheel-ring {
          position: absolute;
          width: 180px;
          height: 180px;
          border: 2px dashed #e2e8f0;
          border-radius: 50%;
        }

        .flywheel-segment {
          position: absolute;
          width: 44px;
          height: 44px;
          background: white;
          border: 2px solid #3b82f6;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 16px;
          color: #3b82f6;
          z-index: 5;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
        }

        .segment-1 {
          top: -22px;
          left: 50%;
          transform: translateX(-50%);
        }

        .segment-2 {
          top: 50%;
          right: -22px;
          transform: translateY(-50%);
        }

        .segment-3 {
          bottom: -22px;
          left: 50%;
          transform: translateX(-50%);
        }

        .segment-4 {
          top: 50%;
          left: -22px;
          transform: translateY(-50%);
        }

        .label {
          position: absolute;
          font-size: 11px;
          font-weight: 600;
          color: #64748b;
        }

        .label-1 {
          top: -45px;
          left: 50%;
          transform: translateX(-50%);
        }

        .label-2 {
          top: 50%;
          right: -75px;
          transform: translateY(-50%);
        }

        .label-3 {
          bottom: -45px;
          left: 50%;
          transform: translateX(-50%);
        }

        .label-4 {
          top: 50%;
          left: -75px;
          transform: translateY(-50%);
        }

        .stats-row {
          display: flex;
          justify-content: space-between;
          margin-top: 18px;
          padding-top: 16px;
          border-top: 1px solid #f1f5f9;
        }

        .stat-item {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .stat-value {
          font-size: 18px;
          font-weight: 800;
          color: #1e293b;
        }

        .stat-label {
          font-size: 12px;
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
          <div className="section-title">Why This Wins</div>
          <div className="section-subtitle">
            Five strategic moats that create sustainable competitive advantage
          </div>
          <div className="content-grid">
            <div className="left-panel">
              <div className="moat-grid">
                <div className="moat-card">
                  <div className="card-header">
                    <div className="card-icon">
                      <i className="fas fa-shield-alt"></i>
                    </div>
                    <div className="card-badge">Core</div>
                  </div>
                  <div className="card-title">Compliance Moat</div>
                  <div className="card-description">
                    KSA-native identity/KYB, VAT, RTL/Hijri support
                  </div>
                  <div className="feature-list">
                    <div className="feature-item">
                      <i className="fas fa-check"></i>
                      <span>National ID/Iqama verification</span>
                    </div>
                    <div className="feature-item">
                      <i className="fas fa-check"></i>
                      <span>15% VAT compliance</span>
                    </div>
                    <div className="feature-item">
                      <i className="fas fa-check"></i>
                      <span>RTL/Hijri calendar</span>
                    </div>
                  </div>
                </div>
                <div className="moat-card">
                  <div className="card-header">
                    <div className="card-icon">
                      <i className="fas fa-network-wired"></i>
                    </div>
                    <div className="card-badge">Growth</div>
                  </div>
                  <div className="card-title">Network Effects</div>
                  <div className="card-description">
                    Verified supply × enterprise demand
                  </div>
                  <div className="feature-list">
                    <div className="feature-item">
                      <i className="fas fa-check"></i>
                      <span>Better matches</span>
                    </div>
                    <div className="feature-item">
                      <i className="fas fa-check"></i>
                      <span>Higher utilization</span>
                    </div>
                    <div className="feature-item">
                      <i className="fas fa-check"></i>
                      <span>More verified supply</span>
                    </div>
                  </div>
                </div>
                <div className="moat-card">
                  <div className="card-header">
                    <div className="card-icon">
                      <i className="fas fa-database"></i>
                    </div>
                    <div className="card-badge">AI</div>
                  </div>
                  <div className="card-title">Data Advantage</div>
                  <div className="card-description">
                    Transaction signals power AI ranking
                  </div>
                  <div className="feature-list">
                    <div className="feature-item">
                      <i className="fas fa-check"></i>
                      <span>Booking patterns</span>
                    </div>
                    <div className="feature-item">
                      <i className="fas fa-check"></i>
                      <span>Pricing signals</span>
                    </div>
                    <div className="feature-item">
                      <i className="fas fa-check"></i>
                      <span>Utilization data</span>
                    </div>
                  </div>
                </div>
                <div className="moat-card">
                  <div className="card-header">
                    <div className="card-icon">
                      <i className="fas fa-robot"></i>
                    </div>
                    <div className="card-badge">Tech</div>
                  </div>
                  <div className="card-title">AI-First Governance</div>
                  <div className="card-description">
                    Governed agents, human approvals
                  </div>
                  <div className="feature-list">
                    <div className="feature-item">
                      <i className="fas fa-check"></i>
                      <span>Auditable decisions</span>
                    </div>
                    <div className="feature-item">
                      <i className="fas fa-check"></i>
                      <span>Human-in-the-loop</span>
                    </div>
                    <div className="feature-item">
                      <i className="fas fa-check"></i>
                      <span>Multi-agent ops</span>
                    </div>
                  </div>
                </div>
                <div className="moat-card">
                  <div className="card-header">
                    <div className="card-icon">
                      <i className="fas fa-map-marker-alt"></i>
                    </div>
                    <div className="card-badge">Local</div>
                  </div>
                  <div className="card-title">Local-First Execution</div>
                  <div className="card-description">
                    Arabic UX, approvals, partnerships
                  </div>
                  <div className="feature-list">
                    <div className="feature-item">
                      <i className="fas fa-check"></i>
                      <span>Arabic interface</span>
                    </div>
                    <div className="feature-item">
                      <i className="fas fa-check"></i>
                      <span>Local partnerships</span>
                    </div>
                    <div className="feature-item">
                      <i className="fas fa-check"></i>
                      <span>KSA compliance</span>
                    </div>
                  </div>
                </div>
                <div className="moat-card">
                  <div className="card-header">
                    <div className="card-icon">
                      <i className="fas fa-trophy"></i>
                    </div>
                    <div className="card-badge">Lead</div>
                  </div>
                  <div className="card-title">Market Position</div>
                  <div className="card-description">
                    First-mover advantage in KSA
                  </div>
                  <div className="feature-list">
                    <div className="feature-item">
                      <i className="fas fa-check"></i>
                      <span>50+ warehouses</span>
                    </div>
                    <div className="feature-item">
                      <i className="fas fa-check"></i>
                      <span>100+ tenants</span>
                    </div>
                    <div className="feature-item">
                      <i className="fas fa-check"></i>
                      <span>1,000+ bookings</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="right-panel">
              <div className="flywheel-card">
                <div className="flywheel-title">Network Effects Flywheel</div>
                <div className="flywheel-container">
                  <div className="flywheel">
                    <div className="flywheel-ring"></div>
                    <div className="flywheel-segment segment-1">
                      <i className="fas fa-users"></i>
                    </div>
                    <div className="flywheel-segment segment-2">
                      <i className="fas fa-warehouse"></i>
                    </div>
                    <div className="flywheel-segment segment-3">
                      <i className="fas fa-chart-line"></i>
                    </div>
                    <div className="flywheel-segment segment-4">
                      <i className="fas fa-sync"></i>
                    </div>
                    <div className="flywheel-center">Core</div>
                    <div className="label label-1">Users</div>
                    <div className="label label-2">Supply</div>
                    <div className="label label-3">Data</div>
                    <div className="label label-4">Growth</div>
                  </div>
                </div>
                <div className="stats-row">
                  <div className="stat-item">
                    <div className="stat-value">94%</div>
                    <div className="stat-label">Match accuracy</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-value">99.9%</div>
                    <div className="stat-label">Uptime</div>
                  </div>
                </div>
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
            <span>Page 10 of 13</span>
          </div>
        </div>
        <Link
          className="slide-nav-button slide-nav-left"
          href="/readiness"
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
          href="/optimizing-network"
          aria-label="Go to optimizing network slide"
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
