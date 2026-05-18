import Link from "next/link";
import SupplyTechLogo from "../components/SupplyTechLogo";

export default function OptimizingNetworkPage() {
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

        .vision-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          margin-bottom: 20px;
        }

        .vision-card {
          background: white;
          border-radius: 16px;
          padding: 22px 26px;
          box-shadow:
            0 10px 15px -3px rgba(0, 0, 0, 0.05),
            0 4px 6px -2px rgba(0, 0, 0, 0.05);
          border: 1px solid #e2e8f0;
          position: relative;
          overflow: hidden;
          height: 206px;
          display: flex;
          flex-direction: column;
        }

        .vision-card::before {
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
          font-size: 20px;
        }

        .card-badge {
          background: rgba(16, 185, 129, 0.1);
          color: #10b981;
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 13px;
          font-weight: 700;
        }

        .card-title {
          font-size: 22px;
          font-weight: 700;
          color: #1e293b;
          margin-bottom: 8px;
        }

        .card-description {
          font-size: 14px;
          color: #64748b;
          line-height: 1.42;
          margin-bottom: 14px;
          flex-grow: 1;
        }

        .feature-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .feature-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          color: #64748b;
        }

        .feature-item i {
          color: #10b981;
          font-size: 11px;
        }

        .bottom-section {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 24px;
        }

        .north-star-card,
        .progress-card {
          background: white;
          border-radius: 16px;
          padding: 24px 28px;
          box-shadow:
            0 10px 15px -3px rgba(0, 0, 0, 0.05),
            0 4px 6px -2px rgba(0, 0, 0, 0.05);
          border: 1px solid #e2e8f0;
          height: 246px;
          display: flex;
          flex-direction: column;
        }

        .north-star-title {
          font-size: 22px;
          font-weight: 700;
          color: #1e293b;
          margin-bottom: 16px;
        }

        .north-star-content {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          flex-grow: 1;
        }

        .north-star-statement {
          font-size: 18px;
          color: #1e293b;
          line-height: 1.5;
        }

        .north-star-highlight {
          color: #3b82f6;
          font-weight: 700;
        }

        .metrics-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          margin-top: 20px;
        }

        .metric-item {
          background: rgba(59, 130, 246, 0.05);
          border-radius: 12px;
          padding: 14px;
          text-align: center;
        }

        .metric-value {
          font-size: 22px;
          font-weight: 800;
          color: #3b82f6;
          margin-bottom: 4px;
        }

        .metric-label {
          font-size: 12px;
          color: #64748b;
          font-weight: 500;
        }

        .progress-title {
          font-size: 20px;
          font-weight: 700;
          color: #1e293b;
          margin-bottom: 22px;
        }

        .progress-item {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 18px;
        }

        .progress-label {
          font-size: 14px;
          color: #64748b;
          min-width: 140px;
          font-weight: 500;
        }

        .progress-bar {
          flex: 1;
          height: 10px;
          background: #e2e8f0;
          border-radius: 5px;
          overflow: hidden;
        }

        .progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #3b82f6, #8b5cf6);
          border-radius: 5px;
        }

        .progress-value {
          font-size: 14px;
          font-weight: 700;
          color: #1e293b;
          min-width: 40px;
          text-align: right;
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
          padding: 8px 20px;
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
          <div className="section-title">The Vision — Self-Optimizing Network</div>
          <div className="section-subtitle">
            Turning network data into autonomous operational advantage across
            the GCC
          </div>
          <div className="vision-grid">
            <div className="vision-card">
              <div className="card-header">
                <div className="card-icon">
                  <i className="fas fa-chart-line"></i>
                </div>
                <div className="card-badge">AI</div>
              </div>
              <div className="card-title">Predictive Demand</div>
              <div className="card-description">
                Forecast demand across regions and industries with machine
                learning
              </div>
              <div className="feature-list">
                <div className="feature-item">
                  <i className="fas fa-check"></i>
                  <span>Regional demand patterns</span>
                </div>
                <div className="feature-item">
                  <i className="fas fa-check"></i>
                  <span>Industry-specific trends</span>
                </div>
              </div>
            </div>
            <div className="vision-card">
              <div className="card-header">
                <div className="card-icon">
                  <i className="fas fa-dollar-sign"></i>
                </div>
                <div className="card-badge">Optimize</div>
              </div>
              <div className="card-title">Dynamic Pricing</div>
              <div className="card-description">
                Optimize warehouse pricing based on capacity and demand
              </div>
              <div className="feature-list">
                <div className="feature-item">
                  <i className="fas fa-check"></i>
                  <span>Capacity-based pricing</span>
                </div>
                <div className="feature-item">
                  <i className="fas fa-check"></i>
                  <span>Demand-driven rates</span>
                </div>
              </div>
            </div>
            <div className="vision-card">
              <div className="card-header">
                <div className="card-icon">
                  <i className="fas fa-route"></i>
                </div>
                <div className="card-badge">Route</div>
              </div>
              <div className="card-title">Smart Fulfillment</div>
              <div className="card-description">
                Automated routing recommendations for optimal delivery
              </div>
              <div className="feature-list">
                <div className="feature-item">
                  <i className="fas fa-check"></i>
                  <span>Optimal path selection</span>
                </div>
                <div className="feature-item">
                  <i className="fas fa-check"></i>
                  <span>Cost optimization</span>
                </div>
              </div>
            </div>
          </div>
          <div className="bottom-section">
            <div className="north-star-card">
              <div className="north-star-title">North Star Goal</div>
              <div className="north-star-content">
                <div className="north-star-statement">
                  The <span className="north-star-highlight">best-fit warehouse</span>{" "}
                  for every shipment, every time — automatically matched based
                  on location, capacity, pricing, and operational requirements.
                </div>
                <div className="metrics-grid">
                  <div className="metric-item">
                    <div className="metric-value">99%</div>
                    <div className="metric-label">Match Accuracy</div>
                  </div>
                  <div className="metric-item">
                    <div className="metric-value">&lt;2s</div>
                    <div className="metric-label">Response Time</div>
                  </div>
                  <div className="metric-item">
                    <div className="metric-value">24/7</div>
                    <div className="metric-label">Monitoring</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="progress-card">
              <div className="progress-title">Implementation Progress</div>
              <div className="progress-item">
                <div className="progress-label">Demand Forecasting</div>
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: "85%" }}></div>
                </div>
                <div className="progress-value">85%</div>
              </div>
              <div className="progress-item">
                <div className="progress-label">Pricing Optimization</div>
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: "70%" }}></div>
                </div>
                <div className="progress-value">70%</div>
              </div>
              <div className="progress-item">
                <div className="progress-label">Smart Routing</div>
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: "90%" }}></div>
                </div>
                <div className="progress-value">90%</div>
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
            <span>Page 11 of 13</span>
          </div>
        </div>
        <Link
          className="slide-nav-button slide-nav-left"
          href="/why-wins"
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
          href="/accelerator-opportunity"
          aria-label="Go to accelerator opportunity slide"
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
