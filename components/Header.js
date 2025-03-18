// components/Header.js

import Link from 'next/link';

const Header = () => {
  return (
    <header style={headerStyles}>
      <nav>
        <ul style={navListStyles}>
          <li style={navItemStyles}><Link href="/" style={linkStyles}>Home</Link></li>
          <li style={navItemStyles}><Link href="/admin/add-startup" style={linkStyles}>Add Startup</Link></li>
        </ul>
      </nav>
    </header>
  );
};

const headerStyles = {
  backgroundColor: '#2C3E50',
  padding: '15px 0',
  marginBottom: '20px',
  color: '#ECF0F1',
  textAlign: 'center',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  position: 'fixed',
  width: '100%',  
  top: 0,
  left: 0,
  zIndex: 1000,
};

const navListStyles = {
  listStyle: 'none',
  padding: 0,
  margin: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const navItemStyles = {
  margin: '0 20px',
};

const linkStyles = {
  color: '#ECF0F1', 
  textDecoration: 'none',
  fontSize: '18px',   
  fontWeight: '600',  
  letterSpacing: '0.5px',
  transition: 'all 0.3s ease',
};

const hoverStyles = {
  color: '#3498DB',  
  transform: 'scale(1.1)',
};

export default Header;
