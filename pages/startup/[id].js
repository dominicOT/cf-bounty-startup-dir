// pages/startup/[id].js

import { useRouter } from 'next/router';
import { getStartupById } from '../../utils/db';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const StartupProfile = ({ startup }) => {
  const { query } = useRouter();

  if (!startup) {
    return <p>Startup not found!</p>;
  }

  return (
    <div>
      <Header />
      <h1>{startup.name}</h1>
      <p><strong>Services:</strong> {startup.services}</p>
      <p><strong>Contact:</strong> {startup.contact}</p>
      <p><strong>Operating Hours:</strong> {startup.operatingHours}</p>
      <p><strong>Reviews:</strong></p>
      <ul>
        {startup.reviews.map((review, index) => (
          <li key={index}>{review}</li>
        ))}
      </ul>
      <Footer />
    </div>
  );
};

// Fetch the startup data based on the ID
export async function getServerSideProps({ params }) {
  const startup = getStartupById(params.id);
  return {
    props: {
      startup,
    },
  };
}

export default StartupProfile;
