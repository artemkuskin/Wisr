import styles from "@/styles/Video.module.css";
export const Component4 = () => {
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
      </div>
    </div>
  );
};
