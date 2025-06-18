import React from "react";
import { Play, Pause, Volume2, VolumeX, Maximize2 } from "lucide-react";

const VideoControls = ({
  isPlaying,
  isMuted,
  togglePlay,
  toggleMute,
  toggleFullscreen,
}) => {
  return (
    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 flex justify-end items-center">
      <button
        onClick={togglePlay}
        className="group relative flex items-center justify-center w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full transition-all duration-200 hover:scale-110 me-3"
        aria-label={isPlaying ? "Pause video" : "Play video"}
      >
        {isPlaying ? (
          <Pause className="w-5 h-5 text-white" />
        ) : (
          <Play className="w-5 h-5 text-white" />
        )}
        <div className="absolute inset-0 rounded-full ring-2 ring-white/50 opacity-0 group-hover:opacity-100 group-hover:ring-white/70 transition-all duration-200"></div>
      </button>

      <button
        onClick={toggleMute}
        className="group relative flex items-center justify-center w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full transition-all duration-200 hover:scale-110 me-3"
        aria-label={isMuted ? "Unmute video" : "Mute video"}
      >
        {isMuted ? (
          <VolumeX className="w-5 h-5 text-white" />
        ) : (
          <Volume2 className="w-5 h-5 text-white" />
        )}
        <div className="absolute inset-0 rounded-full ring-2 ring-white/50 opacity-0 group-hover:opacity-100 group-hover:ring-white/70 transition-all duration-200"></div>
      </button>

      <button
        onClick={toggleFullscreen}
        className="group relative flex items-center justify-center w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full transition-all duration-200 hover:scale-110"
        aria-label="Enter fullscreen"
      >
        <Maximize2 className="w-5 h-5 text-white" />
        <div className="absolute inset-0 rounded-full ring-2 ring-white/50 opacity-0 group-hover:opacity-100 group-hover:ring-white/70 transition-all duration-200"></div>
      </button>
    </div>
  );
};

export default VideoControls;
