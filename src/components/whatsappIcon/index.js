import react from "react";
import WhatsappIconimg from "../../assets/svgIcons/whatsapp.png";
import "./whatsappIcon.scss";

export default function WhatsappIcon() {
  return (
    <section className="whatsappIcon-section">
      <div className="WhatsappIconFixed">
        <img src={WhatsappIconimg} alt="WhatsappIcon" />
      </div>
    </section>
  );
}
