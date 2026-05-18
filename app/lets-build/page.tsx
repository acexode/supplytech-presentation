import Link from "next/link";
import SupplyTechLogo from "../components/SupplyTechLogo";

export default function LetsBuildPage() {
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
          background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
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
          left: 0;
          width: 100%;
          height: calc(100vh - 176px);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .section-title {
          font-size: 64px;
          font-weight: 800;
          color: #1e293b;
          margin-bottom: 10px;
          letter-spacing: -2px;
          text-align: center;
          line-height: 1.1;
        }

        .section-subtitle {
          font-size: 24px;
          color: #64748b;
          margin-bottom: 30px;
          font-weight: 400;
          text-align: center;
          max-width: 850px;
          line-height: 1.4;
        }

        .cta-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
        }

        .cta-buttons {
          display: flex;
          gap: 24px;
          justify-content: center;
          margin-bottom: 32px;
        }

        .cta-button {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 16px 36px;
          border-radius: 12px;
          font-size: 18px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
          cursor: pointer;
          border: none;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }

        .cta-primary {
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          color: white;
        }

        .cta-secondary {
          background: white;
          color: #3b82f6;
          border: 2px solid #3b82f6;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          width: 900px;
          margin-bottom: 24px;
        }

        .contact-card {
          background: white;
          border-radius: 16px;
          padding: 22px;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
          border: 1px solid #e2e8f0;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          height: 156px;
          justify-content: center;
        }

        .contact-icon {
          width: 48px;
          height: 48px;
          background: rgba(59, 130, 246, 0.1);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #3b82f6;
          font-size: 20px;
          margin-bottom: 12px;
        }

        .contact-label {
          font-size: 14px;
          color: #64748b;
          margin-bottom: 4px;
        }

        .contact-value {
          font-size: 16px;
          font-weight: 600;
          color: #1e293b;
        }

        .thank-you-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
        }

        .thank-you-text {
          font-size: 18px;
          color: #64748b;
          text-align: center;
        }

        .thank-you-arabic {
          font-size: 20px;
          color: #1e293b;
          font-weight: 600;
          text-align: center;
          direction: rtl;
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
          opacity: 0.45;
          cursor: not-allowed;
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
          <div className="section-title">Let&apos;s Build Together</div>
          <div className="section-subtitle">
            Ready to transform warehouse logistics in Saudi Arabia with
            AI-native infrastructure
          </div>
          <div className="cta-container">
            <div className="cta-buttons">
              <button className="cta-button cta-primary" type="button">
                <i className="fas fa-rocket"></i>
                <span>Book Live Demo</span>
              </button>
              <button className="cta-button cta-secondary" type="button">
                <i className="fas fa-download"></i>
                <span>Download Deck</span>
              </button>
            </div>
            <div className="contact-grid">
              <div className="contact-card">
                <div className="contact-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="contact-label">Email</div>
                <div className="contact-value">system@supplytechsyg.com</div>
              </div>
              <div className="contact-card">
                <div className="contact-icon">
                  <i className="fas fa-globe"></i>
                </div>
                <div className="contact-label">Website</div>
                <div className="contact-value">https://supplytechsyg.com</div>
              </div>
              <div className="contact-card">
                <div className="contact-icon">
                  <i className="fab fa-whatsapp"></i>
                </div>
                <div className="contact-label">WhatsApp</div>
                <div className="contact-value">+966 50 890 7945</div>
              </div>
            </div>
            <div className="thank-you-container">
              <div className="thank-you-text">
                Thank you for considering SupplyTech for the DominAite
                Accelerator
              </div>
              <div className="thank-you-arabic">
                شكراً لكم على اهتمامكم بتقنيات الإمداد
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
            <span>Page 13 of 13</span>
          </div>
        </div>
        <Link
          className="slide-nav-button slide-nav-left"
          href="/accelerator-opportunity"
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
        <button
          className="slide-nav-button slide-nav-right"
          type="button"
          aria-label="Next slide"
          disabled
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
        </button>
      </div>
    </>
  );
}
