import styles from "@/styles/Video.module.css";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export const Component2 = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      delay: 100,
      once: true,
    });
  }, []);

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
        <div className={styles.contentComponent2}>
          <h2>
            <div className={styles.animComponent2} data-aos="fade-up" data-aos-once="true">
              <div className={styles.component2Line}>SMART</div>
              <div className={styles.component2Line}>HABITS</div>
            </div>
            <div className={styles.animComponent2} data-aos="fade-up" data-aos-once="true">
              <div className={styles.component2Line}>HELP</div>
              <div className={styles.component2Line}>YOU</div>
              <div className={styles.component2Line}>SAVE</div>
            </div>
          </h2>
          <div>
            <div className={styles.animComponent2} data-aos="fade-up" data-aos-once="true">
              <div className={styles.component2Line}>Use</div>
              <div className={styles.component2Line}>the</div>
              <div className={styles.component2Line}>science</div>
              <div className={styles.component2Line}>of</div>
              <div className={styles.component2Line}>habit</div>
              <div className={styles.component2Line}>change</div>
            </div>
            <div className={styles.animComponent2} data-aos="fade-up" data-aos-once="true">
              <div className={styles.component2Line}>to</div>
              <div className={styles.component2Line}>achieve</div>
              <div className={styles.component2Line}>your</div>
              <div className={styles.component2Line}>money</div>
              <div className={styles.component2Line}>goals</div>
            </div>
          </div>
          <button className={styles.component2Button} data-aos="fade-up" data-aos-once="true">
            GO TO WISR TODAY
          </button>
        </div>
      </div>
    </div>
  );
};
