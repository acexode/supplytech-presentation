import Link from "next/link";
import GrowthChart from "./GrowthChart";
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
          margin-bottom: 20px;
          font-weight: 400;
        }

        .market-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
          margin-bottom: 20px;
        }

        .metric-card {
          background: white;
          border-radius: 16px;
          padding: 30px 22px;
          box-shadow:
            0 10px 15px -3px rgba(0, 0, 0, 0.05),
            0 4px 6px -2px rgba(0, 0, 0, 0.05);
          border: 1px solid #e2e8f0;
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          height: 196px;
        }

        .metric-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 4px;
          background: linear-gradient(90deg, #3b82f6, #8b5cf6);
        }

        .metric-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 10px;
        }

        .metric-icon {
          width: 38px;
          height: 38px;
          background: rgba(59, 130, 246, 0.1);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #3b82f6;
          font-size: 17px;
        }

        .metric-badge {
          background: rgba(16, 185, 129, 0.1);
          color: #10b981;
          padding: 4px 10px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
        }

        .metric-value {
          font-size: 34px;
          font-weight: 800;
          color: #1e293b;
          margin-bottom: 4px;
          letter-spacing: -1px;
        }

        .metric-label {
          font-size: 14px;
          color: #64748b;
          margin-bottom: 8px;
        }

        .metric-change {
          font-size: 12px;
          font-weight: 600;
          color: #10b981;
        }

        .chart-section {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 24px;
        }

        .chart-card {
          background: white;
          border-radius: 16px;
          padding: 20px 24px;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
          border: 1px solid #e2e8f0;
          height: 288px;
        }

        .chart-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 10px;
        }

        .chart-title {
          font-size: 18px;
          font-weight: 700;
          color: #1e293b;
        }

        .chart-subtitle {
          font-size: 14px;
          color: #64748b;
        }

        .chart-container {
          position: relative;
          height: 198px;
        }

        .key-insights {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .insight-item {
          display: flex;
          align-items: center;
          gap: 12px;
          background: rgba(255, 255, 255, 0.5);
          border: 1px solid #e2e8f0;
          padding: 16px 20px;
          border-radius: 12px;
          height: 80px;
        }

        .insight-icon {
          width: 40px;
          height: 40px;
          background: rgba(59, 130, 246, 0.1);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #3b82f6;
          font-size: 16px;
        }

        .insight-text {
          flex: 1;
        }

        .insight-label {
          font-size: 13px;
          color: #64748b;
          margin-bottom: 2px;
        }

        .insight-value {
          font-size: 16px;
          font-weight: 700;
          color: #1e293b;
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
          <div className="section-title">Market Opportunity</div>
          <div className="section-subtitle">
            Saudi Arabia&apos;s logistics market presents a massive opportunity
            for AI-powered warehouse infrastructure
          </div>
          <div className="market-grid">
            <div className="metric-card">
              <div className="metric-header">
                <div className="metric-icon">
                  <i className="fas fa-dollar-sign"></i>
                </div>
                <div className="metric-badge">+10% CAGR</div>
              </div>
              <div className="metric-value">$37.8B</div>
              <div className="metric-label">Logistics Market Size (2024)</div>
              <div className="metric-change">↑ 10% from 2023</div>
            </div>
            <div className="metric-card">
              <div className="metric-header">
                <div className="metric-icon">
                  <i className="fas fa-chart-line"></i>
                </div>
                <div className="metric-badge">+17%</div>
              </div>
              <div className="metric-value">$3.77B</div>
              <div className="metric-label">E-commerce by 2030</div>
              <div className="metric-change">↑ 10.94% CAGR</div>
            </div>
            <div className="metric-card">
              <div className="metric-header">
                <div className="metric-icon">
                  <i className="fas fa-users"></i>
                </div>
                <div className="metric-badge">92%</div>
              </div>
              <div className="metric-value">92%</div>
              <div className="metric-label">Demand Utilization</div>
              <div className="metric-change">High demand for Grade A</div>
            </div>
            <div className="metric-card">
              <div className="metric-header">
                <div className="metric-icon">
                  <i className="fas fa-globe"></i>
                </div>
                <div className="metric-badge">Vision 2030</div>
              </div>
              <div className="metric-value">#1</div>
              <div className="metric-label">Regional Hub Status</div>
              <div className="metric-change">Target: Global leader</div>
            </div>
          </div>
          <div className="chart-section">
            <div className="chart-card">
              <div className="chart-header">
                <div>
                  <div className="chart-title">Market Growth Trajectory</div>
                  <div className="chart-subtitle">
                    Logistics market size 2020-2030
                  </div>
                </div>
                <div className="chart-subtitle">
                  Source: Nexdigm, Mordor Intelligence
                </div>
              </div>
              <div className="chart-container">
                <GrowthChart />
              </div>
            </div>
            <div className="key-insights">
              <div className="insight-item">
                <div className="insight-icon">
                  <i className="fas fa-trophy"></i>
                </div>
                <div className="insight-text">
                  <div className="insight-label">Market Position</div>
                  <div className="insight-value">#1 in GCC region</div>
                </div>
              </div>
              <div className="insight-item">
                <div className="insight-icon">
                  <i className="fas fa-chart-pie"></i>
                </div>
                <div className="insight-text">
                  <div className="insight-label">Market Share</div>
                  <div className="insight-value">35% of total KSA logistics</div>
                </div>
              </div>
              <div className="insight-item">
                <div className="insight-icon">
                  <i className="fas fa-clock"></i>
                </div>
                <div className="insight-text">
                  <div className="insight-label">Time to Market</div>
                  <div className="insight-value">6-9 months</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer">
          <div className="footer-left">
            <div className="footer-item">
              <i className="fas fa-check-circle"></i>
              <span style={{ minWidth: "140px" }}>Production Ready</span>
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
            <span>Page 4 of 13</span>
          </div>
        </div>
        <Link
          className="slide-nav-button slide-nav-left"
          href="/problem-solve"
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
          href="/solution"
          aria-label="Go to solution slide"
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
