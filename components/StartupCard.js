import Link from 'next/link';

const StartupCard = ({ startup }) => {
  return (
    <div className="startup-card">
      <img src={startup.imageUrl} alt={startup.name} />
      <h3>{startup.name}</h3>
      <p>{startup.services}</p>
      <Link href={`/startup/${startup.id}`}>View Profile</Link>
    </div>
  );
};

export default StartupCard;
