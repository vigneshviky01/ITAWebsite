import { useState, useRef } from 'react';
 // Replace with your custom icon path
 

const PlayIcon = () => {
    return (
          <div className="w-full relative [backdrop-filter:blur(15px)] rounded-full bg-gray border-white border-solid border-[2px] box-border h-[135px] max-sm:h-[67px] overflow-hidden shrink-0 flex flex-row items-center justify-center px-[35px] max-sm:px-[17px]">
                <img className="w-[62px] relative h-[62px] max-sm:h-[31px] max-sm:w-[31px]" alt="" src="/play_icon.svg" />
          </div>);
};



const LazyVideo = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef(null);

    const togglePlayPause = () => {
        if (isPlaying) {
            videoRef.current.pause();
        } else {
            videoRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <div className="relative w-full max-w-4xl rounded-lg shadow-lg">
            <video
                ref={videoRef}
                className="w-full rounded-lg"
                loop
                muted
                playsInline
            >
                <source
                    src="https://res.cloudinary.com/doro2emvj/video/upload/v1742024987/VN20230726_210707_1_nllk1f.mp4"
                    type="video/mp4"
                />
                Your browser does not support the video tag.
            </video>

            {/* Invisible Play Button */}
            <button
                onClick={togglePlayPause}
                alt="Pause"
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-transparent border-none cursor-pointer opacity-0"
            >
                <PlayIcon className="display-none"/>
            </button>

            {/* Optional: Show Play Icon when Paused */}
            {!isPlaying && (
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" alt="Play" onClick={togglePlayPause}>
                    <PlayIcon />
                </div>
            )}
        </div>
    );
};

export default LazyVideo;