// ProcessTimeline.jsx
import styles from "./styles.module.scss";

const ProcessTimeline = () => {
  const steps = [
    {
      num: "01",
      title: "On-Court Baseline Assessment",
      desc: "During our first hitting block, we map your comfort zones, movement patterns, and mechanical pain-points under physical stress.",
    },
    {
      num: "02",
      title: "High-Intensity Execution",
      desc: "We run focused drill circuits and open match-play simulations that challenge your baseline limits and enforce technical adjustments.",
    },
    {
      num: "03",
      title: "Actionable Performance Notes",
      desc: "Your growth continues off-court. You receive a structured breakdown of session notes and analytical feedback to study before your next swing.",
    },
  ];

  return (
    <section className={styles.processSection}>
      <div className={styles.sectionHeader}>
        <h2>The Training Architecture</h2>
        <p>
          How we systematically target plateaus to accelerate your competitive
          consistency on court.
        </p>
      </div>

      <div className={styles.timelineWrapper}>
        {steps.map((step, idx) => (
          <div key={idx} className={styles.timelineStep}>
            <div className={styles.stepHeader}>
              <span className={styles.stepNumber}>{step.num}</span>
              <h3>{step.title}</h3>
            </div>
            <p>{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProcessTimeline;
