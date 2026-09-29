import { Outlet } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import InquiryModal from "../features/inquiry/components/InquiryModal";
import { useInquiryModal } from "../features/inquiry/hooks/useInquiryModal";
import { LOCATIONS } from "../features/locations/data/locations";
import { ROOM_TIERS } from "../features/rooms/data/rooms";

function MainLayout() {
  const inquiry = useInquiryModal(LOCATIONS[0].id, ROOM_TIERS[0].name);

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#F5F4EF] font-sans text-[#171717] antialiased selection:bg-[#171717] selection:text-[#F5F4EF]">
      <Navbar onOpenInquiry={inquiry.openInquiry} />

      <Outlet context={inquiry} />

      <Footer />

      <InquiryModal
        isOpen={inquiry.isOpen}
        onClose={inquiry.closeInquiry}
        formData={inquiry.formData}
        onChange={inquiry.updateField}
        onSubmit={(event) => inquiry.handleSubmit(event, LOCATIONS)}
        isSubmitted={inquiry.formSubmitted}
        onReopen={() => inquiry.reopenWhatsApp(LOCATIONS)}
      />
    </div>
  );
}

export default MainLayout;
