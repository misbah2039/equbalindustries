/** Floating WhatsApp — +91-7518441997 */
const WHATSAPP_E164 = "917518441997";

function WhatsAppFloat() {
  const href = `https://wa.me/${WHATSAPP_E164}?text=${encodeURIComponent(
    "Hi Equbal, I would like to discuss a service."
  )}`;

  return (
    <a
      href={href}
      className="equbal-whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      title="Chat with us on WhatsApp"
    >
      <span className="equbal-whatsapp-icon" aria-hidden>
        {/* Simple chat glyph — avoids external icon packs */}
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            fill="currentColor"
            d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.17L4 17.17V4h16v12z"
          />
          <path fill="currentColor" d="M7 9h10v2H7zm0-3h10v2H7zm6 6H7v2h6z" />
        </svg>
      </span>
      <span className="equbal-whatsapp-label">Chat with us</span>
    </a>
  );
}

export default WhatsAppFloat;
