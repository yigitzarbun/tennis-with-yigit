import { Link } from "react-router-dom";
import styles from "./styles.module.scss";
import { Paths } from "../../routing/Paths";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* BRAND COLUMN */}
        <div className={styles.brandCol}>
          <Link to={Paths.HOME} className={styles.logo}>
            tennis with Yigit
          </Link>
          <p className={styles.tagline}>
            High-performance hitting partnerships and premium coaching in
            Istanbul.
          </p>
          <div className={styles.locationTag}>📍 Based on the Anadolu Side</div>
        </div>

        {/* NAVIGATION COLUMN */}
        <div className={styles.linksCol}>
          <h3>Navigation</h3>
          <ul className={styles.linksList}>
            <li>
              <Link to={Paths.ABOUT}>About</Link>
            </li>
            <li>
              <Link to={Paths.BOOKING}>Booking & Rates</Link>
            </li>
            <li>
              <Link to={Paths.CONTACT}>Contact & Inquiries</Link>
            </li>
          </ul>
        </div>

        {/* SECURITY & ASSURANCE COLUMN */}
        <div className={styles.secureCol}>
          <h3>Direct Channels</h3>
          <p className={styles.secureText}>
            Click the button below to initiate coordination safely via WhatsApp
            without digital scrapers capturing data.
          </p>
          <button
            type="button"
            className={styles.whatsappBtn}
            onClick={() => {
              const country = "90";
              const area = "537";
              const line1 = "654"; // Replace with your actual phone digits
              const line2 = "1121";
              window.open(
                `https://wa.me/${country}${area}${line1}${line2}?text=Hi%20Yigit,%20I'm%20visiting%20your%20website%20and%20want%20to%20coordinate%20a%20session.`,
                "_blank"
              );
            }}
          >
            💬 Fast Track via WhatsApp
          </button>
        </div>
      </div>

      {/* LOWER CLOSING LINE */}
      <div className={styles.bottomBar}>
        <div className={styles.bottomInner}>
          <p>© {currentYear} Tennis with Yigit. All Rights Reserved.</p>
          <p className={styles.credit}>Designed for Performance</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
