import React, { useState } from 'react';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import MobileBottomBar from '../../components/layout/MobileBottomBar';

import HeroSection from './components/Hero/HeroSection';
import StatsBar from './components/StatsBar';
import CtaBanner from './components/CtaBanner';

import AmenitiesSection from '../../features/amenities/components/AmenitiesSection';
import RoomsSection from '../../features/rooms/components/RoomsSection';
import LocationsSection from '../../features/locations/components/LocationsSection';
import TestimonialsSection from '../../features/testimonials/components/TestimonialsSection';
import FaqSection from '../../features/faq/components/FaqSection';

import RoomDetailModal from '../../features/rooms/components/RoomDetailModal';
import InquiryModal from '../../features/inquiry/components/InquiryModal';

import { useRoomFilter } from '../../features/rooms/hooks/useRoomFilter';
import { useInquiryModal } from '../../features/inquiry/hooks/useInquiryModal';
import { LOCATIONS } from '../../features/locations/data/locations';
import { ROOM_TIERS } from '../../features/rooms/data/rooms';

/**
 * Route-level home landing page composition
 */
export default function HomePage() {
  const [selectedLocation, setSelectedLocation] = useState(LOCATIONS[0].id);
  const [selectedRoomForModal, setSelectedRoomForModal] = useState(null);

  const roomFilter = useRoomFilter(ROOM_TIERS);
  const inquiry = useInquiryModal(LOCATIONS[0].id, ROOM_TIERS[0].name);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans antialiased selection:bg-orange-500 selection:text-white">
      {/* 1. Sticky Header & Navigation */}
      <Header onOpenInquiry={() => inquiry.openInquiry()} />

      {/* 2. Main Page Feature Sections */}
      <main>
        <HeroSection
          selectedLocation={selectedLocation}
          onLocationChange={setSelectedLocation}
          selectedAudience={roomFilter.selectedAudience}
          onAudienceChange={roomFilter.setSelectedAudience}
          onOpenInquiry={inquiry.openInquiry}
        />

        <StatsBar />

        <AmenitiesSection onOpenInquiry={() => inquiry.openInquiry()} />

        <RoomsSection
          rooms={roomFilter.filteredRooms}
          billingCycle={roomFilter.billingCycle}
          onToggleBilling={roomFilter.toggleBilling}
          selectedAudience={roomFilter.selectedAudience}
          onSelectAudience={roomFilter.setSelectedAudience}
          onSelectRoomForModal={setSelectedRoomForModal}
          onOpenInquiry={inquiry.openInquiry}
        />

        <LocationsSection
          locations={LOCATIONS}
          selectedLocationId={selectedLocation}
          onSelectLocation={setSelectedLocation}
          onOpenInquiry={() => inquiry.openInquiry()}
        />

        <TestimonialsSection />

        <FaqSection />

        <CtaBanner onOpenInquiry={() => inquiry.openInquiry()} />
      </main>

      {/* 3. Extensive Footer */}
      <Footer />

      {/* 4. Sticky Mobile Floating Action Bar */}
      <MobileBottomBar onOpenInquiry={() => inquiry.openInquiry()} />

      {/* 5. Feature Modals */}
      <RoomDetailModal
        room={selectedRoomForModal}
        onClose={() => setSelectedRoomForModal(null)}
        onInquire={(roomName) => {
          setSelectedRoomForModal(null);
          inquiry.openInquiry(roomName);
        }}
      />

      <InquiryModal
        isOpen={inquiry.isOpen}
        onClose={inquiry.closeInquiry}
        formData={inquiry.formData}
        onChange={inquiry.updateField}
        onSubmit={(e) => inquiry.handleSubmit(e, LOCATIONS)}
        isSubmitted={inquiry.formSubmitted}
        onReopen={() => inquiry.reopenWhatsApp(LOCATIONS)}
      />
    </div>
  );
}
