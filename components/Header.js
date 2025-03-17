// components/Header.js

import Link from 'next/link';

const Header = () => {
  return (
    <header style={headerStyles}>
      <nav>
        <ul style={navListStyles}>
          <li style={navItemStyles}><Link href="/">Home</Link></li>
          <li style={navItemStyles}><Link href="/admin/add-startup">Add Startup</Link></li>
        </ul>
      </nav>
    </header>
  );
};

const headerStyles = {
  backgroundColor: '#333',
  padding: '10px 0',
  color: '#fff',
  textAlign: 'center',
};

const navListStyles = {
  listStyle: 'none',
  padding: 0,
  margin: 0,
  display: 'flex',
  justifyContent: 'center',
};

const navItemStyles = {
  margin: '0 15px',
};

export default Header;
