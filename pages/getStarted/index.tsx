import styles from "@/styles/GetStarted.module.css";
import Image from "next/image";
import { useEffect, useState } from "react";
const getStarted = () => {
  const [scrollTop, setScrollTop] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      setScrollTop(window.scrollY / 8);
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
        <div className={styles.block}>
          <div>
            <div className={styles.card}>
              <div className={styles.cardContent}>
                <div className={styles.cardText}>PERSONAL LOANS</div>
                <div className={styles.cardText2}>
                  Get estimate{" "}
                  <div className={styles.cardButton}>
                    <svg className={styles.svg} viewBox="0 0 5 8" fill="none">
                      <path d="M1 1L4 4L1 7" stroke="white"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div>
                <Image src={"/svg1.svg"} alt="search" width={300} height={200} />
              </div>
              <div className={styles.buttonComponent}>
                GET ESTIMATE
                <div className={styles.whiteBoll}></div>
              </div>
            </div>
            <div className={styles.card3}>
              <div className={styles.cardContent}>
                <div className={styles.cardText}>PERSONAL LOANS</div>
                <div className={styles.cardText2}>
                  Get estimate{" "}
                  <div className={styles.cardButton}>
                    <svg className={styles.svg} viewBox="0 0 5 8" fill="none">
                      <path d="M1 1L4 4L1 7" stroke="white"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div>
                <Image src={"/svg3.svg"} alt="search" width={300} height={200} />
              </div>
            </div>
            <div className={styles.card5}>
              {" "}
              <div className={styles.cardContent}>
                <div className={styles.cardText}>CREDIT SCORES</div>
                <div className={styles.cardText2}>
                  Create Accout
                  <div className={styles.cardButton}>
                    <svg className={styles.svg} viewBox="0 0 5 8" fill="none">
                      <path d="M1 1L4 4L1 7" stroke="white"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div>
                <Image src={"/svg5.svg"} alt="search" width={300} height={200} />
              </div>
              <div className={styles.buttonComponent}>
                GET ESTIMATE
                <div className={styles.whiteBoll}></div>
              </div>
            </div>
            <div className={styles.card7}>
              {" "}
              <div className={styles.cardContent}>
                <div className={styles.cardText}>PERSONAL LOANS</div>
                <div className={styles.cardText2}>
                  Get estimate{" "}
                  <div className={styles.cardButton}>
                    <svg className={styles.svg} viewBox="0 0 5 8" fill="none">
                      <path d="M1 1L4 4L1 7" stroke="white"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div>
                <Image src={"/svg7.svg"} alt="search" width={300} height={200} />
              </div>
              <div className={styles.buttonComponent}>
                GET ESTIMATE
                <div className={styles.whiteBoll}></div>
              </div>
            </div>
          </div>
          <div className={styles.cards} style={{ transform: `translateY(${-scrollTop}px)` }}>
            <div className={styles.card2}>
              {" "}
              <div className={styles.cardContent}>
                <div className={styles.cardText}>PERSONAL LOANS</div>
                <div className={styles.cardText2}>
                  Get estimate{" "}
                  <div className={styles.cardButton}>
                    <svg className={styles.svg} viewBox="0 0 5 8" fill="none">
                      <path d="M1 1L4 4L1 7" stroke="white"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div>
                <Image src={"/svg2.svg"} alt="search" width={300} height={200} />
              </div>
              <div className={styles.buttonComponent}>
                GET ESTIMATE
                <div className={styles.whiteBoll}></div>
              </div>
            </div>
            <div className={styles.card4}>
              {" "}
              <div className={styles.cardContent}>
                <div className={styles.cardText}>PERSONAL LOANS</div>
                <div className={styles.cardText2}>
                  Get estimate{" "}
                  <div className={styles.cardButton}>
                    <svg className={styles.svg} viewBox="0 0 5 8" fill="none">
                      <path d="M1 1L4 4L1 7" stroke="white"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div>
                <Image src={"/svg4.svg"} alt="search" width={300} height={200} />
              </div>
              <div className={styles.buttonComponent}>
                GET ESTIMATE
                <div className={styles.whiteBoll}></div>
              </div>
            </div>
            <div className={styles.card6}>
              {" "}
              <div className={styles.cardContent}>
                <div className={styles.cardText}>PERSONAL LOANS</div>
                <div className={styles.cardText2}>
                  Get estimate{" "}
                  <div className={styles.cardButton}>
                    <svg className={styles.svg} viewBox="0 0 5 8" fill="none">
                      <path d="M1 1L4 4L1 7" stroke="white"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div>
                <Image src={"/svg6.svg"} alt="search" width={300} height={200} />
              </div>
              <div className={styles.buttonComponent}>
                GET ESTIMATE
                <div className={styles.whiteBoll}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default getStarted;
