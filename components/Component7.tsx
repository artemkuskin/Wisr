import styles from "@/styles/Video.module.css";
export const Component7 = () => {
  return (
    <div className={styles.contantVideo}>
      <div className={styles.videoInner}>
        <video
          className={styles.video}
          src="https://wisr.com.au/assets/media/smart-part-journey/06_brain.mp4"
          poster="https://wisr.com.au/assets/media/smart-part-journey/06_brain.jpg"
          autoPlay
          muted
        ></video>
      </div>
    </div>
  );
};
