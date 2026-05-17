// ServicesGrid.jsx
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.scss";
import { Paths } from "../../../routing/Paths";

const ServicesGrid = () => {
  const navigate = useNavigate();
  const handleNavigate = (path: keyof typeof Paths) => {
    navigate(Paths[path]);
  };
  return (
    <section className={styles.servicesSection}>
      <div className={styles.sectionHeader}>
        <h2>Select Your Training Track</h2>
        <p>
          Premium tennis services customized to fit your specific competitive or
          technical goals.
        </p>
      </div>

      <div
        onClick={() => handleNavigate("BOOKING")}
        className={styles.servicesGrid}
      >
        {/* Service 1 */}
        <div className={styles.serviceCard}>
          <div className={styles.cardBadge}>High Intensity</div>
          <h3>Premium Hitting Partner</h3>
          <div className={styles.price}>1.500 TL / session</div>
          <p>
            Designed for advanced, match-play, and tournament-level players who
            need a companion to absorb heavy pace. Expect continuous, high-speed
            tactical rallies, footwork drill integration, and live simulation.
          </p>
          <ul className={styles.cardFeatures}>
            <li>✓ Full Match-Pace Replication</li>
            <li>✓ Deep Baseline & Transition Drills</li>
            <li>✓ Live Tactical Strategy Feedback</li>
          </ul>
        </div>

        {/* Service 2 */}
        <div
          onClick={() => handleNavigate("BOOKING")}
          className={styles.serviceCard}
        >
          <div className={styles.cardBadge}>Developmental</div>
          <h3>Structured Private Coaching</h3>
          <div className={styles.price}>1.300 TL / session</div>
          <p>
            Tailored individual instruction looking to skip bad technical habits
            or fine-tune an existing setup. Perfect for ambitious intermediates
            looking to construct an optimal, repeatable kinetic swing pathway.
          </p>
          <ul className={styles.cardFeatures}>
            <li>✓ Biomechanical Swing Analysis</li>
            <li>✓ Tactical Court Position Layouts</li>
            <li>✓ Session Performance Tracking Notes</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
