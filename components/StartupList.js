// components/StartupList.js

import StartupCard from './StartupCard';

const StartupList = ({ startups }) => {
  return (
    <div className="startup-list">
      {startups.map(startup => (
        <StartupCard key={startup.id} startup={startup} />
      ))}
    </div>
  );
};

export default StartupList;
