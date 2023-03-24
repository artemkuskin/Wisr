import styles from "@/styles/Video.module.css";
export const Component3 = () => {
  return (
    <div className={styles.contantVideo}>
      <div className={styles.videoInner}>
        <video
          className={styles.video}
          src="https://wisr.com.au/assets/media/smart-part-journey/02_flipper.mp4"
          poster="https://wisr.com.au/assets/media/smart-part-journey/02_flipper.jpg"
          autoPlay
          muted
        ></video>
        <div className={styles.contentComponent3}></div>
      </div>
    </div>
  );
};
