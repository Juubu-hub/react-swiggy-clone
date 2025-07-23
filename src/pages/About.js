import React from 'react';

const AboutUs = () => {
  const styles = {
    container: {
      padding: '2rem',
      maxWidth: '900px',
      margin: '0 auto',
      color: '#333',
      fontFamily: 'Segoe UI, sans-serif',
    },
    heading: {
      fontSize: '3rem',
      fontWeight: 'bold',
      color: '#E00867',
      marginBottom: '1.5rem',
    },
    subheading: {
      fontSize: '1.5rem',
      fontWeight: '600',
      marginTop: '1.5rem',
      marginBottom: '0.5rem',
      color: '#111',
    },
    paragraph: {
      fontSize: '1.1rem',
      lineHeight: '1.8',
      marginBottom: '1.2rem',
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>About Us</h1>

      <p style={styles.paragraph}>
        Welcome to foodora – your go-to destination for delicious meals delivered fast and fresh! Inspired by India's leading food delivery platform, this project is built with React JS purely for learning and development purposes.
      </p>

      <h2 style={styles.subheading}>Our Vision</h2>
      <p style={styles.paragraph}>
        To simplify the way people eat and shop by providing a seamless, intuitive, and lightning-fast online ordering experience. We aim to empower both customers and local businesses through technology.
      </p>

      <h2 style={styles.subheading}>Our Mission</h2>
      <p style={styles.paragraph}>
        Our mission is to bridge the gap between hungry customers and great food. We strive to offer quick deliveries, diverse cuisines, and a user-friendly experience, all from the comfort of your home.
      </p>

      <h2 style={styles.subheading}>What We Offer</h2>
      <p style={styles.paragraph}>
        🍔 Food Delivery from top-rated restaurants<br />
        🛒 Quick groceries and daily essentials<br />
        🚴 Real-time order tracking<br />
        💳 Secure and smooth online payments
      </p>

      <h2 style={styles.subheading}>Why Choose Us?</h2>
      <p style={styles.paragraph}>
        We believe that convenience, speed, and satisfaction should never be compromised. With a strong technical foundation, clean UI, and responsive design, this app is tailored to simulate real-world delivery platforms.
      </p>

      <p style={styles.paragraph}>
        Whether you're here to place a virtual order or just exploring React components, we’re glad to have you. Let’s build fast, eat well, and code better.
      </p>
    </div>
  );
};

export default AboutUs;

