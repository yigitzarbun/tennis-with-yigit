// CredentialsStrip.jsx
import styles from "./styles.module.scss";

const CredentialsStrip = () => {
  return (
    <div className={styles.stripWrapper}>
      <div className={styles.stripContent}>
        <span>🎾 25 Years On Court</span>
        <span className={styles.divider}>|</span>
        <span>🌍 International Performance (TR & UK)</span>
        <span className={styles.divider}>|</span>
        <span>📊 Data-Driven Technical Analysis</span>
        <span className={styles.divider}>|</span>
        <span>⚡ High-Intensity Pace Hitting</span>
      </div>
    </div>
  );
};

export default CredentialsStrip;
