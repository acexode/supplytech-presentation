import Link from "next/link";
import SupplyTechLogo from "../components/SupplyTechLogo";

export default function AcceleratorOpportunityPage() {
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
          font-size: 44px;
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
          grid-template-columns: 1fr 1fr;
          gap: 32px;
          height: 438px;
        }

        .left-panel {
          display: flex;
          flex-direction: column;
        }

        .bring-card,
        .seek-card,
        .milestones-card {
          background: white;
          border-radius: 16px;
          box-shadow:
            0 10px 15px -3px rgba(0, 0, 0, 0.05),
            0 4px 6px -2px rgba(0, 0, 0, 0.05);
          border: 1px solid #e2e8f0;
        }

        .bring-card {
          padding: 28px;
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 22px;
        }

        .card-title {
          font-size: 22px;
          font-weight: 700;
          color: #1e293b;
        }

        .card-badge {
          background: rgba(59, 130, 246, 0.1);
          color: #3b82f6;
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
          margin-bottom: auto;
        }

        .feature-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 16px;
          background: rgba(59, 130, 246, 0.04);
          border-radius: 12px;
          border: 1px solid rgba(59, 130, 246, 0.08);
        }

        .feature-icon {
          width: 36px;
          height: 36px;
          background: rgba(59, 130, 246, 0.1);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #3b82f6;
          font-size: 14px;
          flex-shrink: 0;
        }

        .feature-text {
          flex: 1;
        }

        .feature-name {
          font-size: 15px;
          font-weight: 600;
          color: #1e293b;
          margin-bottom: 4px;
        }

        .feature-desc {
          font-size: 12px;
          line-height: 1.4;
          color: #64748b;
        }

        .ready-note {
          margin-top: 22px;
          font-size: 14px;
          color: #475569;
          font-weight: 500;
          display: flex;
          align-items: center;
          border-top: 1px solid #f1f5f9;
          padding-top: 18px;
        }

        .ready-note i {
          color: #10b981;
          margin-right: 10px;
          font-size: 16px;
        }

        .right-panel {
          display: flex;
          flex-direction: column;
          gap: 22px;
        }

        .seek-card {
          padding: 28px;
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .seek-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
        }

        .seek-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 16px;
          background: rgba(16, 185, 129, 0.04);
          border-radius: 10px;
          border: 1px solid rgba(16, 185, 129, 0.08);
        }

        .seek-icon {
          width: 32px;
          height: 32px;
          background: rgba(16, 185, 129, 0.1);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #10b981;
          font-size: 14px;
          flex-shrink: 0;
        }

        .seek-text {
          font-size: 14px;
          font-weight: 500;
          color: #1e293b;
        }

        .milestones-card {
          padding: 22px 24px;
        }

        .milestones-title {
          font-size: 18px;
          font-weight: 700;
          color: #1e293b;
          margin-bottom: 16px;
        }

        .milestones-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 12px;
        }

        .milestone-item {
          text-align: center;
          padding: 14px 8px;
          background: rgba(59, 130, 246, 0.04);
          border-radius: 12px;
          border: 1px solid rgba(59, 130, 246, 0.08);
        }

        .milestone-value {
          font-size: 22px;
          font-weight: 800;
          color: #3b82f6;
          margin-bottom: 4px;
        }

        .milestone-label {
          font-size: 12px;
          color: #64748b;
          font-weight: 500;
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
          <div className="section-title">Accelerator Opportunity</div>
          <div className="section-subtitle">
            What we bring, what we seek, and our 6-9 month milestones
          </div>
          <div className="content-grid">
            <div className="left-panel">
              <div className="bring-card">
                <div className="card-header">
                  <div className="card-title">What We Bring</div>
                  <div className="card-badge">Ready</div>
                </div>
                <div className="features-grid">
                  <div className="feature-item">
                    <div className="feature-icon">
                      <i className="fas fa-cubes"></i>
                    </div>
                    <div className="feature-text">
                      <div className="feature-name">Production Platform</div>
                      <div className="feature-desc">
                        Full WaaS infrastructure with 20+ modules
                      </div>
                    </div>
                  </div>
                  <div className="feature-item">
                    <div className="feature-icon">
                      <i className="fas fa-shield-alt"></i>
                    </div>
                    <div className="feature-text">
                      <div className="feature-name">KSA Compliance</div>
                      <div className="feature-desc">
                        Identity verification, VAT, RTL support
                      </div>
                    </div>
                  </div>
                  <div className="feature-item">
                    <div className="feature-icon">
                      <i className="fas fa-robot"></i>
                    </div>
                    <div className="feature-text">
                      <div className="feature-name">AI Operations Layer</div>
                      <div className="feature-desc">
                        Smart matching, predictive analytics
                      </div>
                    </div>
                  </div>
                  <div className="feature-item">
                    <div className="feature-icon">
                      <i className="fas fa-rocket"></i>
                    </div>
                    <div className="feature-text">
                      <div className="feature-name">Pilot-Ready</div>
                      <div className="feature-desc">
                        Live transactions, enterprise-grade
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ready-note">
                  <i className="fas fa-check-circle"></i>
                  <span>Production-ready platform with real transactions</span>
                </div>
              </div>
            </div>
            <div className="right-panel">
              <div className="seek-card">
                <div className="card-header">
                  <div className="card-title">What We Seek</div>
                  <div className="card-badge">Partnership</div>
                </div>
                <div className="seek-grid">
                  <div className="seek-item">
                    <div className="seek-icon">
                      <i className="fas fa-handshake"></i>
                    </div>
                    <div className="seek-text">Pilots with owners/3PLs</div>
                  </div>
                  <div className="seek-item">
                    <div className="seek-icon">
                      <i className="fas fa-building"></i>
                    </div>
                    <div className="seek-text">Enterprise tenant intros</div>
                  </div>
                  <div className="seek-item">
                    <div className="seek-icon">
                      <i className="fas fa-database"></i>
                    </div>
                    <div className="seek-text">Data partnerships</div>
                  </div>
                  <div className="seek-item">
                    <div className="seek-icon">
                      <i className="fas fa-cloud"></i>
                    </div>
                    <div className="seek-text">Cloud credits</div>
                  </div>
                  <div className="seek-item">
                    <div className="seek-icon">
                      <i className="fas fa-balance-scale"></i>
                    </div>
                    <div className="seek-text">Regulatory guidance</div>
                  </div>
                  <div className="seek-item">
                    <div className="seek-icon">
                      <i className="fas fa-bullhorn"></i>
                    </div>
                    <div className="seek-text">Co-marketing</div>
                  </div>
                </div>
              </div>
              <div className="milestones-card">
                <div className="milestones-title">6-9 Month Milestones</div>
                <div className="milestones-grid">
                  <div className="milestone-item">
                    <div className="milestone-value">50+</div>
                    <div className="milestone-label">Verified Warehouses</div>
                  </div>
                  <div className="milestone-item">
                    <div className="milestone-value">100+</div>
                    <div className="milestone-label">Active Tenants</div>
                  </div>
                  <div className="milestone-item">
                    <div className="milestone-value">1,000+</div>
                    <div className="milestone-label">Bookings</div>
                  </div>
                  <div className="milestone-item">
                    <div className="milestone-value">Beta</div>
                    <div className="milestone-label">Dynamic Pricing</div>
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
            <span>Page 12 of 13</span>
          </div>
        </div>
        <Link
          className="slide-nav-button slide-nav-left"
          href="/optimizing-network"
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
          href="/lets-build"
          aria-label="Go to lets build slide"
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
