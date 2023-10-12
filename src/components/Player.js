import React, { useRef, useState } from 'react';
import ReactPlayer from 'react-player';
import {
  BsFillPlayCircleFill,
  BsPauseCircleFill,
  BsFillFastForwardCircleFill,
  BsFillSkipBackwardCircleFill,
} from 'react-icons/bs';

function VideoPlayer() {
  const playerRef = useRef(null);
  const [seekTo, setSeekTo] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleSeek = (seconds) => {
    if (playerRef.current) {
      const currentTime = playerRef.current.getCurrentTime();
      playerRef.current.seekTo(currentTime + seconds);
    }
  };

  const handleSeekTo = () => {
    if (seekTo !== null && playerRef.current) {
      playerRef.current.seekTo(seekTo);
    }
  };

  const handleSliderChange = (value) => {
    setSeekTo(value);
  };

  return (
    <div className="h-auto w-full p-5">
      <ReactPlayer
        ref={playerRef}
        url="https://cph-p2p-msl.akamaized.net/hls/live/2000341/test/master.m3u8"
        playing={isPlaying}
        controls={false}
        width="100%"
        height="auto"
        config={{
          file: {
            forceHLS: true,
            attributes: {
              controlsList: 'nodownload', // Disable download option
            },
            hlsOptions: {
              maxBufferLength: 30,
              capLevelToPlayerSize: true,
              autoStartLoad: true,
              startPosition: -1,
            },
          },
        }}
      />
      <div className="flex-col flex gap-7 my-7">
        <input
          type="range"
          min={0}
          max={0.999999}
          step="any"
          value={seekTo || 0}
          onChange={(e) => handleSliderChange(parseFloat(e.target.value))}
          onMouseUp={handleSeekTo}
          onTouchEnd={handleSeekTo}
          className="w-full"
        />
        <div className="flex items-center justify-between gap-5 w-full px-4 md:px-[25%]">
          <button
            onClick={() => handleSeek(-10)}
            className="flex flex-col items-center justify-center gap-1"
          >
            <BsFillSkipBackwardCircleFill size={35} />
            <span className="text-sm font-semibold capitalize">
              backward 10s
            </span>
          </button>

          <button onClick={handlePlayPause}>
            {isPlaying ? (
              <div className="flex flex-col items-center justify-center gap-2">
                <BsPauseCircleFill size={50} />
                <span className="text-sm font-semibold capitalize">Pause</span>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center gap-2">
                <BsFillPlayCircleFill size={50} />
                <span className="text-sm font-semibold capitalize">Play</span>
              </div>
            )}
          </button>

          <button
            onClick={() => handleSeek(10)}
            className="flex flex-col items-center justify-center gap-1"
          >
            <BsFillFastForwardCircleFill size={35} />
            <span className="text-sm font-semibold capitalize">
              forward 10s
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default VideoPlayer;
