"use client";

import { useState, useRef } from "react";
import styles from "./page.module.css";

export default function Home() {

  const inputRef = useRef();
  const [shortURL, setShortURL] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); 
    const url = inputRef.current.value;
  };  

  return (

    <div className={styles.page}>
      <main className={styles.main}>

        <h1 className={styles.title}>
		      URL Shortener
	      </h1>

	      <p className={styles.description}>
          Acorta aquí tus URL.
		    </p>

        <div className={styles.grid}>
		      <form class={styles.card} onSubmit={handleSubmit}>
			      <input ref={inputRef} type="text" className={styles.input} placeholder="URL" />
			      <button className={styles.button}>Acorta</button>
            <span className={styles.input}>
	            {shortURL} 
            </span>
		      </form>
        </div>

      </main>

    </div>
  );
}
