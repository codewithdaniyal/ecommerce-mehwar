import React from "react";
import Header from "./Header"; // Replace with actual path
import Footer from "./Footer"; // Replace with actual path

const ContactPage: React.FC = () => {
  return (
    <>
      <Header />
      <div style={styles.container}>
        <h1 style={styles.title}>Contact Us</h1>
        <div style={styles.content}>
          {/* Contact Form */}
          <form style={styles.form}>
            <div style={styles.formGroup}>
              <label style={styles.label}>Your Name</label>
              <input type="text" placeholder="Your Name" style={styles.input} />
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label}>Your Phone</label>
              <input type="text" placeholder="Your Phone" style={styles.input} />
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label}>Your Email *</label>
              <input type="email" placeholder="Your Email" style={styles.input} required />
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label}>Your Comment *</label>
              <textarea placeholder="Please leave your comment here" style={styles.textarea} required></textarea>
            </div>
            <button type="submit" style={styles.button}>
              Submit Contact
            </button>
          </form>

          {/* Store Information */}
          <div style={styles.storeInfo}>
            <h2 style={styles.infoTitle}>Store Information</h2>
            <p style={styles.infoText}>
              <strong>1. Trendify.pk Lahore</strong>
              <br />
              Address: 62-D Gosha-e-Ahbab 2 Azam Garden Multan Road, Lahore
            </p>
            <p style={styles.infoText}>
              <strong>2. Phone Number</strong>
              <br />
              0335-6664688
            </p>
            <p style={styles.infoText}>
              <strong>3. Email</strong>
              <br />
              <a href="mailto:support@trendify.pk" style={styles.link}>Support@trendify.pk</a>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

const styles = {
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "20px",
    fontFamily: "'Arial', sans-serif",
  },
  title: {
    textAlign: "center",
    marginBottom: "30px",
    fontSize: "28px",
    fontWeight: "bold",
  },
  content: {
    display: "flex",
    justifyContent: "space-between",
    gap: "20px",
    flexWrap: "wrap",
  },
  form: {
    flex: "1",
    minWidth: "300px",
  },
  formGroup: {
    marginBottom: "15px",
  },
  label: {
    display: "block",
    marginBottom: "5px",
    fontWeight: "bold",
  },
  input: {
    width: "100%",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    fontSize: "14px",
  },
  textarea: {
    width: "100%",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    fontSize: "14px",
    resize: "none" as "none",
    height: "100px",
  },
  button: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#000",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    fontSize: "16px",
    cursor: "pointer",
  },
  storeInfo: {
    flex: "1",
    minWidth: "300px",
  },
  infoTitle: {
    marginBottom: "20px",
    fontSize: "22px",
    fontWeight: "bold",
  },
  infoText: {
    marginBottom: "15px",
    lineHeight: "1.6",
  },
  link: {
    color: "#000",
    textDecoration: "none",
  },
};

export default ContactPage;
