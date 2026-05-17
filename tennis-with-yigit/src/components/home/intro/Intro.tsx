import styles from "./styles.module.scss";
import { Paths } from "../../../routing/Paths";
import { useNavigate } from "react-router-dom";

const Intro = () => {
  const navigate = useNavigate();
  const handleNavigate = (path: keyof typeof Paths) => {
    navigate(Paths[path]);
  };
  return (
    <div className={styles.introWrapper}>
      <div className={styles.intro}>
        <div className={styles.texts}>
          <h1>
            Elevate Your Tennis 🎾
            <br />
            <span>Coaching & Hitting Partner</span>
          </h1>
          <p>
            Hi, I'm Yigit. After a lifetime of competitive performance tennis
            training across Turkey and the UK, I know exactly what it takes to
            elevate a game. Whether you need a high-intensity hitting partner to
            test your limits or structured private coaching backed by real,
            actionable session notes and post-match feedback, let's build your
            winning rhythm in Istanbul.
          </p>
          <div className={styles.buttons}>
            <button
              onClick={() => handleNavigate("BOOKING")}
              className={styles.primary}
            >
              Book Now
            </button>
            <button
              onClick={() => handleNavigate("CONTACT")}
              className={styles.secondary}
            >
              Get in Touch
            </button>{" "}
          </div>
        </div>
        <div className={styles["image-container"]}>
          <img
            src="/images/yigit-zarbun.png"
            alt="Tennis Coach Yigit"
            className={styles.image}
          />
        </div>
      </div>
    </div>
  );
};

export default Intro;
