import styles from "@/styles/Video.module.css";
export const Component1 = () => {
  return (
    <div className={styles.component}>
      <div className={styles.videoInner}>
        <div className={styles.popup}>
          <video
            className={styles.video}
            src="https://wisr.com.au/assets/media/smart-part-journey/00_intro.mp4"
            poster="https://wisr.com.au/assets/media/smart-part-journey/00_intro.jpg"
            autoPlay
            muted
          ></video>
          <div className={styles.contentComponent1}>
            <strong className={styles.component1Srong}>introduct Wisr Today</strong>
            <p className={styles.component1P}>
              Use the power of psychology to help you build smarter money habits and save
            </p>
            <button className={styles.component1Button}>Learn more</button>
          </div>
        </div>
      </div>
    </div>
  );
};
