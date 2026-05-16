import styles from "./styles.module.scss";
import { useNavigate } from "react-router-dom";
import { Paths } from "../../routing/Paths";

const AboutMe = () => {
  const navigate = useNavigate();
  const handleNavigate = (path: keyof typeof Paths) => {
    navigate(Paths[path]);
  };
  return (
    <div className={styles.pageWrapper}>
      {/* SECTION 1: HERO & BIO SPLIT */}
      <div className={styles.container}>
        <div className={styles.text}>
          <h1>About Me</h1>{" "}
          {/* Fixed: changed from h2 to h1 to match your style rules */}
          <p>
            My approach to tennis wasn't built in a classroom; it was forged
            through a lifetime of competitive training, high-intensity match
            play, and performance optimization across Turkey and the UK.
            Competing at a high level taught me that tennis is a game of fine
            margins. A fraction of a second in your footwork preparation or a
            slight breakdown in your hitting rhythm can be the difference
            between dictating a point and chasing it.
          </p>
          <p>
            When I returned to Istanbul, I realized the local tennis scene was
            missing a specific tier of service: elite, reliable hitting
            partnerships and highly analytical coaching for players who
            genuinely want to improve.
          </p>
          <h4>Why "Tennis with Yigit" is Different</h4>
          <p>
            I don't believe in generic, repetitive drills. Whether you are an
            advanced competitive player preparing for a tournament or an
            ambitious amateur leveling up your technique, your time on the court
            should be purposeful. My coaching philosophy bridges high-intensity
            athletic execution with data-driven progress:{" "}
          </p>
          <ul>
            <li>
              True Hitting Partnerships: I don't just feed balls from a basket.
              If you book a hitting session, you get a high-performance partner
              who will match your pace, test your depth, and actively push your
              tactical limits in real-time rally scenarios.
            </li>
            <li>
              Actionable Analytical Feedback: Great adjustments happen when you
              can actually see your game. I incorporate video analysis and clear
              structural reporting into our training blocks so you leave the
              court with concrete, measurable goals.
            </li>
            <li>
              Structured Post-Match Notes: Every private session is backed by
              tailored notes and feedback. We track your technical consistency,
              court positioning, and tactical patterns so we can build a
              compounding, winning rhythm week after week.
            </li>
          </ul>
          <h4>On and Off the Court</h4>
          <p>
            When I am not coaching or competing on the court, I am deeply
            invested in explosive athletic performance, sprint metrics, and
            sports analytics. I bring that same obsessive focus on movement
            efficiency, footwork acceleration, and physical conditioning
            directly to our sessions.
          </p>
          <p>
            The court is ready. Let's analyze your game, refine your mechanics,
            and establish your winning rhythm.
          </p>
        </div>
        <div className={styles["image-container"]}>
          <img
            src="/images/yigit-zarbun.png"
            alt="Tennis Player"
            className={styles.image}
          />
        </div>
      </div>

      {/* SECTION 2: THE 3-CARD VALUE GRID */}
      <div className={styles.gridSection}>
        <div className={styles.card}>
          <div className={styles.icon}>🌍</div>
          <h3>25 Years Experience</h3>
          <p>
            A lifetime of competitive performance play and training across elite
            courts in both Turkey and the UK.
          </p>
        </div>
        <div className={styles.card}>
          <div className={styles.icon}>⚡</div>
          <h3>The Hybrid Advantage</h3>
          <p>
            Shifting seamlessly between a relentless, high-intensity hitting
            partner and a precise technical coach.
          </p>
        </div>
        <div className={styles.card}>
          <div className={styles.icon}>📋</div>
          <h3>Data-Driven Progress</h3>
          <p>
            Your session doesn't end on court. Receive dedicated, actionable
            performance notes to track your development.
          </p>
        </div>
      </div>

      {/* SECTION 3: TARGET AUDIENCE */}
      <div className={styles.audienceSection}>
        <h2>Who I Work With</h2>
        <div className={styles.audienceGrid}>
          <div className={styles.audienceBlock}>
            <h4>The Ambitious Intermediate</h4>
            <p>
              You have a solid foundation but feel stuck. You want
              high-intensity rallies and sharp tactical adjustments to break
              through your current plateau.
            </p>
          </div>
          <div className={styles.audienceBlock}>
            <h4>The Competitive Advanced Player</h4>
            <p>
              You need a high-performance hitting partner who can push your
              physical limits, replicate tournament pace, and sharpen match
              strategy.
            </p>
          </div>
          <div className={styles.audienceBlock}>
            <h4>The Dedicated Beginner</h4>
            <p>
              You want to learn the game the right way from day one, skipping
              bad habits and building a clean, modern technique built to last.
            </p>
          </div>
        </div>
      </div>

      {/* SECTION 4: CALL TO ACTION BANNER */}
      <div className={styles.ctaBanner}>
        <h2>Ready to find your rhythm on the court?</h2>
        <p>
          Let’s map out your progression and schedule your first session in
          Istanbul.
        </p>
        <button
          onClick={() => handleNavigate("BOOKING")}
          className={styles.ctaButton}
        >
          Book a Session
        </button>
      </div>
    </div>
  );
};

export default AboutMe;
