import { Wifi, ShieldCheck, Bed, Bath, Sparkles, Utensils } from 'lucide-react';

export const AMENITIES = [
  {
    icon: Wifi,
    title: 'Ultra Fast Wi-Fi 6',
    subtitle: 'Dedicated 500 Mbps Bandwidth',
    description: 'Dedicated fiber connection with redundant failover. Unlimited streaming, high-speed gaming, and seamless Zoom calls.',
    category: 'tech'
  },
  {
    icon: ShieldCheck,
    title: '24/7 Smart Security',
    subtitle: 'CCTV + RFID Smart Locks',
    description: 'Round-the-clock security personnel, face-ID/RFID entry doors, and night patrol monitoring across all corridors.',
    category: 'security'
  },
  {
    icon: Bed,
    title: 'Fully Furnished Living',
    subtitle: 'Move In with Just Your Luggage',
    description: 'Orthopedic spring mattresses, spacious wardrobes, LED ambient lights, and ergonomic workspace pre-installed.',
    category: 'comfort'
  },
  {
    icon: Bath,
    title: 'Private En-Suite Bathroom',
    subtitle: 'Instant Hot Water & Modern Fixtures',
    description: 'Clean, modern bathroom in every single room with electric water heaters, exhaust fan, and eco showerheads.',
    category: 'comfort'
  },
  {
    icon: Sparkles,
    title: 'Housekeeping & Laundry',
    subtitle: 'Hassle-free Daily Maintenance',
    description: 'Free weekly deep room cleaning, garbage pick-up, and optional full wash & fold laundry service.',
    category: 'services'
  },
  {
    icon: Utensils,
    title: 'Pantry & Common Lounge',
    subtitle: 'Shared Kitchen & Cafe Corner',
    description: 'Equipped with microwave, induction stoves, water dispenser, free coffee/tea, and collaborative study nooks.',
    category: 'services'
  }
];
