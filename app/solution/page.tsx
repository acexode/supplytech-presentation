import Link from "next/link";
import SupplyTechLogo from "../components/SupplyTechLogo";

export default function SolutionPage() {
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

        .platform-overview {
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: 28px;
        }

        .left-panel {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .platform-card {
          background: white;
          border-radius: 16px;
          padding: 20px 22px;
          box-shadow:
            0 10px 15px -3px rgba(0, 0, 0, 0.05),
            0 4px 6px -2px rgba(0, 0, 0, 0.05);
          border: 1px solid #e2e8f0;
        }

        .card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 14px;
        }

        .card-title {
          font-size: 20px;
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

        .feature-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .feature-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 10px;
          background: rgba(59, 130, 246, 0.05);
          border-radius: 10px;
        }

        .feature-icon {
          width: 34px;
          height: 34px;
          background: rgba(59, 130, 246, 0.1);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #3b82f6;
          font-size: 14px;
        }

        .feature-text {
          flex: 1;
        }

        .feature-label {
          font-size: 14px;
          font-weight: 600;
          color: #1e293b;
        }

        .feature-desc {
          font-size: 12px;
          color: #64748b;
        }

        .right-panel {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .transaction-flow {
          background: white;
          border-radius: 16px;
          padding: 20px 22px;
          box-shadow:
            0 10px 15px -3px rgba(0, 0, 0, 0.05),
            0 4px 6px -2px rgba(0, 0, 0, 0.05);
          border: 1px solid #e2e8f0;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .flow-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          margin-bottom: 18px;
        }

        .flow-title {
          font-size: 20px;
          font-weight: 700;
          color: #1e293b;
        }

        .flow-subtitle {
          font-size: 14px;
          color: #64748b;
        }

        .flow-diagram {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 24px;
        }

        .flow-step {
          flex: 1;
          text-align: center;
          padding: 12px 8px;
          background: rgba(59, 130, 246, 0.03);
          border-radius: 12px;
          border: 1.5px solid #e2e8f0;
          transition: all 0.3s ease;
        }

        .flow-step.active {
          background: white;
          border-color: #3b82f6;
          box-shadow: 0 4px 6px -1px rgba(59, 130, 246, 0.1);
        }

        .step-icon {
          width: 38px;
          height: 38px;
          background: rgba(59, 130, 246, 0.1);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 8px;
          color: #3b82f6;
          font-size: 16px;
        }

        .step-label {
          font-size: 14px;
          font-weight: 700;
          color: #1e293b;
          margin-bottom: 4px;
        }

        .step-desc {
          font-size: 11px;
          color: #64748b;
          line-height: 1.2;
        }

        .flow-arrow {
          color: #cbd5e1;
          font-size: 14px;
        }

        .portal-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
        }

        .portal-card {
          background: white;
          border-radius: 12px;
          padding: 18px;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
          border: 1px solid #e2e8f0;
        }

        .portal-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 14px;
        }

        .portal-icon {
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

        .portal-title {
          font-size: 16px;
          font-weight: 700;
          color: #1e293b;
        }

        .portal-features {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .portal-tag {
          background: rgba(59, 130, 246, 0.05);
          color: #3b82f6;
          padding: 6px 10px;
          border-radius: 6px;
          font-size: 12px;
          font-weight: 600;
          border: 1px solid rgba(59, 130, 246, 0.1);
          text-align: center;
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
          <div className="section-title">
            The Solution: AI-Native WaaS Platform
          </div>
          <div className="section-subtitle">
            Two-sided marketplace + full transaction infrastructure for Saudi
            Arabia&apos;s logistics ecosystem
          </div>
          <div className="platform-overview">
            <div className="left-panel">
              <div className="platform-card">
                <div className="card-header">
                  <div className="card-title">Platform Architecture</div>
                  <div className="card-badge">Production</div>
                </div>
                <div className="feature-list">
                  <div className="feature-item">
                    <div className="feature-icon">
                      <i className="fas fa-exchange-alt"></i>
                    </div>
                    <div className="feature-text">
                      <div className="feature-label">Two-sided Marketplace</div>
                      <div className="feature-desc">
                        Owners + Tenants + Admin portals
                      </div>
                    </div>
                  </div>
                  <div className="feature-item">
                    <div className="feature-icon">
                      <i className="fas fa-file-contract"></i>
                    </div>
                    <div className="feature-text">
                      <div className="feature-label">Full Transaction Rail</div>
                      <div className="feature-desc">
                        Quotes → Contracts → Payments
                      </div>
                    </div>
                  </div>
                  <div className="feature-item">
                    <div className="feature-icon">
                      <i className="fas fa-shield-alt"></i>
                    </div>
                    <div className="feature-text">
                      <div className="feature-label">KSA Compliance</div>
                      <div className="feature-desc">
                        National ID/Iqama + UNN verification
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="platform-card">
                <div className="card-header">
                  <div className="card-title">Key Capabilities</div>
                  <div className="card-badge">17 States</div>
                </div>
                <div className="feature-list">
                  <div className="feature-item">
                    <div className="feature-icon">
                      <i className="fas fa-check-circle"></i>
                    </div>
                    <div className="feature-text">
                      <div className="feature-label">End-to-end Workflow</div>
                      <div className="feature-desc">
                        Discovery to delivery tracking
                      </div>
                    </div>
                  </div>
                  <div className="feature-item">
                    <div className="feature-icon">
                      <i className="fas fa-robot"></i>
                    </div>
                    <div className="feature-text">
                      <div className="feature-label">AI-Powered Matching</div>
                      <div className="feature-desc">
                        Smart warehouse recommendations
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="right-panel">
              <div className="transaction-flow">
                <div className="flow-header">
                  <div>
                    <div className="flow-title">Transaction Flow</div>
                    <div className="flow-subtitle">
                      17-state quotation lifecycle
                    </div>
                  </div>
                  <div
                    className="flow-subtitle"
                    style={{ fontWeight: 600, color: "#3b82f6" }}
                  >
                    Real-time tracking
                  </div>
                </div>
                <div className="flow-diagram">
                  <div className="flow-step active">
                    <div className="step-icon">
                      <i className="fas fa-search"></i>
                    </div>
                    <div className="step-label">Discover</div>
                    <div className="step-desc">Find spaces</div>
                  </div>
                  <div className="flow-arrow">
                    <i className="fas fa-chevron-right"></i>
                  </div>
                  <div className="flow-step">
                    <div className="step-icon">
                      <i className="fas fa-file-invoice"></i>
                    </div>
                    <div className="step-label">Quote</div>
                    <div className="step-desc">Get pricing</div>
                  </div>
                  <div className="flow-arrow">
                    <i className="fas fa-chevron-right"></i>
                  </div>
                  <div className="flow-step">
                    <div className="step-icon">
                      <i className="fas fa-check-circle"></i>
                    </div>
                    <div className="step-label">Approve</div>
                    <div className="step-desc">Confirm terms</div>
                  </div>
                  <div className="flow-arrow">
                    <i className="fas fa-chevron-right"></i>
                  </div>
                  <div className="flow-step">
                    <div className="step-icon">
                      <i className="fas fa-file-signature"></i>
                    </div>
                    <div className="step-label">Contract</div>
                    <div className="step-desc">Sign agreement</div>
                  </div>
                  <div className="flow-arrow">
                    <i className="fas fa-chevron-right"></i>
                  </div>
                  <div className="flow-step">
                    <div className="step-icon">
                      <i className="fas fa-credit-card"></i>
                    </div>
                    <div className="step-label">Pay</div>
                    <div className="step-desc">Complete payment</div>
                  </div>
                </div>
                <div className="portal-grid">
                  <div className="portal-card">
                    <div className="portal-header">
                      <div className="portal-icon">
                        <i className="fas fa-building"></i>
                      </div>
                      <div className="portal-title">Space Owners</div>
                    </div>
                    <div className="portal-features">
                      <div className="portal-tag">List warehouses</div>
                      <div className="portal-tag">Pricing control</div>
                      <div className="portal-tag">Bookings</div>
                    </div>
                  </div>
                  <div className="portal-card">
                    <div className="portal-header">
                      <div className="portal-icon">
                        <i className="fas fa-users"></i>
                      </div>
                      <div className="portal-title">Tenants</div>
                    </div>
                    <div className="portal-features">
                      <div className="portal-tag">Marketplace search</div>
                      <div className="portal-tag">Quotations</div>
                      <div className="portal-tag">Payments</div>
                    </div>
                  </div>
                  <div className="portal-card">
                    <div className="portal-header">
                      <div className="portal-icon">
                        <i className="fas fa-user-shield"></i>
                      </div>
                      <div className="portal-title">Admin</div>
                    </div>
                    <div className="portal-features">
                      <div className="portal-tag">Approvals</div>
                      <div className="portal-tag">Disputes</div>
                      <div className="portal-tag">Oversight</div>
                    </div>
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
            <span>Page 5 of 13</span>
          </div>
        </div>
        <Link
          className="slide-nav-button slide-nav-left"
          href="/opportunity"
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
          href="/how-it-works"
          aria-label="Go to how it works slide"
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
