import styles from "@/styles/Video.module.css";
import Aos from "aos";
import { useEffect } from "react";
export const Component3 = () => {
  useEffect(() => {
    Aos.init({
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
          src="https://wisr.com.au/assets/media/smart-part-journey/02_flipper.mp4"
          poster="https://wisr.com.au/assets/media/smart-part-journey/02_flipper.jpg"
          autoPlay
          muted
        ></video>
        <div className={styles.contentComponent3}>
          <h2>
            <div className={styles.animComponent2} data-aos="fade-up" data-aos-once="true">
              <div className={styles.componentLine}>PERSONAL</div>
              <div className={styles.componentLine}>LOANS</div>
            </div>
            <div className={styles.animComponent2} data-aos="fade-up" data-aos-once="true">
              <div className={styles.componentLine}>SHOULD</div>
              <div className={styles.componentLine}>HAVE</div>
              <div className={styles.componentLine}>A</div>
            </div>
            <div className={styles.animComponent2} data-aos="fade-up" data-aos-once="true">
              <div className={styles.componentLine}>PERSONAL</div>
              <div className={styles.componentLine}>RATE</div>
            </div>
          </h2>
          <div>
            <div className={styles.animComponent2} data-aos="fade-up" data-aos-once="true">
              <div className={styles.component2Line}>Based</div>
              <div className={styles.component2Line}>on</div>
              <div className={styles.component2Line}>your</div>
            </div>
            <div className={styles.animComponent2} data-aos="fade-up" data-aos-once="true">
              <div className={styles.component2Line}>unique</div>
              <div className={styles.component2Line}>credit</div>
              <div className={styles.component2Line}>score</div>
            </div>
          </div>
          <div className={styles.buttonComponent3} data-aos="fade-up" data-aos-once="true">
            GET ESTIMATE
            <div className={styles.whiteBoll}></div>
          </div>
        </div>
      </div>
    </div>
  );
};
