import Link from "next/link";
import SupplyTechLogo from "../components/SupplyTechLogo";

export default function HowItWorksPage() {
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
          font-size: 48px;
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

        .workflow-container {
          background: white;
          border-radius: 24px;
          padding: 28px 34px;
          box-shadow:
            0 10px 15px -3px rgba(0, 0, 0, 0.05),
            0 4px 6px -2px rgba(0, 0, 0, 0.05);
          border: 1px solid #e2e8f0;
          height: 446px;
        }

        .workflow-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 24px;
          padding-bottom: 16px;
          border-bottom: 1px solid #e2e8f0;
        }

        .workflow-title {
          font-size: 26px;
          font-weight: 700;
          color: #1e293b;
        }

        .workflow-stats {
          display: flex;
          gap: 32px;
        }

        .stat-item {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .stat-value {
          font-size: 18px;
          font-weight: 700;
          color: #3b82f6;
        }

        .stat-label {
          font-size: 14px;
          color: #64748b;
        }

        .workflow-timeline {
          display: flex;
          justify-content: space-between;
          margin-bottom: 24px;
          position: relative;
        }

        .workflow-timeline::before {
          content: "";
          position: absolute;
          top: 22px;
          left: 40px;
          right: 40px;
          height: 4px;
          background: linear-gradient(90deg, #3b82f6, #8b5cf6);
          border-radius: 2px;
          z-index: 1;
        }

        .timeline-phase {
          flex: 1;
          text-align: center;
          position: relative;
          z-index: 2;
        }

        .phase-dot {
          width: 44px;
          height: 44px;
          background: white;
          border: 4px solid #3b82f6;
          border-radius: 50%;
          margin: 0 auto 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #3b82f6;
          font-size: 18px;
          font-weight: 700;
        }

        .phase-label {
          font-size: 16px;
          font-weight: 700;
          color: #1e293b;
          margin-bottom: 4px;
        }

        .phase-count {
          font-size: 13px;
          color: #64748b;
        }

        .states-grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 16px;
          margin-top: 24px;
        }

        .state-card {
          background: rgba(59, 130, 246, 0.05);
          border: 1px solid rgba(59, 130, 246, 0.2);
          border-radius: 12px;
          padding: 14px 12px;
          text-align: center;
          transition: all 0.3s ease;
        }

        .state-card:hover {
          background: rgba(59, 130, 246, 0.1);
          transform: translateY(-2px);
        }

        .state-icon {
          width: 34px;
          height: 34px;
          background: rgba(59, 130, 246, 0.1);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 8px;
          color: #3b82f6;
          font-size: 16px;
        }

        .state-name {
          font-size: 14px;
          font-weight: 600;
          color: #1e293b;
          margin-bottom: 4px;
        }

        .state-desc {
          font-size: 11px;
          color: #64748b;
          line-height: 1.3;
        }

        .features-row {
          display: flex;
          justify-content: space-between;
          margin-top: 24px;
          padding-top: 18px;
          border-top: 1px solid #e2e8f0;
        }

        .feature-group {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .feature-item {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 16px;
          background: rgba(59, 130, 246, 0.05);
          border-radius: 10px;
          font-size: 13px;
          font-weight: 500;
          color: #1e293b;
        }

        .feature-icon {
          color: #3b82f6;
          font-size: 14px;
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
          padding: 8px 18px;
          border-radius: 20px;
          border: 1px solid #e2e8f0;
          font-size: 14px;
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
          <div className="section-title">How It Works</div>
          <div className="section-subtitle">
            17-state quotation lifecycle from discovery to delivery with full
            transaction support
          </div>
          <div className="workflow-container">
            <div className="workflow-header">
              <div className="workflow-title">Transaction Lifecycle</div>
              <div className="workflow-stats">
                <div className="stat-item">
                  <span className="stat-value">17</span>
                  <span className="stat-label">states</span>
                </div>
                <div className="stat-item">
                  <span className="stat-value">48hrs</span>
                  <span className="stat-label">avg. completion</span>
                </div>
                <div className="stat-item">
                  <span className="stat-value">99.9%</span>
                  <span className="stat-label">success rate</span>
                </div>
              </div>
            </div>
            <div className="workflow-timeline">
              <div className="timeline-phase">
                <div className="phase-dot">1</div>
                <div className="phase-label">Discovery</div>
                <div className="phase-count">4 states</div>
              </div>
              <div className="timeline-phase">
                <div className="phase-dot">2</div>
                <div className="phase-label">Contract</div>
                <div className="phase-count">5 states</div>
              </div>
              <div className="timeline-phase">
                <div className="phase-dot">3</div>
                <div className="phase-label">Operations</div>
                <div className="phase-count">5 states</div>
              </div>
              <div className="timeline-phase">
                <div className="phase-dot">4</div>
                <div className="phase-label">Fulfillment</div>
                <div className="phase-count">3 states</div>
              </div>
            </div>
            <div className="states-grid">
              <div className="state-card">
                <div className="state-icon">
                  <i className="fas fa-search"></i>
                </div>
                <div className="state-name">Discover</div>
                <div className="state-desc">Find available spaces</div>
              </div>
              <div className="state-card">
                <div className="state-icon">
                  <i className="fas fa-file-invoice"></i>
                </div>
                <div className="state-name">Quote</div>
                <div className="state-desc">Get pricing</div>
              </div>
              <div className="state-card">
                <div className="state-icon">
                  <i className="fas fa-check-circle"></i>
                </div>
                <div className="state-name">Approve</div>
                <div className="state-desc">Confirm terms</div>
              </div>
              <div className="state-card">
                <div className="state-icon">
                  <i className="fas fa-file-signature"></i>
                </div>
                <div className="state-name">Contract</div>
                <div className="state-desc">Sign agreement</div>
              </div>
              <div className="state-card">
                <div className="state-icon">
                  <i className="fas fa-credit-card"></i>
                </div>
                <div className="state-name">Pay</div>
                <div className="state-desc">Complete payment</div>
              </div>
              <div className="state-card">
                <div className="state-icon">
                  <i className="fas fa-truck"></i>
                </div>
                <div className="state-name">Deliver</div>
                <div className="state-desc">Schedule delivery</div>
              </div>
            </div>
            <div className="features-row">
              <div className="feature-group">
                <div className="feature-item">
                  <i className="fas fa-signature feature-icon"></i>
                  <span>E-signatures</span>
                </div>
                <div className="feature-item">
                  <i className="fas fa-percentage feature-icon"></i>
                  <span>15% VAT</span>
                </div>
                <div className="feature-item">
                  <i className="fas fa-shield-alt feature-icon"></i>
                  <span>Insurance</span>
                </div>
              </div>
              <div className="feature-group">
                <div className="feature-item">
                  <i className="fas fa-file-pdf feature-icon"></i>
                  <span>PDF Generation</span>
                </div>
                <div className="feature-item">
                  <i className="fas fa-bell feature-icon"></i>
                  <span>Notifications</span>
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
            <span>Page 6 of 13</span>
          </div>
        </div>
        <Link
          className="slide-nav-button slide-nav-left"
          href="/solution"
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
          href="/built-for-saudi"
          aria-label="Go to built for Saudi slide"
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
