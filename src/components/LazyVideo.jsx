const LazyVideo = () => {
    return (
        <video
            className="w-full max-w-4xl rounded-lg shadow-lg"
            autoPlay
            loop
            muted
            playsInline
            loading="lazy"
        >
            <source src="/VN20230726_210707 (1).mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    );
};

export default LazyVideo;
