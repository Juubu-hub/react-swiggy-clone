import React from "react";

const ContactUs = () => {
  const styles = {
    container: {
      padding: "20px",
      maxWidth: "900px",
      margin: " auto",
      color: "#333",
      fontWeight: "900",
    },
    heading: {
      fontSize: "25px",
      fontWeight: "bold",
      color: "#E00867",
      marginBottom: "10px",
      fontFamily: "outfit",
    },
    subheading: {
      fontSize: "15px",
      fontWeight: "600",
      marginTop: "30px",
      marginBottom: "0.8rem",
      color: "#111",
      fontFamily: "outfit",
    },
    paragraph: {
      fontSize: "20px",
      fontWeight:"500",
      marginBottom: "10px",
      fontFamily: "outfit",
    },
    form: {
      display: "flex",
      flexDirection: "column",
      marginBottom: "30px",
      fontFamily: "outfit",
    },
    input: {
      padding: "12px",
      fontSize: "16px",
      marginBottom: "16px",
      border: "1px solid #ccc",
      borderRadius: "4px",
    },
    textarea: {
      padding: "12px",
      fontSize: "16px",
      marginBottom: "16px",
      border: "1px solid #ccc",
      borderRadius: "4px",
      minHeight: "120px",
    },
    button: {
      padding: "14px 24px",
      fontSize: "18px",
      backgroundColor: "#E00867",
      color: "#fff",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
      alignSelf: "flex-start",
      fontFamily: "outfit",
    },
    infoBox: {
      backgroundColor: "#f9f9f9",
      padding: "20px",
      borderRadius: "6px",
      marginBottom: "24px",
    },
    mapPlaceholder: {
      width: "100%",
      height: "300px",
      backgroundColor: "#F0F0F5",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "#666",
      fontStyle: "italic",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Contact Us</h1>
      <p style={styles.paragraph}>
        We're here to help! Got a question, feedback or need assistance? Feel
        free to reach out using the form below or via our support channels.
      </p>

      {/* Contact Form */}
      <form
        style={styles.form}
        onSubmit={(e) => {
          e.preventDefault();
          alert("Message sent! 😊");
        }}
      >
        <input
          style={styles.input}
          type="text"
          placeholder="Your Name"
          required
        />
        <input
          style={styles.input}
          type="email"
          placeholder="Your Email"
          required
        />
        <input
          style={styles.input}
          type="text"
          placeholder="Subject"
          required
        />
        <textarea style={styles.textarea} placeholder="Your Message" required />
        <button type="submit" style={styles.button}>
          Send Message
        </button>
      </form>

      <div style={styles.infoBox}>
        <h2 style={styles.subheading}>Customer Support</h2>
        <p style={styles.paragraph}>
          <strong>Email:</strong> support@foodora.com
        </p>
        <p style={styles.paragraph}>
          <strong>Phone:</strong> +91‑96398‑86638 (Mon–Sun, 9 AM–9 PM)
        </p>
      </div>

      <div style={styles.infoBox}>
        <h2 style={styles.subheading}>FAQ & Common Queries</h2>
        <p style={styles.paragraph}>
          <strong>Q: How do I change or cancel my order?</strong>
          <br />
          A: You can change or cancel your order within 5 minutes from placement
          via the Orders section.
        </p>
        <p style={styles.paragraph}>
          <strong>Q: I haven’t received my order — what now?</strong>
          <br />
          A: Please contact our support via email or phone. We’ll track and
          assist immediately.
        </p>
      </div>

      <h2 style={styles.subheading}>Find Us Here</h2>
      <div style={styles.mapPlaceholder}>
        Map will go here (e.g. Google Maps embed)
      </div>
    </div>
  );
};

export default ContactUs;
