// utils/db.js

export const getAllStartups = () => {
    return [
      {
        id: '1',
        name: 'Tech Innovators Sierra Leone',
        services: 'Web development, Mobile App Development',
        contact: '+232 76 123 456',
        operatingHours: 'Mon-Fri: 9 AM - 6 PM',
        imageUrl: '/images/tech-innovators.jpg',
        reviews: ['Great service!', 'Professional team.'],
      },
      // Add other startups here
    ];
  };
  
  export const getStartupById = (id) => {
    const startups = getAllStartups();
    return startups.find(startup => startup.id === id);
  };
   