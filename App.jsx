import React, { useState, useEffect, useMemo } from 'react';
import {
  Wifi,
  ShieldCheck,
  Bed,
  Bath,
  Sparkles,
  MapPin,
  Phone,
  MessageSquare,
  Calendar,
  CheckCircle2,
  Star,
  Search,
  Building2,
  Users,
  Menu,
  X,
  ChevronRight,
  ChevronLeft,
  Filter,
  ArrowRight,
  Clock,
  Coffee,
  Briefcase,
  GraduationCap,
  Eye,
  Send,
  Check,
  Info,
  Tv,
  Wind,
  Utensils,
  Zap,
  Key,
  ShieldAlert,
  Car,
  ChevronDown,
  Lock,
  Compass,
  Heart,
  Share2
} from 'lucide-react';

const ROOM_TIERS = [
  {
    id: 'standard-studio',
    name: 'Standard Cozy Studio',
    tagline: 'Ideal for focused students & entry professionals',
    badge: 'Best Value',
    targetAudience: 'Student',
    size: '16 m²',
    bed: 'Single Bed (120x200)',
    wifiSpeed: '300 Mbps',
    priceMonthly: 1850000,
    priceYearly: 1650000,
    images: [
      'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800'
    ],
    features: [
      'Inverter AC 1 HP',
      'Ergonomic Work Desk & Chair',
      'En-suite Bathroom with Water Heater',
      'Smart RFID Door Lock',
      'Wardrobe with Mirror',
      'High-speed LAN & Wi-Fi 6'
    ],
    description: 'Compact yet cleverly designed space equipped with everything a dedicated student or young worker needs. Features sound-insulated walls and high-speed Wi-Fi for uninterrupted study or remote work sessions.'
  },
  {
    id: 'deluxe-executive',
    name: 'Deluxe Executive Suite',
    tagline: 'Spacious setup with private balcony & smart workspace',
    badge: 'Most Popular',
    targetAudience: 'Professional',
    size: '22 m²',
    bed: 'Queen Bed (160x200)',
    wifiSpeed: '500 Mbps',
    priceMonthly: 2600000,
    priceYearly: 2350000,
    images: [
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800'
    ],
    features: [
      '32" Smart Android TV',
      'Mini Fridge Included',
      'Private Balcony View',
      'Ergonomic Executive Office Chair',
      'Premium Springbed & Memory Foam Pillow',
      'Daily Room Cleaning Included',
      'Smart Keycard Access'
    ],
    description: 'Elevated living tailored for young executives seeking comfort, style, and privacy. Enjoy relaxing on your private balcony after a busy corporate workday or streaming content on your Smart TV.'
  },
  {
    id: 'vip-penthouse-loft',
    name: 'VIP Loft Suite',
    tagline: 'Luxury multi-zone living space with premium amenities',
    badge: 'Premium Choice',
    targetAudience: 'Professional',
    size: '30 m²',
    bed: 'King Bed (180x200)',
    wifiSpeed: '500 Mbps Direct Fiber',
    priceMonthly: 3400000,
    priceYearly: 3050000,
    images: [
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?auto=format&fit=crop&q=80&w=800'
    ],
    features: [
      '43" 4K Smart TV with Soundbar',
      'Double Mini Bar & Espresso Nook',
      'Rainfall Shower Head & Bathtub Accent',
      'Motorized Standing Desk',
      'Reserved Covered Parking (Car/Motorbike)',
      'Free Laundry Service (Up to 15kg/mo)'
    ],
    description: 'The pinnacle of AndalKost modern living. Designed with loft-inspired aesthetic, double ceiling height, top-tier soundproofing, and complimentary laundry services for total peace of mind.'
  }
];

const AMENITIES = [
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

const LOCATIONS = [
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

const TESTIMONIALS = [
  {
    name: 'Andini Putri',
    role: 'Computer Science Student @ UI',
    branch: 'AndalKost UI Depok Hub',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
    rating: 5,
    quote: 'The 500Mbps internet connection is an absolute lifesaver during my coding thesis marathons! The CCTV and RFID locks make me feel totally safe even when coming home late from campus.'
  },
  {
    name: 'Rizky Pratama',
    role: 'Senior Financial Analyst @ Big 4',
    branch: 'AndalKost Business Hub Kuningan',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
    rating: 5,
    quote: 'I used to waste 2 hours daily in Jakarta traffic. Moving to AndalKost Kuningan changed my life. Room cleaning service is super prompt, and the VIP room quality rivals a 4-star hotel.'
  },
  {
    name: 'Clara Sanggara',
    role: 'Design Lead & Remote Worker',
    branch: 'AndalKost Ganesha Tech Hub',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=200',
    rating: 5,
    quote: 'The ergonomic desk setup and ambient lighting made my home-office routine seamless. Plus, meeting fellow creative tenants in the common pantry has been an amazing networking perk!'
  }
];

const FAQS = [
  {
    question: 'Are electricity costs included in the monthly rent?',
    answer: 'Each room is equipped with an independent digital token meter (PLN Prepaid). This ensures you only pay for what you use, typically around IDR 150.000 - 300.000 per month depending on AC usage.'
  },
  {
    question: 'What is the deposit requirement and cancellation policy?',
    answer: 'We require a 1-month refundable security deposit upon check-in. The deposit will be fully returned on your check-out date after room inspection.'
  },
  {
    question: 'Can I bring overnight guests or family members?',
    answer: 'Visitors are welcomed in our ground floor lobby and shared lounge until 10:00 PM. Same-gender overnight guests are permitted with 24-hour prior notice to house management.'
  },
  {
    question: 'Is parking available for cars and motorcycles?',
    answer: 'Yes! All AndalKost branches feature secure covered parking facilities equipped with CCTV cameras. Motorcycle parking is free, while car parking space can be reserved for a small monthly fee.'
  },
  {
    question: 'How fast can I move in after booking?',
    answer: 'You can move in within the same day! Once your booking inquiry is confirmed via WhatsApp and deposit processed, your RFID keycard will be prepared immediately.'
  }
];

export default function App() {
  const [billingCycle, setBillingCycle] = useState('monthly'); // 'monthly' | 'yearly'
  const [selectedAudience, setSelectedAudience] = useState('All'); // 'All' | 'Student' | 'Professional'
  const [selectedLocation, setSelectedLocation] = useState(LOCATIONS[0].id);
  const [selectedRoomForModal, setSelectedRoomForModal] = useState(null);
  const [isInquiryModalOpen, setIsInquiryModalOpen] = useState(false);
  const [inquiryTargetRoom, setInquiryTargetRoom] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  // Quick form inquiry state
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    branch: LOCATIONS[0].id,
    roomType: ROOM_TIERS[0].name,
    moveInDate: '',
    tenantType: 'Student',
    notes: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  // Sync selected branch location details
  const activeLocation = useMemo(() => {
    return LOCATIONS.find((loc) => loc.id === selectedLocation) || LOCATIONS[0];
  }, [selectedLocation]);

  // Filtered rooms
  const filteredRooms = useMemo(() => {
    if (selectedAudience === 'All') return ROOM_TIERS;
    return ROOM_TIERS.filter((room) => room.targetAudience === selectedAudience);
  }, [selectedAudience]);

  // Handle open booking inquiry dialog
  const handleOpenInquiry = (roomName = '') => {
    if (roomName) {
      setFormData((prev) => ({ ...prev, roomType: roomName }));
    }
    setIsInquiryModalOpen(true);
  };

  // Generate WhatsApp Direct Link
  const handleWhatsAppRedirect = (e) => {
    e.preventDefault();
    const branchObj = LOCATIONS.find((l) => l.id === formData.branch);
    const branchName = branchObj ? branchObj.name : 'AndalKost';

    const message = `Halo AndalKost Admin! Saya mau tanya ketersediaan kamar:\n\n` +
      `👤 Nama: ${formData.name || 'Calon Penghuni'}\n` +
      `📱 No HP: ${formData.phone || '-'}\n` +
      `📍 Lokasi Branch: ${branchName}\n` +
      `🛏️ Tipe Kamar: ${formData.roomType}\n` +
      `🎓 Status: ${formData.tenantType}\n` +
      `📅 Rencana Masuk: ${formData.moveInDate || 'Bulan Ini'}\n` +
      `💬 Catatan Tambahan: ${formData.notes || '-'}\n\n` +
      `Apakah kamar masih ready? Mohon info detailnya. Terima kasih!`;

    const encoded = encodeURIComponent(message);
    const waNumber = '6281234567890'; // Representative WhatsApp hotline number
    window.open(`https://wa.me/${waNumber}?text=${encoded}`, '_blank');
    setFormSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans antialiased selection:bg-orange-500 selection:text-white">

      {}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200/80 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-orange-600 via-orange-500 to-amber-500 flex items-center justify-center text-white shadow-lg shadow-orange-500/30 group-hover:scale-105 transition-transform duration-200">
              <Building2 className="w-6 h-6" />
            </div>
            <div>
              <span className="text-2xl font-black tracking-tight text-slate-900 group-hover:text-orange-600 transition-colors">
                Andal<span className="text-orange-500">Kost</span>
              </span>
              <span className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 -mt-1">
                Modern Student & Pro Living
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600">
            <a href="#rooms" className="hover:text-orange-600 transition-colors">Room Types</a>
            <a href="#amenities" className="hover:text-orange-600 transition-colors">Amenities</a>
            <a href="#locations" className="hover:text-orange-600 transition-colors">Locations</a>
            <a href="#reviews" className="hover:text-orange-600 transition-colors">Testimonials</a>
            <a href="#faq" className="hover:text-orange-600 transition-colors">FAQ</a>
          </nav>

          {/* Action CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://wa.me/6281234567890?text=Halo%20AndalKost,%20saya%20ingin%20tanya%20info%20kamar"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2.5 rounded-xl border border-slate-300 text-slate-700 font-semibold text-sm hover:border-orange-500 hover:text-orange-600 hover:bg-orange-50/50 transition-all flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4 text-emerald-500" />
              <span>WhatsApp Admin</span>
            </a>
            <button
              onClick={() => handleOpenInquiry()}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold text-sm hover:from-orange-600 hover:to-orange-700 shadow-md shadow-orange-500/20 hover:shadow-lg hover:shadow-orange-500/30 active:scale-95 transition-all flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Book a Room</span>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Nav */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-slate-200 bg-white px-4 pt-2 pb-6 space-y-3 animate-in slide-in-from-top-2">
            <a
              href="#rooms"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-slate-700 font-medium hover:text-orange-600"
            >
              Room Types & Pricing
            </a>
            <a
              href="#amenities"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-slate-700 font-medium hover:text-orange-600"
            >
              Amenities
            </a>
            <a
              href="#locations"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-slate-700 font-medium hover:text-orange-600"
            >
              Locations & Map
            </a>
            <a
              href="#reviews"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-slate-700 font-medium hover:text-orange-600"
            >
              Tenant Reviews
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-slate-700 font-medium hover:text-orange-600"
            >
              FAQ
            </a>
            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleOpenInquiry();
                }}
                className="w-full py-3 rounded-xl bg-orange-500 text-white font-bold text-center shadow-md shadow-orange-500/30 flex items-center justify-center gap-2"
              >
                <Calendar className="w-5 h-5" />
                <span>Book / Check Availability</span>
              </button>
            </div>
          </div>
        )}
      </header>

      {}
      <section className="relative pt-8 pb-16 lg:pt-16 lg:pb-24 overflow-hidden bg-gradient-to-b from-orange-50/70 via-white to-slate-50">
        
        {/* Decorative background glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-orange-300/30 to-amber-200/40 blur-3xl rounded-full pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Headlines & CTAs */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100/80 border border-orange-200 text-orange-800 text-xs sm:text-sm font-semibold shadow-xs">
                <span className="flex h-2 w-2 rounded-full bg-orange-500 animate-ping" />
                <Sparkles className="w-4 h-4 text-orange-600" />
                <span>98% Occupancy Rate across 5 Strategic Hubs</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
                Modern, Secure & <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500">
                  Fully-Furnished
                </span>{' '}
                Living at AndalKost
              </h1>

              {/* Sub-headline */}
              <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
                Premium boarding house tailored for university students and young professionals. Walking distance to campus & CBD, 500Mbps Wi-Fi, 24/7 RFID security, and zero hassle.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <button
                  onClick={() => handleOpenInquiry()}
                  className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-orange-500 via-orange-600 to-amber-600 text-white font-bold text-base hover:from-orange-600 hover:to-orange-700 shadow-xl shadow-orange-500/25 hover:shadow-orange-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-3"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Book a Room Now</span>
                  <ArrowRight className="w-5 h-5" />
                </button>

                <a
                  href="#rooms"
                  className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white border border-slate-200 text-slate-700 font-bold text-base hover:bg-slate-50 hover:border-slate-300 shadow-xs transition-all flex items-center justify-center gap-2"
                >
                  <Eye className="w-5 h-5 text-slate-500" />
                  <span>Explore Rooms & Prices</span>
                </a>
              </div>

              {/* Quick Feature Pill Badges */}
              <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-slate-600 text-xs sm:text-sm font-semibold">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-orange-500" />
                  <span>Zero Agent Fees</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-orange-500" />
                  <span>Free Room Cleaning</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-orange-500" />
                  <span>Flexible Terms</span>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Visual Card / Interactive Room Showcase */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none rounded-3xl bg-white p-3 shadow-2xl shadow-orange-950/10 border border-slate-200/80 group">
                
                {/* Hero Room Image */}
                <div className="relative h-[340px] sm:h-[400px] w-full rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&q=80&w=1000"
                    alt="AndalKost Deluxe Room Interior"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/20" />

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-white text-xs font-semibold flex items-center gap-1.5 border border-white/20">
                      <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                      <span>4.95 Top Rated</span>
                    </span>
                  </div>

                  {/* Live Wifi Tag */}
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-emerald-500/90 backdrop-blur-md text-white text-xs font-bold flex items-center gap-1.5 shadow-md">
                    <Wifi className="w-3.5 h-3.5" />
                    <span>500 Mbps Active</span>
                  </div>

                  {/* Bottom Image Overlay Details */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-xs font-semibold text-orange-300 uppercase tracking-wider">
                      Featured Accommodation
                    </p>
                    <h3 className="text-xl font-bold">Deluxe Studio Executive</h3>
                    <p className="text-xs text-slate-200 mt-1 flex items-center gap-3">
                      <span>• 22 m² Space</span>
                      <span>• Private Bathroom</span>
                      <span>• Smart Lock</span>
                    </p>
                  </div>
                </div>

                {/* Quick Floating Stat Cards */}
                <div className="absolute -bottom-6 -left-6 bg-white p-3.5 rounded-2xl shadow-xl border border-slate-100 hidden sm:flex items-center gap-3 animate-bounce-slow">
                  <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center text-orange-600">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-900">24/7 Security</p>
                    <p className="text-[11px] text-slate-500">CCTV & RFID Guards</p>
                  </div>
                </div>

                <div className="absolute -top-6 -right-6 bg-white p-3.5 rounded-2xl shadow-xl border border-slate-100 hidden sm:flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-600">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-900">3 Mins To Campus</p>
                    <p className="text-[11px] text-slate-500">Walkable Strategic Spot</p>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* Quick Search & Filter Bar Bar */}
          <div className="mt-12 lg:mt-16 bg-white rounded-2xl p-4 sm:p-6 shadow-xl border border-slate-200/80 max-w-5xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-center">
              
              {/* Select Branch */}
              <div className="space-y-1">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-orange-500" />
                  <span>Preferred Branch</span>
                </label>
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-orange-500 cursor-pointer"
                >
                  {LOCATIONS.map((loc) => (
                    <option key={loc.id} value={loc.id}>
                      {loc.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Select Target Audience */}
              <div className="space-y-1">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-orange-500" />
                  <span>Tenant Category</span>
                </label>
                <select
                  value={selectedAudience}
                  onChange={(e) => setSelectedAudience(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-orange-500 cursor-pointer"
                >
                  <option value="All">All Categories</option>
                  <option value="Student">University Student</option>
                  <option value="Professional">Young Professional</option>
                </select>
              </div>

              {/* Move in timing */}
              <div className="space-y-1">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-orange-500" />
                  <span>Move-in Timeline</span>
                </label>
                <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-orange-500 cursor-pointer">
                  <option>Immediate / This Week</option>
                  <option>Next Month</option>
                  <option>Next Semester (2-3 Months)</option>
                </select>
              </div>

              {/* Search CTA */}
              <div className="pt-1">
                <button
                  onClick={() => {
                    const roomSec = document.getElementById('rooms');
                    if (roomSec) roomSec.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full py-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm shadow-md shadow-orange-500/20 transition-all flex items-center justify-center gap-2"
                >
                  <Search className="w-4 h-4" />
                  <span>Find Available Rooms</span>
                </button>
              </div>

            </div>
          </div>

        </div>
      </section>

      {}
      <section className="bg-slate-900 text-white py-10 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            
            <div className="space-y-1">
              <p className="text-3xl sm:text-4xl font-extrabold text-orange-500">500+</p>
              <p className="text-xs sm:text-sm font-medium text-slate-400">Satisfied Residents</p>
            </div>

            <div className="space-y-1">
              <p className="text-3xl sm:text-4xl font-extrabold text-orange-500">99.9%</p>
              <p className="text-xs sm:text-sm font-medium text-slate-400">Wi-Fi Uptime Reliability</p>
            </div>

            <div className="space-y-1">
              <p className="text-3xl sm:text-4xl font-extrabold text-orange-500">3 Mins</p>
              <p className="text-xs sm:text-sm font-medium text-slate-400">Average Walk to Campus/LRT</p>
            </div>

            <div className="space-y-1">
              <p className="text-3xl sm:text-4xl font-extrabold text-orange-500">4.9 / 5.0</p>
              <p className="text-xs sm:text-sm font-medium text-slate-400">Tenant Satisfaction Rating</p>
            </div>

          </div>
        </div>
      </section>

      {}
      <section id="amenities" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-bold uppercase tracking-wider">
              Designed For Modern Comfort
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Everything You Need for Work, Study & Relaxation
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              We eliminate standard boarding house headaches. Enjoy hotel-grade facilities with the warmth and independence of home.
            </p>
          </div>

          {/* Amenities Cards Grid */}
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {AMENITIES.map((amenity, idx) => {
              const IconComp = amenity.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-8 border border-slate-200/80 hover:border-orange-300 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-orange-50 text-orange-600 flex items-center justify-center group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300 mb-6">
                    <IconComp className="w-7 h-7" />
                  </div>
                  <p className="text-xs font-bold text-orange-600 uppercase tracking-widest mb-1">
                    {amenity.subtitle}
                  </p>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-orange-600 transition-colors">
                    {amenity.title}
                  </h3>
                  <p className="text-slate-600 text-sm mt-3 leading-relaxed">
                    {amenity.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Bonus Facilities Banner */}
          <div className="mt-12 bg-gradient-to-r from-orange-600 to-amber-600 rounded-3xl p-8 sm:p-10 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <h3 className="text-2xl font-bold">Looking for specific custom requirements?</h3>
              <p className="text-orange-100 text-sm max-w-xl">
                We also offer gender-separated corridors, motor parking slots, community quiet hours, and monthly guest passes.
              </p>
            </div>
            <button
              onClick={() => handleOpenInquiry()}
              className="px-6 py-3.5 rounded-xl bg-white text-orange-600 font-bold text-sm hover:bg-orange-50 shadow-md transition-all shrink-0"
            >
              Ask House Manager
            </button>
          </div>

        </div>
      </section>

      {}
      <section id="rooms" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-bold uppercase tracking-wider">
              Transparent Pricing & Options
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Choose Your Ideal Room Tier
            </h2>
            <p className="text-slate-600 text-base">
              Fully transparent rates with zero hidden maintenance fees. Select your preferred room layout below.
            </p>

            {/* Audience Filter Pills & Billing Cycle Switch */}
            <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-6">
              
              {/* Category Filter */}
              <div className="bg-slate-100 p-1.5 rounded-xl flex items-center gap-1 border border-slate-200">
                {['All', 'Student', 'Professional'].map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedAudience(category)}
                    className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                      selectedAudience === category
                        ? 'bg-white text-orange-600 shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {category === 'All' ? 'All Types' : `For ${category}s`}
                  </button>
                ))}
              </div>

              {/* Billing Toggle (Monthly / Yearly) */}
              <div className="flex items-center gap-3 bg-orange-50 px-4 py-2 rounded-xl border border-orange-200">
                <span className={`text-xs font-bold ${billingCycle === 'monthly' ? 'text-slate-900' : 'text-slate-500'}`}>
                  Monthly
                </span>
                <button
                  onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
                  className="relative w-12 h-6 rounded-full bg-orange-500 transition-colors p-1"
                  aria-label="Toggle billing cycle"
                >
                  <div
                    className={`w-4 h-4 rounded-full bg-white transition-transform ${
                      billingCycle === 'yearly' ? 'translate-x-6' : 'translate-x-0'
                    }`}
                  />
                </button>
                <div className="flex items-center gap-1.5">
                  <span className={`text-xs font-bold ${billingCycle === 'yearly' ? 'text-slate-900' : 'text-slate-500'}`}>
                    Yearly Payment
                  </span>
                  <span className="px-2 py-0.5 rounded-md bg-emerald-500 text-white text-[10px] font-extrabold uppercase">
                    Save ~10%
                  </span>
                </div>
              </div>

            </div>

          </div>

          {/* Room Cards Grid */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredRooms.map((room) => {
              const activePrice = billingCycle === 'monthly' ? room.priceMonthly : room.priceYearly;
              return (
                <div
                  key={room.id}
                  className="bg-slate-50 rounded-3xl overflow-hidden border border-slate-200/80 hover:border-orange-400 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col"
                >
                  
                  {/* Card Header Image Slider Preview */}
                  <div className="relative h-60 w-full bg-slate-200 group overflow-hidden">
                    <img
                      src={room.images[0]}
                      alt={room.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full bg-orange-500 text-white text-xs font-bold uppercase shadow-md">
                        {room.badge}
                      </span>
                    </div>

                    <div className="absolute bottom-3 right-3 bg-slate-900/80 backdrop-blur-md text-white text-xs px-2.5 py-1 rounded-lg flex items-center gap-1 font-medium">
                      <Eye className="w-3.5 h-3.5 text-orange-400" />
                      <span>{room.images.length} Photos</span>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                    
                    <div className="space-y-3">
                      <div>
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">
                            {room.targetAudience} Suite
                          </span>
                          <span className="text-xs text-slate-500 font-semibold flex items-center gap-1">
                            <Wifi className="w-3.5 h-3.5 text-emerald-500" />
                            {room.wifiSpeed}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mt-1">{room.name}</h3>
                        <p className="text-xs text-slate-500 mt-0.5">{room.tagline}</p>
                      </div>

                      {/* Room Specs Pills */}
                      <div className="grid grid-cols-2 gap-2 text-xs font-medium text-slate-700 bg-white p-3 rounded-xl border border-slate-200/60">
                        <div className="flex items-center gap-1.5">
                          <Building2 className="w-4 h-4 text-orange-500" />
                          <span>Size: {room.size}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Bed className="w-4 h-4 text-orange-500" />
                          <span>{room.bed}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Bath className="w-4 h-4 text-orange-500" />
                          <span>En-suite Hot Bath</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Wind className="w-4 h-4 text-orange-500" />
                          <span>AC 1 HP Inverter</span>
                        </div>
                      </div>

                      {/* Feature Bullet List */}
                      <ul className="space-y-2 pt-2">
                        {room.features.slice(0, 4).map((feat, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs text-slate-600 font-normal">
                            <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Pricing & CTA */}
                    <div className="pt-4 border-t border-slate-200/80 space-y-4">
                      
                      <div className="flex items-baseline justify-between">
                        <div>
                          <span className="text-2xl font-black text-slate-900">
                            Rp {activePrice.toLocaleString('id-ID')}
                          </span>
                          <span className="text-xs text-slate-500 font-medium"> / month</span>
                        </div>
                        {billingCycle === 'yearly' && (
                          <span className="text-[10px] text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                            Billed annually
                          </span>
                        )}
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        <button
                          onClick={() => setSelectedRoomForModal(room)}
                          className="w-full py-2.5 rounded-xl border border-slate-300 text-slate-700 font-bold text-xs hover:bg-slate-100 transition-colors flex items-center justify-center gap-1"
                        >
                          <Eye className="w-3.5 h-3.5" />
                          <span>Spec Detail</span>
                        </button>
                        
                        <button
                          onClick={() => handleOpenInquiry(room.name)}
                          className="w-full py-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs shadow-md shadow-orange-500/20 transition-all flex items-center justify-center gap-1"
                        >
                          <Calendar className="w-3.5 h-3.5" />
                          <span>Book Room</span>
                        </button>
                      </div>

                    </div>

                  </div>

                </div>
              );
            })}
          </div>

        </div>
      </section>

      {}
      <section id="locations" className="py-20 bg-slate-900 text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="px-3 py-1 rounded-full bg-orange-500/20 text-orange-400 border border-orange-500/30 text-xs font-bold uppercase tracking-wider">
              Strategic Locations
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Located Right Where You Need To Be
            </h2>
            <p className="text-slate-400 text-base">
              Never get stuck in long traffic commutes. Our properties are positioned within minutes of major university campuses and central business districts.
            </p>
          </div>

          {/* Location Hub Tabs */}
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {LOCATIONS.map((loc) => (
              <button
                key={loc.id}
                onClick={() => setSelectedLocation(loc.id)}
                className={`px-5 py-3 rounded-2xl font-bold text-sm transition-all flex items-center gap-2 ${
                  selectedLocation === loc.id
                    ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/30'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                <MapPin className="w-4 h-4" />
                <span>{loc.name}</span>
              </button>
            ))}
          </div>

          {/* Active Location Detail Container */}
          <div className="mt-10 bg-slate-800/80 rounded-3xl p-6 sm:p-8 border border-slate-700/80 grid lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Info Column */}
            <div className="lg:col-span-5 space-y-6">
              
              <div>
                <span className="text-xs font-bold text-orange-400 uppercase tracking-widest">
                  {activeLocation.tag}
                </span>
                <h3 className="text-2xl font-bold text-white mt-1">{activeLocation.name}</h3>
                <p className="text-xs text-slate-400 mt-2 flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-orange-500 shrink-0" />
                  <span>{activeLocation.address}</span>
                </p>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">
                {activeLocation.description}
              </p>

              {/* Proximity Matrix */}
              <div className="space-y-3 pt-2">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Nearby Accessibility Points:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activeLocation.pointsOfInterest.map((poi, idx) => (
                    <div key={idx} className="bg-slate-900/60 p-3 rounded-xl border border-slate-700/60 flex items-center justify-between">
                      <span className="text-xs font-semibold text-slate-200">{poi.name}</span>
                      <span className="text-[11px] font-bold text-orange-400 bg-orange-500/10 px-2 py-0.5 rounded border border-orange-500/20 shrink-0 ml-2">
                        {poi.distance}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => handleOpenInquiry()}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Schedule Site Visit</span>
                </button>
              </div>

            </div>

            {/* Right Interactive Google Map Iframe Container */}
            <div className="lg:col-span-7 h-[350px] sm:h-[420px] rounded-2xl overflow-hidden border border-slate-700 bg-slate-900 relative shadow-inner">
              <iframe
                title={activeLocation.name}
                src={activeLocation.googleMapEmbed}
                className="w-full h-full border-0 filter grayscale contrast-125 opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                loading="lazy"
                allowFullScreen
              />
              <div className="absolute top-3 right-3 bg-slate-900/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-700 text-xs font-bold text-orange-400 flex items-center gap-1.5 pointer-events-none">
                <Compass className="w-4 h-4 animate-spin-slow" />
                <span>Live Location Map</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {}
      <section id="reviews" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-bold uppercase tracking-wider">
              Tenant Testimonials
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Loved by Students & Professionals
            </h2>
            <p className="text-slate-600 text-base">
              Read what our current long-term residents have to say about living in AndalKost properties.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((review, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  
                  {/* Rating Stars */}
                  <div className="flex items-center gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                    ))}
                  </div>

                  <p className="text-slate-700 text-sm italic leading-relaxed">
                    "{review.quote}"
                  </p>
                </div>

                {/* Profile Header */}
                <div className="pt-6 border-t border-slate-100 flex items-center gap-3 mt-6">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-orange-500/30"
                  />
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">{review.name}</h4>
                    <p className="text-xs font-medium text-orange-600">{review.role}</p>
                    <p className="text-[10px] text-slate-400 mt-0.5">{review.branch}</p>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {}
      <section id="faq" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-4">
            <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-bold uppercase tracking-wider">
              Got Questions?
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-600 text-base">
              Everything you need to know about checking in, house rules, and monthly billing.
            </p>
          </div>

          <div className="mt-12 space-y-4">
            {FAQS.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className="border border-slate-200 rounded-2xl overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? -1 : index)}
                    className="w-full px-6 py-5 text-left font-bold text-slate-900 text-base flex items-center justify-between gap-4 bg-slate-50/50 hover:bg-slate-100/80 transition-colors"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-500 shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180 text-orange-600' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 py-5 bg-white border-t border-slate-100 text-slate-600 text-sm leading-relaxed animate-in fade-in duration-200">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {}
      <section className="py-16 bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight max-w-3xl mx-auto leading-tight">
            Ready to Secure Your Premium Room at AndalKost?
          </h2>
          <p className="text-orange-100 text-base sm:text-lg max-w-2xl mx-auto">
            Rooms in prime campus and business locations fill up fast. Inquire today and lock in your price for next semester or work transition!
          </p>
          <div className="pt-2 flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => handleOpenInquiry()}
              className="px-8 py-4 rounded-2xl bg-slate-900 text-white font-bold text-base hover:bg-slate-800 shadow-xl transition-all flex items-center justify-center gap-2"
            >
              <Calendar className="w-5 h-5 text-orange-400" />
              <span>Book Room Online</span>
            </button>
            <a
              href="https://wa.me/6281234567890?text=Halo%20AndalKost,%20saya%20mau%20tanya%20ketersediaan%20kamar"
              target="_blank"
              rel="noreferrer"
              className="px-8 py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-base shadow-xl transition-all flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-5 h-5" />
              <span>Chat via WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {}
      <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-900 text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
            
            {/* Col 1: Brand Info */}
            <div className="lg:col-span-2 space-y-4">
              <a href="#" className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-orange-500 flex items-center justify-center text-white font-bold">
                  <Building2 className="w-5 h-5" />
                </div>
                <span className="text-xl font-black text-white">AndalKost</span>
              </a>
              <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
                AndalKost is a modern boarding house brand providing comfortable, fully-furnished, high-speed Wi-Fi equipped living spaces in strategic university and corporate zones.
              </p>
              <div className="pt-2 space-y-2 text-xs">
                <p className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-orange-500" />
                  <span>Hotline / WA: +62 812-3456-7890</span>
                </p>
                <p className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-orange-500" />
                  <span>Email: hello@andalkost.com</span>
                </p>
              </div>
            </div>

            {/* Col 2: Locations */}
            <div className="space-y-3">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider">Our Branches</h4>
              <ul className="space-y-2 text-xs">
                <li><a href="#locations" className="hover:text-orange-400 transition-colors">UI Depok Hub</a></li>
                <li><a href="#locations" className="hover:text-orange-400 transition-colors">Business Hub Kuningan</a></li>
                <li><a href="#locations" className="hover:text-orange-400 transition-colors">Ganesha Tech Hub ITB</a></li>
                <li><a href="#locations" className="hover:text-orange-400 transition-colors">BSD Tech City Hub</a></li>
              </ul>
            </div>

            {/* Col 3: Quick Links */}
            <div className="space-y-3">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider">Quick Navigation</h4>
              <ul className="space-y-2 text-xs">
                <li><a href="#rooms" className="hover:text-orange-400 transition-colors">Standard Studio</a></li>
                <li><a href="#rooms" className="hover:text-orange-400 transition-colors">Deluxe Executive</a></li>
                <li><a href="#rooms" className="hover:text-orange-400 transition-colors">VIP Loft Suite</a></li>
                <li><a href="#amenities" className="hover:text-orange-400 transition-colors">Facilities & Amenities</a></li>
              </ul>
            </div>

            {/* Col 4: Social & Legal */}
            <div className="space-y-3">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider">Connect & Legal</h4>
              <ul className="space-y-2 text-xs">
                <li><a href="#" className="hover:text-orange-400 transition-colors">Instagram @andalkost.id</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">TikTok @lifeatandalkost</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Terms & Conditions</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Privacy Policy</a></li>
              </ul>
            </div>

          </div>

          <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
            <p>© {new Date().getFullYear()} AndalKost Business Network. All rights reserved.</p>
            <p className="flex items-center gap-1">
              <span>Made with</span>
              <Heart className="w-3.5 h-3.5 text-orange-500 fill-orange-500" />
              <span>for comfortable living</span>
            </p>
          </div>
        </div>
      </footer>

      {}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-30 bg-white/95 backdrop-blur-md border-t border-slate-200 p-3 flex items-center justify-between gap-3 shadow-2xl">
        <div className="space-y-0.5">
          <p className="text-[10px] uppercase font-extrabold text-orange-600">AndalKost Ready Rooms</p>
          <p className="text-xs font-bold text-slate-900">From Rp 1.65M/mo</p>
        </div>
        <div className="flex items-center gap-2">
          <a
            href="https://wa.me/6281234567890?text=Halo%20AndalKost,%20saya%20mau%20tanya%20info%20kamar"
            target="_blank"
            rel="noreferrer"
            className="px-3.5 py-2.5 rounded-xl bg-emerald-500 text-white font-bold text-xs flex items-center gap-1.5 shadow-sm"
          >
            <MessageSquare className="w-4 h-4" />
            <span>WhatsApp</span>
          </a>
          <button
            onClick={() => handleOpenInquiry()}
            className="px-4 py-2.5 rounded-xl bg-orange-500 text-white font-bold text-xs shadow-md shadow-orange-500/20 flex items-center gap-1.5"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Now</span>
          </button>
        </div>
      </div>

      {}
      {selectedRoomForModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 space-y-6 relative shadow-2xl">
            
            <button
              onClick={() => setSelectedRoomForModal(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image Slider Gallery */}
            <div className="space-y-3">
              <div className="h-64 sm:h-80 rounded-2xl overflow-hidden bg-slate-100">
                <img
                  src={selectedRoomForModal.images[0]}
                  alt={selectedRoomForModal.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-3 gap-2">
                {selectedRoomForModal.images.map((imgUrl, i) => (
                  <div key={i} className="h-20 rounded-xl overflow-hidden bg-slate-100 border border-slate-200">
                    <img src={imgUrl} alt="Thumbnail" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </div>

            <div>
              <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-bold uppercase">
                {selectedRoomForModal.badge}
              </span>
              <h3 className="text-2xl font-bold text-slate-900 mt-2">{selectedRoomForModal.name}</h3>
              <p className="text-sm text-slate-600 mt-1 leading-relaxed">{selectedRoomForModal.description}</p>
            </div>

            {/* Room Specs */}
            <div className="bg-slate-50 p-4 rounded-2xl space-y-3 border border-slate-200">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">Included Room Inclusions</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-medium text-slate-700">
                {selectedRoomForModal.features.map((feat, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-slate-200">
              <div>
                <p className="text-xs text-slate-400">Monthly Starting Rate</p>
                <p className="text-2xl font-extrabold text-slate-900">
                  Rp {selectedRoomForModal.priceMonthly.toLocaleString('id-ID')}
                </p>
              </div>
              <button
                onClick={() => {
                  const roomName = selectedRoomForModal.name;
                  setSelectedRoomForModal(null);
                  handleOpenInquiry(roomName);
                }}
                className="px-6 py-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm shadow-md"
              >
                Inquire Ketersediaan
              </button>
            </div>

          </div>
        </div>
      )}

      {}
      {isInquiryModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 space-y-6 relative shadow-2xl">
            
            <button
              onClick={() => {
                setIsInquiryModalOpen(false);
                setFormSubmitted(false);
              }}
              className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div>
              <span className="text-xs font-bold text-orange-600 uppercase tracking-widest">
                Direct Booking Inquiry
              </span>
              <h3 className="text-2xl font-bold text-slate-900 mt-1">Book or Check Availability</h3>
              <p className="text-xs text-slate-500 mt-1">
                Fill in your preference to generate a direct WhatsApp message to our house manager.
              </p>
            </div>

            {formSubmitted ? (
              <div className="p-6 bg-emerald-50 rounded-2xl text-center space-y-3 border border-emerald-200">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h4 className="text-lg font-bold text-emerald-900">Inquiry Link Redirected!</h4>
                <p className="text-xs text-emerald-700">
                  Your formatted message has been opened in WhatsApp. If it didn't open automatically, click the button below.
                </p>
                <button
                  onClick={handleWhatsAppRedirect}
                  className="px-5 py-2.5 rounded-xl bg-emerald-600 text-white font-bold text-xs shadow-md"
                >
                  Re-open WhatsApp
                </button>
              </div>
            ) : (
              <form onSubmit={handleWhatsAppRedirect} className="space-y-4">
                
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Your Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sarah Amalia"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">Phone / WhatsApp</label>
                    <input
                      type="tel"
                      required
                      placeholder="08123456789"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">Status</label>
                    <select
                      value={formData.tenantType}
                      onChange={(e) => setFormData({ ...formData, tenantType: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white"
                    >
                      <option value="Student">University Student</option>
                      <option value="Professional">Young Professional</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">Branch Location</label>
                    <select
                      value={formData.branch}
                      onChange={(e) => setFormData({ ...formData, branch: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white"
                    >
                      {LOCATIONS.map((loc) => (
                        <option key={loc.id} value={loc.id}>{loc.name}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">Room Tier</label>
                    <select
                      value={formData.roomType}
                      onChange={(e) => setFormData({ ...formData, roomType: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white"
                    >
                      {ROOM_TIERS.map((tier) => (
                        <option key={tier.id} value={tier.name}>{tier.name}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Planned Move-In Date</label>
                  <input
                    type="date"
                    value={formData.moveInDate}
                    onChange={(e) => setFormData({ ...formData, moveInDate: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Notes / Questions (Optional)</label>
                  <textarea
                    rows={2}
                    placeholder="e.g. Need motorcycle parking space"
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-700 hover:to-emerald-600 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send Inquiry via WhatsApp</span>
                </button>

              </form>
            )}

          </div>
        </div>
      )}

    </div>
  );
}
