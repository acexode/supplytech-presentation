import Link from "next/link";
import SupplyTechLogo from "./components/SupplyTechLogo";

export default function Home() {
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
          background: linear-gradient(135deg, #0a0a0f 0%, #1a1a2e 50%, #16213e 100%);
        }

        .slide-container {
          width: 100%;
          height: 100vh;
          position: relative;
          overflow: hidden;
          background: linear-gradient(135deg, #0a0a0f 0%, #1a1a2e 50%, #16213e 100%);
        }

        .bg-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
          background-size: 60px 60px;
          opacity: 0.5;
        }

        .glow-1 {
          position: absolute;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%);
          top: -200px;
          right: -100px;
          border-radius: 50%;
          filter: blur(60px);
        }

        .glow-2 {
          position: absolute;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(139, 92, 246, 0.12) 0%, transparent 70%);
          bottom: -150px;
          left: -100px;
          border-radius: 50%;
          filter: blur(50px);
        }

        .header {
          position: absolute;
          top: 24px;
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

        .header-right {
          display: flex;
          align-items: center;
          gap: 32px;
        }

        .header-item {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #94a3b8;
          font-size: 16px;
          font-weight: 500;
        }

        .header-item i {
          color: #3b82f6;
        }

        .main-content {
          position: absolute;
          top: 76px;
          left: 50%;
          width: 1000px;
          transform: translateX(-50%);
          text-align: center;
          z-index: 10;
        }

        .badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: rgba(59, 130, 246, 0.15);
          border: 1px solid rgba(59, 130, 246, 0.4);
          padding: 10px 20px;
          border-radius: 24px;
          margin-bottom: 22px;
        }

        .badge-dot {
          width: 10px;
          height: 10px;
          background: #10b981;
          border-radius: 50%;
          box-shadow: 0 0 10px rgba(16, 185, 129, 0.5);
        }

        .badge-text {
          color: #60a5fa;
          font-size: 16px;
          font-weight: 600;
          letter-spacing: 0.5px;
        }

        .main-title {
          font-size: 92px;
          font-weight: 900;
          color: white;
          letter-spacing: -3px;
          line-height: 0.95;
          margin-bottom: 20px;
          background: linear-gradient(to bottom, #ffffff 0%, #cbd5e1 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .main-title span {
          color: #3b82f6;
          -webkit-text-fill-color: #3b82f6;
        }

        .subtitle {
          font-size: 26px;
          color: #94a3b8;
          margin: 0 auto 24px;
          font-weight: 400;
          line-height: 1.5;
          max-width: 900px;
        }

        .subtitle strong {
          color: #f8fafc;
          font-weight: 700;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
          width: 100%;
        }

        .stat-card {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 26px 32px;
          text-align: left;
          backdrop-filter: blur(10px);
        }

        .stat-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 18px;
        }

        .stat-icon {
          width: 44px;
          height: 44px;
          background: rgba(59, 130, 246, 0.15);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #3b82f6;
          font-size: 20px;
        }

        .stat-value {
          font-size: 42px;
          font-weight: 800;
          color: white;
          margin-bottom: 8px;
          letter-spacing: -1px;
        }

        .stat-label {
          font-size: 16px;
          color: #94a3b8;
          font-weight: 500;
        }

        .stat-change {
          font-size: 14px;
          font-weight: 700;
          color: #10b981;
          background: rgba(16, 185, 129, 0.1);
          padding: 4px 10px;
          border-radius: 8px;
        }

        .footer {
          position: absolute;
          bottom: 30px;
          left: 48px;
          width: calc(100% - 96px);
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 24px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .footer-left,
        .footer-right {
          display: flex;
          align-items: center;
          gap: 32px;
        }

        .footer-item {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #94a3b8;
          font-size: 15px;
          font-weight: 600;
        }

        .footer-item i {
          color: #3b82f6;
          font-size: 16px;
        }

        .social-link {
          width: 40px;
          height: 40px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #94a3b8;
          font-size: 16px;
          border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .slide-nav-button {
          position: absolute;
          top: 50%;
          right: 24px;
          z-index: 200;
          width: 48px;
          height: 48px;
          transform: translateY(-50%);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #f8fafc;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.16);
          border-radius: 999px;
          backdrop-filter: blur(12px);
          transition:
            background 160ms ease,
            transform 160ms ease;
        }

        .slide-nav-button:hover {
          background: rgba(59, 130, 246, 0.28);
          transform: translateY(-50%) translateX(2px);
        }
      `}</style>
      <div className="slide-container">
        <div className="bg-grid"></div>
        <div className="glow-1"></div>
        <div className="glow-2"></div>
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
          <div className="badge">
            <div className="badge-dot"></div>
            <span className="badge-text">
              DominAite Accelerator · Technical Discussion
            </span>
          </div>
          <div className="main-title">
            AI-Native <span>Warehouse</span>
            <br />
            Infrastructure
          </div>
          <div className="subtitle">
            Digitizing <strong>$37.8B</strong> of underutilized warehouse
            capacity across Saudi Arabia with intelligent matching,
            compliance-first design, and full transaction infrastructure
          </div>
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-header">
                <div className="stat-icon">
                  <i className="fas fa-warehouse"></i>
                </div>
                <div className="stat-change">+47%</div>
              </div>
              <div className="stat-value">$37.8B</div>
              <div className="stat-label">Logistics Market Size</div>
            </div>
            <div className="stat-card">
              <div className="stat-header">
                <div className="stat-icon">
                  <i className="fas fa-chart-line"></i>
                </div>
                <div className="stat-change">+10%</div>
              </div>
              <div className="stat-value">10.94%</div>
              <div className="stat-label">Annual Growth Rate</div>
            </div>
            <div className="stat-card">
              <div className="stat-header">
                <div className="stat-icon">
                  <i className="fas fa-shopping-cart"></i>
                </div>
                <div className="stat-change">+17%</div>
              </div>
              <div className="stat-value">$3.77B</div>
              <div className="stat-label">E-commerce by 2030</div>
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
            <div className="social-link">
              <i className="fas fa-envelope"></i>
            </div>
            <div className="social-link">
              <i className="fas fa-globe"></i>
            </div>
            <div className="social-link">
              <i className="fas fa-phone"></i>
            </div>
          </div>
        </div>
        <Link
          className="slide-nav-button"
          href="/vision"
          aria-label="Go to vision slide"
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
