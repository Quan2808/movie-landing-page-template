import useCountdownToRelease from "../../hooks/useCountdownToRelease";
import useVideoControls from "../../hooks/useVideoControls";
import VideoControls from "./VideoControls";

const HeroSection = () => {
  const timeLeft = useCountdownToRelease("2025-07-23T00:00:00");
  const {
    videoRef,
    isPlaying,
    isMuted,
    showThumbnail,
    togglePlay,
    toggleMute,
    toggleFullscreen,
    handleVideoEnd,
  } = useVideoControls();

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-900">
      {/* Background SVG Pattern */}
      <div className="absolute inset-0">
        <img
          alt="Video Thumbnail"
          src="https://pianofingers.vn/wp-content/uploads/2024/04/Sheet-piano-Thie%CC%82n-Ly%CC%81-O%CC%9Bi-Jack-2.jpeg"
          className="absolute inset-0 w-full h-full object-cover"
          aria-hidden="true"
        />
      </div>
      <div className="absolute inset-0 bg-black/40"></div>
      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center">
        {/* Left Content */}
        <div className="flex-1 text-center lg:text-left mb-10 lg:mb-0">
          {/* <img
            alt="Your Company"
            src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
            className="h-12 mx-auto lg:mx-0 mb-6"
          /> */}
          <p className="text-lg sm:text-xl text-gray-300">
            {timeLeft ? (
              <>
                COMING SOON IN:{" "}
                <span className="font-mono font-semibold text-white">
                  {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m{" "}
                  {timeLeft.seconds}s
                </span>
              </>
            ) : (
              <span className="text-green-400 font-semibold">WE'RE LIVE!</span>
            )}
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Movie title
          </h1>
          <p className="text-lg text-gray-300 max-w-xl mx-auto lg:mx-0">
            Topic: Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
            qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat.
          </p>
        </div>
        {/* Right Video */}
        <div className="flex-1 relative">
          <div className="relative w-full rounded-lg shadow-lg overflow-hidden">
            {/* Video Element */}
            <video
              ref={videoRef}
              className="w-full h-auto"
              onEnded={handleVideoEnd}
              aria-label="Movie trailer"
            >
              <source
                src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
            {/* Thumbnail Overlay */}
            {showThumbnail && (
              <img
                alt="Video Thumbnail"
                src="https://pianofingers.vn/wp-content/uploads/2024/04/Sheet-piano-Thie%CC%82n-Ly%CC%81-O%CC%9Bi-Jack-2.jpeg"
                className="absolute inset-0 w-full h-full object-cover"
              />
            )}
            {/* Custom Controls Overlay */}
            <VideoControls
              isPlaying={isPlaying}
              isMuted={isMuted}
              togglePlay={togglePlay}
              toggleMute={toggleMute}
              toggleFullscreen={toggleFullscreen}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
