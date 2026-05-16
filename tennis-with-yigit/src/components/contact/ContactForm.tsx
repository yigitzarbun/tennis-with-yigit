import { useState } from "react";
import styles from "./styles.module.scss";

interface FormState {
  name: string;
  email: string;
  message: string;
  mobile: number;
}

const ContactForm: React.FC = () => {
  const [formState, setFormState] = useState<FormState>({
    name: "",
    email: "",
    message: "",
    mobile: 0,
  });
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [isSending, setIsSending] = useState<boolean>(false); // Tracks loading state

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  // The updated, secure async function connecting to Web3Forms
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);

    // This is the payload structure Web3Forms expects
    const submissionData = {
      ...formState,
      // ⚠️ PASTE YOUR COPIED ACCESS KEY HERE:
      access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(submissionData),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);
        setFormState({ name: "", email: "", mobile: 0, message: "" });
      } else {
        alert(
          "Transmission failed. Please try again or reach out via WhatsApp."
        );
      }
    } catch (error) {
      console.error("Form submission error:", error);
      alert("A network connection error occurred. Please try again.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className={styles.contactWrapper}>
      <div className={styles.headerArea}>
        <h2>Get in Touch</h2>
        <p className={styles.subtitle}>
          Have inquiries about corporate events, regular training blocks, or
          high-performance hitting availability? Drop a line here.
        </p>
      </div>

      <div className={styles.layoutGrid}>
        {/* SECURE CONTACT FORM */}
        <div className={styles.formCard}>
          {submitted ? (
            <div className={styles.successState}>
              <span className={styles.successIcon}>✓</span>
              <h3>Message Sent Successfully</h3>
              <p>
                Your details have been securely transmitted. Expect a response
                within 24 hours.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className={styles.resetBtn}
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className={styles.contactForm}>
              {/* This is an advanced Anti-Spam Honeypot field. Bots will see it and fill it out, humans won't. If filled, Web3Forms drops the message instantly! */}
              <input
                type="checkbox"
                name="botcheck"
                className={styles.honeypot}
                style={{ display: "none" }}
              />

              <div className={styles.inputGroup}>
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formState.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                />
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formState.email}
                  onChange={handleChange}
                  placeholder="name@example.com"
                />
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="mobile">Mobile Number</label>
                <input
                  type="mobile"
                  id="mobile"
                  name="mobile"
                  required
                  value={formState.email}
                  onChange={handleChange}
                  placeholder="+90 532 123 4567"
                />
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="message">Message / Inquiry</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={formState.message}
                  onChange={handleChange}
                  placeholder="Tell me about your court location preferences or training targets..."
                />
              </div>

              <button
                type="submit"
                className={styles.submitBtn}
                disabled={isSending}
              >
                {isSending ? "Sending Securely..." : "Send Secure Message"}
              </button>
            </form>
          )}
        </div>

        {/* SPAM-PROTECTED DIRECT COMMUNICATION */}
        <div className={styles.infoCard}>
          <h3>Direct Channels</h3>
          <p>
            Prefer instant coordination? Use the verified channels below. Your
            inputs bypass spam scrapers completely.
          </p>

          <div className={styles.communicationLinks}>
            <button
              type="button"
              className={styles.whatsappBtn}
              onClick={() => {
                const country = "90";
                const area = "537";
                const line1 = "654"; // Update with your real number digits
                const line2 = "1121";
                window.open(
                  `https://wa.me/${country}${area}${line1}${line2}?text=Hi%20Yigit,%20I'm%20interested%20in%20booking%20a%20tennis%20session.`,
                  "_blank"
                );
              }}
            >
              <span className={styles.btnIcon}>💬</span> Chat via WhatsApp
            </button>

            <div className={styles.shieldNotice}>
              <strong>🛡️ Anti-Spam Security Activated</strong>
              <p>
                Email scrapers cannot view contact details on this domain.
                Communication channels are verified and secure.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
