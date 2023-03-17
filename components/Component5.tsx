import styles from "@/styles/Video.module.css";
export const Component5 = () => {
  return (
    <div className={styles.contantVideo}>
      <div className={styles.videoInner}>
        <video
          className={styles.video}
          src="https://wisr.com.au/assets/media/smart-part-journey/04_hammer.mp4"
          poster="https://wisr.com.au/assets/media/smart-part-journey/04_hammer.jpg"
          autoPlay
          muted
        ></video>
      </div>
    </div>
  );
};
