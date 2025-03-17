// page/index.js

import StartupList from '../components/StartupList';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { getAllStartups } from '../utils/db';

const HomePage = ({ startups }) => {
  return (
    <div style={homePageStyles}>
      <Header />
      <div style={contentStyles}>
        <h1 style={titleStyles}>Welcome to Freetown Startups Directory</h1>
        <StartupList startups={startups} />
      </div>
      <Footer />
    </div>
  );
};

const homePageStyles = {
  fontFamily: 'Arial, sans-serif',
  margin: 0,
  padding: 0,
  backgroundColor: '#f4f4f9',
  minHeight: '100vh',
  position: 'relative',
  paddingBottom: '60px', // Ensure footer is visible
};

const contentStyles = {
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '20px',
  textAlign: 'center',
};

const titleStyles = {
  fontSize: '2.5em',
  margin: '20px 0',
  color: '#333',
};

export async function getStaticProps() {
  const startups = getAllStartups();
  return {
    props: {
      startups,
    },
  };
}

export default HomePage;