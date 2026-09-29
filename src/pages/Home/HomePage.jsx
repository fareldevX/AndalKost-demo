import { useRef, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { useGsapAnimations } from "../../hooks/useGsapAnimations";

import HeroSection from "./components/Hero/HeroSection";
import CtaBanner from "./components/CtaBanner";
import AboutSection from "../../features/about/components/AboutSection";

import AmenitiesSection from "../../features/amenities/components/AmenitiesSection";
import RoomsSection from "../../features/rooms/components/RoomsSection";
import LocationsSection from "../../features/locations/components/LocationsSection";
import TestimonialsSection from "../../features/testimonials/components/TestimonialsSection";
import FaqSection from "../../features/faq/components/FaqSection";

import RoomDetailModal from "../../features/rooms/components/RoomDetailModal";
import { useRoomFilter } from "../../features/rooms/hooks/useRoomFilter";
import { LOCATIONS } from "../../features/locations/data/locations";
import { ROOM_TIERS } from "../../features/rooms/data/rooms";

export default function HomePage() {
  const inquiry = useOutletContext();
  const [selectedLocation, setSelectedLocation] = useState(LOCATIONS[0].id);
  const [selectedRoomForModal, setSelectedRoomForModal] = useState(null);
  const pageContainer = useRef(null);

  const roomFilter = useRoomFilter(ROOM_TIERS);
  useGsapAnimations(pageContainer);

  const selectLocation = (locationId) => {
    setSelectedLocation(locationId);
    inquiry.updateField("branch", locationId);
  };

  return (
    <div className="overflow-x-hidden" ref={pageContainer}>
      <main>
        <HeroSection
          selectedLocation={selectedLocation}
          onLocationChange={selectLocation}
          selectedAudience={roomFilter.selectedAudience}
          onAudienceChange={roomFilter.setSelectedAudience}
        />

        <AboutSection />

        <RoomsSection
          rooms={roomFilter.filteredRooms}
          billingCycle={roomFilter.billingCycle}
          onToggleBilling={roomFilter.toggleBilling}
          onSelectRoomForModal={setSelectedRoomForModal}
          onOpenInquiry={inquiry.openInquiry}
        />

        <AmenitiesSection />

        <LocationsSection
          locations={LOCATIONS}
          selectedLocationId={selectedLocation}
          onSelectLocation={selectLocation}
        />

        <TestimonialsSection />

        <FaqSection />

        <CtaBanner onOpenInquiry={inquiry.openInquiry} />
      </main>

      <RoomDetailModal
        room={selectedRoomForModal}
        onClose={() => setSelectedRoomForModal(null)}
        onInquire={(roomName) => {
          setSelectedRoomForModal(null);
          inquiry.openInquiry(roomName);
        }}
      />
    </div>
  );
}
