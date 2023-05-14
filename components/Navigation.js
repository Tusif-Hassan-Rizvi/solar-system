import Link from "next/link";
import React from "react";
import style from "../src/styles/navigation.module.css";
import styles from "../src/styles/hamburger.module.css";
import Navigationsolarsystem from "./Navigationsolarsystem";

export default function Navigation(props) {
  return (
    <>
      <nav className={style.NavigationLink}>
        <ul className={style.UlTag}>
          <li>
            <Link href="/">
              {/* <Navigationsolarsystem
              style={style}
              imageurl={'./Moon8K.jpg'}
              duration={1}
              navigationsize={0.5}
            ></Navigationsolarsystem> */}
              Moon
            </Link>
          </li>
          <li>
            <Link href="/sun">Sun</Link>
          </li>
          <li>
            <Link href="/mercury">Mercury</Link>
          </li>
          <li>
            <Link href="/venus">Venus</Link>
          </li>
          <li>
            <Link href="/earth">Earth</Link>
          </li>
          <li>
            <Link href="/mars">Mars</Link>
          </li>
          <li>
            <Link href="/jupiter">Jupiter</Link>
          </li>
          <li>
            <Link href="/saturn">Saturn</Link>
          </li>
          <li>
            <Link href="/uranus">Uranus</Link>
          </li>
          <li>
            <Link href="/naptune">Neptune</Link>
          </li>
        </ul>
      </nav>

      {/* responsive navbar  */}
      <nav className={style.hamnav}>
        <div className={styles.navbar}>
          <div className={`${styles.container} ${styles.navcontainer}`}>
            <input
              className={styles.checkbox}
              type="checkbox"
              name=""
              id="hamcheck"
            />
            <div className={styles.hamburgerlines}>
              <span className={`${styles.line} ${styles.line1}`}></span>
              <span className={`${styles.line} ${styles.line2}`}></span>
              <span className={`${styles.line} ${styles.line3}`}></span>
            </div>
            
            <div className={styles.menuitems}>
            <li>
            <Link href="/">
              {/* <Navigationsolarsystem
              style={style}
              imageurl={'./Moon8K.jpg'}
              duration={1}
              navigationsize={0.5}
            ></Navigationsolarsystem> */}
              Moon
            </Link>
          </li>
          <li>
            <Link href="/sun">Sun</Link>
          </li>
          <li>
            <Link href="/mercury">Mercury</Link>
          </li>
          <li>
            <Link href="/venus">Venus</Link>
          </li>
          <li>
            <Link href="/earth">Earth</Link>
          </li>
          <li>
            <Link href="/mars">Mars</Link>
          </li>
          <li>
            <Link href="/jupiter">Jupiter</Link>
          </li>
          <li>
            <Link href="/saturn">Saturn</Link>
          </li>
          <li>
            <Link href="/uranus">Uranus</Link>
          </li>
          <li>
            <Link href="/naptune">Neptune</Link>
          </li>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
