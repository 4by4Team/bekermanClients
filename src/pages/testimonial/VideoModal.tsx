interface Props {
    youtubeId: string;
    onClose: () => void;
  }
  
  const VideoModal = ({ youtubeId, onClose }: Props) => (
    <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
      <div className="relative w-full max-w-5xl aspect-video bg-black rounded-xl overflow-hidden shadow-lg">
        <iframe
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&controls=1&modestbranding=1&rel=0`}
          title="YouTube Video"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
        <button onClick={onClose} aria-label="Close video" className="absolute top-3 right-3 text-white bg-black/60 rounded-full p-2 hover:bg-black/80 transition">
          &#10005;
        </button>
      </div>
    </div>
  );
  
  export default VideoModal;
  