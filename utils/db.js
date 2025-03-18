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
        imageUrl: '/sendme.jpeg',
        reviews: ['On time delivery!', 'Affordable price.'],
      },
      {
        id: '4',
        name: 'Mocha',
        services: 'Traditional Mobile, Modern Money',
        contact: '+232 75 841351',
        operatingHours: 'All round the clock',
        imageUrl: '/mocha.jpg',
        reviews: ['On time delivery!', 'Affordable price.'],
      },
      {
        id: '5',
        name: 'DORB AI',
        services: 'Maximizing Worskpace Productivity',
        contact: '+232 80 174187',
        operatingHours: 'All round the clock',
        imageUrl: '/logo.png',
        reviews: ['Efficient Automation', 'Productivity boosting.'],
      },
    ];
  };
  
  export const getStartupById = (id) => {
    const startups = getAllStartups();
    return startups.find(startup => startup.id === id);
  };
   