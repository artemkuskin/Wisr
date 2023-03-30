import styles from "@/styles/Video.module.css";
import Aos from "aos";
import { useEffect } from "react";
export const Component7 = () => {
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
          src="https://wisr.com.au/assets/media/smart-part-journey/06_brain.mp4"
          poster="https://wisr.com.au/assets/media/smart-part-journey/06_brain.jpg"
          autoPlay
          muted
        ></video>
        <div className={styles.contentComponent7}>
          <h2>
            <div className={styles.animComponent2} data-aos="fade-up" data-aos-once="true">
              <div className={styles.componentLine}>FOR</div>
              <div className={styles.componentLine}>YOUR</div>
            </div>
            <div className={styles.animComponent2} data-aos="fade-up" data-aos-once="true">
              <div className={styles.componentLine}>SMART</div>
              <div className={styles.componentLine}>PART</div>
            </div>
          </h2>
          <div>
            <div className={styles.animComponent2} data-aos="fade-up" data-aos-once="true">
              <div className={styles.component2Line}>We</div>
              <div className={styles.component2Line}>can</div>
              <div className={styles.component2Line}>all</div>
              <div className={styles.component2Line}>do</div>
              <div className={styles.component2Line}>less</div>
              <div className={styles.component2Line}>than</div>
            </div>
            <div className={styles.animComponent2} data-aos="fade-up" data-aos-once="true">
              <div className={styles.component2Line}>clever</div>
              <div className={styles.component2Line}>things.</div>
              <div className={styles.component2Line}>So</div>
              <div className={styles.component2Line}>when</div>
              <div className={styles.component2Line}>it</div>
            </div>
            <div className={styles.animComponent2} data-aos="fade-up" data-aos-once="true">
              <div className={styles.component2Line}>comes</div>
              <div className={styles.component2Line}>to</div>
              <div className={styles.component2Line}>important</div>
              <div className={styles.component2Line}>financial</div>
            </div>
            <div className={styles.animComponent2} data-aos="fade-up" data-aos-once="true">
              <div className={styles.component2Line}>stuff,</div>
              <div className={styles.component2Line}>Wisr</div>
              <div className={styles.component2Line}>speaks</div>
              <div className={styles.component2Line}>to</div>
              <div className={styles.component2Line}>that</div>
            </div>
            <div className={styles.animComponent2} data-aos="fade-up" data-aos-once="true">
              <div className={styles.component2Line}>OTHER</div>
              <div className={styles.component2Line}>part</div>
              <div className={styles.component2Line}>of</div>
              <div className={styles.component2Line}>us.</div>
              <div className={styles.component2Line}>The</div>
              <div className={styles.component2Line}>part</div>
            </div>
            <div className={styles.animComponent2} data-aos="fade-up" data-aos-once="true">
              <div className={styles.component2Line}>that</div>
              <div className={styles.component2Line}>makes</div>
              <div className={styles.component2Line}>good</div>
              <div className={styles.component2Line}>decisions</div>
            </div>
          </div>
          <button className={styles.component2Button} data-aos="fade-up" data-aos-once="true">
            GET STARTED
          </button>
        </div>
      </div>
    </div>
  );
};
