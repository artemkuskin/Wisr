import styles from "@/styles/Video.module.css";
import Aos from "aos";
import { useEffect } from "react";
export const Component4 = () => {
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
          src="https://wisr.com.au/assets/media/smart-part-journey/03_graph.mp4"
          poster="https://wisr.com.au/assets/media/smart-part-journey/03_graph.jpg"
          autoPlay
          muted
        ></video>
        <div className={styles.contentComponent4}>
          <h2>
            <div className={styles.animComponent2} data-aos="fade-up" data-aos-once="true">
              <div className={styles.componentLine}>CHECK</div>
              <div className={styles.componentLine}>YOUR</div>
            </div>
            <div className={styles.animComponent2} data-aos="fade-up" data-aos-once="true">
              <div className={styles.componentLine}>CREDIT</div>
              <div className={styles.componentLine}>SCORE</div>
            </div>
            <div className={styles.animComponent2} data-aos="fade-up" data-aos-once="true">
              <div className={styles.componentLine}>WITHOUT</div>
            </div>
            <div className={styles.animComponent2} data-aos="fade-up" data-aos-once="true">
              <div className={styles.componentLine}>AFFECTING</div>
              <div className={styles.componentLine}>IT</div>
            </div>
          </h2>
          <div>
            <div className={styles.animComponent2} data-aos="fade-up" data-aos-once="true">
              <div className={styles.component2Line}>Wisr</div>
              <div className={styles.component2Line}>makes</div>
              <div className={styles.component2Line}>it</div>
              <div className={styles.component2Line}>easy</div>
            </div>
          </div>
          <button className={styles.component2Button} data-aos="fade-up" data-aos-once="true">
            GO TO CREDIT SCORES
          </button>
        </div>
      </div>
    </div>
  );
};
