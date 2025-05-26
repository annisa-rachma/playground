// import Image from "next/image";
import Navbar from "./components/navbar/Navbar";
import styles from "./page.module.css";
import demos from "../app/data/demos.json";

export default function Home() {
  return (
    <div className={styles.page}>
      <Navbar data={demos} />

      <main className={styles.main}>
        <h2>
          This is my playground for frontend animation projects. <br /> Use the
          menu above to explore other demos.{" "}
        </h2>
      </main>
    </div>
  );
}
