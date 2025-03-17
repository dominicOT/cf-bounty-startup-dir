import StartupList from '../components/StartupList';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { getAllStartups } from '../utils/db';

const HomePage = ({ startups }) => {
  return (
    <div>
      <Header />
      <h1>Welcome to Freetown Startups Directory</h1>
      <StartupList startups={startups} />
      <Footer />
    </div>
  );
};

// Fetch the data for startups (mock data for now)
export async function getStaticProps() {
  const startups = getAllStartups();
  return {
    props: {
      startups,
    },
  };
}

export default HomePage;
