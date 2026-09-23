export const LOCATIONS = [
  {
    id: 'depok-campus',
    name: 'AndalKost UI Depok Hub',
    tag: 'Near Campus UI & Gunadarma',
    address: 'Jl. Margonda Raya No. 142, Beji, Depok',
    description: 'Only 3 minutes walking distance to UI Train Station and major campus gates. Surrounded by cafes and libraries.',
    pointsOfInterest: [
      { name: 'Universitas Indonesia Main Gate', distance: '3 mins walk', type: 'campus' },
      { name: 'Pondok Cina Train Station', distance: '5 mins walk', type: 'transit' },
      { name: 'Margo City Mall', distance: '4 mins drive', type: 'mall' },
      { name: 'Starbucks Margonda', distance: '1 min walk', type: 'cafe' }
    ],
    googleMapEmbed: 'https://maps.google.com/maps?q=Margonda%20Raya%20Depok&t=&z=15&ie=UTF8&iwloc=&output=embed'
  },
  {
    id: 'kuningan-biz',
    name: 'AndalKost Business Hub Kuningan',
    tag: 'Sudirman - Kuningan CBD Area',
    address: 'Jl. Karet Pedurenan No. 88, Setiabudi, Jakarta Selatan',
    description: 'Prime choice for corporate workers in Rasuna Said & Mega Kuningan. Quiet residential alley close to main roads.',
    pointsOfInterest: [
      { name: 'Lotte Shopping Avenue', distance: '5 mins walk', type: 'mall' },
      { name: 'LRT Rasuna Said Station', distance: '6 mins walk', type: 'transit' },
      { name: 'Gatot Subroto Office Tower', distance: '8 mins drive', type: 'work' },
      { name: 'Grand Indonesia', distance: '12 mins drive', type: 'mall' }
    ],
    googleMapEmbed: 'https://maps.google.com/maps?q=Karet%20Pedurenan%20Kuningan%20Jakarta&t=&z=15&ie=UTF8&iwloc=&output=embed'
  },
  {
    id: 'bandung-tech',
    name: 'AndalKost Ganesha Tech Hub',
    tag: 'Near ITB & Dipatiukur',
    address: 'Jl. Ganesha No. 25, Coblong, Bandung',
    description: 'Surrounded by cool pine trees and energetic student culture. Walking distance to ITB and Dipatiukur creative spaces.',
    pointsOfInterest: [
      { name: 'ITB Campus Gate', distance: '2 mins walk', type: 'campus' },
      { name: 'Dipatiukur Food Street', distance: '4 mins walk', type: 'cafe' },
      { name: 'Cihampelas Walk', distance: '7 mins drive', type: 'mall' },
      { name: 'Bandung Train Station', distance: '15 mins drive', type: 'transit' }
    ],
    googleMapEmbed: 'https://maps.google.com/maps?q=Jalan%20Ganesha%20Bandung&t=&z=15&ie=UTF8&iwloc=&output=embed'
  }
];
