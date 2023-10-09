import React from "react";
import styles from "./navbar.module.css";
import { Search } from "react-bootstrap-icons";
import Link from "next/link";
import { useRouter } from "next/router";
export default function Navbar() {
  const router = useRouter();
  return (
    <div
      className={`${styles.navbar} bg-dark d-flex justify-content-between align-items-center ps-5 pe-5`}
    >
      <div className={`${styles.left_navbar} d-flex align-items-center`}>
        <h3
          className={styles.logo}
          onClick={() => {
            router.push("/");
          }}
        >
          ChattApp
        </h3>
        <div className={`${styles.search_container} bg-light`}>
          <input
            type="text"
            className={styles.search_input}
            placeholder="Search Facebook"
          />
          <button className={styles.search_button}>
            <Search />
          </button>
        </div>
        {/* <div className={styles.search_results}>
          <div className={styles.search_result}>
            <p className={styles.result_title}>John Doe</p>
            <p>Some information about John Doe...</p>
          </div>

          <div className={styles.search_result}>
            <p className={styles.result_title}>Jane Smith</p>
            <p>Some information about Jane Smith...</p>
          </div>
        </div> */}
      </div>
      <div className={styles.right_navbar}>
        <Link href={`/login`} className={`${styles.btn_login} me-3`}>
          Login
        </Link>
        <Link href={`/register`} className={styles.btn_login}>
          Register
        </Link>
      </div>
    </div>
  );
}
