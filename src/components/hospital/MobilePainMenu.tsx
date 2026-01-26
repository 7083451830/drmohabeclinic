import { X, Phone, MessageCircle } from "lucide-react";

type Props = {
  open: boolean;
  onClose: () => void;
};

const painTypes = [
  "Knee Pain",
  "Shoulder Pain",
  "Back Pain",
  "Headache",
  "Neck Pain",
  "Cancer Pain",
  "Fibromyalgia",
  "Phantom Limb Pain",
  "Wrist Pain",
  "Trigeminal Neuralgia",
  "Myofascial Pain Syndrome",
];

const MobilePainMenu = ({ open, onClose }: Props) => {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/50"
      onClick={onClose} // clicking overlay closes menu
    >
      {/* Side Panel */}
      <div
        className="fixed left-0 top-0 h-full w-72 bg-background shadow-xl p-5 overflow-y-auto z-60"
        onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside panel
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-bold text-primary">Pain Types</h3>
          <button onClick={onClose} aria-label="Close pain menu">
            <X size={22} />
          </button>
        </div>

        {/* Pain List */}
        <ul className="space-y-3">
          {painTypes.map((pain, index) => (
            <li
              key={index}
              className="border-b pb-2 text-foreground hover:text-accent cursor-pointer"
            >
              {pain}
            </li>
          ))}
        </ul>

        {/* Quick Actions */}
        <div className="mt-6 space-y-3">
          <a
            href="tel:+918446100492"
            className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-3 rounded-lg justify-center"
          >
            <Phone size={18} /> Call Now
          </a>

          <a
            href="https://wa.me/918446100492"
            target="_blank"
            className="flex items-center gap-2 bg-green-500 text-white px-4 py-3 rounded-lg justify-center"
          >
            <MessageCircle size={18} /> WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

export default MobilePainMenu;
