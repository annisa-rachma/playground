import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h2>
          This is my playground for frontend animation projects. <br /> Use the
          menu above to explore other demos.{" "}
        </h2>
      </main>
    </div>
  );
}
