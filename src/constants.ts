export interface Product {
  id: string;
  name: string;
  category: 'Energy' | 'Sparkling' | 'Natural' | 'Limited';
  flavor: string;
  description: string;
  price: string;
  image: string;
  color: string;
}

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Electric Cyan',
    category: 'Energy',
    flavor: 'Blue Raspberry & Lime',
    description: 'A surge of tropical energy with a sharp citrus finish.',
    price: '$3.50',
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&q=80&w=600',
    color: 'bg-tropical-cyan'
  },
  {
    id: '2',
    name: 'Lime Zest Burst',
    category: 'Sparkling',
    flavor: 'Key Lime & Mint',
    description: 'Ultra-refreshing sparkling water with a Caribbean twist.',
    price: '$2.99',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=600',
    color: 'bg-tropical-lime'
  },
  {
    id: '3',
    name: 'Sunset Orange',
    category: 'Natural',
    flavor: 'Blood Orange & Passionfruit',
    description: 'The taste of a Suriname sunset in every sip.',
    price: '$3.25',
    image: 'https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&q=80&w=600',
    color: 'bg-tropical-orange'
  },
  {
    id: '4',
    name: 'Midnight Vibe',
    category: 'Limited',
    flavor: 'Blackberry & Dragonfruit',
    description: 'Mysterious, bold, and perfect for the night life.',
    price: '$4.00',
    image: 'https://images.unsplash.com/photo-1544145945-f904253d0c7b?auto=format&fit=crop&q=80&w=600',
    color: 'bg-purple-500'
  },
  {
    id: '5',
    name: 'Tropical Punch',
    category: 'Natural',
    flavor: 'Pineapple & Guava',
    description: 'A classic island blend that never goes out of style.',
    price: '$3.25',
    image: 'https://images.unsplash.com/photo-1497515114629-f71d768fd07c?auto=format&fit=crop&q=80&w=600',
    color: 'bg-yellow-400'
  },
  {
    id: '6',
    name: 'Arctic Chill',
    category: 'Energy',
    flavor: 'Icy Menthol & Lychee',
    description: 'The ultimate cool-down for high-intensity days.',
    price: '$3.50',
    image: 'https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&q=80&w=600',
    color: 'bg-blue-300'
  }
];
