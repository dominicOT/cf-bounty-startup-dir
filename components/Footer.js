// components/Footer.js

const Footer = () => {
  return (
    <footer style={footerStyles}>
      <p>&copy; 2025 Sierra Leone Startups Directory</p>
    </footer>
  );
};

const footerStyles = {
  textAlign: 'center',
  padding: '20px 0',
  backgroundColor: '#333',
  color: '#fff',
  fontSize: '14px',
  position: 'absolute',
  bottom: '0',
  width: '100%',
};

export default Footer;
