// components/StartupCard.js

import Link from 'next/link';

const StartupCard = ({ startup }) => {
  return (
    <div className="startup-card" style={cardStyles}>
      <img src={startup.imageUrl} alt={startup.name} style={imageStyles} />
      <h3 style={titleStyles}>{startup.name}</h3>
      <p style={servicesStyles}>{startup.services}</p>
      <Link href={`/startup/${startup.id}`} style={linkStyles}>View Profile</Link>
    </div>
  );
};

const cardStyles = {
  border: '1px solid #ddd',
  borderRadius: '8px',
  padding: '20px',
  textAlign: 'center',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  transition: 'transform 0.2s',
};

const imageStyles = {
  width: '100%',
  height: 'auto',
  borderRadius: '8px 8px 0 0',
};

const titleStyles = {
  fontSize: '1.5em',
  margin: '10px 0',
};

const servicesStyles = {
  color: '#555',
};

const linkStyles = {
  display: 'inline-block',
  marginTop: '10px',
  padding: '10px 20px',
  backgroundColor: '#0070f3',
  color: '#fff',
  borderRadius: '5px',
  textDecoration: 'none',
};

export default StartupCard;
