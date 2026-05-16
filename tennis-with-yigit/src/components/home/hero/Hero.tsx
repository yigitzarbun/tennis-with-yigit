import styles from "./styles.module.scss";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <img
        src="/images/hero2.jpg"
        alt="TennisWithYigit Hero"
        className={styles.image}
      />
    </section>
  );
};

export default Hero;
