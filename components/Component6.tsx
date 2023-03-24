import styles from "@/styles/Video.module.css";
export const Component6 = () => {
  return (
    <div className={styles.contantVideo}>
      <div className={styles.videoInner}>
        <video
          className={styles.video}
          src="https://wisr.com.au/assets/media/smart-part-journey/05_pie.mp4"
          poster="https://wisr.com.au/assets/media/smart-part-journey/05_pie.jpg"
          autoPlay
          muted
        ></video>
        <div className={styles.contentComponent6}>
          <h2>
            <div className={styles.animComponent2} data-aos="fade-up" data-aos-once="true">
              <div className={styles.componentLine}>PAY</div>
              <div className={styles.componentLine}>OFF</div>
              <div className={styles.componentLine}>YOUR</div>
              <div className={styles.componentLine}>DEBTS</div>
            </div>
            <div className={styles.animComponent2} data-aos="fade-up" data-aos-once="true">
              <div className={styles.componentLine}>FASTER</div>
              <div className={styles.componentLine}>WHILE</div>
              <div className={styles.componentLine}>YOU</div>
              <div className={styles.componentLine}>PAY</div>
            </div>
            <div className={styles.animComponent2} data-aos="fade-up" data-aos-once="true">
              <div className={styles.componentLine}>FOR</div>
              <div className={styles.componentLine}>OTHER</div>
              <div className={styles.componentLine}>STUFF</div>
            </div>
          </h2>
          <div>
            <div className={styles.animComponent2} data-aos="fade-up" data-aos-once="true">
              <div className={styles.component2Line}>Our</div>
              <div className={styles.component2Line}>app</div>
              <div className={styles.component2Line}>will</div>
              <div className={styles.component2Line}>round</div>
              <div className={styles.component2Line}>up</div>
            </div>
            <div className={styles.animComponent2} data-aos="fade-up" data-aos-once="true">
              <div className={styles.component2Line}>your</div>
              <div className={styles.component2Line}>everyday</div>
              <div className={styles.component2Line}>purchases</div>
            </div>
          </div>
          <button className={styles.component2Button} data-aos="fade-up" data-aos-once="true">
            GO TO ROUND UP
          </button>
        </div>
      </div>
    </div>
  );
};
