"use client";

import Link from "next/link";
import styles from "./navbar.module.css";
import Image from "next/image"
import React, {useEffect} from "react"

const Navbar = () => {
  
  useEffect(() => {
    //add eventlistener to window
    onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
  // remove event on unmount to prevent a memory leak with the cleanup
  return () => {
     window.removeEventListener("scroll", onScroll, { passive: true });
  }
  }, []);

  return (
    <header>
        <div className={styles.navContainer}>
            <div className={styles.navBack}>
            </div>
            <Link href="/">
              <Image src="/Jcing22_transparent.png" width={200} height={200} alt="Jcing logo" className={styles.logo}/>
            </Link>
        </div>
        <div className={styles.placeHolder}>
        </div>
    </header>
  );
};

function onScroll() {
  let scroll: number = window.scrollY;
  let height: number = window.innerHeight;
  let scrollPercentage : number = Math.min(1, scroll / height);
  let aspectRatio : number = lerp(50/10, 200/10,scrollPercentage);
  let margin : number = lerp(16, 4, scrollPercentage);
  document.documentElement.style.setProperty('--navbar-aspect-ratio', String(aspectRatio));
  //document.documentElement.style.setProperty('--navbar-mask-margin', String(margin+1) + "px");
  //document.documentElement.style.setProperty('--navbar-image-margin', String(margin) + "px");
}

function lerp (start : number, end : number, amt : number){
  return (1-amt)*start+amt*end
}

export default Navbar;