
import { BusinessInfo, MenuItem, Review } from './types';

export const BUSINESS_INFO: BusinessInfo = {
  name: "Western Sirloin Steakhouse",
  tagline: "Quality Cuts, Family Values, Southern Tradition.",
  phone: "(256) 905-1019",
  address: "11383 Alabama 157",
  cityState: "Moulton, AL 35650",
  website: "http://www.facebook.com/pages/Western-Sirloin-Steakhouse/155302047838381",
  yearsInBusiness: 46,
  hours: {
    "Mon": "Closed",
    "Tue - Sun": "11:00 am - 9:00 pm"
  }
};

export const MENU_ITEMS: MenuItem[] = [
  // Steaks
  {
    id: 'st1',
    name: 'Delmonico',
    description: 'Our signature cut. Richly marbled, tender, and juicy. A local favorite.',
    price: '$12.49',
    category: 'Steaks',
    image: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'st2',
    name: 'Ribeye',
    description: 'Well-marbled and full of flavor, grilled to your specification.',
    price: '$11.49',
    category: 'Steaks',
    image: 'https://images.unsplash.com/photo-1546241072-48010ad28c2c?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'st3',
    name: 'Western Sirloin',
    description: 'Our classic lean cut, bursting with beefy flavor. A great value.',
    price: '$9.49',
    category: 'Steaks',
    image: 'https://images.unsplash.com/photo-1432139555190-58524dae6a55?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'st4',
    name: 'N.Y. Strip',
    description: 'A steakhouse classic. Firm texture and fine grain.',
    price: '$11.49',
    category: 'Steaks',
    image: 'https://images.unsplash.com/photo-1601002272825-9f5a4fb754e3?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'st5',
    name: 'Hamburger Steak',
    description: 'Fresh ground beef patty, grilled and smothered in onions and gravy.',
    price: '$7.49',
    category: 'Steaks',
    image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&q=80&w=800'
  },

  // Seafood
  {
    id: 'sf1',
    name: 'Whole Catfish',
    description: 'Southern-style whole catfish, fried golden brown and crispy.',
    price: '$9.99',
    category: 'Seafood',
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a3a1b7e?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'sf2',
    name: 'Fried Catfish Fillets',
    description: 'Boneless fillets hand-breaded and fried to perfection. Served with hush puppies.',
    price: '$10.99',
    category: 'Seafood',
    image: 'https://images.unsplash.com/photo-1599305090598-fe179d501227?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'sf3',
    name: 'Fried Shrimp',
    description: 'Plump shrimp, breaded and fried. A seafood lover\'s delight.',
    price: '$10.99',
    category: 'Seafood',
    image: 'https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&q=80&w=800'
  },

  // Chicken
  {
    id: 'ch1',
    name: 'Grilled Chicken Kabob',
    description: 'Marinated chicken breast chunks skewered with vegetables and grilled.',
    price: '$8.29',
    category: 'Chicken',
    image: 'https://images.unsplash.com/photo-1534797258760-1bd29929cd4c?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'ch2',
    name: 'Chicken Fingers',
    description: 'Hand-breaded chicken tenders, fried golden. A favorite for all ages.',
    price: '$8.29',
    category: 'Chicken',
    image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&q=80&w=800'
  },

  // Sides & Appetizers (Grouped for display simplicity or can be separate)
  {
    id: 'sd1',
    name: 'Unlimited Salad Bar',
    description: 'Fresh greens, garden vegetables, and a variety of homemade salads and dressings.',
    price: '$6.99',
    category: 'Sides',
    image: 'https://images.unsplash.com/photo-1551248429-40975aa4de74?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'sd2',
    name: 'Loaded Potato',
    description: 'Baked potato topped with butter, sour cream, cheese, and bacon bits.',
    price: '$1.99',
    category: 'Sides',
    image: 'https://images.unsplash.com/photo-1618449845540-3306dbd92e59?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'ap1',
    name: 'Jalapeno Poppers',
    description: 'Crispy breaded jalapenos stuffed with cheese.',
    price: '$4.69',
    category: 'Appetizers',
    image: 'https://images.unsplash.com/photo-1599318182523-38dc3902185b?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'ap2',
    name: 'Onion Rings',
    description: 'Thick-cut onion rings, battered and fried golden.',
    price: '$4.69',
    category: 'Appetizers',
    image: 'https://images.unsplash.com/photo-1639024471283-03518883512d?auto=format&fit=crop&q=80&w=800'
  },

  // Desserts
  {
    id: 'ds1',
    name: 'Homemade Pie',
    description: 'Daily selection of freshly baked pies. Ask your server for today\'s flavors.',
    price: '$3.49',
    category: 'Desserts',
    image: 'https://images.unsplash.com/photo-1572383672419-ab4779963d36?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'ds2',
    name: 'Cheesecake',
    description: 'Rich and creamy New York style cheesecake.',
    price: '$3.49',
    category: 'Desserts',
    image: 'https://images.unsplash.com/photo-1524351199678-941a58a3df50?auto=format&fit=crop&q=80&w=800'
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'r1',
    author: 'Local Guide',
    date: 'a month ago',
    rating: 5,
    initials: 'LG',
    isFeatured: true,
    comment: 'The salad bar is loaded and great! The Delmonico steak was cooked perfectly. Great service and excellent atmosphere.'
  },
  {
    id: 'r2',
    author: 'Customer',
    date: '2 months ago',
    rating: 5,
    initials: 'C',
    comment: 'Been eating here for years. The ribeye is the best value in town. Love the family-friendly vibe.'
  },
  {
    id: 'r3',
    author: 'Traveler',
    date: '3 months ago',
    rating: 4,
    initials: 'T',
    comment: 'Good wholesome food. The hamburger steak with gravy is delicious. Service is always friendly.'
  },
  {
    id: 'r4',
    author: 'Foodie',
    date: '5 months ago',
    rating: 5,
    initials: 'F',
    comment: 'The catfish is amazing! Crispy on the outside, moist on the inside. Don’t skip the hush puppies.'
  }
];
