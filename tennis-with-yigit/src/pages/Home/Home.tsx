import Hero from "../../components/home/hero/Hero";
import Intro from "../../components/home/intro/Intro";
import styles from "./styles.module.scss";
import ServicesGrid from "../../components/home/services/ServicesGrid";
import ProcessTimeline from "../../components/home/process/ProcessTimeline";
import LocationBlock from "../../components/home/location/LocationBlock";
const Home = () => {
  return (
    <div className={styles.container}>
      <Hero />
      <Intro />
      <ServicesGrid />
      <ProcessTimeline />
      <LocationBlock />
    </div>
  );
};

export default Home;
