import style from "./Highlights.module.css";

const VideoCard = ({ src, preload }) => {
  return (
    <div className={style.videoContainer}>
      <video
        className={style.testimonialvideo}
        src={src}
        loop
        muted
        playsInline
        autoPlay
        preload={preload ? "auto" : "metadata"}
        aria-label="Client highlight video"
      />
      <p className={style.videoFallback}>Client highlight video preview</p>
    </div>
  );
};

const Highlights = () => {
  const videoSrcs = [
    "https://res.cloudinary.com/dpla4nem3/video/upload/v1773562028/videoone_sygzcz.mp4",
    "https://res.cloudinary.com/dpla4nem3/video/upload/v1773561964/videothree_uxvlhr.mp4",
    "https://res.cloudinary.com/dpla4nem3/video/upload/v1773562004/videotwo_hngw95.mp4",
    "https://res.cloudinary.com/dpla4nem3/video/upload/v1773561979/videofour_cg0yfd.mp4",
  ];

  return (
    <div className={style.highlightsection}>
      <p className={style.highlightstitle}>Client Highlights</p>
      <div className={style.overlap}>
        <div className={style.highlightsvideos}>
          {videoSrcs.map((src, i) => (
            <VideoCard key={src} src={src} preload={i === 0} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Highlights;
