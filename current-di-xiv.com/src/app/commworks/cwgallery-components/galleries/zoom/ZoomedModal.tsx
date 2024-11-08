import React from "react";

interface ZoomedModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
  altText: string;
  localizedDismiss: string;
}

const ZoomedModal: React.FC<ZoomedModalProps> = ({
  isOpen,
  onClose,
  imageUrl,
  altText,
  localizedDismiss,
}) => {
  if (!isOpen) return null;

  return (
    <div
      title={localizedDismiss}
      className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div className="relative top-0 w-auto h-[90%] flex items-center justify-center">
        <img
          src={imageUrl}
          className="not-mobile:w-auto not-mobile:h-full mobile-only:w-full mobile-only:h-auto rounded-md"
          alt={altText}
          onClick={(e) => e.stopPropagation()}
        />
      </div>
    </div>
  );
};

export default ZoomedModal;
