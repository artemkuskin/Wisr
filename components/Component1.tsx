import styles from "@/styles/Video.module.css";
export const Component1 = () => {
  return (
    <div className={styles.component}>
      <div className={styles.videoInner}>
        <video
          className={styles.video}
          src="https://wisr.com.au/assets/media/smart-part-journey/00_intro.mp4"
          poster="https://wisr.com.au/assets/media/smart-part-journey/00_intro.jpg"
          autoPlay
          muted
        ></video>
        <div className={styles.contentComponent1}></div>
      </div>
    </div>
  );
};
