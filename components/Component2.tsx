import styles from "@/styles/Video.module.css";

export const Component2 = () => {
  return (
    <div className={styles.contantVideo}>
      <div className={styles.videoInner}>
        <video
          className={styles.video}
          src="https://wisr.com.au/assets/media/smart-part-journey/01_ramp.mp4"
          poster="https://wisr.com.au/assets/media/smart-part-journey/01_ramp.jpg"
          autoPlay
          muted
        ></video>
        <div className={styles.contentComponent2}></div>
      </div>
    </div>
  );
};
