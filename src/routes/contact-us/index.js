import react from "react";
import ContactHeroSection from "./contactHeroSection";
import WaysToReachUs from "./waysToReachUs";
import OfficeandRegistration from "./officeandRegistration";
import GetinTouch from "./getinTouch";
import Faq from "../../components/faq";

export default function ContactUs() {
  return (
    <div>
      <ContactHeroSection />
      <WaysToReachUs />
      <OfficeandRegistration />
      <GetinTouch />
      <Faq />
    </div>
  );
}
