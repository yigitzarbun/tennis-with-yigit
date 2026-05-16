// BookingFlow.jsx
import { useState, useEffect } from "react";
import styles from "./styles.module.scss";

// Updated base pricing structure to match your exact rates
const PRICE_MATRIX: { [key: string]: number } = {
  hitting: 1500, // Base Hitting Fee
  coaching: 1300, // Base Coaching Fee
};

const BookingFlow = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    sessionType: "",
    surface: "",
    ballPreference: "",
    playerLevel: "",
  });
  const [calculatedPrice, setCalculatedPrice] = useState(0);

  // Dynamically calculates rate based on session type and ball configurations
  useEffect(() => {
    let basePrice =
      PRICE_MATRIX[formData.sessionType as keyof typeof PRICE_MATRIX] || 0;

    // If they choose an option and it's NOT bringing their own, add 500TL extra
    let ballPremium = 0;
    if (formData.ballPreference && formData.ballPreference !== "own") {
      ballPremium = 500;
    }

    setCalculatedPrice(basePrice + ballPremium);
  }, [formData.sessionType, formData.ballPreference]);

  const updateField = (field: keyof typeof formData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const getCalendlyUrl = (): string => {
    const baseUrl = "https://calendly.com/yzarbun/1-hr-meeting";

    const readableBalls =
      formData.ballPreference === "own"
        ? "Bring Own Balls"
        : `${formData.ballPreference}`;

    // Formats your choices into clean tokens that look normal in your calendar log
    const sessionToken =
      formData.sessionType === "hitting"
        ? "Hitting-Session"
        : "Private-Coaching";
    const surfaceToken = `${formData.surface}-Court`;
    const levelToken = formData.playerLevel.replace(/\s+/g, "-"); // e.g. "Beginner-(NTRP-1.0-2.5)"

    const params = new URLSearchParams({
      // Standard hidden tracking buckets that are invisible on the user's screen:
      utm_campaign: sessionToken, // Hidden Slot 1: "Hitting-Session" or "Private-Coaching"
      utm_source: surfaceToken, // Hidden Slot 2: "Clay-Court" or "Hard-Court"
      utm_medium: readableBalls.replace(/\s+/g, "-"), // Hidden Slot 3: Ball choice details
      utm_content: levelToken, // Hidden Slot 4: Player's skill level
      utm_term: `Price-Total-TL-${calculatedPrice}`, // Hidden Slot 5: The absolute calculation price lock!
    });

    return `${baseUrl}?${params.toString()}`;
  };

  return (
    <div className={styles.bookingWrapper}>
      <div className={styles.progressContainer}>
        <div className={`${styles.progressBar} ${styles[`step${step}`]}`} />
      </div>

      <div className={styles.card}>
        {/* STEP 1: SESSION TYPE */}
        {step === 1 && (
          <div className={styles.stepContent}>
            <h2>Select Your Training Protocol</h2>
            <p className={styles.subtitle}>
              Choose how you want to structure our time on court.
            </p>
            <div className={styles.optionsGrid}>
              <button
                type="button"
                className={`${styles.optionBtn} ${
                  formData.sessionType === "hitting" ? styles.active : ""
                }`}
                onClick={() => {
                  updateField("sessionType", "hitting");
                  nextStep();
                }}
              >
                <span className={styles.icon}>⚡</span>
                <h3>Hitting Session</h3>
                <p>
                  High-intensity match play, point simulations, and heavy
                  baseline pace replication. (₺1,500)
                </p>
              </button>
              <button
                type="button"
                className={`${styles.optionBtn} ${
                  formData.sessionType === "coaching" ? styles.active : ""
                }`}
                onClick={() => {
                  updateField("sessionType", "coaching");
                  nextStep();
                }}
              >
                <span className={styles.icon}>📋</span>
                <h3>Private Lesson</h3>
                <p>
                  Structured development, biomechanical basket feeding,
                  technical adjustments, and tactical drills. (₺1,300)
                </p>
              </button>
            </div>
          </div>
        )}

        {/* STEP 2: COURT SURFACE & ADDRESS */}
        {step === 2 && (
          <div className={styles.stepContent}>
            <h2>Court Logistics & Location</h2>
            <p className={styles.subtitle}>
              Note: Clients are responsible for securing the court location.
              Please select the surface and provide the open address.
            </p>

            <div className={styles.optionsGrid}>
              <button
                type="button"
                className={`${styles.optionBtn} ${
                  formData.surface === "Clay" ? styles.active : ""
                }`}
                onClick={() => updateField("surface", "Clay")}
              >
                <span className={styles.icon}>🧱</span>
                <h3>Clay Court</h3>
              </button>
              <button
                type="button"
                className={`${styles.optionBtn} ${
                  formData.surface === "Hard" ? styles.active : ""
                }`}
                onClick={() => updateField("surface", "Hard")}
              >
                <span className={styles.icon}>🟦</span>
                <h3>Hard Court</h3>
              </button>
            </div>

            <div className={styles.navButtons}>
              <button
                type="button"
                className={styles.backBtn}
                onClick={prevStep}
              >
                Back
              </button>
              <button
                type="button"
                className={styles.nextBtn}
                disabled={!formData.surface}
                onClick={nextStep}
              >
                Continue
              </button>
            </div>
          </div>
        )}

        {/* STEP 3: PREFERENCES & PERFORMANCE LEVEL */}
        {step === 3 && (
          <div className={styles.stepContent}>
            <h2>Gear Preferences & Skill Tier</h2>
            <p className={styles.subtitle}>
              Help tailor the court setup to your current baseline game
              strategy.
            </p>

            <div className={styles.formGroup}>
              <label>Preferred Match Balls</label>
              <select
                value={formData.ballPreference}
                onChange={(e) => updateField("ballPreference", e.target.value)}
              >
                <option value="">-- Choose Option --</option>
                <option value="own">
                  I will bring my own tennis balls (+₺0)
                </option>
                <option value="Babolat Team / Aero">
                  Yigit provides: Babolat Team / Aero (+₺500)
                </option>
                <option value="Dunlop Fort All Court">
                  Yigit provides: Dunlop Fort All Court (+₺500)
                </option>
                <option value="Wilson US Open">
                  Yigit provides: Wilson US Open (+₺500)
                </option>
              </select>
            </div>

            <div className={styles.formGroup}>
              <label>Your NTRP / Estimated Level</label>
              <select
                value={formData.playerLevel}
                onChange={(e) => updateField("playerLevel", e.target.value)}
              >
                <option value="">-- Choose Option --</option>
                <option value="Beginner (NTRP 1.0 - 2.5)">
                  Beginner (NTRP 1.0 - 2.5)
                </option>
                <option value="Intermediate (NTRP 3.0 - 4.0)">
                  Intermediate (NTRP 3.0 - 4.0)
                </option>
                <option value="Advanced / Performance (NTRP 4.5+)">
                  Advanced / Performance (NTRP 4.5+)
                </option>
              </select>
            </div>

            <div className={styles.navButtons}>
              <button
                type="button"
                className={styles.backBtn}
                onClick={prevStep}
              >
                Back
              </button>
              <button
                type="button"
                className={styles.nextBtn}
                disabled={!formData.ballPreference || !formData.playerLevel}
                onClick={nextStep}
              >
                Calculate Rate
              </button>
            </div>
          </div>
        )}

        {/* STEP 4: PRICE BREAKDOWN & CALENDLY LINK */}
        {step === 4 && (
          <div className={`${styles.stepContent} ${styles.summaryStep}`}>
            <h2>Session Summary & Invoice Estimate</h2>
            <p className={styles.subtitle}>
              Review your configured details before selecting your session
              schedule window.
            </p>

            <div className={styles.receiptBox}>
              <div className={styles.receiptLine}>
                <span>Session Type:</span>
                <strong>
                  {formData.sessionType === "hitting"
                    ? "High-Intensity Hitting (₺1,500)"
                    : "Private Coaching (₺1,300)"}
                </strong>
              </div>
              <div className={styles.receiptLine}>
                <span>Court Surface:</span>
                <strong>{formData.surface} Court</strong>
              </div>
              <div className={styles.receiptLine}>
                <span>Equipment Setup:</span>
                <strong>
                  {formData.ballPreference === "own"
                    ? "Bring Own Balls (+₺0)"
                    : `${formData.ballPreference} (+₺500)`}
                </strong>
              </div>
              <div className={styles.receiptLine}>
                <span>Player Skill Tier:</span>
                <strong>{formData.playerLevel}</strong>
              </div>
              <div className={styles.dividerLine} />
              <div className={styles.totalLine}>
                <span>Total Fixed Price:</span>
                <span className={styles.priceTag}>₺{calculatedPrice}</span>
              </div>
            </div>

            <div className={styles.navButtons}>
              <button
                type="button"
                className={styles.backBtn}
                onClick={prevStep}
              >
                Modify Options
              </button>
              <a
                href={getCalendlyUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.calendlySubmitBtn}
              >
                Select Date & Time via Calendly →
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookingFlow;
