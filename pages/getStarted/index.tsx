import styles from "@/styles/GetStarted.module.css";
import Aos from "aos";
import { useEffect, useState } from "react";
const getStarted = () => {
  const [scrollTop, setScrollTop] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      setScrollTop(window.scrollY / 5);
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  return (
    <div className={styles.contant}>
      <div className={styles.rightSide}>
        <h1 className={styles.textRight}>GET THAT SMART PART GOING</h1>
      </div>
      <div className={styles.leftSide}>
        <div className={styles.block} data-aos="zoom-in" data-aos-once="true">
          <div>
            <div className={styles.card}></div>
            <div className={styles.card3}></div>
            <div className={styles.card5}></div>
            <div className={styles.card7}></div>
          </div>
          <div className={styles.cards} style={{ transform: `translateY(${-scrollTop}px)` }}>
            <div className={styles.card2}></div>
            <div className={styles.card4}></div>
            <div className={styles.card6}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default getStarted;
