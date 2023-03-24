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
        <div className={styles.contentComponent5}>
          <h2>
            <div className={styles.animComponent2} data-aos="fade-up" data-aos-once="true">
              <div className={styles.componentLine}>IT'S</div>
              <div className={styles.componentLine}>SMART</div>
              <div className={styles.componentLine}>TO</div>
              <div className={styles.componentLine}>LEARN</div>
            </div>
            <div className={styles.animComponent2} data-aos="fade-up" data-aos-once="true">
              <div className={styles.componentLine}>FROM</div>
              <div className={styles.componentLine}>OTHERS</div>
            </div>
          </h2>
          <div>
            <div className={styles.animComponent2} data-aos="fade-up" data-aos-once="true">
              <div className={styles.component2Line}>Wisr</div>
              <div className={styles.component2Line}>went</div>
              <div className={styles.component2Line}>above</div>
              <div className={styles.component2Line}>and</div>
              <div className={styles.component2Line}>beyond</div>
              <div className={styles.component2Line}>to</div>
            </div>
            <div className={styles.animComponent2} data-aos="fade-up" data-aos-once="true">
              <div className={styles.component2Line}>give</div>
              <div className={styles.component2Line}>me</div>
              <div className={styles.component2Line}>the</div>
              <div className={styles.component2Line}>best</div>
              <div className={styles.component2Line}>possible</div>
            </div>
            <div className={styles.animComponent2} data-aos="fade-up" data-aos-once="true">
              <div className={styles.component2Line}>—— Gary</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
