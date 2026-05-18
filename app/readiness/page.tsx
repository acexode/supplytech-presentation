import Link from "next/link";
import SupplyTechLogo from "../components/SupplyTechLogo";

export default function ReadinessPage() {
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
          grid-template-columns: 1.1fr 0.9fr;
          gap: 24px;
          height: 438px;
        }

        .left-panel {
          display: flex;
          flex-direction: column;
        }

        .modules-card,
        .tech-stack-card,
        .architecture-card {
          background: white;
          border-radius: 16px;
          padding: 20px 22px;
          box-shadow:
            0 10px 15px -3px rgba(0, 0, 0, 0.05),
            0 4px 6px -2px rgba(0, 0, 0, 0.05);
          border: 1px solid #e2e8f0;
        }

        .modules-card {
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 18px;
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

        .modules-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
          flex: 1;
        }

        .module-item {
          background: rgba(59, 130, 246, 0.04);
          border: 1px solid rgba(59, 130, 246, 0.08);
          border-radius: 10px;
          padding: 12px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
        }

        .module-icon {
          width: 32px;
          height: 32px;
          background: rgba(59, 130, 246, 0.1);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 8px;
          color: #3b82f6;
          font-size: 14px;
        }

        .module-name {
          font-size: 14px;
          font-weight: 600;
          color: #1e293b;
          margin-bottom: 2px;
        }

        .module-status {
          font-size: 11px;
          color: #64748b;
        }

        .right-panel {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .tech-stack-card,
        .architecture-card {
          flex: 1;
        }

        .stack-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
          margin-top: 12px;
        }

        .stack-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 11px 12px;
          background: rgba(59, 130, 246, 0.04);
          border-radius: 10px;
          border: 1px solid rgba(59, 130, 246, 0.08);
        }

        .stack-icon {
          width: 36px;
          height: 36px;
          background: rgba(59, 130, 246, 0.1);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #3b82f6;
          font-size: 16px;
        }

        .stack-text {
          flex: 1;
        }

        .stack-name {
          font-size: 13px;
          font-weight: 700;
          color: #1e293b;
        }

        .stack-version {
          font-size: 11px;
          color: #64748b;
        }

        .architecture-diagram {
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-top: 12px;
        }

        .arch-layer {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 8px 12px;
          background: rgba(59, 130, 246, 0.04);
          border-radius: 10px;
          border: 1px solid rgba(59, 130, 246, 0.08);
        }

        .arch-label {
          font-size: 13px;
          font-weight: 700;
          color: #1e293b;
          min-width: 70px;
        }

        .arch-components {
          display: flex;
          gap: 6px;
          flex: 1;
        }

        .arch-item {
          flex: 1;
          text-align: center;
          padding: 6px 4px;
          background: white;
          border-radius: 6px;
          font-size: 11px;
          color: #64748b;
          font-weight: 500;
          border: 1px solid #e2e8f0;
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
          <div className="section-title">Product Maturity &amp; Readiness</div>
          <div className="section-subtitle">
            Production-grade platform with 20+ modules, enterprise stack, and
            modular architecture
          </div>
          <div className="content-grid">
            <div className="left-panel">
              <div className="modules-card">
                <div className="card-header">
                  <div className="card-title">Production Modules</div>
                  <div className="card-badge">20+ Modules</div>
                </div>
                <div className="modules-grid">
                  <div className="module-item">
                    <div className="module-icon">
                      <i className="fas fa-store"></i>
                    </div>
                    <div className="module-name">Marketplace</div>
                    <div className="module-status">Active</div>
                  </div>
                  <div className="module-item">
                    <div className="module-icon">
                      <i className="fas fa-building"></i>
                    </div>
                    <div className="module-name">Warehouses</div>
                    <div className="module-status">Active</div>
                  </div>
                  <div className="module-item">
                    <div className="module-icon">
                      <i className="fas fa-file-invoice"></i>
                    </div>
                    <div className="module-name">Quotations</div>
                    <div className="module-status">Active</div>
                  </div>
                  <div className="module-item">
                    <div className="module-icon">
                      <i className="fas fa-file-contract"></i>
                    </div>
                    <div className="module-name">Contracts</div>
                    <div className="module-status">Active</div>
                  </div>
                  <div className="module-item">
                    <div className="module-icon">
                      <i className="fas fa-file-invoice-dollar"></i>
                    </div>
                    <div className="module-name">Invoices</div>
                    <div className="module-status">Active</div>
                  </div>
                  <div className="module-item">
                    <div className="module-icon">
                      <i className="fas fa-credit-card"></i>
                    </div>
                    <div className="module-name">Payments</div>
                    <div className="module-status">Active</div>
                  </div>
                  <div className="module-item">
                    <div className="module-icon">
                      <i className="fas fa-shopping-cart"></i>
                    </div>
                    <div className="module-name">Orders</div>
                    <div className="module-status">Active</div>
                  </div>
                  <div className="module-item">
                    <div className="module-icon">
                      <i className="fas fa-truck"></i>
                    </div>
                    <div className="module-name">Delivery</div>
                    <div className="module-status">Active</div>
                  </div>
                  <div className="module-item">
                    <div className="module-icon">
                      <i className="fas fa-headset"></i>
                    </div>
                    <div className="module-name">Support</div>
                    <div className="module-status">Active</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="right-panel">
              <div className="tech-stack-card">
                <div className="card-header">
                  <div className="card-title">Technology Stack</div>
                  <div className="card-badge">Production</div>
                </div>
                <div className="stack-grid">
                  <div className="stack-item">
                    <div className="stack-icon">
                      <i className="fab fa-react"></i>
                    </div>
                    <div className="stack-text">
                      <div className="stack-name">Next.js 15</div>
                      <div className="stack-version">React 19</div>
                    </div>
                  </div>
                  <div className="stack-item">
                    <div className="stack-icon">
                      <i className="fab fa-node"></i>
                    </div>
                    <div className="stack-text">
                      <div className="stack-name">NestJS</div>
                      <div className="stack-version">TypeORM</div>
                    </div>
                  </div>
                  <div className="stack-item">
                    <div className="stack-icon">
                      <i className="fas fa-database"></i>
                    </div>
                    <div className="stack-text">
                      <div className="stack-name">MySQL 8</div>
                      <div className="stack-version">TypeORM</div>
                    </div>
                  </div>
                  <div className="stack-item">
                    <div className="stack-icon">
                      <i className="fab fa-docker"></i>
                    </div>
                    <div className="stack-text">
                      <div className="stack-name">Docker</div>
                      <div className="stack-version">Compose</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="architecture-card">
                <div className="card-header">
                  <div className="card-title">Modular Architecture</div>
                  <div className="card-badge">DDD</div>
                </div>
                <div className="architecture-diagram">
                  <div className="arch-layer">
                    <div className="arch-label">Frontend</div>
                    <div className="arch-components">
                      <div className="arch-item">Next.js</div>
                      <div className="arch-item">React 19</div>
                      <div className="arch-item">Tailwind</div>
                    </div>
                  </div>
                  <div className="arch-layer">
                    <div className="arch-label">Backend</div>
                    <div className="arch-components">
                      <div className="arch-item">NestJS</div>
                      <div className="arch-item">TypeORM</div>
                      <div className="arch-item">REST</div>
                    </div>
                  </div>
                  <div className="arch-layer">
                    <div className="arch-label">Data</div>
                    <div className="arch-components">
                      <div className="arch-item">MySQL 8</div>
                      <div className="arch-item">Migrations</div>
                      <div className="arch-item">Encrypted</div>
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
            <span>Page 9 of 13</span>
          </div>
        </div>
        <Link
          className="slide-nav-button slide-nav-left"
          href="/ai-intelligence"
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
          href="/why-wins"
          aria-label="Go to why wins slide"
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
