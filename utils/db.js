// utils/db.js

export const getAllStartups = () => {
    return [
      {
        id: '1',
        name: 'Tech Innovators Sierra Leone',
        services: 'Web development, Mobile App Development',
        contact: '+232 76 123 456',
        operatingHours: 'Mon-Fri: 9 AM - 6 PM',
        imageUrl: '/techhb.jpeg',
        reviews: ['Great service!', 'Professional team.'],
      },
      {
        id: '2',
        name: 'Lyv',
        services: 'Digital Ticketing on WhatsApp',
        contact: '+232 78814080',
        operatingHours: 'All round the clock',
        imageUrl: '/lyv.jpg',
        reviews: ['Awesome Interface!', 'Easy ticketing.'],
      },
      {
        id: '3',
        name: 'SendMe',
        services: 'Fast Delivery Service',
        contact: '+232 78039048',
        operatingHours: 'All round the clock',
        imageUrl: '/sendme.jpg',
        reviews: ['Awesome Interface!', 'Easy ticketing.'],
      },
    ];
  };
  
  export const getStartupById = (id) => {
    const startups = getAllStartups();
    return startups.find(startup => startup.id === id);
  };
   