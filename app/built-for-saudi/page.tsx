import Link from "next/link";
import SupplyTechLogo from "../components/SupplyTechLogo";

export default function BuiltForSaudiPage() {
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

        .compliance-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 20px;
          margin-bottom: 22px;
        }

        .compliance-card {
          background: white;
          border-radius: 16px;
          padding: 20px;
          box-shadow:
            0 10px 15px -3px rgba(0, 0, 0, 0.05),
            0 4px 6px -2px rgba(0, 0, 0, 0.05);
          border: 1px solid #e2e8f0;
          position: relative;
          overflow: hidden;
          height: 270px;
          display: flex;
          flex-direction: column;
        }

        .compliance-card::before {
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
          margin-bottom: 14px;
        }

        .card-icon {
          width: 42px;
          height: 42px;
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
          font-size: 12px;
          font-weight: 600;
        }

        .card-title {
          font-size: 18px;
          font-weight: 700;
          color: #1e293b;
          margin-bottom: 8px;
          letter-spacing: -0.3px;
        }

        .card-description {
          font-size: 13px;
          color: #64748b;
          line-height: 1.42;
          margin-bottom: 14px;
        }

        .feature-list {
          display: flex;
          flex-direction: column;
          gap: 9px;
          margin-top: auto;
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
          grid-template-columns: 2.1fr 0.9fr;
          gap: 24px;
        }

        .bottom-card {
          background: white;
          border-radius: 16px;
          padding: 20px 24px;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
          border: 1px solid #e2e8f0;
          min-height: 124px;
        }

        .bottom-card-title {
          font-size: 18px;
          font-weight: 700;
          color: #1e293b;
          margin-bottom: 16px;
        }

        .compliance-flow {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-top: 8px;
        }

        .flow-step {
          flex: 1;
          text-align: center;
          padding: 12px;
          background: rgba(59, 130, 246, 0.05);
          border-radius: 10px;
          border: 1px solid rgba(59, 130, 246, 0.1);
        }

        .step-number {
          font-size: 14px;
          font-weight: 700;
          color: #3b82f6;
          margin-bottom: 4px;
        }

        .step-label {
          font-size: 11px;
          color: #64748b;
        }

        .flow-arrow {
          color: #cbd5e1;
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
          <div className="section-title">Built for Saudi Arabia</div>
          <div className="section-subtitle">
            Compliance-first platform with KSA-specific features for identity,
            finance, and localization
          </div>
          <div className="compliance-grid">
            <div className="compliance-card">
              <div className="card-header">
                <div className="card-icon">
                  <i className="fas fa-id-card"></i>
                </div>
                <div className="card-badge">Verified</div>
              </div>
              <div className="card-title">Identity Verification</div>
              <div className="card-description">
                National ID / Iqama verification + UNN business license
                validation for secure transactions.
              </div>
              <div className="feature-list">
                <div className="feature-item">
                  <i className="fas fa-check"></i>
                  <span className="feature-text">National ID validation</span>
                </div>
                <div className="feature-item">
                  <i className="fas fa-check"></i>
                  <span className="feature-text">Iqama verification</span>
                </div>
                <div className="feature-item">
                  <i className="fas fa-check"></i>
                  <span className="feature-text">UNN business check</span>
                </div>
              </div>
            </div>
            <div className="compliance-card">
              <div className="card-header">
                <div className="card-icon">
                  <i className="fas fa-calendar-alt"></i>
                </div>
                <div className="card-badge">Dual</div>
              </div>
              <div className="card-title">Calendar Support</div>
              <div className="card-description">
                Hijri and Gregorian calendar systems for identity flows and
                contract management.
              </div>
              <div className="feature-list">
                <div className="feature-item">
                  <i className="fas fa-check"></i>
                  <span className="feature-text">Hijri calendar</span>
                </div>
                <div className="feature-item">
                  <i className="fas fa-check"></i>
                  <span className="feature-text">Gregorian calendar</span>
                </div>
                <div className="feature-item">
                  <i className="fas fa-check"></i>
                  <span className="feature-text">Date conversion</span>
                </div>
              </div>
            </div>
            <div className="compliance-card">
              <div className="card-header">
                <div className="card-icon">
                  <i className="fas fa-coins"></i>
                </div>
                <div className="card-badge">15% VAT</div>
              </div>
              <div className="card-title">Financial Compliance</div>
              <div className="card-description">
                SAR pricing with 15% VAT, itemized invoices, and automated tax
                calculations.
              </div>
              <div className="feature-list">
                <div className="feature-item">
                  <i className="fas fa-check"></i>
                  <span className="feature-text">SAR currency</span>
                </div>
                <div className="feature-item">
                  <i className="fas fa-check"></i>
                  <span className="feature-text">15% VAT</span>
                </div>
                <div className="feature-item">
                  <i className="fas fa-check"></i>
                  <span className="feature-text">Itemized invoices</span>
                </div>
              </div>
            </div>
            <div className="compliance-card">
              <div className="card-header">
                <div className="card-icon">
                  <i className="fas fa-language"></i>
                </div>
                <div className="card-badge">RTL</div>
              </div>
              <div className="card-title">Bilingual UX</div>
              <div className="card-description">
                Full Arabic and English support with RTL-native interface
                design.
              </div>
              <div className="feature-list">
                <div className="feature-item">
                  <i className="fas fa-check"></i>
                  <span className="feature-text">Arabic (AR)</span>
                </div>
                <div className="feature-item">
                  <i className="fas fa-check"></i>
                  <span className="feature-text">English (EN)</span>
                </div>
                <div className="feature-item">
                  <i className="fas fa-check"></i>
                  <span className="feature-text">RTL layout</span>
                </div>
              </div>
            </div>
            <div className="compliance-card">
              <div className="card-header">
                <div className="card-icon">
                  <i className="fas fa-shield-alt"></i>
                </div>
                <div className="card-badge">Secure</div>
              </div>
              <div className="card-title">Trust &amp; Verification</div>
              <div className="card-description">
                Warehouse verification and admin approval before public
                listing.
              </div>
              <div className="feature-list">
                <div className="feature-item">
                  <i className="fas fa-check"></i>
                  <span className="feature-text">Warehouse verification</span>
                </div>
                <div className="feature-item">
                  <i className="fas fa-check"></i>
                  <span className="feature-text">Admin approval</span>
                </div>
                <div className="feature-item">
                  <i className="fas fa-check"></i>
                  <span className="feature-text">Quality scoring</span>
                </div>
              </div>
            </div>
          </div>
          <div className="bottom-section">
            <div className="bottom-card">
              <div className="bottom-card-title">Verification Process</div>
              <div className="compliance-flow">
                <div className="flow-step">
                  <div className="step-number">1</div>
                  <div className="step-label">Upload Docs</div>
                </div>
                <div className="flow-arrow">
                  <i className="fas fa-arrow-right"></i>
                </div>
                <div className="flow-step">
                  <div className="step-number">2</div>
                  <div className="step-label">Verify Identity</div>
                </div>
                <div className="flow-arrow">
                  <i className="fas fa-arrow-right"></i>
                </div>
                <div className="flow-step">
                  <div className="step-number">3</div>
                  <div className="step-label">Business Check</div>
                </div>
                <div className="flow-arrow">
                  <i className="fas fa-arrow-right"></i>
                </div>
                <div className="flow-step">
                  <div className="step-number">4</div>
                  <div className="step-label">Approval</div>
                </div>
              </div>
            </div>
            <div className="bottom-card">
              <div className="bottom-card-title">Compliance Status</div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: "14px",
                }}
              >
                <span style={{ fontSize: "14px", color: "#64748b" }}>
                  Identity
                </span>
                <span
                  style={{
                    fontSize: "14px",
                    fontWeight: 700,
                    color: "#1e293b",
                  }}
                >
                  100%
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: "10px",
                }}
              >
                <span style={{ fontSize: "14px", color: "#64748b" }}>
                  Finance
                </span>
                <span
                  style={{
                    fontSize: "14px",
                    fontWeight: 700,
                    color: "#1e293b",
                  }}
                >
                  100%
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: "10px",
                }}
              >
                <span style={{ fontSize: "14px", color: "#64748b" }}>
                  Language
                </span>
                <span
                  style={{
                    fontSize: "14px",
                    fontWeight: 700,
                    color: "#1e293b",
                  }}
                >
                  100%
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
            <span>Page 7 of 13</span>
          </div>
        </div>
        <Link
          className="slide-nav-button slide-nav-left"
          href="/how-it-works"
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
          href="/ai-intelligence"
          aria-label="Go to AI intelligence slide"
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
