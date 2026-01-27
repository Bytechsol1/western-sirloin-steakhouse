
export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  category: 'Appetizers' | 'Steaks' | 'Seafood' | 'Chicken' | 'Sides' | 'Desserts';
  image: string;
}

export interface Review {
  id: string;
  author: string;
  date: string;
  rating: number;
  comment: string;
  initials: string;
  isFeatured?: boolean;
}

export interface BusinessInfo {
  name: string;
  phone: string;
  address: string;
  cityState: string;
  website: string;
  yearsInBusiness: number;
  tagline: string;
  hours: {
    [key: string]: string;
  };
}
