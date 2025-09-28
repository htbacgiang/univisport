import classNames from "classnames";
import { ChangeEventHandler, FC, useEffect, useState } from "react";
import Image from 'next/image';
import GalleryModal, { ImageSelectionResult } from './GalleryModal';

interface ImageData {
  src: string;
  altText?: string;
  id?: string;
}

interface Props {
  initialValue?: string;
  onChange(file: File): void;
  // Gallery props
  images?: ImageData[];
  uploading?: boolean;
  onFileSelect?(imageData: File | { file: File; altText: string }): void;
  onImageFromGallery?(imageUrl: string): void;
}

const ThumbnailSelector: FC<Props> = ({
  initialValue,
  onChange,
  images = [],
  uploading = false,
  onFileSelect,
  onImageFromGallery,
}): JSX.Element => {
  const [selectedThumbnail, setSelectedThumbnail] = useState("");
  const [showGalleryModal, setShowGalleryModal] = useState(false);

  const handleChange: ChangeEventHandler<HTMLInputElement> = ({ target }) => {
    const { files } = target;
    if (!files) return;

    const file = files[0];
    setSelectedThumbnail(URL.createObjectURL(file));
    onChange(file);
  };

  useEffect(() => {
    if (typeof initialValue === "string") setSelectedThumbnail(initialValue);
  }, [initialValue]);

  const handleGallerySelect = (result: ImageSelectionResult) => {
    setSelectedThumbnail(result.src);
    setShowGalleryModal(false);
    if (onImageFromGallery) {
      onImageFromGallery(result.src);
    }
  };

  const handleGalleryFileSelect = (imageData: File | { file: File; altText: string }) => {
    if (onFileSelect) {
      onFileSelect(imageData);
    }
  };

  return (
    <div className="thumbnail-container space-y-3">
      <input
        type="file"
        hidden
        accept="image/jpg, image/png, image/jpeg"
        id="thumbnail"
        onChange={handleChange}
      />
      
      {/* Thumbnail display and Gallery button row */}
      <div className="flex gap-3 h-20">
        {/* Thumbnail display - Click to upload */}
        <label htmlFor="thumbnail" className="cursor-pointer flex-1 h-full">
          {selectedThumbnail ? (
            <div className="thumbnail-section compact hover:opacity-80 transition-opacity h-full">
              <img
                src={selectedThumbnail}
                alt="Thumbnail"
                className="w-full h-full object-cover rounded"
              />
            </div>
          ) : (
            <PosterUI label="Ảnh đại diện" className="h-full" />
          )}
        </label>

        {/* Gallery button */}
        {images && images.length > 0 && (
          <button
            onClick={() => setShowGalleryModal(true)}
            className="text-white text-sm font-medium px-3 rounded-lg transition-colors whitespace-nowrap h-full"
            style={{ backgroundColor: '#105d97' }}
            onMouseEnter={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#0d4a7a'}
            onMouseLeave={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#105d97'}
          >
            🖼️ Chọn từ thư viện
          </button>
        )}
      </div>

      {/* Gallery Modal */}
      {showGalleryModal && (
        <GalleryModal
          visible={showGalleryModal}
          images={images}
          uploading={uploading}
          onFileSelect={handleGalleryFileSelect}
          onSelect={handleGallerySelect}
          onClose={() => setShowGalleryModal(false)}
        />
      )}
    </div>
  );
};


const PosterUI: FC<{ label: string; className?: string }> = ({
  label,
  className,
}) => {
  return (
    <div className={classNames("thumbnail-section", className)}>
      <div className="thumbnail-icon">📷</div>
      <div className="thumbnail-text">{label}</div>
    </div>
  );
};

export default ThumbnailSelector;
