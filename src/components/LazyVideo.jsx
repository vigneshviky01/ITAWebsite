const LazyVideo = () => {
    return (
        <video
            className="w-full max-w-4xl rounded-lg shadow-lg"
            autoPlay
            loop
            muted
            playsInline
        >
            <source src="https://res.cloudinary.com/doro2emvj/video/upload/v1742024987/VN20230726_210707_1_nllk1f.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    );
};

export default LazyVideo;
