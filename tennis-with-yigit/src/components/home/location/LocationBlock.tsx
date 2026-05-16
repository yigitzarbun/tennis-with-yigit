import styles from "./styles.module.scss";
import { useNavigate } from "react-router-dom";
import { Paths } from "../../../routing/Paths";

const LocationBlock = () => {
  const navigate = useNavigate();

  const handleNavigate = (path: keyof typeof Paths) => {
    navigate(Paths[path]);
  };

  return (
    <section className={styles.locationSection}>
      <div className={styles.locationContainer}>
        <div className={styles.locationContent}>
          <h2>Train at Your Preferred Court</h2>

          <p>
            Sessions take place at courts arranged by you. You can book at your
            preferred club or facility across <strong>Istanbul</strong>, with a
            focus on the <strong>Anadolu (Anatolian) side</strong>.
          </p>

          <p className={styles.subText}>
            Have access to a private club or residential court? I will come
            directly to your location for the session.
          </p>

          <div className={styles.locationMeta}>
            <div className={styles.metaItem}>
              📍 Location: Istanbul (Anadolu Side preferred)
            </div>
            <div className={styles.metaItem}>
              🎾 Court: Booked by player (Hard / Clay)
            </div>
          </div>

          <button
            onClick={() => handleNavigate("BOOKING")}
            className={styles.locationBtn}
          >
            Book Your Session
          </button>
        </div>
        <div className={styles.locationVisual}>
          <div className={styles.courtsGrid}>
            {[
              {
                name: "Antuka Tenis",
                district: "Maltepe",
                surface: "Hard / Clay",
                link: "https://antuka.com.tr/",
              },
              {
                name: "Çamlık Spor Kulübü",
                district: "Pendik",
                surface: "Hard",
                link: "https://online.spor.istanbul/",
              },
              {
                name: "Dalyan Club",
                district: "Kadıköy",
                surface: "Hard",
                link: "https://www.dalyanclub.com.tr/",
              },
              {
                name: "İBB Maltepe Spor Tesisleri",
                district: "Maltepe",
                surface: "Hard",
                link: "https://online.spor.istanbul/",
              },
              {
                name: "Pamukspor",
                district: "Maltepe",
                surface: "Hard / Clay",
                link: "https://www.pamukspor.com.tr/tenis.html",
              },

              {
                name: "Sultanbeyli 100. Yıl Spor Kompleksi",
                district: "Sultanbeyli",
                surface: "Hard",
                link: "https://online.spor.istanbul/",
              },
              {
                name: "Safa Tepesi Spor Kompleksi",
                district: "Sancaktepe",
                surface: "Hard",
                link: "https://online.spor.istanbul/",
              },
              {
                name: "Taç Spor Club",
                district: "Ataşehir",
                surface: "Hard",
                link: "https://tacspor.org.tr/",
              },
            ].map((court, i) => (
              <a
                key={i}
                href={court.link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.courtCard}
              >
                <div className={styles.courtName}>{court.name}</div>
                <div className={styles.courtMeta}>
                  <span>{court.district}</span>
                  <span>•</span>
                  <span>{court.surface}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationBlock;
